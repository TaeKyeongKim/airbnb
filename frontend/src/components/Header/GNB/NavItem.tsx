import { ListItemButton, ListItemText } from "@mui/material";

interface NavItemProps {
  item: string;
}

const NavItem = ({ item }: NavItemProps): JSX.Element => {
  return (
    <ListItemButton component="a" href="#">
      <ListItemText primary={item} />
    </ListItemButton>
  );
};

export default NavItem;
