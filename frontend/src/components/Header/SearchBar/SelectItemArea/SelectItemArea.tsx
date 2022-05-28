import ButtonArea from "./ButtonArea/ButtonArea";
import { CheckInOut, ReservationFee, PeopleCount } from "./SelectItem";
import SelectItemAreaWrapper from "./SelectItemArea.style";

const SelectItemArea = (): JSX.Element => {
  return (
    <SelectItemAreaWrapper container columns={12}>
      <CheckInOut />
      <ReservationFee />
      <PeopleCount />
      <ButtonArea icon="search" />
    </SelectItemAreaWrapper>
  );
};

export default SelectItemArea;
