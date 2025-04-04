import sai2 from "../../../Imges/sai2.png";

import faq_5_1 from "../../../Imges/sai1.png";
// import faq_5_1 from "../../../../../assets/img/normal/faq_5_1.jpg";
import faq_5_2 from "../../../Imges/faq_5_2.jpg";
import faq_5_3 from "../../../Imges/faq_5_3.jpg";

// import process_img_1 from "../../../assets/img/normal/process_img_1.jpg";
// import process_img_2 from "../../../assets/img/normal/process_img_2.jpg";
// import process_img_3 from "../../../assets/img/normal/process_img_3.jpg";
// import process_img_4 from "../../../assets/img/normal/process_img_4.jpg";

import React from "react";
import MainHeading from "../../MainHeading";
import KeyFeatures from "./SolutionReuseCom/KeyFeatures";
import about_13_1 from "../../../assets/img/normal/about_13_1.jpg";
import about_13_2 from "../../../assets/img/normal/about_13_2.jpg";
import about_13_3 from "../../../assets/img/normal/about_13_3.jpg";
import SolAbout4 from "./SolutionReuseCom/SolutionAbout/SolAbout4";
import process_img_1 from "../../../assets/img/normal/process_img_1.jpg";
import process_img_2 from "../../../assets/img/normal/process_img_2.jpg";
import process_img_3 from "../../../assets/img/normal/process_img_3.jpg";
import process_img_4 from "../../../assets/img/normal/process_img_4.jpg";

import AccessControlIcon from "../../../Imges/QblockIcon/AccessControlIcon.jpg";
import TalkToAbout1 from "./SolutionReuseCom/TalkToAboutAnyQuestion/TalkToAbout1";
import VersionControlIcon from "../../../Imges/QblockIcon/VersionControlIcon.jpg";
import DocumentsStorageIcon from "../../../Imges/QblockIcon/DocumentsStorageIcon.jpg";
import DocumentsRetrievalIcon from "../../../Imges/QblockIcon/DocumentsRetrievalIcon.jpg";
import WorkflowAutomationIcon from "../../../Imges/QblockIcon/WorkflowAutomationIcon.jpg";
import "swiper/css";
import "swiper/css/pagination";
import OurExpertise1 from "./SolutionReuseCom/OurExpertises/OurExpertise1";

const testimonials = [
  {
    text: "“Admins manage users, track attendance, handle fees, and generate reports. The system ensures role-based access, monitors payments, and provides academic, financial, and operational insights for efficient college management.”",
    img: DocumentsStorageIcon,
    name: "Comprehensive Admin Panel",
    designation: "",
  },
  {
    text: "“Teachers can schedule classes, manage attendance in real-time, and submit grades. Students can track performance, ensuring transparency, proper planning, effective learning, and efficient course management.”",
    img: VersionControlIcon,
    name: "Teacher Dashboard",
    designation: "",
  },
  {
    text: "“Students and parents can pay fees online, view class schedules, and track academic performance. This ensures convenience, organization, transparency, efficiency, accessibility, accuracy, and continuous improvement in learning.”",
    img: AccessControlIcon,
    name: "Student & Parent Portal",
    designation: "",
  },
  {
    text: "“The system supports multiple languages, real-time data sync, and mobile accessibility, ensuring seamless communication, accessibility, and convenience for admins, teachers, students, and parents across various devices and platforms.”",
    img: DocumentsRetrievalIcon,
    name: "Secure and User-Friendly Interface",
    designation: "",
  },
  {
    text: "“The system uses MySQL/PostgreSQL for reliable data management and features a web-based architecture, ensuring scalability, accessibility, and seamless performance across modern browsers on any internet-enabled device.”",
    img: WorkflowAutomationIcon,
    name: "Robust Back-End Architecture",
    designation: "",
  },
];
const processSteps = [
  {
    id: 1,
    title: "Comprehensive Admin Panel",
    step: "STEP-01",
    description:
      "Admins can manage all users, including students, teachers, and parents, ensuring smooth role-based access control. The admin panel also allows for fee structure setup, payment tracking, attendance monitoring, and report generation.",

    image: sai2,
    img: sai2,

    checklist: ["User Management", "Fee Management", "Attendance Tracking"],
  },
  {
    id: 2,
    title: "Teacher Dashboard",
    step: "STEP-02",
    description:
      "Teachers can easily schedule and manage classes, track attendance, and submit grades. The dashboard enhances communication and allows for real-time data syncing with students and parents.",

    image: sai2,
    img: sai2,

    checklist: [
      "Class Scheduling",
      "Attendance Management",
      "Grade Submission",
    ],
  },
  {
    id: 3,
    title: "Student & Parent Portal",
    step: "STEP-03",
    description:
      "Students and parents can access academic schedules, view fee payments, track performance, and stay organized with real-time updates and mobile accessibility.",

    image: sai2,
    img: sai2,

    checklist: [
      "Fee Payment",
      "Timetable & Schedule Viewing",
      "Performance Tracking",
    ],
  },
  {
    id: 4,
    title: "Secure & User-Friendly Interface",
    step: "STEP-04",
    description:
      "Sai-Software provides multi-language support, real-time data synchronization, and mobile accessibility to ensure a seamless user experience for all stakeholders.",

    image: sai2,
    img: sai2,

    checklist: [
      "Multi-language Support",
      "Real-Time Data Sync",
      "Mobile Accessibility",
    ],
  },
];

const processStepsArray = [
  "Comprehensive Admin Panel",
  "Teacher Dashboard",
  "Student & Parent Portal",
  "Secure & User-Friendly Interface",
];

const TalkToAbout1Array = {
  img: faq_5_1,
  img1: faq_5_2,
  img2: faq_5_3,
  TalkToAboutArray: [
    {
      question: "How does the platform benefit schools and colleges?",
      answer:
        "Our platform streamlines operations, improves communication, and enhances transparency in managing attendance, fees, and academic records efficiently.",
    },
    {
      question: "Is the platform accessible on mobile devices?",
      answer:
        "Yes, the system is fully responsive and accessible on mobile devices, allowing students, parents, and teachers to stay connected anytime, anywhere.",
    },
    {
      question: "How secure is the fee payment system?",
      answer:
        "The platform integrates secure online payment options, ensuring safe transactions and reducing delays in fee collection.",
    },
    {
      question: "Can students and parents track academic performance?",
      answer:
        "Yes, students and parents can monitor grades, attendance, and fee payments in real-time, ensuring complete transparency and better academic planning.",
    },
  ],
};

const aboutData4 = [
  {
    id: 1,
    title: "College Fee Management",
    secTitle: "Software College Fee Management System",
    description:
      "Sai-Software brings a revolutionary solution to enhance college operations with a focus on streamlining fee management, improving communication, and simplifying the administrative tasks for all stakeholders.",
    checklist: [
      ["Security and Compliance", "Task Management"],
      ["Reporting and Analytics", "Team Collaboration"],
    ],
    contactLink: "/contactUs",
    images: [about_13_1, about_13_2, about_13_3],
  },
];

const SaiSoftwarePage = () => {
  return (
    <div className="theme-blue3">
      <MainHeading
        title="College Fee Management"
        subtitle="College Fee Management"
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

export default SaiSoftwarePage;
