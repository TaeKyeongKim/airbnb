import { Button, ButtonProps, Container, ContainerProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const UserMenuContainer = styled(Container)<ContainerProps>(
  ({ theme: { palette } }) => `
  background-color: ${palette.white.main};
  width: 76px;
  height: 40px;
  border-radius: calc(76px / 2);
  border: 1px solid ${palette.grey4.main};
  display:flex;
  justify-content: center;
  align-items: center;
  
  @media (min-width: 600px) {
    padding: 0;
  }
`
);

const UserButton = styled(Button)<ButtonProps>(
  ({ theme: { palette } }) => `
  background-color: ${palette.grey3.main};
  color: ${palette.white.main};
  width: 32px;
  height: 32px;
  border-radius: 50%;

  :hover {
    background-color: ${palette.grey3.main};
  }
`
);
const MenuButton = styled(Button)<ButtonProps>(
  ({ theme: { palette } }) => `
  background-color: ${palette.white.main};
  color: ${palette.grey3.main};
  width: 32px;
  height: 32px;
  border-radius: 50%;

`
);

export { MenuButton, UserButton, UserMenuContainer };
