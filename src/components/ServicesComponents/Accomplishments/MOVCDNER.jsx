import React from "react";
import HowWeDoItComponents from "../../HowWeDoItComponents/HowWeDoItComponents";
import MainHeading from "../../MainHeading";
import ServiceWhatWeDo2 from "../ServicesResueCom/ServiceWhatWeDo2";
import service_7_1 from "../../../assets/img/icon/service_7_1.svg";
import service_7_2 from "../../../assets/img/icon/service_7_2.svg";
import service_7_3 from "../../../assets/img/icon/service_7_3.svg";
import BusinessPlanning from "../../HowWeDoItComponents/BusinessPlanning";
import blog_12_1 from "../../../assets/img/blog/blog_12_1.jpg";
import blog_1_2 from "../../../assets/img/blog/blog_1_2.jpg";
import ServiceThreeCard from "../ServicesResueCom/ServiceThreeCard";
import counter_card_4_1 from "../../../assets/img/icon/counter_card_4_1.svg";
import counter_card_4_2 from "../../../assets/img/icon/counter_card_4_2.svg";
import counter_card_4_3 from "../../../assets/img/icon/counter_card_4_3.svg";
import movcdner from "../../../Imges/movcdner.png";
import farmer from "../../../Imges/farmer.png";

const MOVCDNER = () => {
  const services = [
    {
      img: service_7_1,
      title: "Real-time Organic Farming Monitoring",
      desc: "Track organic farming activities in real-time to ensure sustainable practices and optimize productivity.",
      link: "/contactUs",
    },
    {
      img: service_7_2,
      title: "Seamless Government Database Integration",
      desc: "Effortlessly exchange data with government systems for compliance, transparency, and better decision-making.",
      link: "/contactUs",
    },
    {
      img: service_7_3,
      title: "Mobile-Friendly Farmer Access",
      desc: "Enable farmers to access crucial information on-the-go with an intuitive mobile-friendly interface.",
      link: "/contactUs",
    },
    {
      img: service_7_2,
      title: "Data Analytics for Policymakers",
      desc: "Provide policymakers with actionable insights through a powerful analytics dashboard for better planning.",
      link: "/contactUs",
    },
    {
      img: service_7_3,
      title: "AI-Driven Crop Health Analysis",
      desc: "Leverage AI insights to monitor soil health, detect pests, and analyze crop conditions for improved yield.",
      link: "/contactUs",
    },
    {
      img: service_7_1,
      title: "Weather-Based Farming Recommendations",
      desc: "Offer farmers real-time weather updates and customized farming advice to optimize agricultural practices.",
      link: "/contactUs",
    },
  ];
  const businessInfo = {
    title: "Role-Based Access Matrix",
    Subtitle: "Secure & Efficient Platform Utilization",
    BusinessData: [
      {
        id: 1,
        title: "Farmers",
        description:
          "Access to essential farming resources, real-time weather updates, and market prices to enhance productivity. Get expert advice, monitor crop health, optimize irrigation, access government schemes, receive pest alerts, and track soil quality insights. Utilize AI-driven analytics for better yield predictions, manage farm expenses efficiently, access digital marketplaces for selling produce, receive automated fertilizer recommendations, explore modern farming techniques, track climate patterns, and get real-time alerts on disease outbreaks.",
        image: farmer,
        date: "25 Feb, 2024",
        author: "Logimetrix Team",
      },
      {
        id: 2,
        title: "Policymakers",
        description:
          "Comprehensive dashboard for tracking farming trends, analyzing policy impact, and making data-driven decisions. Includes market insights, subsidy distribution, and climate adaptation strategies.",
        image: blog_12_1,
        date: "20 Apr, 2024",
        author: "AgriTech Team",
      },
      {
        id: 3,
        title: "Admins",
        description:
          "Full control over user roles, content moderation, and system configurations to maintain platform security. Supports audit logs, automated reports, and user activity tracking.",
        image: blog_1_2,
        date: "20 Apr, 2024",
        author: "AgriTech Team",
      },
    ],
  };
  const cardData = [
    {
      icon: counter_card_4_1,
      number: "300%",
      title: "Increase in Operational Efficiency",
      description:
        "Achieved through automation, optimized workflows, and real-time insights, improving productivity across processes.",
    },
    {
      icon: counter_card_4_2,
      number: "99.9%",
      title: "System Uptime Reliability",
      description:
        "Ensuring maximum uptime with advanced infrastructure, proactive monitoring, and fail-safe mechanisms.",
    },
    {
      icon: counter_card_4_3,
      number: "50%",
      title: "Reduction in Manual Processes",
      description:
        "Automating tasks, enhancing workflow efficiency, and minimizing human intervention for accuracy.",
    },
  ];
  const howWeDoItData = [
    {
      id: 1,
      imgSrc: movcdner,
      title: "MOVCDNER - Empowering Organic Farming in the North East",
      subtitle: "Strategic Implementation",
      description:
        "A comprehensive digital solution to empower organic farming practices in the North East region of India. Our team implemented cutting-edge technologies including AI-driven analytics, cloud-native architecture, and real-time data processing to ensure optimal performance and scalability. The project involved a cross-functional team of 12+ experts working in agile sprints to deliver measurable results within a 9-month timeframe.",
    },
  ];
  return (
    <div>
      <MainHeading
        title="MOVCDNER"
        subtitle="Mission Organic Value Chain Development for North East Region"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Services" }]}
      />
      <HowWeDoItComponents howWeDoItData={howWeDoItData} />
      <ServiceWhatWeDo2
        services={services}
        sectionTitle="Our Product Delivery Features"
      />
      <BusinessPlanning blogData={businessInfo} />
      <ServiceThreeCard cardData={cardData} space={true} />
    </div>
  );
};

export default MOVCDNER;
