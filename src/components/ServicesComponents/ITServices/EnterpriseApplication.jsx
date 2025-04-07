import React from "react";
import SEO from "../../../Imges/SEO1.jpg";
import MainHeading from "../../MainHeading";
import Digital from "../../../Imges/Digital.jpg";
import ServiceAboutUs from "../ServicesResueCom/ServiceAboutUs";
import SuccessStories from "../ServicesResueCom/SuccessStories";
import ServiceLanguage from "../ServicesResueCom/ServiceLanguage";
import ServiceWhatWeDo2 from "../ServicesResueCom/ServiceWhatWeDo2";
import service_7_1 from "../../../assets/img/icon/service_7_1.svg";
import service_7_2 from "../../../assets/img/icon/service_7_2.svg";
import service_7_3 from "../../../assets/img/icon/service_7_3.svg";
import DataCentralization from "../../../Imges/DataCentralization.jpg";
import ScalabilitySecurity from "../../../Imges/ScalabilitySecurity.png";
import enterprise from "../../../Imges/enterprise.png";
import enterprise1 from "../../../Imges/enterprise1.png";
import enterprise2 from "../../../Imges/enterprise2.png";
import enterprise3 from "../../../Imges/enterprise3.png";
import enterprise4 from "../../../Imges/enterprise4.png";
import ProductOriented1 from "../../../Imges/ProductOriented2.png";
const EnterpriseApplication = () => {
  const aboutFeatures = {
    title: "Enterprise Application Solutions",
    heading: "What you get with GenStree enterprise applications",
    aboutus:
      "We provide top-tier enterprise solutions with customization options and expert support. With 12+ years of experience, we specialize in custom software and seamless integrations across industries like finance, logistics, healthcare, and more. Our certified team partners with SAP, Microsoft, Odoo, and Salesforce to deliver secure, high-performance solutions.",
    img: [enterprise4, ProductOriented1],
    asd: [
      {
        title: "Fast & Flexible",
        text: "Quick project initiation with a structured, budget-friendly approach.",
      },
      {
        title: "Business-Centric",
        text: "Tailored solutions that align with your goals and ensure maximum value.",
      },
    ],
  };
  const services = [
    {
      img: service_7_1,
      title: "ERP Solutions",
      desc: "Stop chasing leads and attract them with targeted campaigns. GenStree's suite of tools, including...",
      link: "/contactUs",
    },
    {
      img: service_7_2,
      title: "CRM Systems",
      desc: "Increase conversions with AI-powered insights and automation tools for your business success...",
      link: "/contactUs",
    },
    {
      img: service_7_3,
      title: "SCM Platforms",
      desc: "Maximize your return on investment with data-driven marketing strategies and AI-driven solutions...",
      link: "/contactUs",
    },
  ];
  const languages = [
    {
      name: "Digital Transformation",
      img: SEO,
      desc: "Modernize legacy systems with cloud-native architectures",
    },
    {
      name: "Process Optimization",
      img: Digital,
      desc: "Automate workflows across business units",
    },
    {
      name: "Data Centralization",
      img: DataCentralization,
      desc: "Unified data platform for enterprise-wide insights",
    },
    {
      name: "Scalability & Security",
      img: ScalabilitySecurity,
      desc: "Ensure enterprise growth with robust, secure, and scalable solutions",
    },
  ];
  const blogData = {
    title: "Enterprise Success Stories",
    subtitle: "Success & Stories",
    shadowTitle: "Success",
    posts: [
      {
        img: enterprise,
        date: "15 Jan, 2024",
        comments: 2,
        title: "Global ERP Implementation",
        link: "/contactUs",
        desc: "40% operational efficiency improvement through process automation and data centralization.",
      },
      {
        img: enterprise1,
        date: "16 Jan, 2024",
        comments: 3,
        title: "Enterprise CRM Integration",
        link: "/contactUs",
        desc: "25% increase in sales conversion by streamlining customer interactions and lead management.",
      },
      {
        img: enterprise2,
        date: "17 Jan, 2024",
        comments: 2,
        title: "Cloud HR System",
        link: "/contactUs",
        desc: "Enhanced workforce productivity with 99.9% uptime and AI-driven insights, improving collaboration.",
      },
      {
        img: enterprise3,
        date: "19 Jan, 2024",
        comments: 4,
        title: "Supply Chain AI",
        link: "/contactUs",
        desc: "30% reduction in logistics costs through AI-driven demand forecasting, enhancing efficiency and scalability.",
      },
    ],
  };
  return (
    <div>
      <MainHeading
        title="Enterprise Application Solutions"
        subtitle="Enterprise Application Solutions"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Services" }]}
      />
      <ServiceAboutUs aboutFeatures={aboutFeatures} hide={true} />
      <ServiceWhatWeDo2
        services={services}
        sectionTitle="Enterprise Application Solutions"
      />
      <ServiceLanguage languages={languages} />
      <SuccessStories data={blogData} />
    </div>
  );
};

export default EnterpriseApplication;
