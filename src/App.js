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
// import { Helmet } from "react-helmet";

function App() {
  const theme = createTheme();
  return (
    // <Helmet>
    <ThemeProvider theme={theme}>
      <title>HGSC² Digital Skills</title>
      <meta
        name="description"
        content="HGSC² Digital Skills is a product that will help you develop your skill"
      />
      <link rel="canonical" href="https://hgsccdigitalskills.com.ng/" />
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
    // </Helmet>
  );
}

export default App;
