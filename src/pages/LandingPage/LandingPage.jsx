import HeroPage from "../Heropage/HeroPage.jsx";
import About from "../About/About-section";
import Courses from "../Courses/Courses.jsx";
import OurMission from "../Mission/Our-Mission.jsx";
import OurVision from "../Vision/Vision.jsx";
import Review from "../Review/Review.jsx";
import CertificateAwardPage from "../certificate/CertificateAwardPage.jsx";
import { Box } from "@mui/material";
import Alumini from "../Alumni/Alumini.jsx";
import Bonuses from "../../components/Bonuses/Bonus.jsx";
import useScrollToTop from "../../components/ScrollToTop/ScrollToTop.jsx";
// import { Helmet } from "react-helmet";

const LandingPage = () => {
  useScrollToTop();

  return (
    // <Helmet>

    <div>
      {/* <HeroPage />
      <About />
      <Courses />
      <OurMission />
      <OurVision />
      <Review /> */}
      {/* <CertificateAwardPage /> */}
      {/* <title>Home Page - Your Website</title>
      <meta
        name="hgsccdigitalskills teachs us how to learn new skills such us content writing, Health Writing
,Ghostwriting,Social Media Management,Copywriting,Public Speaking,Graphic Designing,Fashion Designing, Video Editing,Facebook Visibility,Professional Coaching,LinkedIn Full Course"
        content="Welcome to the home page https://hgsccdigitalskills.com.ng ."
      />
      <link rel="canonical" href="https://hgsccdigitalskills.com.ng" /> */}

      <Box
        sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Box sx={{ flex: "1 0 auto" }}>
          <HeroPage />
          <About />
          <Courses />
          <OurMission />
          <OurVision />
          <Alumini />
          <Review />
          <Bonuses />
          <CertificateAwardPage />
        </Box>
        {/* <Footer /> */}
      </Box>
    </div>
    // </Helmet>
  );
};

export default LandingPage;
