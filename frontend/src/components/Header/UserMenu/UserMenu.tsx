import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { Grid } from "@mui/material";

import { MenuButton, UserButton, UserMenuContainer } from "./UserMenu.styled";

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
      <UserMenuContainer>
        <MenuButton disableFocusRipple disableRipple>
          <MenuIcon />
        </MenuButton>
        <UserButton disableFocusRipple disableRipple>
          <PersonIcon />
        </UserButton>
      </UserMenuContainer>
    </Grid>
  );
};

export default UserMenu;
