import OverviewSection from "../components/HomePage/OverviewSection";
import ProductSection from "../components/HomePage/ProductSection";
import CaseStudiesSection from "../components/HomePage/CaseStudies";
import ServicesSection from "../components/HomePage/ServicesSection";
import ClientsPartnersSection from "../components/HomePage/ClientSection";
import TechnologySection from "../components/HomePage/TechnologySection";
import AwardSection from "../components/HomePage/AwardSection";
import ClientsFeedback from "../components/HomePage/ClientsFeedback";
import LatestNewsBlog from "../components/HomePage/LatestNewsBlog";

const Home = () => {
  return (
    <>
    <OverviewSection />
      <ServicesSection />
      <ProductSection />
      <CaseStudiesSection />
      <ClientsPartnersSection />
      <TechnologySection />
      <AwardSection />
      <ClientsFeedback />
      <LatestNewsBlog />
    </>
  );
};

export default Home;
