import React from "react";
import about_18_1 from "../../../assets/img/normal/about_18_1.jpg";
import about_18_2 from "../../../assets/img/normal/about_18_2.jpg";
import about_11_1 from "../../../assets/img/normal/about_11_1.jpg";
import about_11_2 from "../../../assets/img/normal/about_11_2.jpg";
import about_11_3 from "../../../assets/img/normal/about_11_3.jpg";
import title_shape_2 from "../../../assets/img/theme-img/title_shape_2.svg";
import SolAbout1 from "../../SolutionComponents/StandaloneProducts/SolutionReuseCom/SolutionAbout/SolAbout1";
import MainHeading from "../../MainHeading";
import faq_11_1 from "../../../assets/img/normal/faq_11_1.png";
import SolAbout3 from "../../SolutionComponents/StandaloneProducts/SolutionReuseCom/SolutionAbout/SolAbout3";
import TalkToAbout5 from "../../SolutionComponents/StandaloneProducts/SolutionReuseCom/TalkToAboutAnyQuestion/TalkToAbout5";
import ServiceThreeCard from "../ServicesResueCom/ServiceThreeCard";
import counter_card_4_1 from "../../../assets/img/icon/counter_card_4_1.svg";
import counter_card_4_2 from "../../../assets/img/icon/counter_card_4_2.svg";
import counter_card_4_3 from "../../../assets/img/icon/counter_card_4_3.svg";
import OrganicHealth4 from "../../../Imges/OrganicHealth4.png";
const OrganicHealthProductsInitiative = () => {
  const aboutData1 = {
    title: "Organic Health",
    subtitle: "Organic Health Products Initiative",
    description:
      "In 2024, Logimetrix Techsolutions Pvt. Ltd. partnered with Syscom Organic World Pvt. Ltd. to enter the organic health products sector. This initiative goes beyond sustainable procurement and distribution, covering a wide range of organic cosmetic products. Our goal is not just to bring high-quality, chemical-free products to the market but also to develop a strong supply chain beneficial for both vendors and customers. This partnership promotes sustainable practices and provides consumers with a trusted, natural alternative.",
    features: [],
    images: [about_11_1, about_11_2, about_11_3],
    titleShape: title_shape_2,
    experienceYears: 12,
    experienceText: "Years of experience in startup building",
    videoLink: "https://www.youtube.com/@logimetrixtechsolutions4572",
  };
  const aboutData3 = [
    {
      id: 1,
      images: [about_18_1, about_18_2],
      experienceCount: 50,
      experienceText: "Happy Clients",
      shadowTitle: "Our Vision",
      subTitle: "Organic Health Products Initiative",
      secTitle: "Our Vision & Commitment",
      description:
        "At Logimetrix Techsolutions, we aim to redefine industry standards through innovation and customer-centric solutions, contributing to a growing organic market. Our commitment to sustainability ensures that every product meets high-quality standards while supporting eco-friendly practices.",
      checklist: [
        [
          "Ethically sourced organic raw materials",
          "Strong vendor partnerships for widespread distribution",
        ],
        [
          "Eco-Friendly & Sustainable Packaging",
          "Innovative Consumer Awareness Strategies",
        ],
      ],
      contactLink: "/contactUs",
      phone: "+993-554-0006",
    },
  ];
  const cardData = [
    {
      icon: counter_card_4_1,
      number: "15+",
      title: "Renovated Structures",
      description:
        "Modernized and reinforced buildings for enhanced durability and safety.",
    },
    {
      icon: counter_card_4_2,
      number: "600m",
      title: "New Roadways",
      description:
        "Developing and expanding road networks for better connectivity.",
    },
    {
      icon: counter_card_4_3,
      number: "100%",
      title: "Quality Compliance",
      description:
        "Maintaining high standards and regulatory adherence in every project.",
    },
  ];
  const TalkToAbout5Array = {
    title: "Why Choose Our Organic Products?",
    highlight: "Quality & Sustainability",
    subtitle: "Bringing You The Best in Organic Health Products",
    image: OrganicHealth4,
    faqs: [
      {
        question: "What sets your organic products apart?",
        answer:
          "Our products are crafted using ethically sourced, certified organic ingredients, ensuring the highest quality and sustainability.",
      },
      {
        question: "How do your products support environmental sustainability?",
        answer:
          "We prioritize eco-friendly packaging, sustainable farming practices, and carbon-neutral logistics to reduce our environmental footprint.",
        defaultOpen: true,
      },
      {
        question: "Are your organic products suitable for all skin types?",
        answer:
          "Absolutely! Our skincare and wellness products are dermatologically tested and safe for all skin types, even sensitive skin.",
      },
      {
        question: "What certifications do your products hold?",
        answer:
          "Our organic products are certified by globally recognized organizations to guarantee their authenticity, safety, and sustainability.",
      },
    ],
  };
  return (
    <div>
      <MainHeading
        title="Organic Health Products Initiative"
        subtitle="Organic Health Products Initiative"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Services" }]}
      />
      <SolAbout1 aboutData={aboutData1} />
      <ServiceThreeCard cardData={cardData} />
      <SolAbout3 aboutData={aboutData3} />
      <TalkToAbout5 TalkToAbout5Array={TalkToAbout5Array} />
    </div>
  );
};

export default OrganicHealthProductsInitiative;
