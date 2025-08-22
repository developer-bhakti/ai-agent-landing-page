import CoreBenefits from "./Components/CoreBenefits"
import Footer from "./Components/Footer"
import HeroSection from "./Components/HeroSection"
import HowItWorks from "./Components/HowItWorks"
import Navbar from "./Components/Navbar"
import PricingSection from "./Components/PricingSection"
import Testimonials from "./Components/Testimonials"
import TrustedTeams from "./Components/TrustedTeams"
import UseCases from "./Components/UseCases"


const App = () => {
  return (
     <div className="bg-black min-h-screen">
      <Navbar />
      <HeroSection/>
      <TrustedTeams /> 
      <CoreBenefits />
      <HowItWorks />
      <UseCases />
      <Testimonials />
      <PricingSection />
      <Footer />
    </div>
  )
}

export default App