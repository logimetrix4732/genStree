import React from "react";
import MainHeading from "../../MainHeading";
import feature_2_1 from "../../../assets/img/icon/feature_2_1.svg";
import feature_2_3 from "../../../assets/img/icon/feature_2_3.svg";
import feature_2_2 from "../../../assets/img/icon/feature_2_2.svg";
import feature_2_4 from "../../../assets/img/icon/feature_2_4.svg";
import feature_8_1 from "../../../assets/img/normal/feature_8_1.png";
import process_img_1 from "../../../assets/img/normal/process_img_1.jpg";
import process_img_2 from "../../../assets/img/normal/process_img_2.jpg";
import process_img_3 from "../../../assets/img/normal/process_img_3.jpg";
import process_img_4 from "../../../assets/img/normal/process_img_4.jpg";
import AuditTrailsIcon from "../../../Imges/QblockIcon/AuditTrailsIcon.jpg";
import AccessControlIcon from "../../../Imges/QblockIcon/AccessControlIcon.jpg";
import KeyFeatures from "../StandaloneProducts/SolutionReuseCom/KeyFeatures";
import VersionControlIcon from "../../../Imges/QblockIcon/VersionControlIcon.jpg";
import DocumentsStorageIcon from "../../../Imges/QblockIcon/DocumentsStorageIcon.jpg";
import SolAbout5 from "../StandaloneProducts/SolutionReuseCom/SolutionAbout/SolAbout5";
import DocumentsRetrievalIcon from "../../../Imges/QblockIcon/DocumentsRetrievalIcon.jpg";
import WorkflowAutomationIcon from "../../../Imges/QblockIcon/WorkflowAutomationIcon.jpg";
import OurExpertise1 from "../StandaloneProducts/SolutionReuseCom/OurExpertises/OurExpertise1";
import TalkToAbout2 from "../StandaloneProducts/SolutionReuseCom/TalkToAboutAnyQuestion/TalkToAbout2";
import "swiper/css";
import "swiper/css/pagination";
import talkabout from "../../../Imges/akshar1.png";

const testimonials = [
  {
    text: "“The IMS platform quickly resolves issues by assigning tasks to the responsible person, reducing the need for email escalations and streamlining communication. This helps improve management, ensure faster resolution, and enhance overall efficiency.”",
    img: DocumentsStorageIcon,
    name: "Issue Assignment",
    designation: "",
  },
  {
    text: "“The live feed allows all members to view the issues and provide their inputs. This collaborative approach ensures that everyone contributes towards resolving the matter efficiently and effectively, improving team coordination and outcomes.”",
    img: VersionControlIcon,
    name: "Live Feed Collaboration",
    designation: "",
  },
  {
    text: "“IMS uses a Web & Android platform to assign and track issues in real-time, which ensures immediate action by the concerned personnel, minimizing delays, increasing productivity, and ensuring accountability across the board.”",
    img: AccessControlIcon,
    name: "Real-time Issue Management",
    designation: "",
  },
  {
    text: "“By assigning issues directly to the relevant person, the platform ensures accountability and fosters quick resolution, eliminating delays, improving the overall workflow, and enhancing collaboration between team members for faster progress.”",
    img: DocumentsRetrievalIcon,
    name: "Efficient Task Resolution",
    designation: "",
  },
  {
    text: "“AIS tracks all dynamic and static parameters related to crop development, including weather patterns, sowing dates, and market prices, providing critical insights that help optimize agricultural production and improve decision-making for better results.”",
    img: WorkflowAutomationIcon,
    name: "Crop Data Analytics",
    designation: "",
  },
  {
    text: "“AIS captures and regulates data throughout the crop’s life cycle, including yield vs production charts, rainfall patterns, and price trends, enabling better forecasting, optimizing crop yields, and improving market competitiveness for farmers.”",
    img: AuditTrailsIcon,
    name: "Comprehensive Crop Monitoring",
    designation: "",
  },
];

const processSteps = [
  {
    id: 1,
    title: "Real-Time Issue Resolution",
    step: "STEP-01",
    description:
      "IMS assigns issues to the concerned person instantly, reducing email delays and streamlining communication, allowing for rapid issue resolution.",
    image: process_img_1,
    img: process_img_1,
    checklist: [
      "Immediate Issue Assignment",
      "Efficient Communication Channels",
      "Quick Task Resolution",
    ],
  },
  {
    id: 2,
    title: "Comprehensive Crop Analytics",
    step: "STEP-02",
    description:
      "AIS collects detailed data regarding crop development, such as sowing dates, rainfall patterns, and market prices, to help farmers and businesses make informed decisions.",
    image: process_img_2,
    img: process_img_2,
    checklist: [
      "Tracks Weather & Price Trends",
      "Monitors Crop Development",
      "Provides Yield vs Production Insights",
    ],
  },
  {
    id: 3,
    title: "Live Feed for Collaboration",
    step: "STEP-03",
    description:
      "The live feed feature of IMS allows all stakeholders to contribute to problem-solving, ensuring a collaborative approach to issue resolution.",
    image: process_img_3,
    img: process_img_3,
    checklist: [
      "Real-Time Updates",
      "Collaborative Problem-Solving",
      "Improved Stakeholder Interaction",
    ],
  },
  {
    id: 4,
    title: "Smart Agricultural Insights",
    step: "STEP-04",
    description:
      "AIS integrates data from various parameters to provide insights that help optimize crop production and better market competitiveness, ensuring higher agricultural yields.",
    image: process_img_4,
    img: process_img_4,
    checklist: [
      "Data-Driven Insights",
      "Improved Agricultural Productivity",
      "Optimized Crop Management",
    ],
  },
];

const processStepsArray = [
  "Real-Time Issue Resolution",
  "Comprehensive Crop Analytics",
  "Live Feed for Collaboration",
  "Smart Agricultural Insights",
];

const TalkToAbout2Array = {
  img: talkabout,
  TalkToAboutArray: [
    {
      id: 1,
      question: "How does IMS improve issue management?",
      answer:
        "IMS streamlines issue resolution by assigning tasks to the responsible person in real-time, reducing email escalations, and ensuring faster problem-solving.",
    },
    {
      id: 2,
      question: "What role does AIS play in crop management?",
      answer:
        "AIS monitors crop development by tracking parameters like weather patterns, sowing dates, and market prices, helping farmers optimize production and make informed decisions.",
    },
    {
      id: 3,
      question: "Can AIS predict future crop trends?",
      answer:
        "Yes, AIS tracks various parameters such as rainfall, market trends, and crop yields to provide predictive insights for better decision-making and improved agricultural productivity.",
    },
    {
      id: 4,
      question: "How does the live feed enhance collaboration?",
      answer:
        "The live feed allows all team members to view the issues, offer their insights, and collaborate on resolving matters quickly and efficiently, ensuring active participation from all parties.",
    },
  ],
};

const aboutData5 = [
  {
    id: 1,
    title: "AIS & IMS – Boosting Agricultural",
    highlight: "Efficiency",
    description:
      "AIS and IMS bring together advanced analytics and real-time issue management to help farmers and businesses enhance agricultural productivity, optimize crop management, and improve market competitiveness.",
    checklist: [
      [
        { icon: feature_2_1, text: "Issue Assignment" },
        { icon: feature_2_2, text: "Crop Forecasting" },
      ],
      [
        { icon: feature_2_3, text: "Live Collaboration" },
        { icon: feature_2_4, text: "Agri Insights" },
      ],
    ],

    btnText: "Explore AIS & IMS",
    btnLink: "/contactUs",
    featureImg: feature_8_1,
    featureText: "AIS & IMS",
  },
];

const IssueManagementSystemPage = () => {
  return (
    <div>
      <MainHeading
        title="Issue Management System"
        subtitle="Issue Management System"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Solution" }]}
      />
      <SolAbout5 aboutData={aboutData5} />
      <KeyFeatures testimonials={testimonials} />
      <OurExpertise1
        processSteps={processSteps}
        processStepsArray={processStepsArray}
      />
      <TalkToAbout2 TalkToAbout2Array={TalkToAbout2Array} />
    </div>
  );
};

export default IssueManagementSystemPage;
