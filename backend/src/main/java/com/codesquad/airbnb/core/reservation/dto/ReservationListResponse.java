package com.codesquad.airbnb.core.reservation.dto;

import com.codesquad.airbnb.core.reservation.Reservation;
import com.codesquad.airbnb.core.room.entity.Room;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ReservationListResponse {

    private Integer reservationId;
    private Integer roomId;
    private String name;
    private String address;
    private String imagePath;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime checkinDateTime;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime checkoutDateTime;

    public static ReservationListResponse from(Reservation reservation) {
        Room room = reservation.getRoom();

        return new ReservationListResponse(
            reservation.getId(),
            room.getId(),
            room.getName(),
            room.getDistrict().getAddress(),
            room.getImagePath(),
            LocalDateTime.of(
                reservation.getStayDate().getCheckinDate(),
                reservation.getStayTime().getCheckinTime()
            ),
            LocalDateTime.of(
                reservation.getStayDate().getCheckoutDate(),
                reservation.getStayTime().getCheckoutTime()
            )
        );
    }
}
