import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const buttonStyle = {};

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
