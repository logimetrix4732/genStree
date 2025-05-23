import React from "react";
import ChooseUS from "../../ChooseUS";
import MainHeading from "../../MainHeading";
import about_8_1 from "../../../assets/img/normal/about_8_1.jpg";
import about_8_2 from "../../../assets/img/normal/about_8_2.jpg";
import MobileWhyChooseUs from "./MobileComponents/MobileWhyChooseUs";
import MobileAbout1 from "./MobileComponents/MobileAbout/MobileAbout1";
const aboutContent = {
  title: "Built for the next generation of small business",
  description:
    "Incorporate visually appealing elements such as high-quality images, videos, or graphics that resonate with the target audience and complement the overall design of the page. Ensure that the landing page is optimized for various devices.",
  checklist: [
    ["Easy Customize", "Free updates"],
    ["Fully Responsive", "Ultimate support"],
  ],
  buttonText: "Get Started For Free 14 Days",
  buttonLink: "/contactUs",
  images: [about_8_1, about_8_2],
};
const TourismApplicationPage = () => {
  return (
    <div>
      <MainHeading
        title="Tourism Application"
        subtitle="Tourism Application"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Solution" }]}
        marginBottom="-50px"
      />
      <MobileAbout1 aboutContent={aboutContent} />
      <MobileWhyChooseUs />
      <ChooseUS />
    </div>
  );
};

export default TourismApplicationPage;
