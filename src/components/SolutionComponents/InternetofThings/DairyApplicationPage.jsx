import React from "react";
import MainHeading from "../../MainHeading";
import KeyFeatures from "../StandaloneProducts/SolutionReuseCom/KeyFeatures";
import faq_11_1 from "../../../assets/img/normal/faq_11_1.png";
import SolAbout2 from "../StandaloneProducts/SolutionReuseCom/SolutionAbout/solAbout2";
import about_12_1 from "../../../assets/img/normal/about_12_1.jpg";
import about_12_3 from "../../../assets/img/normal/about_12_3.jpg";
import about_12_2 from "../../../assets/img/normal/about_12_2.jpg";
import OurExpertise from "../StandaloneProducts/SolutionReuseCom/OurExpertises/OurExpertise";
import AutoBackupIcon from "../../../Imges/QblockIcon/AutoBackupIcon.jpg";
import about_12_shape from "../../../assets/img/normal/about_12_shape.png";
import AuditTrailsIcon from "../../../Imges/QblockIcon/AuditTrailsIcon.jpg";
import about_12_1_shape from "../../../assets/img/normal/about_12_1_shape.png";
import AccessControlIcon from "../../../Imges/QblockIcon/AccessControlIcon.jpg";
import VersionControlIcon from "../../../Imges/QblockIcon/VersionControlIcon.jpg";
import TalkToAbout5 from "../StandaloneProducts/SolutionReuseCom/TalkToAboutAnyQuestion/TalkToAbout5";
import DocumentsStorageIcon from "../../../Imges/QblockIcon/DocumentsStorageIcon.jpg";
import DocumentsRetrievalIcon from "../../../Imges/QblockIcon/DocumentsRetrievalIcon.jpg";
import WorkflowAutomationIcon from "../../../Imges/QblockIcon/WorkflowAutomationIcon.jpg";
import CollaborationToolsIcon from "../../../Imges/QblockIcon/CollaborationToolsIcon.jpg";
import UserGuestDeactivationIcon from "../../../Imges/QblockIcon/UserGuestDeactivationIcon.jpg";
import StorageQuotaManagementIcon from "../../../Imges/QblockIcon/StorageQuotaManagementIcon.jpg";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "“Create highly customizable quizzes that are tailored specifically for groups or individuals, offering flexible test formats, personalized difficulty levels, and a range of question types to suit diverse learning needs.”",
    img: DocumentsStorageIcon,
    name: "Customizable Quiz Creation",
    designation: "",
  },
  {
    text: "“Efficiently manage your question bank by storing, categorizing, and reusing questions across multiple quizzes and tests, enabling streamlined test creation, saving time, and ensuring a variety of question types for different learning needs.”",
    img: VersionControlIcon,
    name: "Question Bank Management",
    designation: "",
  },
  {
    text: "“Enable time-limited testing by setting timers, randomizing questions, and adjusting difficulty levels based on user performance, providing a dynamic and personalized testing experience that adapts to individual progress.”",
    img: AccessControlIcon,
    name: "Time-Limited & Adaptive Testing",
    designation: "",
  },
  {
    text: "“Track performance with detailed reports and analytics, generating insights for individual users and groups, identifying strengths and weaknesses, and improving learning outcomes through data-driven evaluation.”",
    img: DocumentsRetrievalIcon,
    name: "Detailed Reports & Analytics",
    designation: "",
  },
  {
    text: "“Monitor student progress by analyzing assessments, identifying strengths and weaknesses, and providing detailed, actionable insights to enhance learning, boost confidence, and improve overall academic performance effectively.”",
    img: WorkflowAutomationIcon,
    name: "Performance Tracking",
    designation: "",
  },
  {
    text: "“Navigate exams, quizzes, and training modules effortlessly with a seamless, intuitive user interface designed for accessibility, ease of use, smooth navigation, and an engaging learning experience across all devices.”",
    img: CollaborationToolsIcon,
    name: "User-Friendly Interface",
    designation: "",
  },
  {
    text: "“Receive instant results with real-time feedback, in-depth performance analytics, and personalized improvement suggestions to track progress, identify weaknesses, and enhance learning outcomes effectively and efficiently.”",
    img: AuditTrailsIcon,
    name: "Instant Results & Detailed Reports",
    designation: "",
  },
  {
    text: "“Create and conduct tests effortlessly with multiple-choice question (MCQ) formats, supporting various difficulty levels, randomized options, instant scoring, and detailed performance analysis for effective assessment.”",
    img: StorageQuotaManagementIcon,
    name: "MCQs Test Formats",
    designation: "",
  },
  {
    text: "“Ensure secure login and seamless multi-device access, allowing users to take exams safely from mobile, tablet, or desktop with encrypted data protection, smooth navigation, and a user-friendly experience.”",
    img: UserGuestDeactivationIcon,
    name: "Secure Login & Multi-Device Access",
    designation: "",
  },
  {
    text: "“Allow users to review their test answers based on their attempts, providing insights, detailed explanations, and the opportunity to learn from mistakes for improved performance and understanding.”",
    img: AutoBackupIcon,
    name: "Review",
    designation: "",
  },
];
const ExpertiseArray = {
  heading: "SAROJ EDUCATION",
  para: "Collaboratively envisioneer user friendly supply chains and cross unit imperative. Authoritativel fabricate competitive resource andholistic. Holisticly restore real time resources whereas standardized networks.",
  keyPoints: [
    { name: "Centralized Document", per: "95%" },
    { name: "Quick & Easy Access", per: "99%" },
    { name: "Advanced Security & Access Control", per: "95%" },
    { name: "Automated Workflows", per: "95%" },
    { name: "Backup & Recovery", per: "92%" },
  ],
};
const aboutData2 = {
  title: "SAROJ EDUCATION",
  subtitle: "The Next-Gen Online Examination Platform",
  featuresTitle: "Customizable Quiz Creation and Assessment Management",
  description:
    "SAROJ is a state-of-the-art online examination system designed to offer secure, efficient, and seamless assessments for both academic institutions and corporate training programs. Built with advanced technologies, AI-driven cheating prevention, and real-time proctoring, SAROJ ensures integrity, fairness, and accuracy in every exam session.",
  features: [
    "SAROJ offers customizable quiz creation and test assignments.",
    "It enables group-wise or individual assessments for better management.",
  ],
  images: [about_12_1, about_12_3, about_12_2],
  shapeImages: [about_12_shape, about_12_1_shape],
  demoLink: "https://www.youtube.com/@logimetrixtechsolutions4572",
  trialLink: "https://edusaroj.com/home/landing",
};
const TalkToAbout5Array = {
  title: "Talk To About Any",
  highlight: "Question?",
  subtitle: "Frequently Asked Questions",
  image: faq_11_1,
  faqs: [
    {
      question: "What is the difference between SEO and PPC?",
      answer:
        "SEO focuses on improving your website's organic ranking in search results, while PPC involves paid advertising to reach your target audience.",
    },
    {
      question: "How much does digital marketing cost?",
      answer:
        "The cost of digital marketing varies based on the services required, budget, and business needs.",
      defaultOpen: true,
    },
    {
      question: "How do I get started with GenStree?",
      answer:
        "You can get started by reaching out to our support team, choosing the right service, and setting up your strategy with our experts.",
    },
    {
      question: "What is your process for working with clients?",
      answer:
        "We follow a structured approach, starting with consultation, strategy development, execution, and continuous optimization.",
    },
  ],
};

const DairyApplicationPage = () => {
  return (
    <div className="theme-blue3">
      <MainHeading
        title="Dairy Application"
        subtitle="Dairy Application"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Solution" }]}
        marginBottom="100px"
      />
      <SolAbout2 aboutData={aboutData2} />
      <KeyFeatures testimonials={testimonials} />
      <OurExpertise ExpertiseArray={ExpertiseArray} />
      <TalkToAbout5 TalkToAbout5Array={TalkToAbout5Array} />
    </div>
  );
};

export default DairyApplicationPage;
