import React from "react";
import MainHeading from "../../MainHeading";
import about_2_1 from "../../../assets/img/normal/about_2_1.jpg";
import about_2_2 from "../../../assets/img/normal/about_2_2.jpg";
import about_2_3 from "../../../assets/img/normal/about_2_3.jpg";
import about_2_shape from "../../../assets/img/normal/about_2_shape.png";
import RecycleBinIcon from "../../../Imges/QblockIcon/RecycleBinIcon.jpg";
import AutoBackupIcon from "../../../Imges/QblockIcon/AutoBackupIcon.jpg";
import title_shape_2 from "../../../assets/img/theme-img/title_shape_2.svg";
import AuditTrailsIcon from "../../../Imges/QblockIcon/AuditTrailsIcon.jpg";
import KeyFeatures from "../StandaloneProducts/SolutionReuseCom/KeyFeatures";
import AccessControlIcon from "../../../Imges/QblockIcon/AccessControlIcon.jpg";
import VersionControlIcon from "../../../Imges/QblockIcon/VersionControlIcon.jpg";
import SolAbout from "../StandaloneProducts/SolutionReuseCom/SolutionAbout/SolAbout";
import DocumentsStorageIcon from "../../../Imges/QblockIcon/DocumentsStorageIcon.jpg";
import DocumentsRetrievalIcon from "../../../Imges/QblockIcon/DocumentsRetrievalIcon.jpg";
import WorkflowAutomationIcon from "../../../Imges/QblockIcon/WorkflowAutomationIcon.jpg";
import CollaborationToolsIcon from "../../../Imges/QblockIcon/CollaborationToolsIcon.jpg";
import OurExpertise from "../StandaloneProducts/SolutionReuseCom/OurExpertises/OurExpertise";
import UserGuestDeactivationIcon from "../../../Imges/QblockIcon/UserGuestDeactivationIcon.jpg";
import StorageQuotaManagementIcon from "../../../Imges/QblockIcon/StorageQuotaManagementIcon.jpg";
import TalkToAbout2 from "../StandaloneProducts/SolutionReuseCom/TalkToAboutAnyQuestion/TalkToAbout2";
import "swiper/css";
import "swiper/css/pagination";
import talkabout from "../../../Imges/akshar1.png";

const testimonials = [
  {
    text: "GenStree Photon provides real-time visibility and control over solar energy assets, enabling efficient management of the 30 MW Solar portfolio. The solution helps to monitor and improve performance, ensuring optimized energy production.”",
    img: DocumentsStorageIcon,
    name: "Solar Energy Monitoring",
    designation: "",
  },
  {
    text: "“By leveraging IoT and Cyber-Physical Systems, Photon enables scalable and robust solutions for energy management, helping companies streamline operations, reduce costs, and scale their solar divisions quickly.”",
    img: VersionControlIcon,
    name: "Energy Management",
    designation: "",
  },
  {
    text: "“Photon's interactive dashboards and big data analytics provide powerful business intelligence, empowering companies to make data-driven decisions and optimize their solar energy management strategies for enhanced efficiency.”",
    img: AccessControlIcon,
    name: "Data Analytics & Insights",
    designation: "",
  },
  {
    text: "“With real-time monitoring, Photon enables enterprises to optimize their energy resources, automate workflows, and ensure seamless coordination across the entire energy management system, driving sustainability and cost efficiency.”",
    img: DocumentsRetrievalIcon,
    name: "Workflow Automation",
    designation: "",
  },
  {
    text: "“Photon’s solution empowers organizations with AI-based reports and predictive analytics, allowing for proactive management of energy assets and improved performance across the entire solar energy portfolio.”",
    img: WorkflowAutomationIcon,
    name: "AI-Based Reporting",
    designation: "",
  },
  {
    text: "“Photon provides end-to-end energy management, offering transparent tracking, automated reporting, and real-time data visualization, which is crucial for large-scale solar power developers and energy managers in the telecom sector.”",
    img: CollaborationToolsIcon,
    name: "End-to-End Energy Management",
    designation: "",
  },
  {
    text: "“By integrating IoT with cloud and mobile platforms, Photon ensures seamless visibility and control over solar energy systems, enabling businesses to stay ahead of the competition in the rapidly evolving solar energy market.”",
    img: AuditTrailsIcon,
    name: "Cloud & Mobile Integration",
    designation: "",
  },
  {
    text: "“Photon’s ability to track and optimize solar energy performance in real-time has led to improved operational efficiency and reduced energy waste, driving sustainability across the renewable energy sector.”",
    img: StorageQuotaManagementIcon,
    name: "Real-Time Monitoring",
    designation: "",
  },
  {
    text: "“With the Photon solution, enterprises can streamline their solar energy management, allowing for seamless integration, cost reductions, and improved scalability, crucial for fast-growing companies in the solar energy industry.”",
    img: UserGuestDeactivationIcon,
    name: "Scalable Solutions",
    designation: "",
  },
  {
    text: "“Photon's ability to combine data from multiple sources ensures a comprehensive view of solar energy performance, making it easier to monitor, manage, and optimize energy resources across different sites and locations.”",
    img: AutoBackupIcon,
    name: "Comprehensive Energy Insights",
    designation: "",
  },
  {
    text: "“With Photon, energy managers have full control over their solar assets with automated backups, detailed analytics, and real-time alerts, ensuring optimized performance and minimizing downtime across the solar energy network.”",
    img: RecycleBinIcon,
    name: "Automated Alerts & Backups",
    designation: "",
  },
];

const ExpertiseArray = {
  heading: "GenStree Photon",
  para: "GenStree Photon is an IoT-based solution designed for real-time monitoring, data analytics, and performance optimization in the solar energy sector. Using advanced AI and machine learning algorithms, it helps businesses make informed decisions, reduce costs, and drive sustainability in energy management.",
  keyPoints: [
    { name: "Real-time Monitoring & Control", per: "98%" },
    { name: "Predictive Analytics for Energy Optimization", per: "95%" },
    { name: "Seamless Cloud & Mobile Integration", per: "99%" },
    { name: "AI-Based Reporting & Insights", per: "96%" },
    { name: "Scalable & Robust Solutions", per: "94%" },
  ],
};

const TalkToAbout2Array = {
  img: talkabout,
  TalkToAboutArray: [
    {
      id: 1,
      question: "How does GenStree Photon optimize solar energy management?",
      answer:
        "GenStree Photon provides real-time visibility, predictive analytics, and automated workflows to monitor and optimize solar energy production, improving efficiency and performance.",
    },
    {
      id: 2,
      question:
        "What makes Photon a scalable solution for solar energy management?",
      answer:
        "Photon is designed to scale easily, allowing businesses to manage solar energy assets across multiple locations with seamless integration, real-time data visualization, and automated reporting.",
    },
    {
      id: 3,
      question: "Can Photon help reduce costs in solar energy management?",
      answer:
        "Yes, by providing actionable insights, predictive maintenance, and real-time monitoring, Photon helps reduce energy waste, optimize performance, and lower operational costs.",
    },
    {
      id: 4,
      question:
        "How does GenStree Photon integrate with cloud and mobile platforms?",
      answer:
        "Photon uses cloud and mobile technology to ensure remote access, real-time monitoring, and centralized data management, allowing businesses to control and optimize their solar energy systems from anywhere.",
    },
  ],
};

const aboutData = {
  title: "Photon",
  subtitle: "Empowering Solar Energy Management with IoT & AI",
  description:
    "GenStree Photon is an advanced IoT and AI-powered solution that provides real-time monitoring, predictive analytics, and performance optimization for solar energy assets. With cloud and mobile integration, it empowers energy managers to make data-driven decisions and reduce costs across large-scale solar projects.",
  features: [
    "Real-time monitoring of solar energy assets with predictive analytics.",
    "AI-based reporting for performance optimization and cost reduction.",
    "Seamless integration with cloud and mobile platforms for remote management.",
  ],
  images: [about_2_1, about_2_2, about_2_3],
  shapeImage: about_2_shape,
  titleShape: title_shape_2,
};

const PhotonPage = () => {
  return (
    <div>
      <MainHeading
        title="Photon"
        subtitle="Photon"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Solution" }]}
      />
      <SolAbout aboutData={aboutData} />
      <OurExpertise ExpertiseArray={ExpertiseArray} />
      <KeyFeatures testimonials={testimonials} />
      <TalkToAbout2 TalkToAbout2Array={TalkToAbout2Array} />
    </div>
  );
};

export default PhotonPage;
