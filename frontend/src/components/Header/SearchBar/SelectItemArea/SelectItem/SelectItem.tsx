import { useState } from "react";

import { Button, Popover, Typography, GridSize } from "@mui/material";

import SelectItemTemplate from "../SelectItemTemplate/SelectItemTemplate";

const styles = {
  button: {
    flexDirection: "column",
    padding: 0,
    width: "100%",
    alignItems: "flex-start",

    "&:hover": {
      textDecoration: "none",
      background: "rgba(0,0,0, 0.12)",
    },
  },
  title: {
    color: ({ palette }: { palette: { black: { main: string } } }) =>
      palette.black.main,
  },
  desc: {
    color: ({ palette }: { palette: { grey2: { main: string } } }) =>
      palette.grey2.main,
    fontSize: "16px",
  },
};

const SelectItem = ({ selectItemData }: SelectItemDataProps): JSX.Element => {
  // 임시로 하나의 state를 만들고 분리하기
  // 추가로 열렸는지 확인하는 state로 x 버튼 보이기 / 숨기기 관리

  const {
    gridStyle: { xs, pl = undefined },
    buttonId,
    buttonAreaLabel,
    title,
    desc,
    modalAnchorStyle,
    children,
  } = selectItemData;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <SelectItemTemplate xs={xs} pl={pl}>
      <Button
        id={buttonId}
        aria-controls={open ? buttonId : undefined}
        aria-haspopup="true"
        aria-label={buttonAreaLabel}
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={styles.button}
      >
        <Typography sx={styles.title}>{title}</Typography>
        <Typography sx={styles.desc}>{desc}</Typography>
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={modalAnchorStyle}
      >
        {children}
      </Popover>
    </SelectItemTemplate>
  );
};

export default SelectItem;

interface SelectItemDataProps {
  selectItemData: {
    gridStyle: {
      xs: boolean | GridSize | undefined;
      pl?: number | undefined;
    };
    buttonId: string;
    buttonAreaLabel: string;
    title: string;
    desc: string;
    modalAnchorStyle: {
      horizontal: "center" | "left" | "right" | number;
      vertical: "bottom" | "center" | "top" | number;
    };
    children: React.ReactNode | string;
  };
}
