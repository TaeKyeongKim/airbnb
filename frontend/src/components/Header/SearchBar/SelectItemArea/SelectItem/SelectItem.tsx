// import { ReactNode } from "react";
import { GridProps } from "@mui/material";

import GridItem from "./SelectItem.style";

const SelectItem = ({
  divide,
  ...MUIGridProps
}: SelectItemProps): JSX.Element => {
  return (
    <GridItem item {...MUIGridProps} divide={divide?.toString()}>
      {MUIGridProps.children}
    </GridItem>
  );
};

export default SelectItem;

export interface SelectItemProps extends GridProps {
  divide?: string;
}
