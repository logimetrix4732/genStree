import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  IconButton,
  Box,
  Typography,
  ListItemIcon,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BuildIcon from "@mui/icons-material/Build";
import BusinessIcon from "@mui/icons-material/Business";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import InsightsIcon from "@mui/icons-material/Insights";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import WorkIcon from "@mui/icons-material/Work";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import StorageIcon from "@mui/icons-material/Storage";
import BarChartIcon from "@mui/icons-material/BarChart";
import RouterIcon from "@mui/icons-material/Router";
import AppBlockingIcon from "@mui/icons-material/AppBlocking"; // Qblock
import MenuBookIcon from "@mui/icons-material/MenuBook"; // LogBooks
import SchoolIcon from "@mui/icons-material/School"; // Saroj Education, College Fee, Student Finance
import DashboardIcon from "@mui/icons-material/Dashboard"; // VisionDesk
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"; // College Fee Management, Student Finance
import AgricultureIcon from "@mui/icons-material/Agriculture"; // Livestock Management, Cropnet, Agriculture Information System
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts"; // IManager
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"; // Field Quotation System
import SupportIcon from "@mui/icons-material/Support"; // Decision Support System, Issue Management System
import WbSunnyIcon from "@mui/icons-material/WbSunny"; // Photon (Solar)
import LocalDrinkIcon from "@mui/icons-material/LocalDrink"; // Milk Analyser
import IcecreamIcon from "@mui/icons-material/Icecream"; // Dairy Application
import TravelExploreIcon from "@mui/icons-material/TravelExplore"; // Tourism Application
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import DescriptionIcon from "@mui/icons-material/Description";
const NAV_ITEMS = [
  { title: "Home", icon: <HomeIcon />, segment: "/" },
  {
    title: "What we do",
    icon: <BuildIcon />,
    segment: "services",
    children: [
      {
        title: "IT Services",
        icon: <BusinessIcon />,
        segment: "web-dev",
        children: [
          {
            title: "App Development",
            icon: <IntegrationInstructionsIcon />,
            segment: "/ApplicationDevelopment",
          },
          {
            title: "POC Development",
            icon: <DesignServicesIcon />,
            segment: "/POCDevelopment",
          },
          {
            title: "Product Delivery",
            icon: <SettingsApplicationsIcon />,
            segment: "/ProductOrientedDelivery",
          },
          {
            title: "Enterprise Application",
            icon: <CorporateFareIcon />,
            segment: "/EnterpriseApplication",
          },
          {
            title: "Application Re-design",
            icon: <DesignServicesIcon />,
            segment: "/ApplicationReengineering",
          },
          {
            title: "Cloud Migration",
            icon: <CloudQueueIcon />,
            segment: "/CloudMigration",
          },
        ],
      },
      {
        title: "Infra Services",
        icon: <WorkOutlineIcon />,
        segment: "infra-dev",
        children: [
          {
            title: "Indus Towers Limited",
            icon: <ApartmentIcon />,
            segment: "/IndusTowersLimited",
          },
          {
            title: "CCBF Renovation",
            icon: <CorporateFareIcon />,
            segment: "/CentralCattleBreedingFarm",
          },
          {
            title: "Organic Health Initiative",
            icon: <LocalHospitalIcon />,
            segment: "/OrganicHealthProductsInitiative",
          },
        ],
      },
      {
        title: "Accomplishments",
        icon: <EmojiEventsIcon />,
        segment: "app-dev",
        children: [
          {
            title: "MOVCDNER",
            icon: <InsightsIcon />,
            segment: "/MOVCDNER",
          },
          {
            title: "Jammu Smart City",
            icon: <ApartmentIcon />,
            segment: "/JammuSmartCityProject",
          },
          {
            title: "Acme Solar CMS System",
            icon: <SolarPowerIcon />,
            segment: "/AcmeSolarCMSSystem",
          },
          {
            title: "Jammu Tourism",
            icon: <TravelExploreIcon />,
            segment: "/SAG",
          },
        ],
      },
    ],
  },
  { title: "How we do it", icon: <InfoIcon />, segment: "/HowWeDoIt" },
  { title: "Why Us", icon: <InfoIcon />, segment: "/whyUs" },
  {
    title: "Solution",
    icon: <WorkIcon />,
    segment: "solution",
    children: [
      {
        title: "Standalone Products",
        icon: <SettingsApplicationsIcon />,
        segment: "Solu-Standalone",
        children: [
          {
            title: "Qblock",
            segment: "/qblock",
            icon: <AppBlockingIcon />,
          },
          {
            title: "LogBooks",
            segment: "/LogBooksPage",
            icon: <MenuBookIcon />,
          },
          {
            title: "Saroj Education",
            segment: "/edusaroj",
            icon: <SchoolIcon />,
          },
          {
            title: "VisionDesk (MIS)",
            segment: "/VisionDeskPage",
            icon: <DashboardIcon />,
          },
          {
            title: "College Fee Mgmt",
            segment: "/CollegeFeeManagement",
            icon: <AttachMoneyIcon />,
          },
          {
            title: "Student Finance Mgmt",
            segment: "/StudentFinanceManagement",
            icon: <AttachMoneyIcon />,
          },
          {
            title: "IManager",
            segment: "/IManagerPage",
            icon: <ManageAccountsIcon />,
          },
          {
            title: "Cropnet",
            segment: "/CropnetPage",
            icon: <AgricultureIcon />,
          },
          {
            title: "Tourism Application",
            segment: "/TourismApplicationPage",
            icon: <TravelExploreIcon />,
          },
          {
            title: "Saroj Education Mobile app",
            segment: "/SarojEducationPage",
            icon: <SchoolIcon />,
          },
        ],
      },
      {
        title: "ERP Solutions",
        icon: <StorageIcon />,
        segment: "Solu-ERP",
        children: [
          {
            title: "Eklavya",
            segment: "/EklavyaPage",
            icon: <SchoolIcon />,
          },
        ],
      },
      {
        title: "Data Science",
        icon: <BarChartIcon />,
        segment: "Solu-Data",
        children: [
          {
            title: "Field Quotation System",
            segment: "/FieldQuotationSystemPage",
            icon: <FormatQuoteIcon />,
          },
          {
            title: "Decision Support System",
            segment: "/DecisionSupportSystemPage",
            icon: <SupportIcon />,
          },
          {
            title: "Issue Management System",
            segment: "/IssueManagementSystemPage",
            icon: <SupportIcon />,
          },
          {
            title: "Agriculture Information System",
            segment: "/AgricultureInformationSystemPage",
            icon: <AgricultureIcon />,
          },
        ],
      },
      {
        title: "Internet of Things",
        icon: <RouterIcon />,
        segment: "Solu-Internet",
        children: [
          {
            title: "Photon (Centralized Solar Solution)",
            segment: "/PhotonPage",
            icon: <WbSunnyIcon />,
          },
          {
            title: "Milk Analyser",
            segment: "/MilkAnalyserPage",
            icon: <LocalDrinkIcon />,
          },
          {
            title: "Dairy Application",
            segment: "/DairyApplicationPage",
            icon: <IcecreamIcon />,
          },
        ],
      },
    ],
  },
  {
    title: "Blog",
    icon: <DescriptionIcon />, // Default Icon
    segment: "Solu-Mobile",
    children: [
      {
        title: "Blog",
        segment: "/blog",
        icon: <TravelExploreIcon />, // Blog ke liye ArticleIcon
      },
      {
        title: "Gallery",
        segment: "/Gallery",
        icon: <PhotoLibraryIcon />, // Gallery ke liye PhotoLibraryIcon
      },
    ],
  },
  { title: "Career", icon: <PersonSearchIcon />, segment: "/CarrerPage" },
];

export default function MobileMenu({ open, toggleDrawer }) {
  const [submenuOpen, setSubmenuOpen] = useState({});
  const navigate = useNavigate();

  const handleSubmenuToggle = (segment) =>
    setSubmenuOpen((prev) => ({
      ...prev,
      [segment]: !prev[segment],
    }));

  const handleNavigation = (segment, hasChildren) => {
    if (hasChildren) {
      handleSubmenuToggle(segment);
    } else {
      navigate(segment);
      toggleDrawer();
    }
  };

  const renderMenuItems = (items, level = 0) => {
    return items.map((item) => (
      <div key={item.segment}>
        <ListItem
          button
          sx={{
            paddingLeft: `${15 + level * 10}px`,
            borderBottom: "1px solid #f0f0f0",
            "&:hover": { backgroundColor: "#f9f9f9" },
          }}
          onClick={() => handleNavigation(item.segment, item.children)}
        >
          <Box
            display="flex"
            alignItems="center"
            width="100%"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <ListItemIcon sx={{ minWidth: "40px", color: "#4786e6" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} sx={{ color: "#3b3b3b" }} />
            </Box>
            {item.children &&
              (level === 0 ? (
                submenuOpen[item.segment] ? (
                  <RemoveIcon sx={{ color: "#4786e6" }} />
                ) : (
                  <AddIcon sx={{ color: "#4786e6" }} />
                )
              ) : (
                <ArrowDropDownIcon
                  sx={{
                    color: submenuOpen[item.segment] ? "#4786e6" : "#a1a1a1",
                    transform: submenuOpen[item.segment]
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "0.3s",
                  }}
                />
              ))}
          </Box>
        </ListItem>

        {item.children && (
          <Collapse in={submenuOpen[item.segment]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {renderMenuItems(item.children, level + 1)}
            </List>
          </Collapse>
        )}
      </div>
    ));
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={toggleDrawer}
      PaperProps={{
        sx: {
          width: 280,
          backgroundColor: "white",
          borderRight: "3px solid #4786e6",
          padding: "10px",
        },
      }}
    >
      {/* Logo & Close Button */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding="10px 15px"
        borderBottom="1px solid #eee"
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ color: "#3b3b3b", display: "flex", alignItems: "center" }}
        >
          <span style={{ color: "#4786e6" }}>GenStree</span>
        </Typography>
        <IconButton onClick={toggleDrawer}>
          <CloseIcon sx={{ color: "#4786e6" }} />
        </IconButton>
      </Box>

      {/* Navigation List */}
      <List>{renderMenuItems(NAV_ITEMS)}</List>
    </Drawer>
  );
}
