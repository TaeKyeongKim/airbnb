import CloseButtonArea from "./CloseButtonArea/CloseButtonArea";
import SelectItem from "./CloseButtonArea/SelectItem/SelectItem";
import SelectItemAreaWrapper from "./SelectItemArea.style";

const SelectItemArea = (): JSX.Element => {
  return (
    <SelectItemAreaWrapper container columns={11}>
      <SelectItem xs={2} />
      <SelectItem xs={2} pl={1} />
      <CloseButtonArea />
      <SelectItem xs={2} pl={1} />
      <CloseButtonArea />
      <SelectItem xs={2} pl={1} />
      <SelectItem xs={1} pl={3} />
    </SelectItemAreaWrapper>
  );
};

export default SelectItemArea;
