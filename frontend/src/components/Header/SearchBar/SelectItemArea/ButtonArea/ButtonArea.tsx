import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

import { RoundButtonProps } from "@types";

import SelectItemTemplate from "../SelectItemTemplate/SelectItemTemplate";
import RoundButton from "./ButtonArea.style";

const icons = {
  close: <CloseIcon />,
  search: <SearchIcon />,
};

const ButtonArea = ({
  isFocused,
  icon,
  divide,
  xs = 1,
}: ButtonAreaProps): JSX.Element => {
  console.log(isFocused);

  return (
    <SelectItemTemplate
      divide={divide ? divide.toString() : undefined}
      container
      xs={xs}
      justifyContent="center"
      direction="column"
      alignItems="flex-end"
    >
      <RoundButton icon={icon}>{icons[icon]}</RoundButton>
    </SelectItemTemplate>
  );
};

export default ButtonArea;

interface ButtonAreaProps extends RoundButtonProps {
  divide?: boolean;
  xs?: number;
  isFocused?: boolean;
}
