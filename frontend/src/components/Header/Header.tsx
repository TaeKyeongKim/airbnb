import { Grid } from "@mui/material";

import GNB from "./GNB/GNB";

const LogoArea = () => {
  return (
    <Grid item xs={2}>
      <h1>LOGO</h1>
    </Grid>
  );
};

const UserMenu = () => {
  return (
    <Grid item xs={2}>
      메뉴
    </Grid>
  );
};

const Header = () => {
  return (
    <Grid container spacing={2} columns={12}>
      <LogoArea />
      <GNB />
      <UserMenu />
    </Grid>
  );
};

export default Header;
