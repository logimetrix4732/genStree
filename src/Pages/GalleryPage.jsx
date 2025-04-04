import React from "react";
import MainHeading from "../components/MainHeading";
import CaseStudies from "../components/BlogSection/GalleryComponents/CaseStudies";
import TeamMembers from "../components/BlogSection/GalleryComponents/TeamMembers";
import WhyChooseUsGal from "../components/BlogSection/GalleryComponents/WhyChooseUsGal";
import Photos from "../components/BlogSection/GalleryComponents/Photos";
import WorkingProcess from "../components/WorkingProcess";
import TeamLeaderGallery from "../components/BlogSection/GalleryComponents/TeamLeaderGallery";

const GalleryPage = () => {
  return (
    <div>
      <MainHeading
        title="Gallery"
        subtitle="Gallery"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Blog" }]}
      />
      <CaseStudies />
      <WhyChooseUsGal />
      <TeamLeaderGallery />
      <Photos />
    </div>
  );
};

export default GalleryPage;
