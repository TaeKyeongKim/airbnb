package com.codesquad.airbnb.wish.dto;

import javax.validation.constraints.NotNull;
import lombok.Getter;

@Getter
public class WishCreateRequest {

    @NotNull(message = "멤버의 Id 가 입력되어야 합니다.")
    private Integer memberId;

    @NotNull(message = "숙소의 Id 가 입력되어야 합니다.")
    private Integer roomId;

}
