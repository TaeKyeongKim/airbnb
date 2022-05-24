import GNB from "./GNB/GNB";

const LogoArea = () => {
  return <h1>LOGO</h1>;
};

const UserMenu = () => {
  return <p>메뉴</p>;
};

const Header = () => {
  return (
    <>
      <LogoArea />
      <GNB />
      <UserMenu />
    </>
  );
};

export default Header;
