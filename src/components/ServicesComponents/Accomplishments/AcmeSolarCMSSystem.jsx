import React from "react";
import MainHeading from "../../MainHeading";
import ServiceWhatWeDo2 from "../ServicesResueCom/ServiceWhatWeDo2";
import BusinessPlanning from "../../HowWeDoItComponents/BusinessPlanning";
import ServiceThreeCard from "../ServicesResueCom/ServiceThreeCard";
import SolAbout4 from "../../SolutionComponents/StandaloneProducts/SolutionReuseCom/SolutionAbout/SolAbout4";
import service_7_1 from "../../../assets/img/icon/service_7_1.svg";
import service_7_2 from "../../../assets/img/icon/service_7_2.svg";
import service_7_3 from "../../../assets/img/icon/service_7_3.svg";
import counter_card_4_1 from "../../../assets/img/icon/counter_card_4_1.svg";
import counter_card_4_2 from "../../../assets/img/icon/counter_card_4_2.svg";
import counter_card_4_3 from "../../../assets/img/icon/counter_card_4_3.svg";
import blog_12_1 from "../../../assets/img/blog/blog_12_1.jpg";
import blog_12_3 from "../../../assets/img/blog/blog_12_3.jpg";
import solar from "../../../Imges/solar2.png";
import solar1 from "../../../Imges/solar1.png";
import solar2 from "../../../Imges/solar3.png";
import acme from "../../../Imges/acme.png";
import acme2 from "../../../Imges/acme2.png";
import acme3 from "../../../Imges/acme3.png";

const AcmeSolarCMSSystem = () => {
  const services = [
    {
      img: service_7_1,
      title: "SCADA-Enabled Real-Time Monitoring",
      desc: "Monitor power output, temperature, and environmental data with real-time tracking.",
      link: "/contactUs",
    },
    {
      img: service_7_2,
      title: "AI-Driven Predictive Maintenance",
      desc: "Utilize AI-powered insights to forecast maintenance and prevent system failures.",
      link: "/contactUs",
    },
    {
      img: service_7_3,
      title: "Comprehensive Reporting & Analytics",
      desc: "Generate in-depth reports and analytics for optimizing performance and strategy.",
      link: "/contactUs",
    },
    {
      img: service_7_1,
      title: "Advanced IoT & Cloud-Based Monitoring",
      desc: "Seamlessly transmit data across sites with cloud-enabled dashboards and IoT sensors.",
      link: "/contactUs",
    },
    {
      img: service_7_2,
      title: "Automated Fault Detection & Alerts",
      desc: "Detect faults instantly with AI diagnostics and receive real-time alert notifications.",
      link: "/contactUs",
    },
    {
      img: service_7_3,
      title: "Remote Control & Optimization",
      desc: "Remotely adjust solar plant parameters to maximize efficiency and reduce downtime.",
      link: "/contactUs",
    },
  ];
  const businessInfo = {
    title: "Role-Based Access Control",
    Subtitle: "Secure and Streamlined User Management",
    BusinessData: [
      {
        id: 1,
        title: "Administrators",
        description:
          "Oversee system configurations, data insights, and generate reports for seamless operations. Manage user roles, security protocols, and ensure compliance with policies. Handle data integrity, oversee audits, optimize workflows, and enhance system performance.",
        image: acme2,
        date: "25 Feb, 2024",
        author: "Acme Team",
      },
      {
        id: 2,
        title: "Plant Operators",
        description:
          "Monitor live performance metrics, receive alerts, and manage plant operations efficiently.",
        image: acme,
        date: "20 Apr, 2024",
        author: "Solar Experts",
      },
      {
        id: 3,
        title: "Data Analysts",
        description:
          "Analyze trends, generate efficiency reports, and provide insights for better energy management.",
        image: acme3,
        date: "20 Apr, 2024",
        author: "Analytics Team",
      },
    ],
  };
  const cardData = [
    {
      icon: counter_card_4_1,
      number: "300%",
      title: "Boost in Operational Efficiency",
      description:
        "Automation and real-time insights lead to a threefold increase in efficiency.",
    },
    {
      icon: counter_card_4_2,
      number: "99.9%",
      title: "Uptime Reliability",
      description:
        "Ensuring high availability with advanced monitoring and failover mechanisms.",
    },
    {
      icon: counter_card_4_3,
      number: "50%",
      title: "Reduction in Manual Effort",
      description:
        "Streamlined workflows and automated tasks minimize manual intervention.",
    },
  ];
  const aboutData4 = [
    {
      id: 1,
      title: "AI-Powered Optimization",
      secTitle: "Enhancing Solar Efficiency",
      description:
        "Harness AI-driven analytics to maximize energy yield, optimize resources, and minimize losses. Our system leverages real-time data processing and predictive algorithms to enhance operational performance, reduce downtime, and ensure sustainable energy management.",
      checklist: [
        ["Energy Optimization", "Fault Detection"],
        ["Performance Tracking", "Smart Distribution"],
      ],
      contactLink: "/contactUs",
      images: [solar1, solar, solar2],
    },
  ];
  return (
    <div>
      <MainHeading
        title="Acme Solar CMS System"
        subtitle="Optimizing the Future of Solar Energy"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Services" }]}
      />
      <SolAbout4 aboutData={aboutData4} nospace={true} />
      <ServiceWhatWeDo2 services={services} sectionTitle="Key Features" />
      <BusinessPlanning blogData={businessInfo} />
      <ServiceThreeCard cardData={cardData} space={true} />
    </div>
  );
};

export default AcmeSolarCMSSystem;
