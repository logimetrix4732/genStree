import React from "react";
import MainHeading from "../../MainHeading";
import about_11_1 from "../../../assets/img/normal/about_11_1.jpg";
import about_11_2 from "../../../assets/img/normal/about_11_2.jpg";
import about_11_3 from "../../../assets/img/normal/about_11_3.jpg";
import process_img_1 from "../../../assets/img/normal/process_img_1.jpg";
import process_img_2 from "../../../assets/img/normal/process_img_2.jpg";
import process_img_3 from "../../../assets/img/normal/process_img_3.jpg";
import process_img_4 from "../../../assets/img/normal/process_img_4.jpg";
import title_shape_2 from "../../../assets/img/theme-img/title_shape_2.svg";
import AuditTrailsIcon from "../../../Imges/QblockIcon/AuditTrailsIcon.jpg";
import KeyFeatures from "../StandaloneProducts/SolutionReuseCom/KeyFeatures";
import AccessControlIcon from "../../../Imges/QblockIcon/AccessControlIcon.jpg";
import VersionControlIcon from "../../../Imges/QblockIcon/VersionControlIcon.jpg";
import DocumentsStorageIcon from "../../../Imges/QblockIcon/DocumentsStorageIcon.jpg";
import SolAbout1 from "../StandaloneProducts/SolutionReuseCom/SolutionAbout/SolAbout1";
import DocumentsRetrievalIcon from "../../../Imges/QblockIcon/DocumentsRetrievalIcon.jpg";
import WorkflowAutomationIcon from "../../../Imges/QblockIcon/WorkflowAutomationIcon.jpg";
import CollaborationToolsIcon from "../../../Imges/QblockIcon/CollaborationToolsIcon.jpg";
import OurExpertise1 from "../StandaloneProducts/SolutionReuseCom/OurExpertises/OurExpertise1";
import TalkToAbout from "../StandaloneProducts/SolutionReuseCom/TalkToAboutAnyQuestion/TalkToAbout";
import visiondesk5 from "../../../Imges/visiondesk5.png";
import visiondesk6 from "../../../Imges/visiondesk6.png";
const processSteps = [
  {
    id: 1,
    title: "Smart Data Management",
    step: "STEP-01",
    description:
      "Effortlessly fetch, organize, and analyze farmers' data, including land details, crop patterns, and yield insights.",
    image: process_img_1,
    img: process_img_1,
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
    image: process_img_2,
    img: process_img_2,
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
    image: process_img_3,
    img: process_img_3,
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
    image: process_img_4,
    img: process_img_4,
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
const testimonials = [
  {
    text: "“Track vehicles in real-time with instant location updates. Monitor start and stop times for complete fleet visibility, ensuring efficient operations, improved route planning, reduced downtime, and enhanced control over movements.”",
    img: DocumentsStorageIcon,
    name: "Real-Time Vehicle Tracking",
    designation: "",
  },
  {
    text: "“Monitor passenger drop-offs per trip to improve transport tracking. Gain insights into drop-off counts, optimize service management, enhance planning, ensure efficiency, and improve overall operational oversight for better transportation services.”",
    img: VersionControlIcon,
    name: "Passenger Drop-off Tracking",
    designation: "",
  },
  {
    text: "“The system tracks fuel consumption and records purchases, ensuring efficient fuel management. It provides a centralized database for each vehicle, aiding maintenance, cost analysis, and optimizing overall fleet operations.”",
    img: AccessControlIcon,
    name: "Fuel Record Management",
    designation: "",
  },
  {
    text: "“Users can search trip details using voice commands, simplifying access without manual entry. This improves efficiency, saves time, and enhances convenience when retrieving specific trip or vehicle information effortlessly.”",
    img: DocumentsRetrievalIcon,
    name: "Voice Command Search",
    designation: "",
  },
  {
    text: "“Easily export trip and fuel data in CSV format for convenient sharing and offline analysis. Supports seamless integration with other tools, enabling further analysis, reporting, auditing, and improved data management.”",
    img: WorkflowAutomationIcon,
    name: "CSV Export Functionality",
    designation: "",
  },
  {
    text: "“Designed to be intuitive and user-friendly for fleet managers, drivers, and administrative staff. The system enables easy access and interaction with data, simplifying tasks, boosting efficiency, and improving overall operational performance.”",
    img: CollaborationToolsIcon,
    name: "User-Friendly Interface",
    designation: "",
  },
  {
    text: "“The system provides detailed reports on trips, fuel usage, drop-offs, and more. Analyze historical data and fuel consumption trends to make informed decisions, optimize fleet operations, and enhance efficiency.”",
    img: AuditTrailsIcon,
    name: "Comprehensive Reporting and Data Analytics",
    designation: "",
  },
];
const aboutData1 = {
  title: "Log Book",
  subtitle: "Log Book and Management System",
  description:
    "Our Log Book and Management System is designed to offer real-time tracking and management of vehicle operations, with features that ensure seamless monitoring of vehicles, fuel records, and trip details. This system is ideal for fleet managers, transportation services, or any organization requiring efficient vehicle management.",
  features: [
    "Track vehicles in real-time with instant location updates and full fleet visibility.",
    "Monitor passenger drop-offs per trip for better transport planning.",
    "Track fuel consumption and purchases for efficient fleet management.",
  ],
  images: [about_11_1, about_11_2, about_11_3],
  titleShape: title_shape_2,
  experienceYears: 12,
  experienceText: "Years of experience in startup building",
  videoLink: "https://www.youtube.com/@logimetrixtechsolutions4572",
};
const TalkToAboutAnyQuestion = {
  img: visiondesk5,
  img1: visiondesk6,
  questionAns: [
    {
      id: 1,
      question: "How does this system help in tracking vehicles?",
      answer:
        "Our system provides real-time tracking of vehicles, showing when they start, stop, and their exact route, ensuring complete visibility.",
    },
    {
      id: 2,
      question: "Can I monitor fuel consumption and expenses?",
      answer:
        "Yes! The system includes fuel tracking and reporting, helping you manage consumption and reduce operational costs.",
    },
    {
      id: 3,
      question: "Does the system support trip history and reporting?",
      answer:
        "Absolutely! You can access detailed trip reports, including distance covered, stops made, and passenger drop-offs, all exportable in CSV format.",
    },
    {
      id: 4,
      question: "How secure is the data stored in the system?",
      answer:
        "We implement secure cloud storage, role-based access controls, and encrypted data transmission, ensuring your information stays protected.",
    },
  ],
};

const MilkAnalyserPage = () => {
  return (
    <div>
      <MainHeading
        title="Milk Analyser"
        subtitle="Milk Analyser"
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

export default MilkAnalyserPage;
