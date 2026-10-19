import SiteLayout from "@/components/layout/SiteLayout";
import HeroSection from "@/components/home/HeroSection";
import AboutCompany from "@/components/home/AboutCompany";
import ProductCategories from "@/components/home/ProductCategories";
import HotProducts from "@/components/home/HotProducts";
import ManufacturingProcess from "@/components/home/ManufacturingProcess";
import QualitySection from "@/components/home/QualitySection";
import IndustriesServed from "@/components/home/IndustriesServed";
import ApplicationAreas from "@/components/home/ApplicationAreas";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PartnerCTA from "@/components/home/PartnerCTA";
import { usePageMeta } from "@/hooks/use-page-meta";

const Index = () => {
  usePageMeta(
    "Shreya Coppers - Copper & Alloy Manufacturing Since 1974",
    "Leading manufacturers and exporters of copper tubes, brass tubes, copper alloys, bronze rods, titanium tubes since 1974. Gujarat, India.",
  );

  return (
    <SiteLayout>
      <HeroSection />
      <AboutCompany />
      <ProductCategories />
      <WhyChooseUs />
      <IndustriesServed />
      <ManufacturingProcess />
      <QualitySection />
      <HotProducts />
      <ApplicationAreas />
      <PartnerCTA />
    </SiteLayout>
  );
};

export default Index;
