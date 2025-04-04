import React from "react";
import about_18_1 from "../../../assets/img/normal/about_18_1.jpg";
import about_18_2 from "../../../assets/img/normal/about_18_2.jpg";

import process_img_1 from "../../../assets/img/normal/process_img_1.jpg";
import process_img_2 from "../../../assets/img/normal/process_img_2.jpg";
import process_img_3 from "../../../assets/img/normal/process_img_3.jpg";
import process_img_4 from "../../../assets/img/normal/process_img_4.jpg";

// import CollaborationToolsIcon from "../../../Imges/QblockIcon/CollaborationToolsIcon.jpg";

import AuditTrailsIcon from "../../../Imges/QblockIcon/AuditTrailsIcon.jpg";
import KeyFeatures from "../StandaloneProducts/SolutionReuseCom/KeyFeatures";
import AccessControlIcon from "../../../Imges/QblockIcon/AccessControlIcon.jpg";
import VersionControlIcon from "../../../Imges/QblockIcon/VersionControlIcon.jpg";
import DocumentsStorageIcon from "../../../Imges/QblockIcon/DocumentsStorageIcon.jpg";
import SolAbout3 from "../StandaloneProducts/SolutionReuseCom/SolutionAbout/SolAbout3";
import DocumentsRetrievalIcon from "../../../Imges/QblockIcon/DocumentsRetrievalIcon.jpg";
import WorkflowAutomationIcon from "../../../Imges/QblockIcon/WorkflowAutomationIcon.jpg";

import CollaborationToolsIcon from "../../../Imges/QblockIcon/CollaborationToolsIcon.jpg";
import visiondesk5 from "../../../Imges/visiondesk5.png";
import visiondesk6 from "../../../Imges/visiondesk6.png";
import OurExpertise1 from "../StandaloneProducts/SolutionReuseCom/OurExpertises/OurExpertise1";
import TalkToAbout from "../StandaloneProducts/SolutionReuseCom/TalkToAboutAnyQuestion/TalkToAbout";
import "swiper/css";
import "swiper/css/pagination";
import MainHeading from "../../MainHeading";
const FieldQuotationSystemPage = () => {
  const testimonials = [
    {
      text: "DSS optimizes the crop procurement process by advising buyers on the best time to purchase, optimal quantity, and price, all while ensuring adherence to the planned budget for better, smarter purchasing decisions.",
      img: DocumentsStorageIcon,
      name: "Procurement Optimization",
      designation: "",
    },
    {
      text: "DSS analyzes economic data, delivering a monthly procurement model with charts, making it easy for buyers to make informed, accurate decisions and optimize their purchasing strategies while staying within strict budget constraints.",
      img: VersionControlIcon,
      name: "Monthly Procurement Model",
      designation: "",
    },
    {
      text: "DSS keeps buyers informed about the best time to purchase crops, optimal quantity, and price, enabling better procurement planning, cost savings, and budget adherence for more efficient decision-making across departments.",
      img: AccessControlIcon,
      name: "Economical Procurement",
      designation: "",
    },
    {
      text: "DSS simplifies crop procurement by focusing on economic factors, providing buyers with a clear, actionable model to make purchasing decisions based on the optimal time and price for each crop category.",
      img: DocumentsRetrievalIcon,
      name: "Simplified Buying Procedure",
      designation: "",
    },
    {
      text: "DSS offers valuable insights into the crop procurement process by analyzing factors like market trends, helping buyers purchase at the most economical price and the right time to optimize spending efficiently.",
      img: WorkflowAutomationIcon,
      name: "Critical Insights",
      designation: "",
    },
    {
      text: "DSS generates procurement models and charts that help buyers assess purchases on distributed and cumulative levels, ensuring better planning, optimized procurement strategies, and more efficient decision-making across departments.",
      img: AuditTrailsIcon,
      name: "Procurement Insights & Charts",
      designation: "",
    },
  ];

  const processSteps = [
    {
      id: 1,
      title: "FE/Manager Login",
      step: "STEP-01",
      description:
        "Field Engineer or Manager logs into the system to mark attendance and start their day, ensuring smooth operations from the start.",
      image: process_img_1,
      img: process_img_1,
      checklist: [
        "Login with secure credentials",
        "Attendance marking",
        "Start of day tasks",
      ],
    },
    {
      id: 2,
      title: "Product Categorization",
      step: "STEP-02",
      description:
        "Categorize different products to manage inventory efficiently and track requirements for smooth project execution.",
      image: process_img_2,
      img: process_img_2,
      checklist: [
        "Product categorization for easy tracking",
        "Inventory management",
        "Seamless requirement uploads",
      ],
    },
    {
      id: 3,
      title: "Real-Time Quotation & Requirement Upload",
      step: "STEP-03",
      description:
        "Field officers/engineers upload requirements with images and signatures, allowing real-time quotations from the Head Office for project analysis.",
      image: process_img_3,
      img: process_img_3,
      checklist: [
        "Upload project requirements",
        "Real-time quotations",
        "Snaps & Signature for authenticity",
      ],
    },
    {
      id: 4,
      title: "Real-Time Project Analysis",
      step: "STEP-04",
      description:
        "Admin and HO can perform real-time analysis of the project and make timely decisions based on the uploaded requirements and quotations.",
      image: process_img_4,
      img: process_img_4,
      checklist: [
        "Real-time project tracking",
        "Instant feedback from HO",
        "Efficient decision-making",
      ],
    },
  ];

  const processStepsArray = [
    "FE/Manager Login",
    "Product Categorization",
    "Real-Time Quotation & Requirement Upload",
    "Real-Time Project Analysis",
  ];

  const TalkToAboutAnyQuestion = {
    img: visiondesk5,
    img1: visiondesk6,
    questionAns: [
      {
        id: 1,
        question: "How does the system optimize the procurement process?",
        answer:
          "The system helps buyers choose the best time to purchase crops, optimal quantity, and most economical price, all while staying within the planned budget, improving procurement efficiency.",
      },
      {
        id: 2,
        question: "Can field officers upload real-time requirements?",
        answer:
          "Yes! Field officers and engineers can upload real-time requirements, including images and signatures, making the process seamless and timely.",
      },
      {
        id: 3,
        question: "How does the system help in project analysis?",
        answer:
          "The system provides real-time data and quotations, allowing Admin and Head Office to perform efficient project analysis, leading to better decision-making.",
      },
      {
        id: 4,
        question: "Is there any user access control in the system?",
        answer:
          "Yes! The system ensures secure logins, access control, and role-based permissions for field officers, engineers, and admin to ensure smooth operations and data security.",
      },
    ],
  };

  const aboutData3 = [
    {
      id: 1,
      images: [about_18_1, about_18_2],
      experienceCount: 689,
      experienceText: "Happily active clients",
      shadowTitle: "Field Quotation",
      subTitle: "Field Quotation Management System",
      secTitle: "Comprehensive Quotation System for Field Engineers",
      description:
        "This Field Quotation System allows field officers and engineers to manage project quotations, upload requirements, and track project status in real-time, ensuring smooth operations and enhanced decision-making.",
      checklist: [
        ["Real-Time Data Sync", "Project Quotations"],
        ["Inventory Management", "Product Categorization"],
      ],
      contactLink: "/contactUs",
      phone: "+993-554-0006",
    },
  ];

  return (
    <div>
      <MainHeading
        title="Field Quotation System"
        subtitle="Field Quotation System"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Solution" }]}
      />
      <SolAbout3 aboutData={aboutData3} />
      <KeyFeatures testimonials={testimonials} />
      <OurExpertise1
        processSteps={processSteps}
        processStepsArray={processStepsArray}
      />
      <TalkToAbout TalkToAboutAnyQuestion={TalkToAboutAnyQuestion} />
    </div>
  );
};

export default FieldQuotationSystemPage;
