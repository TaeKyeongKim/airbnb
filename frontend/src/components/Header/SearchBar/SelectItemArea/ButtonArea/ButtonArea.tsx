import { GridProps } from "@mui/material";

import SelectItem from "../SelectItem/SelectItem";
import RoundIconButton from "./Buttons/Buttons";

const ButtonArea = ({ icon, divide }: ButtonAreaProps): JSX.Element => {
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

export default ButtonArea;

interface ButtonAreaProps extends GridProps {
  icon: string;
  divide?: boolean;
}
