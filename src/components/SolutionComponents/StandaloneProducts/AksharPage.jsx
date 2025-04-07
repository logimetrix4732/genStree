import React from "react";

import MainHeading from "../../MainHeading";
import KeyFeatures from "./SolutionReuseCom/KeyFeatures";
import SolAbout5 from "./SolutionReuseCom/SolutionAbout/SolAbout5";
import feature_2_1 from "../../../assets/img/icon/feature_2_1.svg";
import feature_2_3 from "../../../assets/img/icon/feature_2_3.svg";
import feature_2_2 from "../../../assets/img/icon/feature_2_2.svg";
import feature_2_4 from "../../../assets/img/icon/feature_2_4.svg";
import feature_8_1 from "../../../assets/img/normal/feature_8_1.png";
import process_img_1 from "../../../assets/img/normal/process_img_1.jpg";

import process_img_2 from "../../../assets/img/normal/process_img_2.jpg";
import process_img_3 from "../../../assets/img/normal/process_img_3.jpg";
import process_img_4 from "../../../assets/img/normal/process_img_4.jpg";

import OurExpertise1 from "./SolutionReuseCom/OurExpertises/OurExpertise1";
import AuditTrailsIcon from "../../../Imges/QblockIcon/AuditTrailsIcon.jpg";
import AccessControlIcon from "../../../Imges/QblockIcon/AccessControlIcon.jpg";
import TalkToAbout2 from "./SolutionReuseCom/TalkToAboutAnyQuestion/TalkToAbout2";
import VersionControlIcon from "../../../Imges/QblockIcon/VersionControlIcon.jpg";
import DocumentsStorageIcon from "../../../Imges/QblockIcon/DocumentsStorageIcon.jpg";
import DocumentsRetrievalIcon from "../../../Imges/QblockIcon/DocumentsRetrievalIcon.jpg";
import CollaborationToolsIcon from "../../../Imges/QblockIcon/CollaborationToolsIcon.jpg";

import talkabout from "../../../Imges/akshar1.png";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "“Students can easily apply for education loans through the platform, partnering with registered schools and financial institutions. A transparent process keeps them informed at every stage, ensuring a smooth loan application experience.”",
    img: DocumentsStorageIcon,
    name: "Streamlined Loan Application Process",
    designation: "",
  },
  {
    text: "“Schools and institutions can configure loan settings to align with their guidelines and student needs. Both students and institutions can upload necessary documents for a smooth loan application and approval process.”",
    img: VersionControlIcon,
    name: "Customizable School Loan Settings",
    designation: "",
  },
  {
    text: "“Students can track loan details, monitor disbursements, and manage EMIs efficiently. Real-time updates ensure transparency, while flexible EMI scheduling helps them stay on top of repayments effortlessly and plan finances better.”",
    img: AccessControlIcon,
    name: "Loan Management & Tracking",
    designation: "",
  },
  {
    text: "“Schools can register and manage users, ensuring smooth communication between students and lenders. Students can access personal profiles to manage loan applications, fees, and transaction histories efficiently.”",
    img: DocumentsRetrievalIcon,
    name: "User Registration & Profile Management",
    designation: "",
  },
  {
    text: "“The Student Finance Management mobile app allows students and institutions to manage loans and finances on-the-go, providing easy access to loan details, EMI schedules, profile management, real-time updates, secure transactions, and more.”",
    img: CollaborationToolsIcon,
    name: "Mobile Accessibility",
    designation: "",
  },
  {
    text: "“Students and schools receive real-time loan status updates for smooth processing. The app offers customizable loan parameters, enabling flexible loan options tailored to the needs of both institutions and students.”",
    img: AuditTrailsIcon,
    name: "Robust Support for Students and Institutions",
    designation: "",
  },
];
const processSteps = [
  {
    id: 1,
    title: "Real-Time Loan Updates",
    step: "STEP-01",
    description:
      "Students and schools receive timely updates on loan status, ensuring smooth processing and transparency.",
    image: process_img_1,
    img: process_img_1,
    checklist: [
      "Instant Loan Status Alerts",
      "Seamless Communication",
      "Transparent Processing",
    ],
  },
  {
    id: 2,
    title: "Customizable Loan Parameters",
    step: "STEP-02",
    description:
      "Flexible loan offerings tailored to the needs of institutions and students for better financial management.",

    image: process_img_1,
    img: process_img_1,

    checklist: [
      "Institution-Specific Loan Configurations",
      "Student-Centric Loan Customization",
      "Enhanced Financial Flexibility",
    ],
  },
  {
    id: 3,
    title: "Student & Institution Dashboard",
    step: "STEP-03",
    description:
      "Students can track loans, manage EMIs, and access profiles, while institutions handle user management and communication.",

    image: process_img_1,
    img: process_img_1,

    checklist: [
      "Loan & EMI Tracking",
      "Profile & Transaction Management",
      "Seamless Institution-Student Interaction",
    ],
  },
  {
    id: 4,
    title: "Mobile-Friendly Loan Management",
    step: "STEP-04",
    description:
      "The Student Finance Management mobile app enables students and institutions to manage loans on-the-go with real-time access and secure transactions.",

    image: process_img_1,
    img: process_img_1,

    checklist: [
      "Real-Time Loan Access",
      "Secure Transactions",
      "Anywhere, Anytime Accessibility",
    ],
  },
];
const processStepsArray = [
  "Real-Time Loan Updates",
  "Customizable Loan Parameters",
  "Student & Institution Dashboard",
  "Mobile-Friendly Loan Management",
];

const TalkToAbout2Array = {
  img: talkabout,
  TalkToAboutArray: [
    {
      id: 1,
      question: "How does Student Finance Management simplify education loans?",
      answer:
        "Student Finance Management streamlines the loan application process by seamlessly connecting students, schools, and financial institutions, ensuring quick approvals and transparent transactions.",
    },
    {
      id: 2,
      question: "Can students track their loan disbursement?",
      answer:
        "Yes! Student Finance Management provides real-time loan status updates, EMI scheduling, and repayment tracking to keep students informed about their financial commitments.",
    },
    {
      id: 3,
      question: "Is there support for schools and institutions?",
      answer:
        "Absolutely! Schools can configure loan settings, upload necessary documents, and manage student applications, making the process more efficient and aligned with institutional policies.",
    },
    {
      id: 4,
      question: "How secure is Student Finance Management platform?",
      answer:
        "Student Finance Management ensures top-tier security with encrypted data storage, multi-factor authentication, and strict access controls to protect student and institution information.",
    },
  ],
};

const aboutData5 = [
  {
    id: 1,
    title: "Student Finance Management – Easy Education Loans ",
    highlight: " Students",
    description:
      "GenStree proudly presents Student Finance Management, a cutting-edge financial aid platform designed to simplify the process of securing education loans for students. With seamless integration between students, schools, and lenders, Student Finance Management ensures a transparent, efficient, and user-friendly solution for managing education loans.",
    checklist: [
      [
        { icon: feature_2_1, text: "Loan Application" },
        { icon: feature_2_2, text: "School Settings" },
      ],
      [
        { icon: feature_2_3, text: "Loan Tracking" },
        { icon: feature_2_4, text: "User Management" },
      ],
    ],
    btnText: "Download Akshar App",
    btnLink: "/contactUs",
    featureImg: feature_8_1,
    featureText: "Finance",
  },
];
const AksharPage = () => {
  return (
    <div>
      <MainHeading
        title="Student Finance Management"
        subtitle="Student Finance Management"
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

export default AksharPage;
