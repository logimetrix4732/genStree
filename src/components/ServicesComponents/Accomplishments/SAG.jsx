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
import blog_12_3 from "../../../assets/img/blog/blog_12_3.jpg";
import ServiceThreeCard from "../ServicesResueCom/ServiceThreeCard";
import counter_card_4_1 from "../../../assets/img/icon/counter_card_4_1.svg";
import counter_card_4_2 from "../../../assets/img/icon/counter_card_4_2.svg";
import counter_card_4_3 from "../../../assets/img/icon/counter_card_4_3.svg";
import sag from "../../../Imges/sag.png";
import Agricultural from "../../../Imges/Agricultural.jpg";
import Agricultural1 from "../../../Imges/Agricultural1.jpg";
import farmer from "../../../Imges/farmer3.png";
import sag1 from "../../../Imges/sag1.png";

const SAG = () => {
  const services = [
    {
      img: service_7_1,
      title: "AI (Artificial Insemination) Management",
      desc: "Tracks AI procedures, breeding history, and success rates, generating performance reports by date, breed, and village.",
      link: "/contactUs",
    },
    {
      img: service_7_2,
      title: "Farmer Management",
      desc: "Maintains detailed farmer profiles, tracks AI program participation, and monitors services provided to each farmer.",
      link: "/contactUs",
    },
    {
      img: service_7_3,
      title: "Village-Wise Tracking",
      desc: "Organizes data by village, analyzes AI program effectiveness across regions, and tracks farmer engagement levels.",
      link: "/contactUs",
    },
    {
      img: service_7_2,
      title: "Breeding Records Management",
      desc: "Maintains breed-specific data, monitors breeding success rates over time, and generates reports for breeding efficiency analysis.",
      link: "/contactUs",
    },
    {
      img: service_7_3,
      title: "Cattle Health & Vaccination Tracking",
      desc: "Maintains health records of cattle, tracks vaccination schedules, and alerts farmers about upcoming vaccinations to ensure livestock well-being.",
      link: "/contactUs",
    },
    {
      img: service_7_1,
      title: "Genetic Performance Analysis",
      desc: "Analyzes AI success rates based on genetics, tracks lineage and offspring performance, and provides insights to improve breeding strategies for higher productivity.",
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
          "Access to AI tracking, breeding insights, and personalized livestock data to enhance productivity and livestock management. Farmers can monitor cattle health, vaccination schedules, and breeding history. Get AI-driven recommendations for better livestock care, track milk production trends, and receive real-time alerts on disease outbreaks. The system helps optimize feeding schedules, improve genetic selection, and analyze fertility rates.",
        image: farmer,
        date: "25 Feb, 2024",
        author: "GenStree Team",
      },
      {
        id: 2,
        title: "Veterinarians",
        description:
          "Real-time monitoring of Artificial Insemination procedures and livestock health records to ensure optimal breeding success and cattle well-being.",
        image: Agricultural,
        date: "20 Apr, 2024",
        author: "AgriTech Team",
      },
      {
        id: 3,
        title: "Agricultural Organizations",
        description:
          "Comprehensive reports for strategic planning and sustainability in livestock management, ensuring data-driven decision-making for better outcomes.",
        image: Agricultural1,
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
      imgSrc: sag1,
      title: "SAG – System for Agricultural Growth",
      subtitle: "Strategic Implementation",
      description:
        "An AI-powered livestock management system designed to revolutionize Artificial Insemination tracking, farmer management, and breeding records, enabling real-time monitoring and strategic decision-making for agricultural productivity. Our team implemented cutting-edge technologies including AI-driven analytics, cloud-native architecture, and real-time data processing to ensure optimal performance and scalability. The project involved a cross-functional team of 12+ experts working in agile sprints to deliver measurable results within a 9-month timeframe.",
    },
  ];

  return (
    <div>
      <MainHeading
        title="System for Agricultural Growth"
        subtitle="An AI-powered Livestock Management System"
        breadcrumbs={[{ label: "What We Do", link: "/" }, { label: "SAG" }]}
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

export default SAG;
