import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import Header from "components/Header/Header";
import theme from "styles/theme";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="xl">
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      </Container>
    </div>
  );
};

export default App;
