import React from "react";

import MainHeading from "../../MainHeading";
import about_18_1 from "../../../assets/img/normal/about_18_1.jpg";
import about_18_2 from "../../../assets/img/normal/about_18_2.jpg";
import process_img_1 from "../../../assets/img/normal/process_img_1.jpg";
import process_img_2 from "../../../assets/img/normal/process_img_2.jpg";
import process_img_3 from "../../../assets/img/normal/process_img_3.jpg";
import process_img_4 from "../../../assets/img/normal/process_img_4.jpg";
import KeyFeatures from "../StandaloneProducts/SolutionReuseCom/KeyFeatures";
import AccessControlIcon from "../../../Imges/QblockIcon/AccessControlIcon.jpg";
import VersionControlIcon from "../../../Imges/QblockIcon/VersionControlIcon.jpg";
import DocumentsStorageIcon from "../../../Imges/QblockIcon/DocumentsStorageIcon.jpg";
import SolAbout3 from "../StandaloneProducts//SolutionReuseCom/SolutionAbout/SolAbout3";
import DocumentsRetrievalIcon from "../../../Imges/QblockIcon/DocumentsRetrievalIcon.jpg";
import WorkflowAutomationIcon from "../../../Imges/QblockIcon/WorkflowAutomationIcon.jpg";
import OurExpertise1 from "../StandaloneProducts//SolutionReuseCom/OurExpertises/OurExpertise1";
import TalkToAbout from "../StandaloneProducts//SolutionReuseCom/TalkToAboutAnyQuestion/TalkToAbout";
import visiondesk5 from "../../../Imges/visiondesk5.png";
import visiondesk6 from "../../../Imges/visiondesk6.png";
import "swiper/css";
import "swiper/css/pagination";
const EklavyaPage = () => {
  const testimonials = [
    {
      text: "“Seamlessly manage and streamline school operations, from administrative tasks to student performance tracking, with our all-in-one ERP system designed to improve efficiency for principals, teachers, and staff, ensuring smooth school management.”",
      img: DocumentsStorageIcon,
      name: "Eklavya School Management Solution",
      designation: "",
    },
    {
      text: "“Improve communication between teachers, students, and parents through real-time data access, ensuring better learning outcomes, smoother administrative processes, and enhanced collaboration to foster a better learning environment.”",
      img: VersionControlIcon,
      name: "Eklavya Communication Tools",
      designation: "",
    },
    {
      text: "“Automate routine administrative tasks, saving time and reducing errors, while tracking attendance, grades, and reports efficiently, making school management hassle-free for authorities, and improving overall operational efficiency.”",
      img: AccessControlIcon,
      name: "Eklavya Administration Automation",
      designation: "",
    },
    {
      text: "“Gain valuable insights into student performance, track academic progress, and optimize school operations with customizable reports and dashboards that help administrators make informed decisions for continuous improvement.”",
      img: DocumentsRetrievalIcon,
      name: "Eklavya Analytics",
      designation: "",
    },
    {
      text: "“Access all your school data securely from anywhere, anytime with a cloud-based solution that ensures scalability, efficiency, data security, and seamless integration across all devices, improving school management operations.”",
      img: WorkflowAutomationIcon,
      name: "Eklavya Cloud Solution",
      designation: "Cloud-Based & Mobile Access",
    },
  ];
  const processSteps = [
    {
      id: 1,
      title: "School Management Simplified",
      step: "STEP-01",
      description:
        "Effortlessly manage school operations, including student records, attendance, grades, and communication with a seamless ERP solution.",
      image: process_img_1,
      img: process_img_1,
      checklist: [
        "Real-time Data Management",
        "Automated Administrative Tasks",
        "Enhanced Communication between Teachers, Parents, and Students",
      ],
    },
    {
      id: 2,
      title: "Student Performance Tracking",
      step: "STEP-02",
      description:
        "Track student academic progress, generate reports, and analyze performance trends to improve teaching strategies and student outcomes.",
      image: process_img_2,
      img: process_img_2,
      checklist: [
        "Track Academic Progress",
        "Generate Customizable Reports",
        "Data-Driven Decision Making",
      ],
    },
    {
      id: 3,
      title: "Insightful Data Analytics",
      step: "STEP-03",
      description:
        "Generate powerful analytics on student performance, attendance, and school operations to drive informed decision-making.",
      image: process_img_3,
      img: process_img_3,
      checklist: [
        "Track Key Metrics",
        "Predictive Analytics for Better Planning",
        "Customizable Dashboards",
      ],
    },
    {
      id: 4,
      title: "Cloud-Based Access",
      step: "STEP-04",
      description:
        "Access school data from anywhere with cloud-based storage and a mobile-friendly design, ensuring security and scalability.",
      image: process_img_4,
      img: process_img_4,
      checklist: [
        "Secure Cloud Storage",
        "Cross-Device Compatibility",
        "24/7 Access to Data",
      ],
    },
  ];
  const processStepsArray = [
    "Smart School Data Management",
    "Efficient Reporting & Analytics",
    "Collaborative Communication",
    "Cloud-Based Access",
  ];
  const TalkToAboutAnyQuestion = {
    img: visiondesk5,
    img1: visiondesk6,
    questionAns: [
      {
        id: 1,
        question: "How does Eklavya improve school operations?",
        answer:
          "Eklavya automates routine administrative tasks, tracks student performance, and ensures smooth communication between all stakeholders, making school operations more efficient.",
      },
      {
        id: 2,
        question: "Can Eklavya help with student performance analysis?",
        answer:
          "Yes! Eklavya provides in-depth analytics, performance tracking, and customizable reports to monitor and improve student progress.",
      },
      {
        id: 3,
        question: "How does Eklavya ensure data security?",
        answer:
          "We use encrypted cloud storage and role-based access control to ensure that school data remains secure and confidential.",
      },
      {
        id: 4,
        question: "Can Eklavya be accessed remotely?",
        answer:
          "Yes! Eklavya is cloud-based, so you can access the system anytime and from anywhere with a mobile-friendly interface for ease of use.",
      },
    ],
  };
  const aboutData3 = [
    {
      id: 1,
      images: [about_18_1, about_18_2],
      experienceCount: 50,
      experienceText: "Happy Clients",
      shadowTitle: "Eklavya School",
      subTitle: "Comprehensive ERP for Schools",
      secTitle: "Simplifying School Management with Technology",
      description:
        "Eklavya is a powerful school management ERP system that simplifies school administration by automating tasks, tracking student performance, and improving communication.",
      checklist: [
        ["Automated Administrative Tasks", "Real-time Student Data Management"],
        ["Customizable Reports", "Efficient Parent-Teacher Communication"],
      ],
      contactLink: "/contactUs",
      phone: "+993-554-0006",
    },
  ];

  return (
    <div>
      <MainHeading
        title="Eklavya"
        subtitle="Eklavya"
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

export default EklavyaPage;
