import SelectItem from "./SelectItem/SelectItem";
import SelectItemAreaWrapper from "./SelectItemArea.style";

const SelectItemArea = (): JSX.Element => {
  return (
    <SelectItemAreaWrapper container columns={10}>
      <SelectItem columnSize={2} />
      <SelectItem columnSize={2} divide />
      <SelectItem columnSize={3} divide pl={3} />
      <SelectItem columnSize={2} pl={3} />
      <SelectItem columnSize={1} />
    </SelectItemAreaWrapper>
  );
};

export default SelectItemArea;
