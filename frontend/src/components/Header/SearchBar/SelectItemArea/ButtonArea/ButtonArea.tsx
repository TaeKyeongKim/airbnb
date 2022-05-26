import { GridProps } from "@mui/material";

import SelectItem from "../SelectItem/SelectItem";
import RoundIconButton from "./Buttons/Buttons";

const SearchBarButton = ({
  icon,
  divide,
}: SearchBarButtonAreaProps): JSX.Element => {
  return (
    <SelectItem
      divide={divide ? divide.toString() : undefined}
      container
      xs={1}
      justifyContent="center"
      direction="column"
      alignItems="flex-end"
    >
      <RoundIconButton icon={icon} />
    </SelectItem>
  );
};

export default SearchBarButton;

interface SearchBarButtonAreaProps extends GridProps {
  icon: string;
  divide?: boolean;
}
