import { Button, ButtonProps, Container, ContainerProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const UserMenuContainer = styled(Container)<ContainerProps>(
  ({ theme: { palette, style } }) => `
  ${style.alignCenter.flex}
  background-color: ${palette.white.main};
  width: 76px;
  height: 40px;
  border-radius: calc(76px / 2);
  border: 1px solid ${palette.grey4.main};
`
);

const UserButton = styled(Button)<ButtonProps>(
  ({ theme: { palette, size, style } }) => `
  background-color: ${palette.grey3.main};
  color: ${palette.white.main};
  width: ${size.userMenuButton.width};
  height: ${size.userMenuButton.height};
  ${style.circularBorder}

  :hover {
    background-color: ${palette.grey3.main};
  }
`
);
const MenuButton = styled(Button)<ButtonProps>(
  ({ theme: { palette, size, style } }) => `
  background-color: ${palette.white.main};
  color: ${palette.grey3.main};
  width: ${size.userMenuButton.width};
  height: ${size.userMenuButton.height};
  ${style.circularBorder}


`
);

export { MenuButton, UserButton, UserMenuContainer };
