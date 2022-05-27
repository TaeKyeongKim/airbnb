import { GridProps, GridSize, IconButtonProps } from "@mui/material";

export interface GNBProps extends GridProps {
  menuData: {
    id: number;
    name: string;
  }[];
}

export interface SelectItemDataProps {
  gridStyle: {
    xs: boolean | GridSize | undefined;
    pl?: number | undefined;
  };
  buttonId: string;
  buttonAreaLabel: string;
  title: string;
  desc: string;
  modalAnchorStyle: {
    horizontal: "center" | "left" | "right" | number;
    vertical: "bottom" | "center" | "top" | number;
  };
  children: React.ReactNode;
}

export interface RoundButtonProps extends IconButtonProps {
  icon: "close" | "search";
}

export interface ButtonAreaProps extends RoundButtonProps {
  divide?: boolean;
}
export interface SelectItemTemplateProps extends GridProps {
  divide?: string;
}

export interface SearchBarContainerProps {
  currentPage?: string;
}
