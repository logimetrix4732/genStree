import React from "react";
import ChooseUS from "../../ChooseUS";
import MainHeading from "../../MainHeading";
import MobileWhyChooseUs from "./MobileComponents/MobileWhyChooseUs";
import MobileAbout3 from "./MobileComponents/MobileAbout/MobileAbout3";
import download83 from "../../../assets/img/normal/download-8-3.png";
const aboutData = [
  {
    id: 1,
    title: "Project Management App",
    heading: "Download our app and start your free trial to get started today!",
    description1:
      "Clearly communicate the benefits of using the app. Explain how it solves a problem or improves the user's life in some way. Focus on the value proposition and what makes the app worth downloading. Include a prominent call-to-action button that encourages visitors to download the app or sign up for a free trial.",
    description2:
      "Specify which platforms the app is available on (e.g., iOS, Android) and provide links to download from the respective app stores.",
    playStoreLink: "#",
    appleStoreLink: "#",
    image: download83,
  },
];
const JKTourismPage = () => {
  return (
    <div>
      <MainHeading
        title="JK Tourism"
        subtitle="JK Tourism"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Solution" }]}
        marginBottom="50px"
      />
      <MobileAbout3 aboutData={aboutData} />
      <MobileWhyChooseUs />
      <ChooseUS />
    </div>
  );
};

export default JKTourismPage;
