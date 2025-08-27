
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import TrustedTeams from "../Components/TrustedTeams";
import CoreBenefits from "../Components/CoreBenefits";
import HowItWorks from "../Components/HowItWorks";
import UseCases from "../Components/UseCases";
import Testimonials from "../Components/Testimonials";
import PricingSection from "../Components/PricingSection";
import Footer from "../Components/Footer";

const LandingPage = () => {
  return (
    <>
      <div className="bg-black min-h-screen">
        <Navbar />
        <HeroSection />
        <TrustedTeams />
        <CoreBenefits />
        <HowItWorks />
        <UseCases />
        <Testimonials />
        <PricingSection />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
