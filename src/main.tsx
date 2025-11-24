import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MobileMenuProvider } from './contexts/MobileMenuContext';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MobileMenuProvider>
        <App />
      </MobileMenuProvider>
    </BrowserRouter>
  </StrictMode>
);
