import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Noto Sans KR", "sans-serif"].join(","),
  },
  palette: {
    black: {
      main: "#010101",
    },
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    black: Palette["primary"];
  }
  interface PaletteOptions {
    black: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    black: true;
  }
}

export default theme;
