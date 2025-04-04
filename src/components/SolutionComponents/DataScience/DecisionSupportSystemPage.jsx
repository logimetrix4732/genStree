import React from "react";

import MainHeading from "../../MainHeading";
import about_13_1 from "../../../assets/img/normal/about_13_1.jpg";
import about_13_2 from "../../../assets/img/normal/about_13_2.jpg";
import about_13_3 from "../../../assets/img/normal/about_13_3.jpg";
import process_img_1 from "../../../assets/img/normal/process_img_1.jpg";
import process_img_2 from "../../../assets/img/normal/process_img_2.jpg";
import process_img_3 from "../../../assets/img/normal/process_img_3.jpg";
import process_img_4 from "../../../assets/img/normal/process_img_4.jpg";
import AuditTrailsIcon from "../../../Imges/QblockIcon/AuditTrailsIcon.jpg";
import KeyFeatures from "../StandaloneProducts/SolutionReuseCom/KeyFeatures";
import AccessControlIcon from "../../../Imges/QblockIcon/AccessControlIcon.jpg";
import VersionControlIcon from "../../../Imges/QblockIcon/VersionControlIcon.jpg";
import DocumentsStorageIcon from "../../../Imges/QblockIcon/DocumentsStorageIcon.jpg";
import SolAbout4 from "../StandaloneProducts/SolutionReuseCom/SolutionAbout/SolAbout4";
import DocumentsRetrievalIcon from "../../../Imges/QblockIcon/DocumentsRetrievalIcon.jpg";
import WorkflowAutomationIcon from "../../../Imges/QblockIcon/WorkflowAutomationIcon.jpg";
import OurExpertise1 from "../StandaloneProducts/SolutionReuseCom/OurExpertises/OurExpertise1";
import TalkToAbout1 from "../StandaloneProducts/SolutionReuseCom/TalkToAboutAnyQuestion/TalkToAbout1";
import faq_5_1 from "../../../Imges/sai1.png";
import faq_5_2 from "../../../Imges/faq_5_2.jpg";
import faq_5_3 from "../../../Imges/faq_5_3.jpg";
import "swiper/css";
import "swiper/css/pagination";
const testimonials = [
  {
    text: "“DSS optimizes crop procurement by helping buyers choose the best time to purchase, the optimal quantity, and the best price, while ensuring they stay within the planned budget for highly efficient procurement.”",
    img: DocumentsStorageIcon,
    name: "Procurement Optimization",
    designation: "",
  },
  {
    text: "“DSS analyzes economic factors, providing monthly procurement models and purchase charts, making it easier for buyers to make informed decisions and optimize their strategies for highly cost-effective crop procurement.”",
    img: VersionControlIcon,
    name: "Monthly Procurement Model",
    designation: "",
  },
  {
    text: "“DSS ensures buyers know the best time to buy crops, the right quantity, and the most economical price, helping them stay within budget and plan procurement with greater efficiency and better accuracy.”",
    img: AccessControlIcon,
    name: "Economical Procurement",
    designation: "",
  },
  {
    text: "“The system simplifies crop procurement by focusing on economic factors, providing a clear model to help buyers make decisions based on the most cost-effective time and price for their specific needs.”",
    img: DocumentsRetrievalIcon,
    name: "Simplified Buying Procedure",
    designation: "",
  },
  {
    text: "“DSS provides valuable insights into the crop procurement process, analyzing market trends and economic factors, helping buyers ensure they purchase at the most economical price and at the right optimal time.”",
    img: WorkflowAutomationIcon,
    name: "Critical Insights",
    designation: "",
  },
  {
    text: "“The platform generates detailed procurement models and charts, helping buyers assess purchases at both distributed and cumulative levels, ensuring better planning, decision-making, and effective optimization in the procurement process.”",
    img: AuditTrailsIcon,
    name: "Procurement Insights & Charts",
    designation: "",
  },
];
const processSteps = [
  {
    id: 1,
    title: "Procurement Optimization",
    step: "STEP-01",
    description:
      "DSS optimizes crop procurement by helping buyers choose the best time to purchase, the optimal quantity, and the best price, ensuring efficient procurement while staying within budget.",
    image: process_img_1,
    img: process_img_1,
    checklist: ["Procurement Timing", "Optimal Quantity", "Best Price"],
  },
  {
    id: 2,
    title: "Monthly Procurement Model",
    step: "STEP-02",
    description:
      "DSS analyzes economic factors and provides monthly procurement models and purchase charts, allowing buyers to make informed decisions for cost-effective crop procurement.",
    image: process_img_2,
    img: process_img_2,
    checklist: [
      "Economic Analysis",
      "Monthly Purchase Charts",
      "Informed Decisions",
    ],
  },
  {
    id: 3,
    title: "Economical Procurement",
    step: "STEP-03",
    description:
      "DSS ensures buyers know the best time to buy crops, the right quantity, and the most economical price, helping them stay within budget while optimizing procurement.",
    image: process_img_3,
    img: process_img_3,
    checklist: [
      "Optimal Procurement Time",
      "Right Quantity",
      "Economical Price",
    ],
  },
  {
    id: 4,
    title: "Simplified Buying Procedure",
    step: "STEP-04",
    description:
      "The system simplifies crop procurement by focusing on economic factors, providing a clear model to help buyers make decisions based on the most cost-effective time and price.",
    image: process_img_4,
    img: process_img_4,
    checklist: [
      "Economic Focus",
      "Simplified Model",
      "Cost-Effective Decisions",
    ],
  },
];
const processStepsArray = [
  "Procurement Optimization",
  "Monthly Procurement Model",
  "Economical Procurement",
  "Simplified Buying Procedure",
];
const TalkToAbout1Array = {
  img: faq_5_1,
  img1: faq_5_2,
  img2: faq_5_3,
  TalkToAboutArray: [
    {
      question: "How does DSS optimize crop procurement?",
      answer:
        "DSS provides insights into the best time to buy crops, the optimal quantity to procure, and the most cost-effective price, helping buyers make informed decisions and stay within their budget.",
    },
    {
      question: "How does the system help with pricing decisions?",
      answer:
        "DSS analyzes market trends and crop data to recommend the best price for procurement, ensuring that buyers purchase crops at the most economical rates while adhering to budget limits.",
    },
    {
      question: "What is the significance of the procurement model?",
      answer:
        "The procurement model generated by DSS provides a detailed chart of distributed and cumulative purchases, helping buyers track their progress and make better purchasing decisions each month.",
    },
    {
      question: "Can DSS be used for various crops?",
      answer:
        "Yes, DSS is designed to optimize procurement for multiple crops across the nation, focusing on the economical aspects and ensuring that buyers can apply it to their specific crop needs.",
    },
  ],
};
const aboutData4 = [
  {
    id: 1,
    title: "virtual Matrix",
    secTitle: "Crop Procurement Optimization",
    description:
      "Decision Support System optimizes crop procurement by analyzing economic aspects, providing a detailed model of when to buy, how much to buy, and at what price, ensuring buyers get the best deal while staying within budget.",
    checklist: [
      ["Procurement Timing", "Price Optimization"],
      ["Budget Coherence", "Informed Decision Making"],
    ],
    contactLink: "/contactUs",
    images: [about_13_1, about_13_2, about_13_3],
  },
];

const DecisionSupportSystemPage = () => {
  return (
    <div className="theme-blue3">
      <MainHeading
        title="Decision Support System"
        subtitle="Decision Support System"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Solution" }]}
        marginBottom="70px"
      />
      <SolAbout4 aboutData={aboutData4} />
      <KeyFeatures testimonials={testimonials} />
      <OurExpertise1
        processSteps={processSteps}
        processStepsArray={processStepsArray}
      />
      <TalkToAbout1 TalkToAbout1Array={TalkToAbout1Array} />
    </div>
  );
};

export default DecisionSupportSystemPage;
