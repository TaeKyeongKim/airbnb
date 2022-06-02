package com.codesquad.airbnb.core.room.entity;

import com.codesquad.airbnb.core.common.embeddable.GuestGroup;
import com.codesquad.airbnb.core.common.embeddable.StayTime;
import com.codesquad.airbnb.core.room.entity.embeddable.RoomGroup;
import com.codesquad.airbnb.core.room.entity.embeddable.RoomOption;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class RoomDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "room_detail_id")
    private Integer id;

    @Embedded
    private GuestGroup guestGroup;

    @Embedded
    private RoomGroup roomGroup;

    @Embedded
    private StayTime stayTime;

    @Embedded
    private RoomOption option;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "room_id")
    private Room room;

    public RoomDetail(Room room, GuestGroup guestGroup, RoomGroup roomGroup, RoomOption option,
        StayTime stayTime) {
        this.room = room;
        this.guestGroup = guestGroup;
        this.roomGroup = roomGroup;
        this.option = option;
        this.stayTime = stayTime;
    }

    public void validateGuestGroup(GuestGroup guestGroup) {
        this.guestGroup.validateNumberGuest(guestGroup);
    }

}
