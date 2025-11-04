import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Showcase from '../components/Showcase';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

export default function Home() {
  return (
    <div className="min-h-screen bg-raizing-cream-50">
      <Navbar />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <WhyChooseUs />
      <section id="showcase">
        <Showcase />
      </section>
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}

