import React from "react";
import MainHeading from "../../MainHeading";
import about_11_1 from "../../../assets/img/normal/about_11_1.jpg";
import about_11_2 from "../../../assets/img/normal/about_11_2.jpg";
import about_11_3 from "../../../assets/img/normal/about_11_3.jpg";
import title_shape_2 from "../../../assets/img/theme-img/title_shape_2.svg";
import KeyFeatures from "../StandaloneProducts/SolutionReuseCom/KeyFeatures";
import AccessControlIcon from "../../../Imges/QblockIcon/AccessControlIcon.jpg";
import VersionControlIcon from "../../../Imges/QblockIcon/VersionControlIcon.jpg";
import DocumentsStorageIcon from "../../../Imges/QblockIcon/DocumentsStorageIcon.jpg";
import SolAbout1 from "../StandaloneProducts/SolutionReuseCom/SolutionAbout/SolAbout1";
import DocumentsRetrievalIcon from "../../../Imges/QblockIcon/DocumentsRetrievalIcon.jpg";
import OurExpertise from "../StandaloneProducts/SolutionReuseCom/OurExpertises/OurExpertise";
import TalkToAbout3 from "../StandaloneProducts/SolutionReuseCom/TalkToAboutAnyQuestion/TalkToAbout3";
import WorkflowAutomationIcon from "../../../Imges/QblockIcon/WorkflowAutomationIcon.jpg";
import AuditTrailsIcon from "../../../Imges/QblockIcon/AuditTrailsIcon.jpg";

const ExpertiseArray = {
  heading: "Agriculture Information System (AIS)",
  para: "AIS is a smart and intelligent information capturing and regulating system that tracks various parameters of crop development, ensuring better management of agricultural production. It analyzes data related to prices, weather, crop cycles, and more to enhance economic outcomes for farmers and organizations.",
  keyPoints: [
    { name: "Tracks Crop Development Parameters", per: "98%" },
    { name: "Analyzes Domestic & International Prices", per: "95%" },
    { name: "Monitors Rainfall & Sowing Times", per: "92%" },
    { name: "Provides Yield vs Production Insights", per: "94%" },
    { name: "Tracks Harvesting & Production Trends", per: "96%" },
  ],
};

const testimonials = [
  {
    text: "“The IMS platform allows quick resolution of issues by assigning tasks to responsible persons, reducing the need for email escalations and streamlining communication for better management and faster problem resolution.”",
    img: DocumentsStorageIcon,
    name: "Issue Assignment",
    designation: "",
  },
  {
    text: "“The live feed allows all members to view issues and contribute their inputs, fostering collaboration among team members. This helps to resolve matters efficiently, ensuring everyone is on the same page and actively engaged.”",
    img: VersionControlIcon,
    name: "Live Feed Collaboration",
    designation: "",
  },
  {
    text: "“Rather than email threads, IMS uses a web & Android platform to assign and track issues, ensuring prompt action by designated personnel. This system improves response times and enhances overall operational efficiency.”",
    img: AccessControlIcon,
    name: "Real-time Issue Management",
    designation: "",
  },
  {
    text: "“The platform ensures accountability by directly assigning issues to the concerned person, minimizing delays and promoting quick resolutions. This creates a streamlined process where responsibilities are clear, leading to faster problem-solving.”",
    img: DocumentsRetrievalIcon,
    name: "Efficient Task Resolution",
    designation: "",
  },
  {
    text: "“The integration of IMS with real-time updates ensures seamless collaboration between team members, reducing miscommunication and enabling faster response times to assigned issues, significantly improving overall operational productivity.”",
    img: WorkflowAutomationIcon,
    name: "Real-time Collaboration",
    designation: "",
  },
  {
    text: "“By automating the issue assignment process, IMS ensures that tasks are swiftly delegated to the responsible personnel, eliminating delays and optimizing workflow efficiency, resulting in a more responsive organization overall.”",
    img: AuditTrailsIcon,
    name: "Automated Task Assignment",
    designation: "",
  },
];

const TalkToAbout3Array = [
  {
    id: 1,
    question: "How does AIS help improve agricultural productivity?",
    answer:
      "AIS tracks crop development, analyzes prices, weather, and production data, enabling better strategic decisions to enhance agricultural productivity.",
  },
  {
    id: 2,
    question: "How does IMS improve issue resolution in organizations?",
    answer:
      "IMS ensures issues are assigned to the correct person quickly via a web & Android platform, streamlining communication and speeding up resolutions.",
  },
  {
    id: 3,
    question: "Can AIS track weather patterns and crop development stages?",
    answer:
      "Yes, AIS tracks rainfall, sowing times, harvesting stages, and other crop-related parameters for efficient monitoring and analysis.",
  },
  {
    id: 4,
    question: "How does IMS ensure accountability in issue management?",
    answer:
      "IMS assigns issues directly to responsible individuals, reducing delays and improving accountability by preventing escalations.",
  },
];

const aboutData1 = {
  title: "AIS & IMS",
  subtitle: "Empowering Agriculture & Issue Resolution through Technology",
  description:
    "AIS and IMS are designed to revolutionize agricultural management and issue resolution. AIS leverages AI-powered analytics to track and analyze various crop parameters for enhanced productivity. IMS, on the other hand, optimizes issue management by providing real-time tracking, task assignment, and collaboration among teams to ensure quick resolution.",
  features: [
    "AIS – Intelligent system for agricultural data tracking and analysis.",
    "IMS – Streamlined platform for issue management and resolution.",
    "Real-time insights for better decision-making and productivity.",
  ],
  images: [about_11_1, about_11_2, about_11_3],
  titleShape: title_shape_2,
  experienceYears: 12,
  experienceText: "Years of experience in agricultural tech solutions",
  videoLink: "https://www.youtube.com/@logimetrixtechsolutions4572",
};

const AgricultureInformationSystemPage = () => {
  return (
    <div>
      <MainHeading
        title="Agriculture Information System"
        subtitle="Agriculture Information System"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Solution" }]}
      />
      <SolAbout1 aboutData={aboutData1} />
      <KeyFeatures testimonials={testimonials} />
      <OurExpertise ExpertiseArray={ExpertiseArray} />
      <TalkToAbout3 TalkToAbout3Array={TalkToAbout3Array} />
    </div>
  );
};

export default AgricultureInformationSystemPage;
