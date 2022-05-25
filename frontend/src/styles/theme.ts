import { createTheme } from "@mui/material/styles";

// import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Noto Sans KR", "sans-serif"].join(","),
    fontSize: 12,
  },
  palette: {
    black: {
      main: "#010101",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        a {
          text-decoration: none;
          color: inherit;
          &:visited: {
            text-decoration: none;
          }
          `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "400",
          fontSize: "1rem",

          "&:hover": {
            backgroundColor: "transparent",
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
