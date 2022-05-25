import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import heroImage from "assets/hero-img.png";

import GNB from "./GNB/GNB";

const LogoArea = () => {
  return (
    <Grid container item xs={2} justifyContent="left">
      <h1>LOGO</h1>
    </Grid>
  );
};

const UserMenu = () => {
  return (
    <Grid
      container
      item
      xs={2}
      justifyContent="center"
      direction="column"
      alignItems="flex-end"
    >
      <Button color="black" disableFocusRipple disableRipple>
        메뉴
      </Button>
    </Grid>
  );
};

// TODO: 검색결과 화면으로 변경시 다른 스타일이 적용되어야 함
const indexHeaderStyle = {
  maxwidth: "1440px",
  height: "640px",
  backgroundImage: `url(${heroImage})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center bottom",
  backgroundSize: "cover",
};

const Header = () => {
  return (
    <Box component="header" sx={indexHeaderStyle}>
      <Container component="header" maxWidth="xl" sx={{ height: "100px" }}>
        <Grid container spacing={2} columns={12}>
          <LogoArea />
          <GNB />
          <UserMenu />
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
