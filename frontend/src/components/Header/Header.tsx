import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import GNB from "./GNB/GNB";
import indexHeaderStyle from "./Header.styled";
import UserMenu from "./UserMenu/UserMenu";

const LogoArea = () => {
  return (
    <Grid container item xs={2} justifyContent="left">
      <h1 style={{ margin: "auto 0" }}>
        <a href="/" title="첫 화면으로 이동">
          LOGO
        </a>
      </h1>
    </Grid>
  );
};

const Header = () => {
  return (
    <Box component="header" sx={indexHeaderStyle}>
      <Container maxWidth="xl" sx={{ height: ({ size }) => size.navBarHeight }}>
        <Grid
          container
          spacing={2}
          columns={12}
          sx={{ height: ({ size }) => size.fullSize }}
        >
          <LogoArea />
          <GNB />
          <UserMenu />
        </Grid>
        {/* TODO: SearchBar */}
      </Container>
    </Box>
  );
};

export default Header;
