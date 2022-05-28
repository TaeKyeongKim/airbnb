import { useState } from "react";

import ButtonArea from "./ButtonArea/ButtonArea";
import { CheckInOut, ReservationFee, PeopleCount } from "./SelectItem";
import SelectItemAreaWrapper from "./SelectItemArea.style";

const SelectItemArea = (): JSX.Element => {
  const [isFocused, SetIsFocused] = useState<boolean>(false);

  const handleFocusArea = (): void => {
    SetIsFocused(!isFocused);
  };

  return (
    <SelectItemAreaWrapper container columns={12}>
      <CheckInOut handleFocus={handleFocusArea} />
      <ReservationFee handleFocus={handleFocusArea} />
      <PeopleCount handleFocus={handleFocusArea} />
      <ButtonArea icon="search" isFocused={isFocused} />
    </SelectItemAreaWrapper>
  );
};

export default SelectItemArea;
