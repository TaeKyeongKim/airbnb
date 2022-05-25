import { Button } from "@mui/material";

interface NavItemProps {
  item: string;
}

const NavItem = ({ item }: NavItemProps): JSX.Element => {
  return (
    <Button variant="text" component="a" href="#">
      {item}
    </Button>
  );
};

export default NavItem;
