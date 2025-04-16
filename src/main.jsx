import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ Import this
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* ✅ Wrap App inside this */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
