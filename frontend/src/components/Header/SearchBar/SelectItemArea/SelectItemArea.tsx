import SearchBarButton from "./ButtonArea/ButtonArea";
import SelectItem from "./SelectItem/SelectItem";
import SelectItemAreaWrapper from "./SelectItemArea.style";

const SelectItemArea = (): JSX.Element => {
  return (
    <SelectItemAreaWrapper container columns={12}>
      <SelectItem xs={2}>안녕하세요</SelectItem>
      <SelectItem xs={2} pl={1}>
        반갑습니다
      </SelectItem>
      <SearchBarButton icon="close" />
      <SelectItem xs={2} pl={1}>
        안녕하세욥
      </SelectItem>
      <SearchBarButton icon="close" />
      <SelectItem xs={2} pl={1}>
        하하
      </SelectItem>
      <SearchBarButton icon="close" />
      <SearchBarButton icon="search" />
    </SelectItemAreaWrapper>
  );
};

export default SelectItemArea;
