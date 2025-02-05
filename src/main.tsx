import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/layout.tsx";
import FAQ from "./FAQ.tsx";
import ForBedrifter from "./forBedrifter.tsx";
import Jobbtorget from "./jobbtorget.tsx";
import OmOss from "./omOss.tsx";
import ContactUs from "./ContactUs.tsx";
import Admin from "./admin.tsx";
import NotFound from "./NotFound.tsx";
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
      <BrowserRouter>
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
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
