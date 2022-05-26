import { ReactNode } from "react";

import RoundButton from "./CloseButton.style";

const RoundIconButton = ({ icon }: { icon: ReactNode }) => {
  return <RoundButton>{icon}</RoundButton>;
};

export default RoundIconButton;
