import GridItem from "./SelecItem.style";

const SelectItem = ({
  columnSize,
  divide = false,
  pl = 0,
}: SelecItemProps): JSX.Element => {
  return (
    <GridItem item xs={columnSize} divide={divide} pl={pl}>
      아이템
    </GridItem>
  );
};

export default SelectItem;

interface SelecItemProps {
  columnSize: number | boolean;
  pl?: number;
  divide?: boolean;
}
