import { CssBaseline } from "@mui/material";
import ErrorBoundary from "./components/Error/Error";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary>
        <div className="App-main">
          <Navbar />
          <LandingPage />
        </div>
      </ErrorBoundary>{" "}
    </ThemeProvider>
  );
}

export default App;
