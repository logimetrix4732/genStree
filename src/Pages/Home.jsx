import React, { useRef } from "react";
import Dashboard from "../components/Dashboard";
import HappyClient from "../components/HappyClient";
import AboutUS from "../components/AboutUS";
import HowToWork from "../components/HowToWork";
import TechnologySolutions from "../components/TechnologySolutions";
import ChooseUS from "../components/ChooseUS";
import OurExpertise from "../components/OurExpertise";
import OurClient from "../components/OurClient";

const Home = () => {
  const aboutSectionRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <Dashboard scrollToAbout={scrollToAbout} />
      <AboutUS aboutSectionRef={aboutSectionRef} />
      <HowToWork />
      <HappyClient />
      <TechnologySolutions />
      <ChooseUS />
      <OurExpertise />
      <OurClient />
    </div>
  );
};

export default Home;
