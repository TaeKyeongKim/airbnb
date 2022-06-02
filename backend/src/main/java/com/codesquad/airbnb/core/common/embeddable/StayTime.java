package com.codesquad.airbnb.core.common.embeddable;

import java.time.LocalTime;
import javax.persistence.Embeddable;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Embeddable
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class StayTime {

    private LocalTime checkinTime;
    private LocalTime checkoutTime;

}
