import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const GridItem = styled(Grid, {
  shouldForwardProp: (prop) => prop !== "divide",
  name: "MyThemeComponent",
  slot: "Root",
})<GridItemProps>(
  ({ divide, theme: { palette } }) => `
border-right: ${divide && `1px solid ${palette.grey5.main}`}};
`
);

export default GridItem;

interface GridItemProps {
  divide?: boolean;
}
