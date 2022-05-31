package com.codesquad.airbnb.room;

import static com.codesquad.airbnb.district.QDistrict.district;
import static com.codesquad.airbnb.reservation.QReservation.reservation;
import static com.codesquad.airbnb.room.entity.QRoom.room;
import static com.codesquad.airbnb.room.entity.QRoomDetail.roomDetail;
import static com.codesquad.airbnb.room.entity.QRoomImage.roomImage;

import com.codesquad.airbnb.common.embeddable.GuestGroup;
import com.codesquad.airbnb.common.embeddable.Location;
import com.codesquad.airbnb.room.dto.Direction;
import com.codesquad.airbnb.room.dto.RoomSearCondition;
import com.codesquad.airbnb.room.dto.RoomSearCondition.PriceRange;
import com.codesquad.airbnb.room.dto.RoomSearCondition.Radius;
import com.codesquad.airbnb.room.dto.RoomSearCondition.StayDate;
import com.codesquad.airbnb.room.entity.Room;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@RequiredArgsConstructor
public class RoomRepository {

    private final JPAQueryFactory queryFactory;

    @Transactional(readOnly = true)
    public List<Room> searchWithCondition(RoomSearCondition condition) {
        JPAQuery<Room> query = queryFactory.selectFrom(room)
            .join(room.district, district)
            .fetchJoin()
            .join(room.detail, roomDetail)
            .fetchJoin()
            .where(locationContained(condition.getLocation(), condition.getRadius()),
                guestGroupGoe(condition.getGuestGroup()),
                priceBetween(condition.getPriceRange()))
            .distinct();

        return checkReservation(query, condition.getStayDate()).fetch();
    }

    private JPAQuery<Room> checkReservation(JPAQuery<Room> query, StayDate stayDate) {
        if (stayDate.isNull()) {
            return query;
        }

        return query.leftJoin(room.reservations, reservation)
            .on(reservation.stayDateTime.checkinDateTime.goe(
                    stayDate.getCheckinDate().atStartOfDay())
                .and(reservation.stayDateTime.checkoutDateTime.loe(
                    LocalDateTime.of(stayDate.getCheckoutDate(), LocalTime.MAX))))
            // sql_mode=only_full_group_by 에러 해결을 위해 roomDetail 의 id 도 GROUP BY 절에 포함
            .groupBy(room.id, roomDetail.id)
            .having(reservation.count().eq(0L));
    }

    private BooleanExpression locationContained(Location location, Radius radius) {
        if (location.isNull() || radius.isNull()) {
            return null;
        }

        Location north = location.move(radius.getVertical(), Direction.NORTH);
        Location south = location.move(radius.getVertical(), Direction.SOUTH);
        Location east = location.move(radius.getHorizontal(), Direction.EAST);
        Location west = location.move(radius.getHorizontal(), Direction.WEST);

        return room.location.latitude.loe(north.getLatitude())
            .and(room.location.latitude.goe(south.getLatitude()))
            .and(room.location.longitude.loe(east.getLongitude()))
            .and(room.location.longitude.goe(west.getLongitude()));
    }

    private BooleanExpression guestGroupGoe(GuestGroup guestGroup) {
        if (guestGroup.isNull()) {
            return null;
        }

        return roomDetail.guestGroup.numberAdult.goe(guestGroup.getNumberAdult())
            .and(roomDetail.guestGroup.numberChild.goe(guestGroup.getNumberChild()))
            .and(roomDetail.guestGroup.numberInfant.goe(guestGroup.getNumberInfant()));
    }

    private BooleanExpression priceBetween(PriceRange priceRange) {
        if (priceRange.isNull()) {
            return null;
        }

        return room.charge.lodging.between(priceRange.getMin(), priceRange.getMax());
    }

    @Transactional(readOnly = true)
    public Room findById(Integer roomId) {
        return queryFactory
            .selectFrom(room)
            .leftJoin(room.images, roomImage)
            .fetchJoin()
            .leftJoin(room.district, district)
            .fetchJoin()
            .leftJoin(room.detail, roomDetail)
            .fetchJoin()
            .where(room.id.eq(roomId))
            .distinct()
            .fetchOne();
    }

}
