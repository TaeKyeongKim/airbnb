import { Button, Grid } from "@mui/material";

import GNB from "./GNB/GNB";

const LogoArea = () => {
  return (
    <Grid container item xs={2} justifyContent="center">
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
      <Button color="black">메뉴</Button>
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
