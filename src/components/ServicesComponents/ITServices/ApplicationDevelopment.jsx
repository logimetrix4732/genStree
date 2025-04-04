import React from "react";
import MainHeading from "../../MainHeading";
import node from "../../../Imges/language/node.png";
import php3 from "../../../Imges/language/php3.png";
import java from "../../../Imges/language/java.png";
import react from "../../../Imges/language/react.png";
import Python from "../../../Imges/language/Python.png";
import Flutter from "../../../Imges/language/Flutter.png";
import Angular from "../../../Imges/language/Angular.png";
import android1 from "../../../Imges/language/android1.png";
import ServiceAboutUs from "../ServicesResueCom/ServiceAboutUs";
import ServiceWhatWeDo from "../ServicesResueCom/ServiceWhatWeDo";
import ServiceLanguage from "../ServicesResueCom/ServiceLanguage";
import service_6_1 from "../../../assets/img/icon/service_6_1.svg";
import service_6_2 from "../../../assets/img/icon/service_6_2.svg";
import service_6_3 from "../../../assets/img/icon/service_6_3.svg";
import service_6_4 from "../../../assets/img/icon/service_6_4.svg";
import process_box_3_1 from "../../../assets/img/icon/process_box_3_1.svg";
import process_box_3_2 from "../../../assets/img/icon/process_box_3_2.svg";
import process_box_3_3 from "../../../assets/img/icon/process_box_3_3.svg";
import service_featured_1 from "../../../assets/img/icon/service_featured_1.svg";
import service_featured_2 from "../../../assets/img/icon/service_featured_2.svg";
import service_featured_3 from "../../../assets/img/icon/service_featured_3.svg";
import service_featured_4 from "../../../assets/img/icon/service_featured_4.svg";
import OurApplicationDevelopment from "../ServicesResueCom/OurApplicationDevelopment";
import OurDevelopmentMethodology from "../ServicesResueCom/OurDevelopmentMethodology";
import about_14_1 from "../../../assets/img/normal/about_14_1.jpg";
import about_14_2 from "../../../assets/img/normal/about_14_2.jpg";
import ApplicationDeve from "../../../Imges/ApplicationDeve.png";
import ApplicationDeve1 from "../../../Imges/ApplicationDeve1.png";
const ApplicationDevelopment = () => {
  const aboutFeatures = {
    title: "Application Development",
    heading: "What you can get with custom application development",
    img: [ApplicationDeve, ApplicationDeve1],
    aboutus:
      "With decades of experience in software development across various industries, we provide specialized technology expertise. Our solutions integrate seamlessly with existing systems, ensuring long-term efficiency. Harnessing the power of Telecommunication & Computer Networking, Banking Software, AgriTech, EduTech, Smart Cities Solutions, AI, data analytics, machine learning, cybersecurity, and cloud consulting, we deliver future-proof solutions tailored to your needs.",
    asd: [
      {
        title: "Free Consultation",
        text: "IT agencies usually offer free consultations to understand a potential.",
      },
      {
        title: "Active Team",
        text: "This term typically applies to membership programs where pay",
      },
    ],
  };
  const services = [
    {
      img: service_featured_1,
      title: "Scalable Solutions",
      description:
        "Build applications that grow with your business, ensuring long-term success, adaptability, efficiency, and seamless performance.",
      link: "/contactUs",
    },
    {
      img: service_featured_2,
      title: "Robust Security",
      description:
        "Protect your data with enterprise-grade security measures, encryption, compliance, risk management, and advanced threat detection systems.",
      link: "/contactUs",
    },
    {
      img: service_featured_3,
      title: "Cloud Integration",
      description:
        "Seamlessly integrate with cloud platforms for maximum flexibility, scalability, efficiency, collaboration, automation, and optimized resource allocation.",
      link: "/contactUs",
    },
    {
      img: service_featured_4,
      title: "Data-Driven Insights",
      description:
        "Leverage analytics to make informed business decisions, enhance productivity, optimize growth, maximize revenue, and improve operational efficiency.",
      link: "/contactUs",
    },
  ];
  const applicationservices = [
    {
      id: 1,
      icon: service_6_1,
      title: "Cross-Platform Development",
      description:
        "Leverage our expertise in React Native and Flutter to create seamless, high-performance applications for both iOS and Android platforms effortlessly with optimal performance.",
    },
    {
      id: 2,
      icon: service_6_2,
      title: "Web Application Development",
      description:
        "Build fast, scalable, and responsive web applications with modern frameworks like React.js, Angular, and Vue.js to enhance user engagement and business growth.",
    },
    {
      id: 3,
      icon: service_6_3,
      title: "Cloud-Based Solutions",
      description:
        "Develop and deploy scalable, secure cloud applications on AWS, Azure, and Google Cloud with seamless third-party service integrations for better efficiency and flexibility.",
    },
    {
      id: 4,
      icon: service_6_4,
      title: "Secure Application Development",
      description:
        "Implement robust security features, including authentication, data encryption, threat detection, and compliance with industry security standards to ensure data protection.",
    },
    {
      id: 5,
      icon: service_6_1,
      title: "Enterprise Software Solutions",
      description:
        "Design and develop custom, feature-rich enterprise applications to streamline business processes, enhance productivity, and drive digital transformation for organizations worldwide.",
    },
    {
      id: 6,
      icon: service_6_2,
      title: "AI & ML Integration",
      description:
        "Enhance your applications with AI-driven insights, automation, and predictive analytics using cutting-edge deep learning and machine learning algorithms for smarter decision-making.",
    },
  ];
  const languages = [
    {
      name: "Node.js",
      img: node,
      desc: "Fast, scalable, event-driven, non-blocking, real-time, API, JavaScript, backend, lightweight, efficient.",
    },
    {
      name: "React.js",
      img: react,
      desc: "Component-based, declarative, UI-library, virtual-DOM, JSX, reusable, hooks, frontend, SPA, interactive.",
    },
    {
      name: "Angular",
      img: Angular,
      desc: "TypeScript, MVC, two-way-binding, powerful, scalable, CLI, modular, enterprise, responsive.",
    },
    {
      name: "Android",
      img: android1,
      desc: "Mobile, Java, Kotlin, Play-Store, native, performance, UI, app-development, responsive, secure.",
    },
    {
      name: "PHP",
      img: php3,
      desc: "Server-side, dynamic, scripting, MySQL, WordPress, Laravel, secure, flexible, backend, open-source.",
    },
    {
      name: "Flutter",
      img: Flutter,
      desc: "Cross-platform, UI-kit, Dart, widgets, fast, native-like, mobile, web, performance, beautiful.",
    },
    {
      name: "Python",
      img: Python,
      desc: "Versatile, AI, data-science, Django, Flask, scripting, automation, machine-learning, backend, readable.",
    },
    {
      name: "Java",
      img: java,
      desc: "OOP, secure, cross-platform, JVM, backend, Android, enterprise, Spring, scalable, robust.",
    },
  ];
  const processData = {
    title: "Our Development Methodology",
    subtitle: "Structured Approach for Success",
    description:
      "We follow a systematic and efficient methodology to ensure seamless project execution and high-quality results.",
    buttonText: "Get Started Now",
    buttonLink: "/contactUs",
    steps: [
      {
        id: 1,
        img: process_box_3_1,
        title: "Discovery & Planning",
        desc: "Requirement analysis, project scoping, strategic planning, and ensuring application quality through rigorous testing and debugging.",
        link: "/contactUs",
      },
      {
        id: 2,
        img: process_box_3_2,
        title: "UI/UX Design & Development",
        desc: "Crafting intuitive and visually appealing designs while implementing robust and scalable solutions using modern frameworks.",
        link: "/contactUs",
      },
      {
        id: 3,
        img: process_box_3_3,
        title: "Deployment & Synchronization",
        desc: "Ensuring seamless integration, cloud synchronization, and security for optimal performance and scalability.",
        link: "/contactUs",
      },
    ],
  };
  return (
    <div>
      <MainHeading
        title="Application Development"
        subtitle="Application Development"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Services" }]}
      />
      <ServiceAboutUs aboutFeatures={aboutFeatures} />
      <ServiceWhatWeDo services={services} />
      <OurApplicationDevelopment applicationservices={applicationservices} />
      <ServiceLanguage languages={languages} />
      <OurDevelopmentMethodology processData={processData} />
    </div>
  );
};

export default ApplicationDevelopment;
