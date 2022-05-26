import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const SearchBarContainer = styled(Container)<SearchBarContainerProps>(
  ({
    theme: {
      size: { searchBar },
      palette,
      style,
    },
    currentPage,
  }) => `
  margin: ${style.alignCenter.margin};
  width: ${currentPage === "index" && searchBar.fullSize.width};
  height: ${currentPage === "index" && searchBar.fullSize.height};
  background-color: ${palette.white.main};
  border: 1px solid ${palette.grey4.main};
  border-radius: calc(${searchBar.fullSize.width} / 2);
  `
);

export default SearchBarContainer;

interface SearchBarContainerProps {
  currentPage?: string;
}
