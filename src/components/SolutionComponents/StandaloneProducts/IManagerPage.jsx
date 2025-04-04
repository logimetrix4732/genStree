import React from "react";
import MainHeading from "../../MainHeading";
import KeyFeatures from "./SolutionReuseCom/KeyFeatures";
import about_11_1 from "../../../assets/img/normal/about_11_1.jpg";
import about_11_2 from "../../../assets/img/normal/about_11_2.jpg";
import SolAbout1 from "./SolutionReuseCom/SolutionAbout/SolAbout1";
import about_11_3 from "../../../assets/img/normal/about_11_3.jpg";
import process_img_1 from "../../../assets/img/normal/process_img_1.jpg";
import process_img_2 from "../../../assets/img/normal/process_img_2.jpg";
import process_img_3 from "../../../assets/img/normal/process_img_3.jpg";
import process_img_4 from "../../../assets/img/normal/process_img_4.jpg";
import OurExpertise1 from "./SolutionReuseCom/OurExpertises/OurExpertise1";
import title_shape_2 from "../../../assets/img/theme-img/title_shape_2.svg";
import AuditTrailsIcon from "../../../Imges/QblockIcon/AuditTrailsIcon.jpg";
import TalkToAbout from "./SolutionReuseCom/TalkToAboutAnyQuestion/TalkToAbout";
import AccessControlIcon from "../../../Imges/QblockIcon/AccessControlIcon.jpg";
import VersionControlIcon from "../../../Imges/QblockIcon/VersionControlIcon.jpg";
import DocumentsStorageIcon from "../../../Imges/QblockIcon/DocumentsStorageIcon.jpg";
import DocumentsRetrievalIcon from "../../../Imges/QblockIcon/DocumentsRetrievalIcon.jpg";
import WorkflowAutomationIcon from "../../../Imges/QblockIcon/WorkflowAutomationIcon.jpg";
import visiondesk5 from "../../../Imges/visiondesk5.png";
import visiondesk6 from "../../../Imges/visiondesk6.png";
const processSteps = [
  {
    id: 1,
    title: "Automated Business Intelligence",
    step: "STEP-01",
    description:
      "Developing an automated Business Intelligence tool for real-time reporting and monitoring, replacing manual transaction recording to reduce delays and errors.",
    image: process_img_1,
    img: process_img_1,
    checklist: [
      "Real-time data filtering",
      "Automated transaction recording",
      "Error-free monitoring",
    ],
  },
  {
    id: 2,
    title: "Supply Chain Optimization",
    step: "STEP-02",
    description:
      "Enhancing supply chain processes for industries like Cement, Fertilizer, and Cold Storage Chains, ensuring efficiency, transparency, and minimized operational costs.",
    image: process_img_2,
    img: process_img_2,
    checklist: [
      "Optimized resource allocation",
      "Improved logistics tracking",
      "Cost-effective supply chain solutions",
    ],
  },
  {
    id: 3,
    title: "IoT-Enabled Milk Collection",
    step: "STEP-03",
    description:
      "Implementing Automatic Milk Collection Units to reduce adulteration and pilferage, ensuring direct farmer-to-factory transactions with minimal human interference.",
    image: process_img_3,
    img: process_img_3,
    checklist: [
      "Adulteration-free milk collection",
      "Automated quality testing",
      "Transparent farmer-factory transactions",
    ],
  },
  {
    id: 4,
    title: "Smart IoT Integration",
    step: "STEP-04",
    description:
      "Leveraging IoT for device connectivity, enabling data-driven insights, automation, and operational efficiency across multiple industries.",
    image: process_img_4,
    img: process_img_4,
    checklist: [
      "Seamless IoT device integration",
      "Data-driven decision-making",
      "Automation & predictive insights",
    ],
  },
];

const processStepsArray = [
  "Automated Business Intelligence",
  "Supply Chain Optimization",
  "IoT-Enabled Milk Collection",
  "Smart IoT Integration",
];

const testimonials = [
  {
    text: "Optimize supply chains with real-time tracking, automation, and data-driven insights, reducing costs, improving logistics, and enhancing productivity while minimizing delays and errors across industries for seamless operations.",
    img: DocumentsStorageIcon,
    name: "Supply Chain Management",
    designation: "",
  },
  {
    text: "Automate business intelligence with smart analytics tools, reducing errors, eliminating delays, and streamlining transaction processes effectively to enhance operational efficiency, improve decision-making, and drive business growth effortlessly.",
    img: VersionControlIcon,
    name: "Automated Business Intelligence",
    designation: "",
  },
  {
    text: "Ensure high-quality milk collection with IoT-enabled systems that minimize adulteration, enhance transparency, and automate testing, allowing farmers to connect with factories for cost-effective and efficient dairy supply chain management.",
    img: AccessControlIcon,
    name: "IoT-Enabled Milk Collection",
    designation: "",
  },
  {
    text: "Leverage IoT to connect smart devices, enabling real-time data exchange, automation, predictive analytics, and seamless connectivity to improve efficiency, enhance decision-making, and drive smarter business processes across industries.",
    img: DocumentsRetrievalIcon,
    name: "Smart IoT Integration",
    designation: "",
  },
  {
    text: "Improve business operations with real-time data insights, automation, and advanced tracking solutions, ensuring accurate decision-making, transparency, and smooth workflow management for optimized resource utilization and operational excellence.",
    img: WorkflowAutomationIcon,
    name: "Real-Time Data Optimization",
    designation: "",
  },
];

const aboutData1 = {
  title: "Smart Solutions",
  subtitle: "Smart Tracking & Management Systems",
  description:
    "We provide cutting-edge solutions for supply chain optimization, IoT-driven automation, and real-time business intelligence, helping industries improve efficiency, accuracy, and transparency in operations.",
  features: [
    "Automated reporting and analytics for real-time monitoring.",
    "IoT-driven solutions for quality assurance and data accuracy.",
    "Smart tracking and monitoring for optimized supply chain processes.",
  ],
  images: [about_11_1, about_11_2, about_11_3],
  titleShape: title_shape_2,
  experienceYears: 12,
  experienceText: "Years of experience in enterprise solutions",
  videoLink: "https://www.youtube.com/@logimetrixtechsolutions4572",
};

const TalkToAboutAnyQuestion = {
  img: visiondesk5,
  img1: visiondesk6,
  questionAns: [
    {
      id: 1,
      question:
        "How does the supply chain management system improve efficiency?",
      answer:
        "Our system automates transaction recording, optimizes logistics tracking, and provides real-time insights to enhance supply chain operations.",
    },
    {
      id: 2,
      question: "How does IoT improve milk collection quality?",
      answer:
        "IoT-enabled milk collection units reduce adulteration, ensure automated quality testing, and establish transparent farmer-to-factory transactions.",
    },
    {
      id: 3,
      question: "What industries can benefit from this solution?",
      answer:
        "Industries such as Cement, Fertilizer, Cold Storage, and Agriculture can leverage these tools for better operational management and efficiency.",
    },
    {
      id: 4,
      question: "How does the business intelligence tool help organizations?",
      answer:
        "The tool automates data collection, generates real-time reports, and minimizes errors, leading to accurate decision-making and improved business operations.",
    },
  ],
};

const IManagerPage = () => {
  return (
    <div>
      <MainHeading
        title="IManager"
        subtitle="IManager"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Solution" }]}
      />
      <SolAbout1 aboutData={aboutData1} />
      <KeyFeatures testimonials={testimonials} />
      <OurExpertise1
        processSteps={processSteps}
        processStepsArray={processStepsArray}
      />
      <TalkToAbout TalkToAboutAnyQuestion={TalkToAboutAnyQuestion} />
    </div>
  );
};

export default IManagerPage;
