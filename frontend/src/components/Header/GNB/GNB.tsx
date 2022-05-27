import { ButtonGroup, Grid } from "@mui/material";

import { GNBProps } from "@types";

import NavItem from "./NavItem";

const GNB = ({ menuData, ...MUIGridProps }: GNBProps): JSX.Element => {
  return (
    <Grid {...MUIGridProps}>
      <ButtonGroup component="nav" aria-label="메인 메뉴">
        {menuData.map(({ id, name }) => (
          <NavItem key={id} item={name} />
        ))}
      </ButtonGroup>
    </Grid>
  );
};

export default GNB;
