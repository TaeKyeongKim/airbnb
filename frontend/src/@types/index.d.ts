import { GridProps, GridSize, IconButtonProps } from "@mui/material";

export interface RoundButtonProps extends IconButtonProps {
  icon: "close" | "search";
}
export interface SelectItemTemplateProps extends GridProps {
  divide?: string | boolean;
}

export interface SearchBarContainerProps {
  currentPage?: string;
}

export interface SelectItemProps {
  handleFocus: () => void;
}
