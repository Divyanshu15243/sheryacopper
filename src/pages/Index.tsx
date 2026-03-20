import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import HotProducts from "@/components/home/HotProducts";
import AboutCompany from "@/components/home/AboutCompany";
import ProductCategories from "@/components/home/ProductCategories";
import IndustriesServed from "@/components/home/IndustriesServed";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ApplicationAreas from "@/components/home/ApplicationAreas";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <HotProducts />
        <AboutCompany />
        <ProductCategories />
        <IndustriesServed />
        <WhyChooseUs />
        <ApplicationAreas />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
