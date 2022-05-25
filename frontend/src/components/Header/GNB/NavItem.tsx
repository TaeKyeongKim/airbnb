import { Button } from "@mui/material";

interface NavItemProps {
  item: string;
}

const NavItem = ({ item }: NavItemProps): JSX.Element => {
  return (
    <Button variant="text" component="a" href="#" color="black">
      {item}
    </Button>
  );
};

export default NavItem;
