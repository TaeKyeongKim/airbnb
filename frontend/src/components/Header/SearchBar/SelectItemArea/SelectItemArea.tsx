import CloseButton from "./CloseButton/CloseButton";
import SelectItem from "./SelectItem/SelectItem";
import SelectItemAreaWrapper from "./SelectItemArea.style";

const SelectItemArea = (): JSX.Element => {
  return (
    <SelectItemAreaWrapper container columns={11}>
      <SelectItem xs={2} />
      <SelectItem xs={2} pl={1} />
      <SelectItem
        divide
        container
        xs={1}
        pl={3}
        justifyContent="center"
        direction="column"
        alignItems="flex-end"
      >
        <CloseButton />
      </SelectItem>
      <SelectItem xs={2} pl={1} />
      <SelectItem xs={1} divide pl={3} />
      <SelectItem xs={2} pl={1} />
      <SelectItem xs={1} pl={3} />
    </SelectItemAreaWrapper>
  );
};

export default SelectItemArea;
