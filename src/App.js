import { CssBaseline } from "@mui/material";
import ErrorBoundary from "./components/Error/Error";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "./components/Footer/Footer";
import AboutUsScreen from "./Screens/AboutUsScreen";
import { Route, Routes } from "react-router-dom";
import Contact from "./Screens/ContactUsScreen";
import Services from "./Screens/Services";

function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary>
        {/* <div className="App-main">
          <Navbar />
          <LandingPage />
          <Footer />
        </div> */}
        <Navbar />

        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/about" element={<AboutUsScreen />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/services" element={<Services />}></Route>
        </Routes>
        <Footer />
      </ErrorBoundary>{" "}
    </ThemeProvider>
  );
}

export default App;
