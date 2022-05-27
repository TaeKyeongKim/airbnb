import SelectItemTemplate from "../SelectItemTemplate/SelectItemTemplate";
import RoundIconButton from "./Buttons/Buttons";
import { RoundButtonProps } from "./Buttons/Buttons.style";

const ButtonArea = ({ icon, divide }: ButtonAreaProps): JSX.Element => {
  return (
    <SelectItemTemplate
      divide={divide ? divide.toString() : undefined}
      container
      xs={1}
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
}
