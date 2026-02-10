import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";
import AboutSection from "@/components/AboutSection";
import BookingForm from "@/components/BookingForm";
import ChatBot from "@/components/ChatBot";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <DestinationsSection />
      <AboutSection />
      <BookingForm />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
