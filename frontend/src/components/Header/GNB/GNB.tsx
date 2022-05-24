import NavItem from "./NavItem";

const MENUS = ["숙소", "체험", "온라인 체험"];

const GNB = (): JSX.Element => {
  return (
    <ul>
      {MENUS.map((menu) => (
        <NavItem item={menu} />
      ))}
    </ul>
  );
};

export default GNB;
