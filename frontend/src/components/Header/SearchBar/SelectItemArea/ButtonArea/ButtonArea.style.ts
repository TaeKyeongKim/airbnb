import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

import { SearchBarButtonProps } from "@types";

const RoundButton = styled(IconButton)<SearchBarButtonProps>(
  ({ icon, isFocused, theme: { palette, size } }) => {
    const isCloseIcon = icon === "close";
    const buttonKeyName = isCloseIcon ? "closeButton" : "searchButton";
    const bgColor = isCloseIcon ? "grey4" : "primary";
    const svgColor = isCloseIcon ? "grey1" : "white";

    const buttonSize = `
    width: ${size.searchBar[buttonKeyName].width};
    height: ${size.searchBar[buttonKeyName].height};
    `;

    const focusedButtonStyle = `
    width: ${size.searchBar.focusedButton.width};
    height: ${size.searchBar.focusedButton.height};
    border-radius: ${parseInt(size.searchBar.focusedButton.height, 10) / 2}px;
    color: ${palette.white.main};
    `;
    return `
    ${isFocused ? focusedButtonStyle : buttonSize};
    font-family: "Noto Sans KR", "sans-serif";
    font-size: 18px;
    font-weight: 700;
    background-color: ${palette[bgColor].main};
    margin-right: ${isCloseIcon && size.searchBar.closeButton.width};

    .MuiSvgIcon-root {
      width: ${size.searchBar[buttonKeyName].icon.width};
      height: ${size.searchBar[buttonKeyName].icon.height};
      color: ${palette[svgColor].main};
    };
  `;
  }
);

export default RoundButton;
