import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';
import FeaturesDetail from './pages/FeaturesDetail';
import AIWorkflowAutomation from './pages/AIWorkflowAutomation';
import AIConsulting from './pages/AIConsulting';
import AITrainingWorkshops from './pages/AITrainingWorkshops';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/features" element={<FeaturesDetail />} />
      <Route path="/services/ai-workflow-automation" element={<AIWorkflowAutomation />} />
      <Route path="/services/ai-consulting" element={<AIConsulting />} />
      <Route path="/services/ai-training-workshops" element={<AITrainingWorkshops />} />
    </Routes>
  );
}

export default App;
