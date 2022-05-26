import { IconButton, IconButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const RoundButton = styled(IconButton)<RoundButtonProps>(
  ({ iconName, theme: { palette, size } }) => `
  width: ${
    iconName === "close"
      ? size.searchBar.closeButton.width
      : size.searchBar.searchButton.width
  };
  height: ${
    iconName === "close"
      ? size.searchBar.closeButton.height
      : size.searchBar.searchButton.height
  };
  background-color: ${
    iconName === "close" ? palette.grey4.main : palette.primary.main
  };

  svg {
    width: ${
      iconName === "close"
        ? size.searchBar.closeButton.icon.width
        : size.searchBar.searchButton.icon.width
    };
    height: ${
      iconName === "close"
        ? size.searchBar.closeButton.icon.height
        : size.searchBar.searchButton.icon.height
    };
    color: ${iconName === "close" ? palette.grey1.main : palette.white.main};
  };`
);

export default RoundButton;

export interface RoundButtonProps extends IconButtonProps {
  iconName?: string;
}
