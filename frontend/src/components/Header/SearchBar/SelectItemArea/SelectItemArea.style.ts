import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const SelectItemArea = styled(Container)(
  ({ theme: { size } }) => `
  width: ${size.fullSize};
  height: ${size.fullSize};
  `
);

export default SelectItemArea;
