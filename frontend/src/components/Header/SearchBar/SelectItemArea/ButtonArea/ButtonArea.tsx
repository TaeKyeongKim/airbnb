import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { Button, ButtonProps } from "@mui/material";

import SelectItemTemplate from "../SelectItemTemplate/SelectItemTemplate";
import {
  buttonStyle,
  focusedButtonSize,
  closeButtonStyle,
} from "./ButtonArea.style";

const icons = {
  close: <CloseIcon />,
  search: <SearchIcon />,
};

const ButtonArea = ({
  isFocused,
  icon,
  divide,
  onClick,
  ariaLabel,
  xs = 1,
}: ButtonAreaProps): JSX.Element => {
  const buttonText = isFocused && "검색";
  const restStyle =
    (icon === "close" && closeButtonStyle) ||
    (isFocused && focusedButtonSize) ||
    {};

  console.log(closeButtonStyle, focusedButtonSize, {
    ...buttonStyle,
    ...restStyle,
  });

  return (
    <SelectItemTemplate
      divide={divide?.toString()}
      container
      xs={xs}
      justifyContent="center"
      direction="column"
      alignItems="flex-end"
    >
      <Button
        endIcon={icons[icon]}
        sx={{ ...buttonStyle, ...restStyle }}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {buttonText}
      </Button>
    </SelectItemTemplate>
  );
};

export default ButtonArea;

interface ButtonAreaProps extends ButtonProps {
  icon: "close" | "search";
  divide?: boolean;
  xs?: number;
  isFocused?: boolean;
  ariaLabel?: string;
}
