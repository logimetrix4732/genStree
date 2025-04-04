import React from "react";
import ServiceAboutUs1 from "../ServicesResueCom/ServiceAboutUs1";
import MainHeading from "../../MainHeading";
import ServiceWhatWeDo1 from "../ServicesResueCom/ServiceWhatWeDo1";
import SuccessStories from "../ServicesResueCom/SuccessStories";
import ConnectTeam from "../../ConnectTeam";
import about_17_1 from "../../../assets/img/normal/about_17_1.png";
import about_17_2 from "../../../assets/img/normal/about_17_2.png";
import process_2_1 from "../../../assets/img/icon/process_2_1.svg";
import process_2_2 from "../../../assets/img/icon/process_2_2.svg";
import process_2_3 from "../../../assets/img/icon/process_2_3.svg";
import process_2_4 from "../../../assets/img/icon/process_2_4.svg";
import processshape from "../../../assets/img/bg/process-shape.png";
import POC from "../../../Imges/POC.png";
import POC1 from "../../../Imges/POC1.png";
import POC2 from "../../../Imges/POC2.png";
import POC3 from "../../../Imges/POC3.png";
import POC4 from "../../../Imges/POC4.png";
import POC5 from "../../../Imges/POC6.png";
const POCDevelopment = () => {
  const blogData = {
    title: "Recent POC Success",
    subtitle: "Success & Stories",
    shadowTitle: "Success",
    posts: [
      {
        img: POC,
        date: "15 Jan, 2024",
        comments: 2,
        title: "AI-Powered Supply Chain Optimization",
        link: "/contactUs",
        desc: "35% reduction in operational costs by predictive analytics and automation.",
      },
      {
        img: POC1,
        date: "16 Jan, 2024",
        comments: 3,
        title: "Blockchain-Based Digital Identity System",
        link: "/contactUs",
        desc: "Zero fraud incidents ensuring secure and verifiable identities.",
      },
      {
        img: POC2,
        date: "17 Jan, 2024",
        comments: 2,
        title: "IoT-Enabled Smart Warehouse Management",
        link: "/contactUs",
        desc: "25% improvement in inventory accuracy with real-time tracking.",
      },
      {
        img: POC3,
        date: "19 Jan, 2024",
        comments: 4,
        title: "NLP-Based Customer Support Automation",
        link: "/contactUs",
        desc: "50% reduction in response time using AI-powered chatbots.",
      },
      {
        img: POC4,
        date: "19 Jan, 2024",
        comments: 4,
        title: "Edge Computing for Real-Time Data Processing",
        link: "/contactUs",
        desc: "Achieved ultra-low latency for industrial automation applications.",
      },
    ],
  };
  const aboutData = {
    title: "Proof of Concept Development",
    subtitle: "What you get with LOGIMETRIX’ PoC development services",
    tags: ["WEBSITE", "BRANDING", "INTERFACE", "ANIMATION"],
    description:
      "LOGIMETRIX' PoC (Proof of Concept) development services are backed up by over 12 + years of industry experience and a track record of more than 1000 successfully delivered projects. We help you predict the success of your software project before making substantial investments. We will help you rigorously test your ideas so you can avoid the risk of premature investment in unproven concepts. Our team of multiskilled R&D experts can also assist you in refining your ideas and processes, giving you the best chance of success. With our PoC services you can test complex ideas, and cloud consulting, including those involving emerging technologies like generative AI, with minimal financial risk. Our team provides you with predictions and post-PoC development analysis to identify the best-fit solution. Additionally, our software experts will assist you in developing a roadmap that maximises the efficiency of the full-scale project and will help deliver your solution.",
    stats: [
      {
        number: "4-8",
        unit: "+",
        title: "Week Delivery",
        desc: "Rapid execution with quality intact.",
      },
      {
        number: "150",
        unit: "+",
        title: "Successful PoCs",
        desc: "Proven track record in emerging technologies, driving innovation and excellence.",
      },
    ],
    client: {
      title: "Cross-Functional Teams",
      subtitle: "Combining technical and business expertise",
      stars: 4.5,
    },
    images: {
      main: POC5,
      client: about_17_2,
    },
  };
  const stepsData = {
    title: "Our 4-Phase PoC Development Process",
    subtitle: "Work Process",
    shapeBg: processshape,
    steps: [
      {
        icon: process_2_1,
        heading: "Concept Validation",
        description:
          "Transform your idea into a viable, scalable, innovative, efficient, and sustainable technical concept.",
      },
      {
        icon: process_2_2,
        heading: "Feasibility Analysis",
        description:
          "Comprehensive technical and financial viability assessment for sustainable project development.",
      },
      {
        icon: process_2_3,
        heading: "Prototype Development",
        description:
          "Build a working prototype with core functionalities for scalability, efficiency, usability, and seamless integration.",
      },
      {
        icon: process_2_4,
        heading: "Stakeholder Demo",
        description:
          "Demonstrate a compelling value proposition to key decision makers for adoption and investment.",
      },
    ],
  };
  return (
    <div>
      <MainHeading
        title="POC Development"
        subtitle="POC Development"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Services" }]}
      />
      <ServiceAboutUs1 aboutData={aboutData} />
      <ServiceWhatWeDo1 stepsData={stepsData} />
      <SuccessStories data={blogData} />
      {/* <ConnectTeam />*/}
    </div>
  );
};

export default POCDevelopment;
