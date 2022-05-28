import { useState } from "react";

import ButtonArea from "./ButtonArea/ButtonArea";
import { CheckInOut /* , ReservationFee, PeopleCount */ } from "./SelectItem";
import SelectItemAreaWrapper from "./SelectItemArea.style";

const SelectItemArea = (): JSX.Element => {
  // const [isFocused, SetIsFocused] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLDivElement>(null);

  const handleFocusArea = (): void => {
    // SetIsFocused(!isFocused);
  };

  return (
    <SelectItemAreaWrapper container columns={12}>
      <CheckInOut
        handleFocus={handleFocusArea}
        setAnchorEl={setAnchorEl}
        anchorEl={anchorEl}
      />
      {/* <ReservationFee handleFocus={handleFocusArea} />
      <PeopleCount handleFocus={handleFocusArea} /> */}
      <ButtonArea
        icon="search"
        isFocused={Boolean(anchorEl)}
        onClick={() => setAnchorEl(null)}
      />
    </SelectItemAreaWrapper>
  );
};

export default SelectItemArea;
