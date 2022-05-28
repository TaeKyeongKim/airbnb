import ButtonArea from "./ButtonArea/ButtonArea";
import { CheckInOut, ReservationFee } from "./SelectItem";
import SelectItemAreaWrapper from "./SelectItemArea.style";
import SelectItemTemplate from "./SelectItemTemplate/SelectItemTemplate";

const SelectItemArea = (): JSX.Element => {
  return (
    <SelectItemAreaWrapper container columns={12}>
      <CheckInOut />
      <ReservationFee />
      <SelectItemTemplate xs={2} pl={1}>
        인원 설정 영역
      </SelectItemTemplate>
      <ButtonArea icon="close" />
      <ButtonArea icon="search" />
    </SelectItemAreaWrapper>
  );
};

export default SelectItemArea;
