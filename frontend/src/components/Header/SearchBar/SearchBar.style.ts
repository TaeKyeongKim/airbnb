import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const SearchBarContainer = styled(Container, {
  shouldForwardProp: (prop) => prop !== "currentPage",
  name: "MyThemeComponent",
  slot: "Root",
})<SearchBarContainerProps>(
  ({ currentPage, theme: { elementSize, palette, style } }) => {
    let containerSize;

    if (currentPage === "/") {
      containerSize = `
      max-width: ${elementSize.searchBar.fullSize.maxWidth};
      height: ${elementSize.searchBar.fullSize.height};
      padding: ${elementSize.searchBar.fullSize.padding};
      `;
    }

    if (currentPage === "/searchResult") {
      containerSize = `
        width: ${elementSize.searchBar.miniSize.width};
        height: ${elementSize.searchBar.miniSize.height};
        padding: ${elementSize.searchBar.miniSize.padding};
      `;
    }
    return `
      ${containerSize};
      margin: ${style.alignCenter.margin};
      background-color: ${palette.white.main};
      border: 1px solid ${palette.grey4.main};
      border-radius: calc(${elementSize.searchBar.fullSize.maxWidth} / 2);

      button {
        z-index: 1500;
      }
    `;
  }
);

export default SearchBarContainer;

export interface SearchBarContainerProps {
  currentPage?: string;
}
