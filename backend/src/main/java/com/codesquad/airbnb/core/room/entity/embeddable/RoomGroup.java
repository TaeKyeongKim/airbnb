package com.codesquad.airbnb.core.room.entity.embeddable;

import javax.persistence.Embeddable;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Embeddable
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class RoomGroup {

    private Integer numberTotalRoom;
    private Integer numberBedroom;
    private Integer numberBathroom;
    private Integer numberBed;

}
