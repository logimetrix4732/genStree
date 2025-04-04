import React from "react";

import MainHeading from "../../MainHeading";
import KeyFeatures from "./SolutionReuseCom/KeyFeatures";
import about_2_1 from "../../../assets/img/normal/about_2_1.jpg";
import about_2_2 from "../../../assets/img/normal/about_2_2.jpg";
import about_2_3 from "../../../assets/img/normal/about_2_3.jpg";
import SolAbout from "./SolutionReuseCom/SolutionAbout/SolAbout";
import process_img_1 from "../../../assets/img/normal/process_img_1.jpg";
import process_img_2 from "../../../assets/img/normal/process_img_2.jpg";
import process_img_3 from "../../../assets/img/normal/process_img_3.jpg";
import process_img_4 from "../../../assets/img/normal/process_img_4.jpg";
import about_2_shape from "../../../assets/img/normal/about_2_shape.png";
import OurExpertise1 from "./SolutionReuseCom/OurExpertises/OurExpertise1";
import title_shape_2 from "../../../assets/img/theme-img/title_shape_2.svg";
import TalkToAbout2 from "./SolutionReuseCom/TalkToAboutAnyQuestion/TalkToAbout2";
import DocumentsStorageIcon from "../../../Imges/QblockIcon/DocumentsStorageIcon.jpg";
import DocumentsRetrievalIcon from "../../../Imges/QblockIcon/DocumentsRetrievalIcon.jpg";
import WorkflowAutomationIcon from "../../../Imges/QblockIcon/WorkflowAutomationIcon.jpg";
import CollaborationToolsIcon from "../../../Imges/QblockIcon/CollaborationToolsIcon.jpg";
import UserGuestDeactivationIcon from "../../../Imges/QblockIcon/UserGuestDeactivationIcon.jpg";
import "swiper/css";
import "swiper/css/pagination";
import talkabout from "../../../Imges/akshar1.png";

const testimonials = [
  {
    text: "“Track workforce performance in real-time, optimize daily tasks, improve communication, and ensure better field operations with precise data insights, helping businesses boost productivity and manage teams effectively.”",
    img: DocumentsStorageIcon,
    name: "TrakMob",
    designation: "",
  },
  {
    text: "“Simplify school operations with a powerful ERP system that enhances administrative efficiency, automates routine tasks, tracks student performance, and provides seamless communication between teachers, parents, and students.”",
    img: DocumentsRetrievalIcon,
    name: "Eklavya",
    designation: "",
  },
  {
    text: "“Prevent fuel leaks, unauthorized usage, and monitor consumption with real-time tracking. Ensure complete transparency, optimize fuel expenses, detect anomalies early, and reduce wastage with an automated fuel management system.”",
    img: WorkflowAutomationIcon,
    name: "TrakFuel",
    designation: "",
  },
  {
    text: "“Gain deep insights into student learning, track academic progress, and analyze performance trends with data-driven analytics, fostering a competitive learning environment that encourages growth and skill development.”",
    img: CollaborationToolsIcon,
    name: "Absolute Study",
    designation: "",
  },
  {
    text: "“Optimize logistics operations, monitor supply chain activities, prevent resource mismanagement, and automate tracking to ensure real-time visibility, better planning, reduced delays, and improved efficiency in business workflows.”",
    img: UserGuestDeactivationIcon,
    name: "Trak",
    designation: "",
  },
];

const processSteps = [
  {
    id: 1,
    title: "Real-time Workforce Tracking",
    step: "STEP-01",
    description:
      "Track workforce performance in real-time, optimize task assignments, enhance communication between field staff and managers, and boost productivity with accurate data insights.",
    image: process_img_1,
    img: process_img_1,
    checklist: [
      "Real-time Performance Monitoring",
      "Task Optimization",
      "Enhanced Communication",
    ],
  },
  {
    id: 2,
    title: "Automated School Management",
    step: "STEP-02",
    description:
      "Simplify school operations with an ERP system that automates routine tasks, tracks student performance, and ensures seamless communication between teachers, parents, and students.",
    image: process_img_2,
    img: process_img_2,
    checklist: [
      "Automated Administrative Tasks",
      "Student Performance Tracking",
      "Seamless Communication",
    ],
  },
  {
    id: 3,
    title: "Fuel Monitoring & Cost Savings",
    step: "STEP-03",
    description:
      "Monitor fuel consumption in real-time, prevent unauthorized usage, ensure transparency, and optimize fuel expenses while detecting anomalies early to reduce wastage.",
    image: process_img_3,
    img: process_img_3,
    checklist: [
      "Real-time Fuel Tracking",
      "Unauthorized Usage Prevention",
      "Cost Optimization",
    ],
  },
  {
    id: 4,
    title: "Advanced Learning & Student Insights",
    step: "STEP-04",
    description:
      "Gain deep insights into student learning, analyze performance trends, and foster a competitive learning environment that encourages growth and skill development.",
    image: process_img_4,
    img: process_img_4,
    checklist: [
      "Student Performance Insights",
      "Data-driven Analysis",
      "Growth and Skill Development",
    ],
  },
];

const processStepsArray = [
  "Real-time Workforce Tracking",
  "Automated School Management",
  "Fuel Monitoring & Cost Savings",
  "Advanced Learning & Student Insights",
];

const TalkToAbout2Array = {
  img: talkabout,
  TalkToAboutArray: [
    {
      id: 1,
      question: "How does TrakMob improve workforce management?",
      answer:
        "TrakMob allows businesses to track employee activities in real time, optimize task assignments, and enhance communication between field staff and managers.",
    },
    {
      id: 2,
      question: "Can Eklavya streamline school operations effectively?",
      answer:
        "Yes! Eklavya offers an all-in-one ERP system for school administration, making it easier for principals, teachers, and staff to manage daily operations, student data, and reports.",
    },
    {
      id: 3,
      question: "How does TrakFuel help in fuel cost management?",
      answer:
        "TrakFuel provides real-time fuel tracking, preventing unauthorized usage and ensuring transparency in fuel consumption, saving organizations significant costs.",
    },
    {
      id: 4,
      question:
        "Is Absolute Study beneficial for student performance analysis?",
      answer:
        "Absolutely! Absolute Study provides deep insights into student performance, competitive analysis, and interactive learning opportunities for better academic growth.",
    },
    {
      id: 5,
      question: "How does Trak optimize logistics?",
      answer:
        "Trak offers an advanced tracking solution that ensures efficient delivery management, inventory control, and optimized resource utilization for supply chain operations.",
    },
  ],
};

const aboutData = {
  title: "Our Solutions",
  subtitle: "Efficient & Secure Business Management",
  description:
    "Our innovative solutions, including TrakMob, Eklavya, and TrakFuel, offer businesses a seamless way to optimize workforce tracking, education administration, and fuel management.",
  features: [
    "Track workforce performance in real time for better productivity.",
    "Automate school operations with a powerful ERP system.",
    "Monitor and control fuel consumption for cost savings.",
  ],
  images: [about_2_1, about_2_2, about_2_3],
  shapeImage: about_2_shape,
  titleShape: title_shape_2,
};

const TrakFuelPage = () => {
  return (
    <div>
      <MainHeading
        title="TrakFuel"
        subtitle="TrakFuel"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Solution" }]}
      />
      <SolAbout aboutData={aboutData} />
      <KeyFeatures testimonials={testimonials} />
      <OurExpertise1
        processSteps={processSteps}
        processStepsArray={processStepsArray}
      />
      <TalkToAbout2 TalkToAbout2Array={TalkToAbout2Array} />
    </div>
  );
};

export default TrakFuelPage;
