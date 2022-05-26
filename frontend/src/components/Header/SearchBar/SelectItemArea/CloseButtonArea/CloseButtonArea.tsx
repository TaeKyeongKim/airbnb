import CloseButton from "./CloseButton/CloseButton";
import SelectItem from "./SelectItem/SelectItem";

const CloseButtonArea = (): JSX.Element => {
  return (
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
  );
};

export default CloseButtonArea;
