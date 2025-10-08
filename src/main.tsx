import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Route, Routes, Navigate, HashRouter } from 'react-router-dom';
import Layout from './components/layout.tsx';
import { AuthProvider, useAuth } from './auth.tsx'; // ✅ Import authentication
import ErrorBoundary from './components/Tools/ErrorBoundary.tsx';
import ToastProvider from './components/Tools/ToastProvider.tsx';

// ✅ Lazy load pages for better performance
const App = lazy(() => import('./Pages/App.tsx'));
const FAQ = lazy(() => import('./Pages/FAQ.tsx'));
const ForBedrifter = lazy(() => import('./Pages/ForCompanies.tsx'));
const Jobbtorget = lazy(() => import('./Pages/Jobs.tsx'));
const OmOss = lazy(() => import('./Pages/AboutUs.tsx'));
const ContactUs = lazy(() => import('./Pages/ContactUs.tsx'));
const Admin = lazy(() => import('./Pages/admin.tsx'));
const NotFound = lazy(() => import('./Pages/NotFound.tsx'));

// ✅ Private Route Component
const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/" />;
};

// ✅ Loading component for lazy loading
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
  </div>
);

// ✅ Wrap the whole app in AuthProvider, ErrorBoundary and ToastProvider
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <ToastProvider>
        <AuthProvider>
          <HashRouter>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<App />} />
                  <Route path="faq" element={<FAQ />} />
                  <Route path="for_bedrifter" element={<ForBedrifter />} />
                  <Route path="jobbtorget" element={<Jobbtorget />} />
                  <Route path="om_oss" element={<OmOss />} />
                  <Route path="kontakt_oss" element={<ContactUs />} />

                  {/* ✅ Protect Admin Route */}
                  <Route
                    path="/admin"
                    element={
                      <PrivateRoute>
                        <Admin />
                      </PrivateRoute>
                    }
                  />

                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </Suspense>
          </HashRouter>
        </AuthProvider>
      </ToastProvider>
    </ErrorBoundary>
  </StrictMode>
);
