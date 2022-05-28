import { RoundButtonProps } from "@types";

import SelectItemTemplate from "../SelectItemTemplate/SelectItemTemplate";
import RoundIconButton from "./Buttons/Buttons";

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
      <RoundIconButton icon={icon} />
    </SelectItemTemplate>
  );
};

export default ButtonArea;

interface ButtonAreaProps extends RoundButtonProps {
  divide?: boolean;
  xs?: number;
  isFocused?: boolean;
}
