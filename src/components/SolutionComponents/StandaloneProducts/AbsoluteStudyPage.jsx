import React from "react";
import MainHeading from "../../MainHeading";
import edusaroj4 from "../../../Imges/edusaroj1.png";
import edusaroj1 from "../../../Imges/edusaroj4.png";
import edusaroj2 from "../../../Imges/edusaroj2.png";
import edusaroj3 from "../../../Imges/edusaroj3.png";
import edusaroj5 from "../../../Imges/edusaroj1_1.png";
import KeyFeatures from "./SolutionReuseCom/KeyFeatures";
import SolAbout2 from "./SolutionReuseCom/SolutionAbout/solAbout2";
import AutoBackupIcon from "../../../Imges/QblockIcon/AutoBackupIcon.jpg";
import OurExpertise1 from "./SolutionReuseCom/OurExpertises/OurExpertise1";
import about_12_shape from "../../../assets/img/normal/about_12_shape.png";
import AuditTrailsIcon from "../../../Imges/QblockIcon/AuditTrailsIcon.jpg";
import about_12_1_shape from "../../../assets/img/normal/about_12_1_shape.png";
import AccessControlIcon from "../../../Imges/QblockIcon/AccessControlIcon.jpg";
import VersionControlIcon from "../../../Imges/QblockIcon/VersionControlIcon.jpg";
import TalkToAbout5 from "./SolutionReuseCom/TalkToAboutAnyQuestion/TalkToAbout5";
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
const processSteps = [
  {
    id: 1,
    title: "Customizable Quiz Creation",
    step: "STEP-01",
    description:
      "Create highly customizable quizzes tailored for individual or group assessments with flexible formats, personalized difficulty levels, and various question types.",

    image: edusaroj5,
    img: edusaroj5,

    checklist: [
      "Customizable Quiz Formats",
      "Personalized Difficulty Levels",
      "Diverse Question Types",
    ],
  },
  {
    id: 2,
    title: "Question Bank Management",
    step: "STEP-02",
    description:
      "Efficiently manage your question bank by storing, categorizing, and reusing questions, ensuring streamlined test creation and a variety of question formats.",

    image: edusaroj5,
    img: edusaroj5,

    checklist: [
      "Store & Categorize Questions",
      "Reuse Questions Across Quizzes",
      "Variety of Question Types",
    ],
  },
  {
    id: 3,
    title: "Time-Limited & Adaptive Testing",
    step: "STEP-03",
    description:
      "Enable adaptive testing with time-limited assessments, randomizing questions, and adjusting difficulty levels based on user performance to provide a dynamic learning experience.",

    image: edusaroj5,
    img: edusaroj5,

    checklist: [
      "Time-Limited Assessments",
      "Randomized Questions",
      "Adaptive Difficulty Levels",
    ],
  },
  {
    id: 4,
    title: "Detailed Reports & Analytics",
    step: "STEP-04",
    description:
      "Track performance with detailed analytics and reports, providing actionable insights on strengths, weaknesses, and opportunities for improvement.",

    image: edusaroj5,
    img: edusaroj5,

    checklist: [
      "Performance Reports",
      "Actionable Insights",
      "Data-Driven Evaluation",
    ],
  },
];
const processStepsArray = [
  "Customizable Quiz Creation",
  "Question Bank Management",
  "Time-Limited & Adaptive Testing",
  "Detailed Reports & Analytics",
];
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

  images: [edusaroj1, edusaroj2, edusaroj3],

  shapeImages: [about_12_shape, about_12_1_shape],
  demoLink: "https://www.youtube.com/@logimetrixtechsolutions4572",
  trialLink: "https://edusaroj.com/home/landing",
};
const TalkToAbout5Array = {
  title: "Talk To About SAROJ",
  highlight: "Questions?",
  subtitle: "Frequently Asked Questions",

  image: edusaroj4,

  faqs: [
    {
      question: "What is SAROJ?",
      answer:
        "SAROJ is a next-gen online examination platform that ensures secure, efficient, and seamless assessments with AI-driven cheating prevention and real-time proctoring.",
    },
    {
      question: "How do I create quizzes in SAROJ?",
      answer:
        "SAROJ allows you to create customizable quizzes tailored to groups or individuals with flexible test formats and time-limited or adaptive difficulty levels.",
      defaultOpen: true,
    },
    {
      question: "Can I track performance in SAROJ?",
      answer:
        "Yes, SAROJ provides detailed reports and analytics for each user and group-wise, helping to track performance and identify strengths and weaknesses in assessments.",
    },
    {
      question: "What types of exams can be conducted on SAROJ?",
      answer:
        "SAROJ supports multiple exam formats including MCQs and adaptive testing with time limits, question randomization, and performance tracking features.",
    },
    {
      question: "Is SAROJ accessible on multiple devices?",
      answer:
        "Yes, SAROJ is accessible from any device – mobile, tablet, or desktop – with secure login for a seamless user experience.",
    },
  ],
};

const AbsoluteStudyPage = () => {
  return (
    <div className="theme-blue3">
      <MainHeading
        title="SAROJ EDUCATION"
        subtitle="SAROJ EDUCATION"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Solution" }]}
        marginBottom="100px"
      />
      <SolAbout2 aboutData={aboutData2} />
      <KeyFeatures testimonials={testimonials} />
      <OurExpertise1
        processSteps={processSteps}
        processStepsArray={processStepsArray}
      />
      <TalkToAbout5 TalkToAbout5Array={TalkToAbout5Array} />
    </div>
  );
};

export default AbsoluteStudyPage;
