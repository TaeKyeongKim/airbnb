import {
  GridProps,
  GridSize,
  ThemedProps,
  IconButtonProps,
} from "@mui/material";

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

export interface SearchBarButtonProps extends IconButtonProps {
  icon: string;
  isFocused: boolean | undefined;
}
