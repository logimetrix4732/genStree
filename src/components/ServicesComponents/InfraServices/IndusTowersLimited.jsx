import React from "react";
import ServiceAbout2 from "../ServicesResueCom/ServiceAbout2";
import ServiceAbout3 from "../ServicesResueCom/ServiceAbout3";
import MainHeading from "../../MainHeading";
import Services from "../../Services";
import FarmRenovation from "../ServicesResueCom/FarmRenovation";
import ServiceWhatWeDo2 from "../ServicesResueCom/ServiceWhatWeDo2";
import service_7_1 from "../../../assets/img/icon/service_7_1.svg";
import service_7_2 from "../../../assets/img/icon/service_7_2.svg";
import service_7_3 from "../../../assets/img/icon/service_7_3.svg";
import featureimg121 from "../../../assets/img/normal/feature-img-8-1.jpg";
import featureimg122 from "../../../assets/img/normal/feature-img-12-2.png";
import service_card_1 from "../../../assets/img/icon/service_card_1.svg";
import service_card_2 from "../../../assets/img/icon/service_card_2.svg";
import service_card_3 from "../../../assets/img/icon/service_card_3.svg";
import service_card_4 from "../../../assets/img/icon/service_card_4.svg";
import project_2_1 from "../../../assets/img/project/project_2_1.jpg";
import project_2_2 from "../../../assets/img/project/project_2_2.jpg";
import project_2_3 from "../../../assets/img/project/project_2_3.jpg";
import infra_why from "../../../Imges/infra_why.jpg";
import TalkToAbout from "../../SolutionComponents/StandaloneProducts/SolutionReuseCom/TalkToAboutAnyQuestion/TalkToAbout";
import visiondesk5 from "../../../Imges/visiondesk5.png";
import visiondesk6 from "../../../Imges/visiondesk6.png";
import indus from "../../../Imges/indus.png";
import indus1 from "../../../Imges/indus.jpg";
import indus2 from "../../../Imges/indus2.jpg";
import indus3 from "../../../Imges/indus1.jpg";
import indus5 from "../../../Imges/indus5.jpg";
const IndusTowersLimited = () => {
  const services = [
    {
      img: service_7_1,
      title: "500+ Towers Constructed",
      desc: "Successfully built and deployed over 500 telecom towers, ensuring seamless connectivity and network expansion.",
      link: "/contactUs",
    },
    {
      img: service_7_2,
      title: "7+ Regions Covered",
      desc: "Our infrastructure spans across 7+ regions, supporting telecom operations with robust and reliable solutions.",
      link: "/contactUs",
    },
    {
      img: service_7_3,
      title: "24/7 Cab Availability",
      desc: "Round-the-clock cab services to ensure smooth site operations and workforce mobility at all project locations.",
      link: "/contactUs",
    },
    {
      img: service_7_1,
      title: "150+ Skilled Technicians",
      desc: "A dedicated team of over 150 experienced technicians, ensuring high-quality execution and maintenance of telecom sites.",
      link: "/contactUs",
    },
  ];
  const features = [
    {
      id: 1,
      title: "Telecom Infrastructure Excellence",
      description:
        "Since 2017, we have been proudly associated with Indus Towers Limited, formerly known as Bharti Infratel Limited. This project is a key part of our business and focuses on strengthening telecom infrastructure across various locations. It encompasses two major departments: New Build Sites (NBS) and Upgrade, ensuring the seamless expansion and enhancement of telecom networks, and SitesCab Services, which streamline site management and operational efficiency. Our commitment to excellence drives us to deliver cutting-edge solutions that support the evolving needs of the telecom industry.",
      image1: indus2,
      image2: indus1,
      link: "/contactUs",
    },
  ];
  const projects = [
    {
      img: project_2_1,
      title: "New Construction",
      desc: "Development of Greenfield sites with modern infrastructure, ensuring efficiency and sustainability from the ground up.",
    },
    {
      img: project_2_2,
      title: "Maintenance",
      desc: "Implementation of preventive maintenance strategies to extend the lifespan of critical infrastructure and reduce downtime.",
    },
    {
      img: indus,
      title: "System Upgrades",
      desc: "Upgrading systems for 5G readiness, enhancing connectivity, and ensuring seamless integration with future technologies.",
    },
  ];

  const TalkToAboutAnyQuestion = {
    img: indus5,
    img1: indus3,
    questionAns: [
      {
        id: 1,
        question: "How does your telecom infrastructure ensure reliability?",
        answer:
          "We utilize state-of-the-art technology and a highly skilled team to construct and maintain telecom towers, ensuring uninterrupted connectivity.",
      },
      {
        id: 2,
        question: "What regions do you provide services in?",
        answer:
          "We have successfully expanded our infrastructure across 7+ regions, providing robust and reliable telecom solutions.",
      },
      {
        id: 3,
        question: "How do you support site operations?",
        answer:
          "Our 24/7 cab availability ensures seamless transportation of workforce and equipment, making operations more efficient.",
      },
      {
        id: 4,
        question: "What expertise does your team bring?",
        answer:
          "We have a dedicated team of 150+ skilled technicians, ensuring the highest quality standards in telecom site execution and maintenance.",
      },
    ],
  };

  return (
    <div>
      <MainHeading
        title="Indus Towers Limited"
        subtitle="Indus Towers Limited"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Services" }]}
      />
      <ServiceAbout2 features={features} />
      <ServiceWhatWeDo2
        services={services}
        sectionTitle="Our Achievements in Telecom Infrastructure"
      />
      <FarmRenovation projects={projects} space={true} />
      <TalkToAbout TalkToAboutAnyQuestion={TalkToAboutAnyQuestion} />
    </div>
  );
};

export default IndusTowersLimited;
