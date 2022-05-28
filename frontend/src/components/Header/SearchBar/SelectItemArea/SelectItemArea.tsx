import { useState } from "react";

import ButtonArea from "./ButtonArea/ButtonArea";
import { CheckInOut, ReservationFee, PeopleCount } from "./SelectItem";
import SelectItemAreaWrapper from "./SelectItemArea.style";

// TODO:
// 0. 각 SelectItem마다 open이 잘못 적용되어있음(각 아이템마다 다르게 나와야함.)
// 1.버튼에 스타일 적용
// 2.SelectItemArea내의 모든 state들 삭제
// 3. 스크린리더가 읽을 수 있도록

const SelectItemArea = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<AnchorEl>(null);

  return (
    <SelectItemAreaWrapper container columns={12}>
      <CheckInOut setAnchorEl={setAnchorEl} anchorEl={anchorEl} />
      <ReservationFee setAnchorEl={setAnchorEl} anchorEl={anchorEl} />
      <PeopleCount setAnchorEl={setAnchorEl} anchorEl={anchorEl} />
      <ButtonArea
        icon="search"
        isFocused={Boolean(anchorEl)}
        onClick={() => setAnchorEl(null)}
        ariaLabel="설정한 정보로 검색하기"
      />
    </SelectItemAreaWrapper>
  );
};

export default SelectItemArea;

type AnchorEl = null | HTMLDivElement | (EventTarget & HTMLElement);
