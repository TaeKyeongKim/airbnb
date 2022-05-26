import { ButtonGroup, Grid, GridProps } from "@mui/material";

import NavItem from "./NavItem";

const GNB = ({ menuData, ...args }: GNBProps): JSX.Element => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Grid {...args}>
      <ButtonGroup component="nav" aria-label="메인 메뉴">
        {menuData.map(({ id, name }) => (
          <NavItem key={id} item={name} />
        ))}
      </ButtonGroup>
    </Grid>
  );
};

export default GNB;

interface GNBProps extends GridProps {
  menuData: {
    id: number;
    name: string;
  }[];
}
