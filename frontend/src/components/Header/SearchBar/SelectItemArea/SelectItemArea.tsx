import { useState } from "react";

import { Grid } from "@mui/material";

import ButtonArea from "./ButtonArea/ButtonArea";
import SelectItem from "./SelectItem/SelectItem";
import SelectItemAreaWrapper from "./SelectItemArea.style";
import SelectItemTemplate from "./SelectItemTemplate/SelectItemTemplate";

const WhiteSpaceCloseButtonSize = (): JSX.Element => {
  return <Grid xs={1} />;
};

const CheckInOutSelectItem = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <SelectItem
        gridStyle={{
          xs: 2,
        }}
        buttonId="check-in-date-button"
        buttonAreaLabel="체크인 날짜 설정"
        title="안녕하세요"
        desc="호톨비"
        modalAnchorStyle={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        handleClick={handleClick}
        handleClose={handleClose}
        anchorEl={anchorEl}
      />
      <SelectItem
        gridStyle={{
          xs: 2,
          pl: 1,
        }}
        buttonId="check-out-date-button"
        buttonAreaLabel="체크아웃 날짜 설정"
        title="체크아웃"
        desc="체크아웃 영역"
        modalAnchorStyle={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        handleClick={handleClick}
        handleClose={handleClose}
        anchorEl={anchorEl}
      >
        테스트용문구 : 체크아웃 영역
      </SelectItem>
      {(open && <ButtonArea icon="close" divide />) || (
        <WhiteSpaceCloseButtonSize />
      )}
    </>
  );
};

const ReservationFeeSelectArea = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <SelectItem
        gridStyle={{
          xs: 2,
          pl: 1,
        }}
        buttonId="reservation-fee-button"
        buttonAreaLabel="숙박요금 설정"
        title="요금"
        desc="금액대 설정"
        modalAnchorStyle={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        handleClick={handleClick}
        handleClose={handleClose}
        anchorEl={anchorEl}
      >
        요금 금액 설정 영역
      </SelectItem>
      {(open && <ButtonArea icon="close" divide />) || (
        <WhiteSpaceCloseButtonSize />
      )}
    </>
  );
};
const SelectItemArea = (): JSX.Element => {
  return (
    <SelectItemAreaWrapper container columns={12}>
      <CheckInOutSelectItem />

      <ReservationFeeSelectArea />

      <SelectItemTemplate xs={2} pl={1}>
        인원 설정 영역
      </SelectItemTemplate>
      <ButtonArea icon="close" />
      <ButtonArea icon="search" />
    </SelectItemAreaWrapper>
  );
};

export default SelectItemArea;
