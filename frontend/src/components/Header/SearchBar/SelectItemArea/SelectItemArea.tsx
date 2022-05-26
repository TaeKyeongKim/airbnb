import { useState } from "react";

import { Button, Popover, Typography } from "@mui/material";

import ButtonArea from "./ButtonArea/ButtonArea";
import SelectItem from "./SelectItem/SelectItem";
import SelectItemAreaWrapper from "./SelectItemArea.style";

const SelectItemArea = (): JSX.Element => {
  // 임시로 하나의 state를 만들고 분리하기
  // 추가로 열렸는지 확인하는 state로 x 버튼 보이기 / 숨기기 관리

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <SelectItemAreaWrapper container columns={12}>
      <SelectItem xs={2}>
        <Button
          id="check-in-date-button"
          aria-controls={open ? "check-in-date-button" : undefined}
          aria-haspopup="true"
          aria-label="체크인 날짜 설정"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            flexDirection: "column",
            padding: 0,
            width: "100%",
            alignItems: "flex-start",

            "&:hover": {
              textDecoration: "none",
              background: "rgba(0,0,0, 0.12)",
            },
          }}
        >
          <Typography sx={{ color: ({ palette }) => palette.black.main }}>
            안녕하세요
          </Typography>
          <Typography
            sx={{
              color: ({ palette }) => palette.grey2.main,
              fontSize: "16px",
            }}
          >
            하하호호 도비 짱 짱 짱
          </Typography>
        </Button>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
        </Popover>
      </SelectItem>
      <SelectItem xs={2} pl={1}>
        반갑습니다
      </SelectItem>
      <ButtonArea icon="close" divide />
      <SelectItem xs={2} pl={1}>
        안녕하세욥
      </SelectItem>
      <ButtonArea icon="close" divide />
      <SelectItem xs={2} pl={1}>
        하하
      </SelectItem>
      <ButtonArea icon="close" />
      <ButtonArea icon="search" />
    </SelectItemAreaWrapper>
  );
};

export default SelectItemArea;
