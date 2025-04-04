import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUsPage from "./Pages/AboutUsPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";
import CustomCursor from "./components/CustomCursor";
import QblockPage from "./components/SolutionComponents/StandaloneProducts/QblockPage";
import LogBooksPage from "./components/SolutionComponents/StandaloneProducts/LogBooksPage";
import AbsoluteStudyPage from "./components/SolutionComponents/StandaloneProducts/AbsoluteStudyPage";
import VisionDeskPage from "./components/SolutionComponents/StandaloneProducts/VisionDeskPage";
import SaiSoftwarePage from "./components/SolutionComponents/StandaloneProducts/SaiSoftwarePage";
import AksharPage from "./components/SolutionComponents/StandaloneProducts/AksharPage";
import SAGPage from "./components/SolutionComponents/StandaloneProducts/SAGPage";
import TrakFuelPage from "./components/SolutionComponents/StandaloneProducts/TrakFuelPage";
import IManagerPage from "./components/SolutionComponents/StandaloneProducts/IManagerPage";
import CropnetPage from "./components/SolutionComponents/StandaloneProducts/CropnetPage";
import ContactUs from "./components/ContactUs";
import AgricultureInformationSystemPage from "./components/SolutionComponents/DataScience/AgricultureInformationSystemPage";
import DecisionSupportSystemPage from "./components/SolutionComponents/DataScience/DecisionSupportSystemPage";
import FieldQuotationSystemPage from "./components/SolutionComponents/DataScience/FieldQuotationSystemPage";
import IssueManagementSystemPage from "./components/SolutionComponents/DataScience/IssueManagementSystemPage";
import DairyApplicationPage from "./components/SolutionComponents/InternetofThings/DairyApplicationPage";
import MilkAnalyserPage from "./components/SolutionComponents/InternetofThings/MilkAnalyserPage";
import PhotonPage from "./components/SolutionComponents/InternetofThings/PhotonPage";
import CommunicationApplicationPage from "./components/SolutionComponents/MobileApplications/CommunicationApplicationPage";
import IRediPage from "./components/SolutionComponents/MobileApplications/IRediPage";
import JKTourismPage from "./components/SolutionComponents/MobileApplications/JKTourismPage";
import KarGoPage from "./components/SolutionComponents/MobileApplications/KarGoPage";
import MonitorMPage from "./components/SolutionComponents/MobileApplications/MonitorMPage";
import SarojEducationPage from "./components/SolutionComponents/MobileApplications/SarojEducationPage";
import TourismApplicationPage from "./components/SolutionComponents/MobileApplications/TourismApplicationPage";
import MobileComponents from "./components/SolutionComponents/MobileApplications/MobileComponents";
import ApplicationDevelopment from "./components/ServicesComponents/ITServices/ApplicationDevelopment";
import ApplicationReengineering from "./components/ServicesComponents/ITServices/ApplicationReengineering";
import CloudMigration from "./components/ServicesComponents/ITServices/CloudMigration";
import EnterpriseApplication from "./components/ServicesComponents/ITServices/EnterpriseApplication";
import POCDevelopment from "./components/ServicesComponents/ITServices/POCDevelopment";
import ProductOrientedDelivery from "./components/ServicesComponents/ITServices/ProductOrientedDelivery";
import CentralCattleBreedingFarm from "./components/ServicesComponents/InfraServices/CentralCattleBreedingFarm";
import IndusTowersLimited from "./components/ServicesComponents/InfraServices/IndusTowersLimited";
import OrganicHealthProductsInitiative from "./components/ServicesComponents/InfraServices/OrganicHealthProductsInitiative";
import AcmeSolarCMSSystem from "./components/ServicesComponents/Accomplishments/AcmeSolarCMSSystem";
import JammuSmartCityProject from "./components/ServicesComponents/Accomplishments/JammuSmartCityProject";
import SAG from "./components/ServicesComponents/Accomplishments/SAG";
import MOVCDNER from "./components/ServicesComponents/Accomplishments/MOVCDNER";
import { useEffect } from "react";
import EklavyaPage from "./components/SolutionComponents/ERPSolutions/EklavyaPage";
import CarrerPage from "./Pages/CarrerPage";
import GalleryPage from "./Pages/GalleryPage";
import BlogPage from "./Pages/BlogPage";
import LoginPage from "./components/LoginPage";
import AdminPostPage from "./Pages/AdminPostPage";
import AdminDashboard from "./Pages/AdminDashboard";
import HowWeDoIt from "./Pages/HowWeDoIt";
import OurLegacyLeadership from "./Pages/OurLegacyLeadership";
import BlogApprovalPage from "./components/BlogApprovalPage";
import "../src/assets/css/style.css";
function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const tokenData = localStorage.getItem("token");
  const user_role = JSON.parse(localStorage.getItem("user_role"));
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/assets/css/style.css";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="App">
      <CustomCursor />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whyUs" element={<AboutUsPage />} />
        <Route path="/OurLegacyLeadership" element={<OurLegacyLeadership />} />
        {/*Solution*/}
        {/*Standalone Products*/}
        <Route path="/qblock" element={<QblockPage />} />
        <Route path="/LogBooksPage" element={<LogBooksPage />} />
        <Route path="/edusaroj" element={<AbsoluteStudyPage />} />
        <Route path="/VisionDeskPage" element={<VisionDeskPage />} />
        <Route path="/LivestockManagement" element={<SAGPage />} />
        <Route path="/TrakFuelPage" element={<TrakFuelPage />} />
        <Route path="/IManagerPage" element={<IManagerPage />} />
        <Route path="/CropnetPage" element={<CropnetPage />} />

        <Route path="/StudentFinanceManagement" element={<AksharPage />} />
        <Route path="/CollegeFeeManagement" element={<SaiSoftwarePage />} />

        {/*Data Science*/}
        <Route
          path="/AgricultureInformationSystemPage"
          element={<AgricultureInformationSystemPage />}
        />
        <Route
          path="/DecisionSupportSystemPage"
          element={<DecisionSupportSystemPage />}
        />
        <Route
          path="/FieldQuotationSystemPage"
          element={<FieldQuotationSystemPage />}
        />
        <Route
          path="/IssueManagementSystemPage"
          element={<IssueManagementSystemPage />}
        />

        {/*Internet of Things (IoT)*/}
        <Route path="/MilkAnalyserPage" element={<MilkAnalyserPage />} />
        <Route path="/PhotonPage" element={<PhotonPage />} />
        <Route
          path="/DairyApplicationPage"
          element={<DairyApplicationPage />}
        />

        <Route path="/EklavyaPage" element={<EklavyaPage />} />
        {/*Mobile Applications*/}
        <Route path="/IRediPage" element={<IRediPage />} />
        <Route path="/solutions/JKTourismPage" element={<JKTourismPage />} />
        <Route path="/solutions/KarGoPage" element={<KarGoPage />} />
        <Route path="/solutions/MonitorMPage" element={<MonitorMPage />} />

        <Route path="/SarojEducationPage" element={<SarojEducationPage />} />
        <Route
          path="/TourismApplicationPage"
          element={<TourismApplicationPage />}
        />
        <Route
          path="/CommunicationApplicationPage"
          element={<CommunicationApplicationPage />}
        />

        <Route path="/MobileComponents" element={<MobileComponents />} />
        {/*Solution*/}

        {/*Services*/}
        {/*IT Services*/}

        <Route
          path="/ApplicationDevelopment"
          element={<ApplicationDevelopment />}
        />
        <Route
          path="/ApplicationReengineering"
          element={<ApplicationReengineering />}
        />
        <Route
          path="/EnterpriseApplication"
          element={<EnterpriseApplication />}
        />
        <Route
          path="/ProductOrientedDelivery"
          element={<ProductOrientedDelivery />}
        />

        <Route
          path="/ApplicationDevelopment"
          element={<ApplicationDevelopment />}
        />
        <Route
          path="/ApplicationReengineering"
          element={<ApplicationReengineering />}
        />
        <Route
          path="/EnterpriseApplication"
          element={<EnterpriseApplication />}
        />
        <Route
          path="/ProductOrientedDelivery"
          element={<ProductOrientedDelivery />}
        />

        <Route path="/CloudMigration" element={<CloudMigration />} />
        <Route path="/POCDevelopment" element={<POCDevelopment />} />
        {/*IT Services*/}

        {/*Infra Services*/}

        <Route path="/IndusTowersLimited" element={<IndusTowersLimited />} />
        <Route
          path="/CentralCattleBreedingFarm"
          element={<CentralCattleBreedingFarm />}
        />
        <Route
          path="/OrganicHealthProductsInitiative"
          element={<OrganicHealthProductsInitiative />}
        />
        {/*Infra Services*/}

        {/*Accomplishments*/}
        <Route path="/AcmeSolarCMSSystem" element={<AcmeSolarCMSSystem />} />
        <Route
          path="/JammuSmartCityProject"
          element={<JammuSmartCityProject />}
        />

        <Route path="/IndusTowersLimited" element={<IndusTowersLimited />} />
        <Route
          path="/CentralCattleBreedingFarm"
          element={<CentralCattleBreedingFarm />}
        />
        <Route
          path="/OrganicHealthProductsInitiative"
          element={<OrganicHealthProductsInitiative />}
        />
        {/*Infra Services*/}

        {/*Accomplishments*/}
        <Route path="/AcmeSolarCMSSystem" element={<AcmeSolarCMSSystem />} />
        <Route
          path="/JammuSmartCityProject"
          element={<JammuSmartCityProject />}
        />

        <Route path="/SAG" element={<SAG />} />
        <Route path="/MOVCDNER" element={<MOVCDNER />} />
        {/*Accomplishments*/}

        {/*Services*/}

        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/Gallery" element={<GalleryPage />} />
        <Route path="/Blog" element={<BlogPage />} />
        <Route path="/CarrerPage" element={<CarrerPage />} />
        <Route path="/career/:id" element={<CarrerPage />} />
        <Route path="/HowWeDoIt" element={<HowWeDoIt />} />
        <Route
          path="/adminlogin"
          element={tokenData ? <Navigate to="/" /> : <LoginPage />}
        />

        <Route
          path="/adminpost"
          element={
            user_role == "Recruiter" ? (
              <AdminPostPage />
            ) : (
              <Navigate to="/adminlogin" />
            )
          }
        />
        <Route
          path="/AdminDashboard"
          element={
            user_role == "Recruiter" ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/adminlogin" />
            )
          }
        />
        <Route
          path="/BlogApprovalPage"
          element={
            user_role == "Admin" ? (
              <BlogApprovalPage />
            ) : (
              <Navigate to="/adminlogin" />
            )
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
