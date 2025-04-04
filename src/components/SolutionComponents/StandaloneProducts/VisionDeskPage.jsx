import visiondesk1 from "../../../Imges/visiondesk1.png";
// import visiondesk2 from "../../../Imges/visiondesk2.png";
import visiondesk3 from "../../../Imges/visiondesk3.png";
import visiondesk4 from "../../../Imges/visiondesk4.png";
import visiondesk5 from "../../../Imges/visiondesk5.png";
import visiondesk6 from "../../../Imges/visiondesk6.png";

// import process_img_1 from "../../../assets/img/normal/process_img_1.jpg";
// import process_img_2 from "../../../assets/img/normal/process_img_2.jpg";
// import process_img_3 from "../../../assets/img/normal/process_img_3.jpg";
// import process_img_4 from "../../../assets/img/normal/process_img_4.jpg";

import React from "react";
import MainHeading from "../../MainHeading";
import KeyFeatures from "./SolutionReuseCom/KeyFeatures";
import SolAbout3 from "./SolutionReuseCom/SolutionAbout/SolAbout3";
import about_18_1 from "../../../assets/img/normal/about_18_1.jpg";
import about_18_2 from "../../../assets/img/normal/about_18_2.jpg";
import process_img_1 from "../../../assets/img/normal/process_img_1.jpg";
import process_img_2 from "../../../assets/img/normal/process_img_2.jpg";
import process_img_3 from "../../../assets/img/normal/process_img_3.jpg";
import process_img_4 from "../../../assets/img/normal/process_img_4.jpg";

import OurExpertise1 from "./SolutionReuseCom/OurExpertises/OurExpertise1";
import AuditTrailsIcon from "../../../Imges/QblockIcon/AuditTrailsIcon.jpg";
import AccessControlIcon from "../../../Imges/QblockIcon/AccessControlIcon.jpg";
import TalkToAbout from "./SolutionReuseCom/TalkToAboutAnyQuestion/TalkToAbout";
import VersionControlIcon from "../../../Imges/QblockIcon/VersionControlIcon.jpg";
import DocumentsStorageIcon from "../../../Imges/QblockIcon/DocumentsStorageIcon.jpg";
import DocumentsRetrievalIcon from "../../../Imges/QblockIcon/DocumentsRetrievalIcon.jpg";
import WorkflowAutomationIcon from "../../../Imges/QblockIcon/WorkflowAutomationIcon.jpg";
import CollaborationToolsIcon from "../../../Imges/QblockIcon/CollaborationToolsIcon.jpg";
import "swiper/css";
import "swiper/css/pagination";
const VisionDeskPage = () => {
  const testimonials = [
    {
      text: "“Seamlessly fetch, manage, and analyze farmers' data, including land details, crop patterns, and yield insights, enabling real-time access to agricultural information for better decision-making, planning, and monitoring by stakeholders.”",
      img: DocumentsStorageIcon,
      name: "Integration with Krishi Mapper",
      designation: "",
    },
    {
      text: "“Maintain a well-organized repository of farmers, including demographic information, landholding data, and crop cultivation details, ensuring efficient data management for better planning, analysis, and decision-making in agriculture.”",
      img: VersionControlIcon,
      name: "Farmer Database Management",
      designation: "",
    },
    {
      text: "“Monitor crop cycles, yields, and farming practices to enhance agricultural productivity, optimize resource utilization, and support data-driven decision-making for sustainable and efficient farming operations.”",
      img: AccessControlIcon,
      name: "Crop & Yield Tracking",
      designation: "",
    },
    {
      text: "“Track and manage financial assistance, government subsidies, and loan disbursements to ensure timely support for farmers, promoting economic stability, increased productivity, and sustainable agricultural growth with data-driven insights.”",
      img: DocumentsRetrievalIcon,
      name: "Finance & Subsidy Management",
      designation: "",
    },
    {
      text: "“Optimize procurement planning, input supply distribution, and logistics for agricultural produce to enhance efficiency, reduce wastage, improve supply chain management, and ensure timely delivery to markets and stakeholders.”",
      img: WorkflowAutomationIcon,
      name: "Supply Chain & Procurement",
      designation: "",
    },
    {
      text: "“Maintain real-time stock levels, track inventory, and manage storage facilities efficiently to prevent shortages, reduce wastage, optimize resource utilization, and ensure seamless supply chain operations in agriculture.”",
      img: CollaborationToolsIcon,
      name: "Warehouse & Stock Management",
      designation: "",
    },
    {
      text: "“Generate insightful reports, data visualizations, and trend analysis to enhance decision-making, improve strategic planning, identify patterns, optimize resource allocation, and drive data-driven solutions for sustainable agricultural growth and efficiency.”",
      img: AuditTrailsIcon,
      name: "Report & Analytics Dashboard",
      designation: "",
    },
    {
      text: "“Define user roles, access levels, and permissions to ensure secured data management, prevent unauthorized access, enhance accountability, streamline operations, and maintain data integrity across agricultural information systems.”",
      img: AuditTrailsIcon,
      name: "User Access & Role Management",
      designation: "",
    },
    {
      text: "“Maintain a detailed history of all system transactions to ensure transparency, regulatory compliance, audit readiness, data security, accountability, traceability, fraud prevention, and operational efficiency in agricultural management systems.”",
      img: AuditTrailsIcon,
      name: "Audit Logs & Compliance",
      designation: "",
    },
    {
      text: "“Access data anytime, anywhere with a responsive design and cloud-based storage, ensuring scalability, security, real-time synchronization, seamless user experience, and efficient agricultural data management across multiple devices.”",
      img: AuditTrailsIcon,
      name: "Mobile-Friendly & Cloud-Based",
      designation: "",
    },
  ];
  const processSteps = [
    {
      id: 1,
      title: "Smart Data Management",
      step: "STEP-01",
      description:
        "Effortlessly fetch, organize, and analyze farmers' data, including land details, crop patterns, and yield insights.",

      image: visiondesk4,
      img: visiondesk4,

      checklist: [
        "Seamless Farmer Data Handling",
        "Real-time Land & Crop Monitoring",
        "Data Accuracy & Security",
      ],
    },
    {
      id: 2,
      title: "Financial Oversight",
      step: "STEP-02",
      description:
        "Seamlessly track government subsidies, financial aid, and loan disbursements to support farmers effectively.",

      image: visiondesk4,
      img: visiondesk4,

      checklist: [
        "Monitor Subsidy Distribution",
        "Ensure Transparent Transactions",
        "Optimize Loan Disbursement",
      ],
    },
    {
      id: 3,
      title: "Insightful Analytics",
      step: "STEP-03",
      description:
        "Generate powerful reports, trend analysis, and data visualizations to drive informed agricultural decisions.",

      image: visiondesk4,
      img: visiondesk4,

      checklist: [
        "AI-Powered Data Insights",
        "Customizable Reports & Charts",
        "Predictive Farming Trends",
      ],
    },
    {
      id: 4,
      title: "Anywhere, Anytime Access",
      step: "STEP-04",
      description:
        "Leverage cloud-based storage and a responsive design for real-time data accessibility on any device.",

      image: visiondesk4,
      img: visiondesk4,

      checklist: [
        "Secure Cloud Storage",
        "Cross-Device Compatibility",
        "24/7 Data Accessibility",
      ],
    },
  ];
  const processStepsArray = [
    "Smart Data Management",
    "Financial Oversight",
    "Insightful Analytics",
    "Anywhere, Anytime Access",
  ];

  const TalkToAboutAnyQuestion = {
    img: visiondesk5,
    img1: visiondesk6,
    questionAns: [
      {
        id: 1,
        question: "How does this system help in tracking farmers' data?",
        answer:
          "Our system provides real-time tracking of farmers' data, including land ownership, crop patterns, and yield insights, ensuring efficient agricultural planning.",
      },
      {
        id: 2,
        question: "Can I monitor government subsidies and loan disbursements?",
        answer:
          "Yes! The system includes tracking for government subsidies, financial aid, and loan disbursements, ensuring transparency and effective financial management.",
      },
      {
        id: 3,
        question: "Does the system support data analytics and reporting?",
        answer:
          "Absolutely! The system generates insightful reports, trend analysis, and visual data representations to support better agricultural decision-making.",
      },
      {
        id: 4,
        question: "How secure is the data stored in the system?",
        answer:
          "We implement encrypted data storage, role-based access control, and cloud security measures to ensure your information remains protected at all times.",
      },
    ],
  };
  const aboutData3 = [
    {
      id: 1,
      images: [visiondesk1, visiondesk3],

      experienceCount: 689,
      experienceText: "Happily active client’s",
      shadowTitle: "Vision Desk",
      subTitle: "Vision Desk (MIS Portal)",
      secTitle: "Comprehensive MIS Portal for Agricultural Data Management",
      description:
        "VisionDesk is a Management Information System (MIS) Portal designed to streamline agricultural data management by integrating with Krishi Mapper. It provides real-time access to farmers' data and crop details for better decision-making.",
      checklist: [
        ["Real-time Data Access", "Krishi Mapper Integration"],
        ["Data-Driven Solutions", "Informed Decision-Making"],
      ],
      contactLink: "/contactUs",
      phone: "+993-554-0006",
    },
  ];
  return (
    <div>
      <MainHeading
        title="VISION DESK"
        subtitle="VISION DESK (MIS Portal)"
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

export default VisionDeskPage;
