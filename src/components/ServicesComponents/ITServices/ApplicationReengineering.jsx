import React from "react";
import MainHeading from "../../MainHeading";
import blog_1_1 from "../../../assets/img/blog/blog_1_1.jpg";
import blog_1_2 from "../../../assets/img/blog/blog_1_2.jpg";
import blog_1_3 from "../../../assets/img/blog/blog_1_3.jpg";
import blog_1_4 from "../../../assets/img/blog/blog_1_4.jpg";
import SuccessStories from "../ServicesResueCom/SuccessStories";
import ServiceAboutUs1 from "../ServicesResueCom/ServiceAboutUs1";
import ServiceWhatWeDo1 from "../ServicesResueCom/ServiceWhatWeDo1";
import about_17_1 from "../../../assets/img/normal/about_17_1.png";
import about_17_2 from "../../../assets/img/normal/about_17_2.png";
import process_2_1 from "../../../assets/img/icon/process_2_1.svg";
import process_2_2 from "../../../assets/img/icon/process_2_2.svg";
import process_2_3 from "../../../assets/img/icon/process_2_3.svg";
import process_2_4 from "../../../assets/img/icon/process_2_4.svg";
import processshape from "../../../assets/img/bg/process-shape.png";
import reeng from "../../../Imges/reeng.png";
import reeng1 from "../../../Imges/reeng3.png";
import reeng2 from "../../../Imges/reeng2.png";
import reeng3 from "../../../Imges/reeng1.png";
import ApplicationRee from "../../../Imges/ApplicationRee1.jpg";
const ApplicationReengineering = () => {
  const blogData = {
    title: "Success Stories",
    title: "Recent Application Re-engineering Success",
    subtitle: "Real-World Transformations",
    shadowTitle: "Case Studies",
    posts: [
      {
        img: reeng1,
        date: "01 Assessment",
        comments: "Comprehensive system audit and gap analysis.",
        title: "Identifying Key Improvement Areas",
        link: "/contactUs",
        desc: "Thorough evaluation of existing architecture to identify gaps and modernization opportunities.",
      },
      {
        img: reeng,
        date: "02 Planning",
        comments: "Roadmap creation with modernization strategy.",
        title: "Structured Approach for Seamless Transition",
        link: "/contactUs",
        desc: "Developing a strategic roadmap for risk-free, incremental migration and seamless modernization.",
      },
      {
        img: reeng2,
        date: "03 Migration",
        comments: "Incremental transition to modern architecture.",
        title: "Smooth and Secure System Upgrades",
        link: "/contactUs",
        desc: "Executing a well-defined transformation process while ensuring business continuity and security.",
      },
      {
        img: reeng3,
        date: "04 Optimization",
        comments: "Performance tuning and cloud integration.",
        title: "Maximizing Efficiency and Reliability",
        link: "/contactUs",
        desc: "Enhancing scalability, speed, and adaptability for sustained performance in modern environments.",
      },
    ],
  };
  const aboutData = {
    title: "Application Re-engineering Services",
    subtitle: "What you get with GenStree application re-engineering",
    tags: ["MODERNIZATION", "PERFORMANCE", "SCALABILITY", "CLOUD MIGRATION"],
    description:
      "Our application re-engineering services are designed to transform your legacy software for superior user experience and improved scalability, security, and maintainability. By addressing and pre-empting performance issues through strategic updates to your architecture and technology stack, we ensure your applications run smoothly and efficiently, safeguarding your business operations from disruptions. Our expert cloud consulting and migration services allow you to enhance your software's scalability and flexibility further. This allows you to adapt swiftly to the ever-changing business environment without being held back by outdated legacy systems. Our multi-skilled team of software engineers also helps you streamline your entire SDLC to optimize application development, minimize downtime, and prevent revenue loss.",
    stats: [
      {
        number: "70%",
        unit: "+",
        title: "Faster Integration",
        desc: "Seamless migration and faster deployment of cloud-native architectures.",
      },
      {
        number: "3",
        unit: "x",
        title: "Speed Performance Boost",
        desc: "Optimized application execution with enhanced resource efficiency.",
      },
    ],
    client: {
      title: "99.9% Uptime Scalability & Flexibility",
      subtitle:
        "Ensure high availability and seamless scaling as business grows.",
      stars: 4.5,
    },
    images: {
      main: ApplicationRee,
      client: about_17_2,
    },
  };
  const stepsData = {
    title: "Our 4-Phase Modernization Approach",
    subtitle: "Work Process",
    shapeBg: processshape,
    steps: [
      {
        icon: process_2_1,
        heading: "Modernization",
        description:
          "Upgrade your legacy systems into modern, cloud-native architectures to enhance scalability, security, and efficiency while ensuring seamless business operations.",
      },
      {
        icon: process_2_2,
        heading: "Performance Boost",
        description:
          "Optimize application speed and resource utilization with cutting-edge enhancements, delivering 3x faster execution and improved user experience.",
      },
      {
        icon: process_2_3,
        heading: "Cost Efficiency",
        description:
          "Reduce maintenance costs and eliminate technical debt with optimized solutions, achieving up to 40% savings while ensuring long-term sustainability and growth.",
      },
      {
        icon: process_2_4,
        heading: "Scalability & Flexibility",
        description:
          "Empower your business with scalable and flexible applications that adapt to growing demands, ensuring 99.9% uptime and uninterrupted availability.",
      },
    ],
  };

  return (
    <div>
      <MainHeading
        title="Application Reengineering"
        subtitle="Application Reengineering"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Services" }]}
      />
      <ServiceAboutUs1 aboutData={aboutData} />
      <ServiceWhatWeDo1 stepsData={stepsData} />
      <SuccessStories data={blogData} />
    </div>
  );
};

export default ApplicationReengineering;
