// import { ReactNode } from "react";
import { GridProps } from "@mui/material";

import GridItem from "./SelectItemTemplate.style";

const SelectItemTemplate = ({
  divide,
  ...MUIGridProps
}: SelectItemTemplateProps): JSX.Element => {
  return (
    <GridItem item {...MUIGridProps} divide={divide}>
      {MUIGridProps.children}
    </GridItem>
  );
};

export default SelectItemTemplate;

export interface SelectItemTemplateProps extends GridProps {
  divide?: string;
}
