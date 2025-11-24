import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';
import FeaturesDetail from './pages/FeaturesDetail';
import AIWorkflowAutomation from './pages/AIWorkflowAutomation';
import AIConsulting from './pages/AIConsulting';
import AITrainingWorkshops from './pages/AITrainingWorkshops';
import Automation from './pages/Automation';
import Training from './pages/Training';
import Consulting from './pages/Consulting';
import Development from './pages/Development';
import AIServices from './pages/AIServices';
import TryAI from './pages/TryAI';
import Pricing from './pages/Pricing';
import AboutUs from './pages/AboutUs';
import OurTeam from './pages/OurTeam';

function App() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState<'fadeIn' | 'fadeOut'>('fadeIn');
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (location !== displayLocation) {
      // Start fade out
      setTransitionStage('fadeOut');
      setShowOverlay(true);
    }
  }, [location, displayLocation]);

  // Scroll to top when location changes
  useEffect(() => {
    if (transitionStage === 'fadeOut') {
      // Scroll to top instantly during fade out for cleaner transition
      window.scrollTo({
        top: 0,
        behavior: 'auto'
      });
    }
  }, [transitionStage]);

  useEffect(() => {
    if (transitionStage === 'fadeOut') {
      // Wait for fade out animation to complete
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        // Small delay before fade in for smoother transition
        setTimeout(() => {
          setTransitionStage('fadeIn');
          setShowOverlay(false);
        }, 50);
      }, 400); // Match fadeOut animation duration
      return () => clearTimeout(timer);
    }
  }, [transitionStage, location]);

  return (
    <>
      {/* Transition Overlay */}
      <div className={`transition-overlay ${showOverlay ? 'active' : ''}`} />
      
      <div className={`page-transition page-transition-${transitionStage}`}>
        <div className="page-content">
          <Routes location={displayLocation}>
            <Route path="/" element={<Home />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/features" element={<FeaturesDetail />} />
            <Route path="/services/ai-workflow-automation" element={<AIWorkflowAutomation />} />
            <Route path="/services/ai-consulting" element={<AIConsulting />} />
            <Route path="/services/ai-training-workshops" element={<AITrainingWorkshops />} />
            <Route path="/automation" element={<Automation />} />
            <Route path="/training" element={<Training />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/development" element={<Development />} />
            <Route path="/ai-services" element={<AIServices />} />
            <Route path="/try-ai" element={<TryAI />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-team" element={<OurTeam />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
