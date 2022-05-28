import { GridProps, GridSize, ButtonProps, ThemedProps } from "@mui/material";
export interface RoundButtonProps extends ButtonProps {
  icon: "close" | "search";
  isFocused?: string | boolean;
}
export interface SelectItemTemplateProps extends GridProps {
  divide?: string | boolean;
}

export interface SearchBarContainerProps {
  currentPage?: string;
}

export interface SelectItemProps {
  handleFocus: () => void;
  setAnchorEl?: React.Dispatch<React.SetStateAction<HTMLDivElement | null>>;
  anchorEl?: null | HTMLDivElement;
}
