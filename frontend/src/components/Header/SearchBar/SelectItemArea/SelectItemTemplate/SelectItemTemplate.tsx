import { Box, Popover, PopoverProps, Theme } from "@mui/material";

import {
  GridItem,
  modalStyle,
  SelectItemTemplateProps,
} from "./SelectItemTemplate.style";

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

const ModalTemplate = ({
  open,
  anchorEl,
  onClose,
  anchorOrigin = {
    vertical: 60, // TODO: 수정
    horizontal: "left",
  },
  children,
}: PopoverProps): JSX.Element => {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
    >
      <Box sx={modalStyle}>{children}</Box>
    </Popover>
  );
};

export { SelectItemTemplate, ModalTemplate };
