import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Pages/App.tsx";
import { Route, Routes, Navigate, HashRouter } from "react-router-dom";
import Layout from "./components/layout.tsx";
import FAQ from "./Pages/FAQ.tsx";
import ForBedrifter from "./Pages/ForCompanies.tsx";
import Jobbtorget from "./Pages/Jobs.tsx";
import OmOss from "./Pages/AboutUs.tsx";
import ContactUs from "./Pages/ContactUs.tsx";
import Admin from "./Pages/admin.tsx";
import NotFound from "./Pages/NotFound.tsx";
import { AuthProvider, useAuth } from "./auth.tsx"; // ✅ Import authentication

// ✅ Private Route Component
const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/" />;
};

// ✅ Wrap the whole app in AuthProvider
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="for_bedrifter" element={<ForBedrifter />} />
            <Route path="jobbtorget" element={<Jobbtorget />} />
            <Route path="om_oss" element={<OmOss />} />
            <Route path="kontakt_oss" element={<ContactUs />} />

            {/* ✅ Protect Admin Route */}
            <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </AuthProvider>
  </StrictMode>
);
