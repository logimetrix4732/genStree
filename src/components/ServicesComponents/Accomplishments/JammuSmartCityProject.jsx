import React from "react";
import MainHeading from "../../MainHeading";
import about_8_1 from "../../../assets/img/normal/about_8_1.jpg";
import about_8_2 from "../../../assets/img/normal/about_8_2.jpg";
import MobileAbout from "../../SolutionComponents/MobileApplications/MobileComponents/MobileAbout/MobileAbout";
import MobileWhyChooseUs from "../../SolutionComponents/MobileApplications/MobileComponents/MobileWhyChooseUs";
import ServiceWhatWeDo2 from "../ServicesResueCom/ServiceWhatWeDo2";
import service_7_1 from "../../../assets/img/icon/service_7_1.svg";
import service_7_2 from "../../../assets/img/icon/service_7_2.svg";
import service_7_3 from "../../../assets/img/icon/service_7_3.svg";
import counter_card_4_1 from "../../../assets/img/icon/counter_card_4_1.svg";
import counter_card_4_2 from "../../../assets/img/icon/counter_card_4_2.svg";
import counter_card_4_3 from "../../../assets/img/icon/counter_card_4_3.svg";
import ServiceThreeCard from "../ServicesResueCom/ServiceThreeCard";
import jammuimg from "../../../Imges/jammuimg.png";
import jammu1 from "../../../Imges/jammu1.jpg";
import jammu from "../../../Imges/jammu.jpg";
const aboutContent = {
  title: "Jammu Smart City Project – In Collaboration with Baxy",
  description:
    "An AI-powered smart city platform integrating key departments like Municipal Corporation, Police, Transport, Water, Fire, and e-Governance to enhance urban efficiency and security. Implemented AI-driven analytics, cloud-native architecture, and real-time data processing for scalability.",
  checklist: [
    ["AI-Powered Analytics", "Cloud-Native Architecture"],
    ["Real-Time Data Processing", "Cross-Functional Agile Team"],
  ],
  buttonText: "Learn More",
  buttonLink: "/contactUs",
  images: [jammu1, jammu],
};
const services = [
  {
    img: service_7_1,
    title: "System Integration & Data Center Solutions",
    desc: "Comprehensive data center survey, design, installation, and deployment of advanced infrastructure.",
    link: "/contactUs",
  },
  {
    img: service_7_2,
    title: "Emergency & Disaster Management Hub",
    desc: "GIS-based real-time incident visualization, AI-driven automation, and multi-source data aggregation.",
    link: "/contactUs",
  },
  {
    img: service_7_3,
    title: "Cybersecurity & Data Protection",
    desc: "Industrial-grade cybersecurity, data archiving, proactive threat detection, and security monitoring.",
    link: "/contactUs",
  },
  {
    img: service_7_1,
    title: "Smart City Analytics & Decision-Making",
    desc: "AI-powered dashboards, real-time data correlation, and seamless collaboration for urban resilience.",
    link: "/contactUs",
  },
  {
    img: service_7_2,
    title: "Edge Computing & IoT Connectivity",
    desc: "Enables real-time data processing at the edge, reducing latency and enhancing system efficiency for smart infrastructure.",
    link: "/contactUs",
  },
  {
    img: service_7_3,
    title: "Automated Workflow & Predictive Maintenance",
    desc: "AI-driven automation streamlines operations, while predictive analytics minimize downtime and optimize resource utilization.",
    link: "/contactUs",
  },
];
const cardData = [
  {
    icon: counter_card_4_1,
    number: "300%",
    title: "Boost in Operational Efficiency",
    description:
      "Automation and real-time insights lead to a threefold increase in efficiency.",
  },
  {
    icon: counter_card_4_2,
    number: "99.9%",
    title: "Uptime Reliability",
    description:
      "Ensuring high availability with advanced monitoring and failover mechanisms.",
  },
  {
    icon: counter_card_4_3,
    number: "50%",
    title: "Reduction in Manual Effort",
    description:
      "Streamlined workflows and automated tasks minimize manual intervention.",
  },
];

const JammuSmartCityPage = () => {
  return (
    <div>
      <MainHeading
        title="Jammu Smart City Project"
        subtitle="In Collaboration with Baxy"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Projects" }]}
        marginBottom="50px"
      />
      <MobileAbout aboutContent={aboutContent} />
      <ServiceWhatWeDo2 services={services} sectionTitle="Core Capabilities" />
      <MobileWhyChooseUs />
      <ServiceThreeCard cardData={cardData} space={true} />
    </div>
  );
};

export default JammuSmartCityPage;
