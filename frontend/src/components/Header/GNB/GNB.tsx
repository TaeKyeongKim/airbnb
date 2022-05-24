import NavItem from "./NavItem";

const MENUS = [
  { id: 1, name: "숙소" },
  { id: 2, name: "체험" },
  { id: 3, name: "온라인 체험" },
];

const GNB = (): JSX.Element => {
  return (
    <nav>
      <ul>
        {MENUS.map(({ id, name }) => (
          <NavItem key={id} item={name} />
        ))}
      </ul>
    </nav>
  );
};

export default GNB;
