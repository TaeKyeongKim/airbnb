import { useState } from "react";

import ButtonArea from "./ButtonArea/ButtonArea";
import { CheckInOut, ReservationFee, PeopleCount } from "./SelectItem";
import SelectItemAreaWrapper from "./SelectItemArea.style";

// TODO:
// userMenu에 ...... 검색버튼 겹침;;
// 스크린리더가 읽을 수 있도록 - tab으로 탐색가능하도록

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
