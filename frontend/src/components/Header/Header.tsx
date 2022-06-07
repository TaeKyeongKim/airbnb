import { useContext } from "react";

import Box from "@mui/material/Box";

import { SearchBarStateContext } from "contexts/contexts";

import ChildNodes from "./ChildNodes";
import {
  indexHeaderStyle,
  HeaderContainer,
  miniHeaderStyle,
} from "./Header.style";

const Header = (): JSX.Element => {
  const { isSearchBarFullSize } = useContext(SearchBarStateContext)!;

  return (
    <Box
      component="header"
      sx={isSearchBarFullSize ? indexHeaderStyle : miniHeaderStyle}
    >
      <HeaderContainer maxWidth="xl">
        <ChildNodes />
      </HeaderContainer>
    </Box>
  );
};

export default Header;
