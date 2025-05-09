import { useCallback } from "react";
import { loadFull } from "tsparticles";
import 'swiper/swiper-bundle.min.css';
import ShinyDots from './components/ShinyDots.jsx';
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import StarryBackground from "./components/StarryBackground";  // Import the StarryBackground component
import DarkModeToggle from "./components/DarkModeToggle.jsx"; // Use relative path from App.jsx
import ChatWidget from "./components/ChatWidget.jsx";
export default function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div>
      <header>
        <img src="./logo.png" alt="SoftSell Logo" />
        <DarkModeToggle />

      </header>
    
    <div className="relative min-h-screen overflow-hidden bg-black text-white font-sans">
      <StarryBackground /> 
      {/* <ShinyDots /> */}
      <Hero />
      
      {/* Adding 20vh margin and partition divider */}
      <div className="py-[20vh]">
        <div className="border-t-2 border-gray-700"></div> {/* Horizontal divider */}
      </div>
      
      <HowItWorks />
      {/* <ShinyDots /> */}
      {/* Adding 20vh margin and partition divider */}
      <div className="py-[20vh]">
        <div className="border-t-2 border-gray-700"></div> {/* Horizontal divider */}
      </div>
      
      <WhyChooseUs />
      {/* <ShinyDots /> */}
      {/* Adding 20vh margin and partition divider */}
      <div className="py-[20vh]">
        <div className="border-t-2 border-gray-700"></div> {/* Horizontal divider */}
      </div>
      
      <Testimonials />
      {/* <ShinyDots /> */}
      {/* Adding 20vh margin and partition divider */}
      <div className="py-[20vh]">
        <div className="border-t-2 border-gray-700"></div> {/* Horizontal divider */}
      </div>
      
      <ContactForm />
      {/* <ShinyDots /> */}
      {/* Footer */}
      {/* <div> */}
      <ChatWidget />
      {/* </div> */}
    
      <footer className="bg-transparent py-6 text-center text-white text-lg">
        <p>Thank you for visiting!</p>
      </footer>
      
    </div>
    

    </div>
  );
}
