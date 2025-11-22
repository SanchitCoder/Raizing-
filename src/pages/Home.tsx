import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import CompanyLogos from '../components/CompanyLogos';
import VideoSection from '../components/VideoSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Showcase from '../components/Showcase';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import WhatsAppButton from '../components/WhatsAppButton';
import AIAssessment from '../components/AIAssessment';

export default function Home() {
  return (
    <div className="min-h-screen bg-raizing-cream-50 dark:bg-gray-900 transition-colors duration-300 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <CompanyLogos />
      <section id="video">
        <VideoSection />
      </section>
      <WhyChooseUs />
      <section id="showcase">
        <Showcase />
      </section>
      <Contact />
      <Footer />
      <Chatbot />
      <WhatsAppButton />
      <AIAssessment />
    </div>
  );
}

