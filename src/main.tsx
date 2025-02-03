import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // ✅ Fixed import
import Layout from './components/layout.tsx'; // ✅ Using Layout
import FAQ from './FAQ.tsx';
import ForBedrifter from './forBedrifter.tsx';
import Jobbtorget from './jobbtorget.tsx';
import OmOss from './omOss.tsx';
import ContactUs from './ContactUs.tsx';
import Admin from './admin.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> {/* ✅ Wrap everything inside Layout */}
          <Route index element={<App />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="for_bedrifter" element={<ForBedrifter />} />
          <Route path="jobbtorget" element={<Jobbtorget />} />
          <Route path="om_oss" element={<OmOss />} />
          <Route path="kontakt_oss" element={<ContactUs/>}/>
          <Route path="admin" element={<Admin/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
