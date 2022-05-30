import { useState } from "react";

import ButtonArea from "./ButtonArea/ButtonArea";
import { CheckInOut, ReservationFee, PeopleCount } from "./SelectItem";
import SelectItemAreaWrapper from "./SelectItemArea.style";

// TODO:
// 스크린리더가 읽을 수 있도록 - tab으로 탐색가능하도록

const SelectItemArea = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<AnchorEl>(null);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <SelectItemAreaWrapper container columns={12}>
      <CheckInOut
        setAnchorEl={setAnchorEl}
        anchorEl={anchorEl}
        handleClose={handleClose}
      />
      <ReservationFee
        anchorEl={anchorEl}
        handleClose={handleClose}
        handleClick={handleClick}
      />
      <PeopleCount
        anchorEl={anchorEl}
        handleClose={handleClose}
        handleClick={handleClick}
      />
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

export type AnchorEl = null | HTMLDivElement | (EventTarget & HTMLElement);
