import React from "react";
import HeroPage from "../Heropage/HeroPage.jsx";
import About from "../About/About-section";
import Courses from "../Courses/Courses.jsx";
import OurMission from "../Mission/Our-Mission.jsx";
import OurVision from "../Vision/Vision.jsx";
import Review from "../Review/Review.jsx";
import CertificateAwardPage from "../certificate/CertificateAwardPage.jsx";

const LandingPage = () => {
  return (
    <div>
      <HeroPage />
      <About />
      <Courses />
      <OurMission />
      <OurVision />
      <Review />
      <CertificateAwardPage />
    </div>
  );
};

export default LandingPage;
