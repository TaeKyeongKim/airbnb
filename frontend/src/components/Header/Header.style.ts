import { Container, ContainerProps, Theme } from "@mui/material";
import { styled } from "@mui/material/styles";

import heroImage from "assets/hero-img.png";

const defaultHeaderStyle = {
  maxwidth: "1440px",
};

const indexHeaderStyle = {
  ...defaultHeaderStyle,
  height: "640px",
  backgroundImage: `url(${heroImage})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center bottom",
  backgroundSize: "cover",
};

const miniHeaderStyle = {
  ...defaultHeaderStyle,
  height: "94px",
  backgroundColor: ({ palette }: Theme) => palette.white.main,
};

const HeaderContainer = styled(Container)<ContainerProps>(
  ({ theme: { elementSize, style, whiteSpace } }) => `
  height: ${elementSize.navBarHeight};
  margin: ${style.alignCenter.margin};
  padding: 0 ${whiteSpace.inner} !important;
`
);

export { indexHeaderStyle, HeaderContainer, miniHeaderStyle };
