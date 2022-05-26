import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const SearchBarContainer = styled(Container, {
  shouldForwardProp: (prop) => prop !== "currentPage",
  name: "MyThemeComponent",
  slot: "Root",
  overridesResolver: (styles) => [styles.root],
})<SearchBarContainerProps>(
  ({ currentPage, theme: { size, palette, style } }) => `
  margin: ${style.alignCenter.margin};
  width: ${currentPage === "index" && size.searchBar.fullSize.width};
  height: ${currentPage === "index" && size.searchBar.fullSize.height};
  padding: ${currentPage === "index" && size.searchBar.fullSize.padding};
  background-color: ${palette.white.main};
  border: 1px solid ${palette.grey4.main};
  border-radius: calc(${size.searchBar.fullSize.width} / 2);
  `
);

export default SearchBarContainer;

interface SearchBarContainerProps {
  currentPage?: string;
}
