import { ButtonGroup, Grid } from "@mui/material";

import NavItem from "./NavItem";

const GNB = ({ menuData }: GNBProps): JSX.Element => {
  return (
    <Grid container rowSpacing={2} item xs={8} justifyContent="center">
      <ButtonGroup component="nav" aria-label="메인 메뉴">
        {menuData.map(({ id, name }) => (
          <NavItem key={id} item={name} />
        ))}
      </ButtonGroup>
    </Grid>
  );
};

export default GNB;

interface MenuItemProps {
  id: number;
  name: string;
}
interface GNBProps {
  menuData: MenuItemProps[];
}
