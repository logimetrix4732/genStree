import React from "react";
import MainHeading from "../../MainHeading";
import ServiceAboutUs from "../ServicesResueCom/ServiceAboutUs";
import ServiceWhatWeDo from "../ServicesResueCom/ServiceWhatWeDo";
import ServiceLanguage from "../ServicesResueCom/ServiceLanguage";
import service_6_1 from "../../../assets/img/icon/service_6_1.svg";
import service_6_2 from "../../../assets/img/icon/service_6_2.svg";
import service_6_3 from "../../../assets/img/icon/service_6_3.svg";
import service_6_4 from "../../../assets/img/icon/service_6_4.svg";
import Ourworkthatinspired from "../ServicesResueCom/Ourworkthatinspired";
import service_featured_1 from "../../../assets/img/icon/service_featured_1.svg";
import service_featured_2 from "../../../assets/img/icon/service_featured_2.svg";
import service_featured_3 from "../../../assets/img/icon/service_featured_3.svg";
import service_featured_4 from "../../../assets/img/icon/service_featured_4.svg";
import OurApplicationDevelopment from "../ServicesResueCom/OurApplicationDevelopment";
import OurDevelopmentMethodology from "../ServicesResueCom/OurDevelopmentMethodology";
import node from "../../../Imges/language/node.png";
import react from "../../../Imges/language/react.png";
import Angular from "../../../Imges/language/Angular.png";
import android1 from "../../../Imges/language/android1.png";
import php3 from "../../../Imges/language/php3.png";
import Flutter from "../../../Imges/language/Flutter.png";
import Python from "../../../Imges/language/Python.png";
import java from "../../../Imges/language/java.png";
import process_box_3_1 from "../../../assets/img/icon/process_box_3_1.svg";
import process_box_3_2 from "../../../assets/img/icon/process_box_3_2.svg";
import process_box_3_3 from "../../../assets/img/icon/process_box_3_3.svg";
import about_14_1 from "../../../assets/img/normal/about_14_1.jpg";
import about_14_2 from "../../../assets/img/normal/about_14_2.jpg";
import cloudmigration from "../../../Imges/cloudmigration1.jpg";
const CloudMigration = () => {
  const aboutFeatures = {
    title: "Cloud Migration Services",
    heading: "Enhance Efficiency with GenStree Cloud Migration",
    aboutus:
      "We specialize in seamless cloud transitions, optimizing infrastructure for better scalability, security, and cost efficiency. Our solutions integrate effortlessly with existing systems, ensuring enhanced reliability and performance.",
    img: [cloudmigration, about_14_2],
    asd: [
      {
        title: "Free Consultation",
        text: "Get expert insights to plan a smooth cloud migration.",
      },
      {
        title: "Dedicated Team",
        text: "Our skilled professionals ensure a hassle-free transition.",
      },
    ],
  };
  const services = [
    {
      img: service_featured_1,
      title: "Assessment and Design",
      description:
        "We collaborate to classify applications, design infrastructure, and craft a migration plan with security, scalability, and integration .",
      link: "/contactUs",
    },
    {
      img: service_featured_2,
      title: "Implementation",
      description:
        "Our migration strategy ensures seamless transitions with no business disruption, leveraging DevOps best practices for reliability and efficiency.",
      link: "/contactUs",
    },
    {
      img: service_featured_3,
      title: "Optimisation",
      description:
        "We refine cloud adoption by optimizing costs, scaling critical applications, and containerizing workloads for enhanced performance and flexibility.",
      link: "/contactUs",
    },
    {
      img: service_featured_4,
      title: "Support",
      description:
        "Post-migration, we offer centralized monitoring, resource management, and ongoing maintenance to ensure system stability and efficiency.",
      link: "/contactUs",
    },
  ];
  const processData = {
    title: "Why Cloud Migration?",
    subtitle: "Enhance Your Business with Cloud Technology",
    description:
      "Move to the cloud for better agility, scalability, security, and cost optimization. Stay ahead in the competitive market with a robust cloud strategy.",
    buttonText: "Learn More",
    buttonLink: "/contactUs",
    steps: [
      {
        id: 1,
        img: process_box_3_1,
        title: "Operational Agility",
        desc: "Respond faster to market changes with elastic cloud infrastructure that adapts to your business needs.",
        link: "/contactUs",
      },
      {
        id: 2,
        img: process_box_3_2,
        title: "Seamless Scalability",
        desc: "Auto-scale resources based on real-time demand, ensuring optimal performance and efficiency.",
        link: "/contactUs",
      },
      {
        id: 3,
        img: process_box_3_3,
        title: "Enterprise Security",
        desc: "Bank-grade security with continuous monitoring to protect your data and business operations.",
        link: "/contactUs",
      },
    ],
  };
  return (
    <div>
      <MainHeading
        title="Cloud Migration Services"
        subtitle="Cloud Migration Services"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Services" }]}
      />
      <ServiceAboutUs aboutFeatures={aboutFeatures} hideVideo={true} />
      <ServiceWhatWeDo services={services} />
      <OurDevelopmentMethodology processData={processData} />
    </div>
  );
};

export default CloudMigration;
