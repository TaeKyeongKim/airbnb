import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const UserButton = styled(Button)<ButtonProps>(
  ({ theme: { palette } }) => `
:hover {
  background-color: ${palette.white.main};
}
`
);

export default UserButton;
