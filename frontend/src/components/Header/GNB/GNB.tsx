import { Grid, List } from "@mui/material";

import NavItem from "./NavItem";

const MENUS = [
  { id: 1, name: "숙소" },
  { id: 2, name: "체험" },
  { id: 3, name: "온라인 체험" },
];

const flexContainer = {
  display: "flex",
};

const GNB = (): JSX.Element => {
  return (
    <Grid container rowSpacing={2} item xs={8} justifyContent="center">
      <List component="nav" style={flexContainer}>
        {MENUS.map(({ id, name }) => (
          <NavItem key={id} item={name} />
        ))}
      </List>
    </Grid>
  );
};

export default GNB;
