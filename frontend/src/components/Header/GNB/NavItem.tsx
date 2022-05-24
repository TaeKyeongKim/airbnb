interface NavItemProps {
  item: string;
}

const NavItem = ({ item }: NavItemProps): JSX.Element => {
  return <li>{item}</li>;
};

export default NavItem;
