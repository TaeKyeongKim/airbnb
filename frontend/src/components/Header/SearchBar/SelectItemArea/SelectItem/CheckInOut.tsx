import { useRef /* , useState  */ } from "react";

import { Grid, Popover } from "@mui/material";

import { SelectItemProps } from "@types";

import ButtonArea from "../ButtonArea/ButtonArea";
import SelectItem, { WhiteSpaceCloseButtonSize } from "./SelectItem";

const CheckInOut = ({
  setAnchorEl,
  anchorEl,
}: SelectItemProps): JSX.Element => {
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
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        테스트용
      </Popover>
      {(open && <ButtonArea icon="close" divide xs={2} />) || (
        <WhiteSpaceCloseButtonSize divide xs={2} />
      )}
    </Grid>
  );
};

export default CheckInOut;
