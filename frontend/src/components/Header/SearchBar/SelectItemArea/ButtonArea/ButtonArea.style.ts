// import { Button } from "@mui/material";
// import { styled } from "@mui/material/styles";

import { Theme } from "@mui/material";

// color: ({ palette }: { palette: { grey2: { main: string } } }) =>
// palette.grey2.main,

const buttonStyle = {
  zIndex: 1500,
};

const focusedButtonSize = {
  width: ({ size }: Theme) => size.searchBar.focusedButton.width,
  height: ({ size }: Theme) => size.searchBar.focusedButton.height,
};

const closeButtonStyle = {
  width: ({ size }: Theme) => size.searchBar.closeButton.width,
  height: ({ size }: Theme) => size.searchBar.closeButton.height,
  backgroundColor: ({ palette }: Theme) => palette.grey4.main,
  marginRight: ({ size }: Theme) => size.searchBar.closeButton.width,
};

// interface ButtonStyles {
//   width?: string;
//   height?: string;
//   zIndex?: string;
//   backgroundColor?: string;
//   marginRight?: string;
//   color?: string;
// }

export { buttonStyle, focusedButtonSize, closeButtonStyle };

// const RoundButton = styled(Button)<RoundButtonProps>(
//   ({ icon, theme: { palette, size } }) => {
//     const isCloseIcon = icon === "close";
//     const buttonKeyName = isCloseIcon ? "closeButton" : "searchButton";
//     const bgColor = isCloseIcon ? "grey4" : "primary";
//     const svgColor = isCloseIcon ? "grey1" : "white";

//     return `
//     width: ${size.searchBar[buttonKeyName].width};
//     height: ${size.searchBar[buttonKeyName].height};
//     background-color: ${palette[bgColor].main};
//     margin-right: ${isCloseIcon && size.searchBar.closeButton.width};

//     svg {
//       width: ${size.searchBar[buttonKeyName].icon.width};
//       height: ${size.searchBar[buttonKeyName].icon.height};
//       color: ${palette[svgColor].main};
//     };
//   `;
//   }
// );

// export default RoundButton;

// <RoundButton icon={icon}>{icons[icon]}</RoundButton>
//
