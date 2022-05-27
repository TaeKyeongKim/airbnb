import ButtonArea from "./ButtonArea/ButtonArea";
import SelectItem from "./SelectItem/SelectItem";
import SelectItemAreaWrapper from "./SelectItemArea.style";
import SelectItemTemplate from "./SelectItemTemplate/SelectItemTemplate";

const SelectItemArea = (): JSX.Element => {
  return (
    <SelectItemAreaWrapper container columns={12}>
      <SelectItem />
      <SelectItemTemplate xs={2} pl={1}>
        반갑습니다
      </SelectItemTemplate>
      <ButtonArea icon="close" divide />
      <SelectItemTemplate xs={2} pl={1}>
        안녕하세욥
      </SelectItemTemplate>
      <ButtonArea icon="close" divide />
      <SelectItemTemplate xs={2} pl={1}>
        하하
      </SelectItemTemplate>
      <ButtonArea icon="close" />
      <ButtonArea icon="search" />
    </SelectItemAreaWrapper>
  );
};

export default SelectItemArea;
