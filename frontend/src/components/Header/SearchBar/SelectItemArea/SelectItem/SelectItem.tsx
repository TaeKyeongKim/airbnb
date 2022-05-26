// import { ReactNode } from "react";
import { GridProps } from "@mui/material";

import GridItem from "./SelecItem.style";

const SelectItem = ({
  divide,
  ...MUIGridProps
}: SelectItemProps): JSX.Element => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <GridItem item {...MUIGridProps} {...divide}>
      {MUIGridProps.children}
    </GridItem>
  );
};

export default SelectItem;

export interface SelectItemProps extends GridProps {
  divide?: boolean;
}
