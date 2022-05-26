import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

import SelectItem from "../SelectItem/SelectItem";
import RoundIconButton from "./CloseButton/CloseButton";

const CloseButtonArea = (): JSX.Element => {
  return (
    <SelectItem
      divide
      container
      xs={1}
      justifyContent="center"
      direction="column"
      alignItems="flex-end"
    >
      <RoundIconButton icon={<CloseIcon />} />
    </SelectItem>
  );
};

const SearchButton = (): JSX.Element => {
  return (
    <SelectItem
      divide
      container
      xs={1}
      justifyContent="center"
      direction="column"
      alignItems="flex-end"
    >
      <RoundIconButton icon={<SearchIcon />} />
    </SelectItem>
  );
};

const SearchBarButtons = {
  CloseButtonArea,
  SearchButton,
};

export default SearchBarButtons;
