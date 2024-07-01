import React from "react";
import HeroPage from "../Heropage/HeroPage.jsx";
import About from "../About/About-section";
import Courses from "../Courses/Courses.jsx";

const LandingPage = () => {
  return (
    <div>
      <HeroPage />
      <About />
      <Courses />
    </div>
  );
};

export default LandingPage;
