import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

import RoundButton, { RoundButtonProps } from "./Buttons.style";
/* const icons = {
  search: <SearchIcon />,
  close: <CloseIcon />,
}; */

const RoundIconButton = ({ icon }: RoundButtonProps) => {
  return (
    <RoundButton icon={icon}>
      {icon === "close" ? <CloseIcon /> : <SearchIcon />}
      {/* {icons[icon]} */}
    </RoundButton>
  );
};

export default RoundIconButton;
