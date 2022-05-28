import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";

import { RoundButtonProps } from "@types";

import SelectItemTemplate from "../SelectItemTemplate/SelectItemTemplate";
// import RoundButton from "./ButtonArea.style";

const icons = {
  close: <CloseIcon />,
  search: <SearchIcon />,
};

const ButtonArea = ({
  isFocused,
  icon,
  divide,
  onClick,
  xs = 1,
}: ButtonAreaProps): JSX.Element => {
  const buttonText = isFocused && "검색";

  return (
    <SelectItemTemplate
      divide={divide?.toString()}
      container
      xs={xs}
      justifyContent="center"
      direction="column"
      alignItems="flex-end"
    >
      <Button endIcon={icons[icon]} sx={{ zIndex: "1500" }} onClick={onClick}>
        {buttonText}
      </Button>
    </SelectItemTemplate>
  );
};

export default ButtonArea;

interface ButtonAreaProps extends RoundButtonProps {
  divide?: boolean;
  xs?: number;
  isFocused?: boolean;
}
