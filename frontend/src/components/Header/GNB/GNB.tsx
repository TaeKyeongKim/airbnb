import { ButtonGroup, Grid } from "@mui/material";

import NavItem from "./NavItem";

const MENUS = [
  { id: 1, name: "숙소" },
  { id: 2, name: "체험" },
  { id: 3, name: "온라인 체험" },
];

const GNB = (): JSX.Element => {
  return (
    <Grid container rowSpacing={2} item xs={8} justifyContent="center">
      <ButtonGroup component="nav" variant="text" aria-label="">
        {MENUS.map(({ id, name }) => (
          <NavItem key={id} item={name} />
        ))}
      </ButtonGroup>
    </Grid>
  );
};

export default GNB;
