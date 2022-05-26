import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const RoundButton = styled(IconButton)(
  ({ theme: { palette, size } }) => `
  width: ${size.searchBar.closeButton.width};
  height: ${size.searchBar.closeButton.height};
  background-color: ${palette.grey4.main};
`
);

export default RoundButton;
