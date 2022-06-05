import { useContext } from "react";

import { Grid } from "@mui/material";
import Box from "@mui/material/Box";

import MENUS from "mockData/menus";
import { LocationContext } from "router/Contexts";
import Link from "router/Link";

import GNB from "./GNB/GNB";
import { indexHeaderStyle, HeaderContainer } from "./Header.style";
import SearchBar from "./SearchBar/SearchBar";
import UserMenu from "./UserMenu/UserMenu";

const LogoArea = () => {
  return (
    <Grid container item xs={2} justifyContent="left">
      <h1 style={{ margin: "auto 0" }}>
        <Link to="index">LOGO</Link>
      </h1>
    </Grid>
  );
};

const GNBArea = () => {
  return (
    <GNB
      menuData={MENUS}
      container
      rowSpacing={2}
      item
      xs={8}
      justifyContent="center"
    />
  );
};

const ChildNodes = ({ currentPath }: { currentPath: string }) => {
  return (
    <>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ height: ({ elementSize }) => elementSize.fullSize }}
      >
        <LogoArea />
        {currentPath === "/" && <GNBArea />}
        {currentPath === "/searchResult" && <SearchBar />}
        <UserMenu />
      </Grid>
      {currentPath === "/" && <SearchBar />}
    </>
  );
};

const Header = () => {
  const { pathname } = useContext(LocationContext)!;

  return (
    <Box component="header" sx={indexHeaderStyle}>
      <HeaderContainer maxWidth="xl">
        <ChildNodes currentPath={pathname} />
      </HeaderContainer>
    </Box>
  );
};

export default Header;
