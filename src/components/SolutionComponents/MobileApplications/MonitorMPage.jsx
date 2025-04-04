import React from "react";
import MobileAbout from "./MobileComponents/MobileAbout/MobileAbout";
import MainHeading from "../../MainHeading";
import MobileWhyChooseUs from "./MobileComponents/MobileWhyChooseUs";
import ChooseUS from "../../ChooseUS";
import about_8_1 from "../../../assets/img/normal/about_8_1.jpg";
import about_8_2 from "../../../assets/img/normal/about_8_2.jpg";
import MobileAbout2 from "./MobileComponents/MobileAbout/MobileAbout2";
const aboutContent = {
  title: "Built for the next generation of small business",
  description:
    "Incorporate visually appealing elements such as high-quality images, videos, or graphics that resonate with the target audience and complement the overall design of the page. Ensure that the landing page is optimized for various devices.",
  checklist: [
    ["Easy Customize", "Free updates"],
    ["Fully Responsive", "Ultimate support"],
  ],
  // buttonText: "Get Started For Free 14 Days",
  buttonText: "Explore More",
  buttonLink: "/contactUs",
  // buttonLink: "contact.html",
  images: [about_8_1, about_8_2],
};
const MonitorMPage = () => {
  return (
    <div>
      <MainHeading
        title="MonitorM"
        subtitle="MonitorM"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Solution" }]}
        marginBottom="70px"
      />
      <MobileAbout2 aboutContent={aboutContent} />
      <MobileWhyChooseUs />
      <ChooseUS />
    </div>
  );
};

export default MonitorMPage;
