import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Noto Sans KR", "sans-serif"].join(","),
    fontSize: 12,
  },
  palette: {
    primary: {
      main: "#E84C60",
    },
    secondary: {
      main: "#118917",
    },
    black: {
      main: "#010101",
    },
    white: {
      main: "#FFF",
    },
    grey1: {
      main: "#333333",
    },
    grey2: {
      main: "#4F4F4F",
    },
    grey3: {
      main: "#828282",
    },
    grey4: {
      main: "#BDBDBD",
    },
    grey5: {
      main: "#E0E0E0",
    },
    grey6: {
      main: "#F5F5F7",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          textDecoration: "none",
          color: "inherit",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "400",
          fontSize: "1rem",
          backgroundColor: "inherit",
          minWidth: "0",

          "&:hover": {
            backgroundColor: "inherit",
            fontWeight: "700",
            textDecoration: "underline",
          },
        },
      },
    },
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    black: Palette["primary"];
    white: Palette["primary"];
    grey1: Palette["primary"];
    grey2: Palette["primary"];
    grey3: Palette["primary"];
    grey4: Palette["primary"];
    grey5: Palette["primary"];
    grey6: Palette["primary"];
  }
  interface PaletteOptions {
    black: PaletteOptions["primary"];
    white: PaletteOptions["primary"];
    grey1: PaletteOptions["primary"];
    grey2: PaletteOptions["primary"];
    grey3: PaletteOptions["primary"];
    grey4: PaletteOptions["primary"];
    grey5: PaletteOptions["primary"];
    grey6: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    black: true;
    white: true;
  }
}

export default theme;
