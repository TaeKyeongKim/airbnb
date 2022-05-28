import { useRef, useState } from "react";

import { Grid, Popover } from "@mui/material";

import ButtonArea from "./ButtonArea/ButtonArea";
import SelectItem from "./SelectItem/SelectItem";
import SelectItemAreaWrapper from "./SelectItemArea.style";
import SelectItemTemplate from "./SelectItemTemplate/SelectItemTemplate";

const WhiteSpaceCloseButtonSize = ({
  divide,
  xs = 1,
}: {
  divide?: boolean;
  xs?: number;
}): JSX.Element => {
  const styles = divide
    ? {
        borderRight: ({ palette }: { palette: { grey5: { main: string } } }) =>
          `1px solid ${palette.grey5.main}`,
      }
    : {};

  return <Grid item sx={styles} xs={xs} />;
};

const CheckInOutSelectItem = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLDivElement>(null);
  const $wrap = useRef<HTMLDivElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = () => {
    setAnchorEl($wrap.current);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid item container xs={5} component="div" ref={$wrap}>
      <SelectItem
        gridStyle={{
          xs: 5,
        }}
        buttonId="check-in-out-date-button"
        buttonAreaLabel="체크인 날짜 설정"
        title="안녕하세요"
        desc="호톨비"
        handleClick={handleClick}
        open={open}
      />
      <SelectItem
        gridStyle={{
          xs: 5,
          pl: 1,
        }}
        buttonId="check-in-out-date-button"
        buttonAreaLabel="체크아웃 날짜 설정"
        title="체크아웃"
        desc="체크아웃 영역"
        handleClick={handleClick}
        open={open}
      />
      <Popover open={open} anchorEl={anchorEl} onClose={handleClose}>
        테스트용
      </Popover>
      {(open && <ButtonArea icon="close" divide xs={2} />) || (
        <WhiteSpaceCloseButtonSize divide xs={2} />
      )}
    </Grid>
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
          pl: 2,
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
        anchorEl={anchorEl}
        handleClose={handleClose}
        createNewPopup
      >
        요금 금액 설정 영역
      </SelectItem>
      {(open && <ButtonArea icon="close" divide />) || (
        <WhiteSpaceCloseButtonSize divide xs={1} />
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
