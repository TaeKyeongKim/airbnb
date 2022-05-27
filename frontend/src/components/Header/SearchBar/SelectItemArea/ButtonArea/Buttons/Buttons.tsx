import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

import RoundButton, { RoundButtonProps } from "./Buttons.style";

const icons = {
  close: <CloseIcon />,
  search: <SearchIcon />,
};

const RoundIconButton = ({ icon }: RoundButtonProps) => {
  return <RoundButton icon={icon}>{icons[icon]}</RoundButton>;
};

export default RoundIconButton;
