
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import RecordingOptions from "@/components/RecordingOptions";
import EditingFeatures from "@/components/EditingFeatures";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background antialiased">
      <Navbar />
      <Hero />
      <Features />
      <RecordingOptions />
      <EditingFeatures />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
