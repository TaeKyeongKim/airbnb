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
  setAnchorEl: React.Dispatch<
    React.SetStateAction<HTMLDivElement | null | (EventTarget & HTMLElement)>
  >;
  anchorEl?: null | HTMLDivElement | (EventTarget & HTMLElement);
}
