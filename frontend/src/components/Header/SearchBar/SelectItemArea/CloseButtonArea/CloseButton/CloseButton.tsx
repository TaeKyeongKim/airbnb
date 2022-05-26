import { ReactNode } from "react";

import RoundButton, { RoundButtonProps } from "./CloseButton.style";

const RoundIconButton = ({ icon, iconName }: RoundIconButtonProps) => {
  return <RoundButton iconName={iconName}>{icon}</RoundButton>;
};

export default RoundIconButton;

interface RoundIconButtonProps extends RoundButtonProps {
  icon: ReactNode;
}
