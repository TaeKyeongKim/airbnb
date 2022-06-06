import { useEffect, useMemo, useState } from "react";

import Box from "@mui/material/Box";

import { SearchBarStateContext } from "contexts/contexts";

import ChildNodes from "./ChildNodes";
import {
  indexHeaderStyle,
  HeaderContainer,
  miniHeaderStyle,
} from "./Header.style";

const Header = () => {
  const [isSearchBarFullSize, setIsSearchBarFullSize] = useState(true);

  useEffect(() => {
    console.log("headerUseEffect", isSearchBarFullSize);
  }, [isSearchBarFullSize]);

  // const changeIsSearchBarFullSize = () => {
  //   setIsSearchBarFullSize((bool) => !bool);
  // };

  return (
    <SearchBarStateContext.Provider
      value={useMemo(
        () => ({ isSearchBarFullSize, setIsSearchBarFullSize }),
        [isSearchBarFullSize, setIsSearchBarFullSize]
      )}
    >
      <Box
        component="header"
        sx={isSearchBarFullSize ? indexHeaderStyle : miniHeaderStyle}
      >
        <HeaderContainer maxWidth="xl">
          <ChildNodes />
        </HeaderContainer>
      </Box>
    </SearchBarStateContext.Provider>
  );
};

export default Header;
