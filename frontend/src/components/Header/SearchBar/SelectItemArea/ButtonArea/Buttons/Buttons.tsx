import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

import RoundButton, { RoundButtonProps } from "./Buttons.style";

const RoundIconButton = ({ icon }: RoundButtonProps) => {
  return (
    <RoundButton icon={icon}>
      {icon === "close" ? <CloseIcon /> : <SearchIcon />}
    </RoundButton>
  );
};

export default RoundIconButton;
