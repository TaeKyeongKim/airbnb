import { Grid, GridProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const GridItem = styled(Grid)<GridItemProps>(
  ({ divide, theme: { palette } }) => {
    console.log(divide);
    return `
  border-right: ${divide && `1px solid ${palette.grey5.main}`}};
`;
  }
);

export default GridItem;

interface GridItemProps extends GridProps {
  divide?: boolean;
}
