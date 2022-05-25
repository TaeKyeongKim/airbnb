import PersonIcon from "@mui/icons-material/Person";
import { Grid } from "@mui/material";

import UserButton from "./UserMenu.styled";

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
      <UserButton
        variant="contained"
        color="white"
        disableFocusRipple
        disableRipple
      >
        <PersonIcon />
      </UserButton>
    </Grid>
  );
};

export default UserMenu;
