import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import Layout from './components/layout.tsx';
import { AuthProvider, useAuth } from './auth.tsx'; // ✅ Import authentication
import ErrorBoundary from './components/Tools/ErrorBoundary.tsx';
import ToastProvider from './components/Tools/ToastProvider.tsx';
import { getRouteLoader } from './utils/routePrefetch.ts';
import { trpc } from './utils/trpc.ts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import superjson from 'superjson';

const App = lazy(getRouteLoader('/')!);
const FAQ = lazy(getRouteLoader('/faq')!);
const ForBedrifter = lazy(getRouteLoader('/for_bedrifter')!);
const Jobbtorget = lazy(getRouteLoader('/jobbtorget')!);
const OmOss = lazy(getRouteLoader('/om_oss')!);
const ContactUs = lazy(getRouteLoader('/kontakt_oss')!);
const AdminEventsPage = lazy(getRouteLoader('/admin/arrangementer')!);
const AdminJobsPage = lazy(getRouteLoader('/admin/jobbtorget')!);
const AdminAboutUsPage = lazy(getRouteLoader('/admin/om_oss')!);
const AdminContactUsPage = lazy(getRouteLoader('/admin/kontakt_oss')!);
const AdminNewsPage = lazy(getRouteLoader('/admin/nyheter')!);
const AdminSupportPage = lazy(getRouteLoader('/admin/support')!);
const AdminUploadPage = lazy(getRouteLoader('/admin/last_opp_bilder')!);
const AdminPartnersPage = lazy(getRouteLoader('/admin/partnere')!);
const AdminBoardPage = lazy(getRouteLoader('/admin/styret')!);
const NotFound = lazy(() => import('./Pages/NotFound.tsx'));

const queryClient = new QueryClient();
const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: '/api/trpc',
    }),
  ],
  transformer: superjson,
});

// ✅ Private Route Component
export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, loading } = useAuth();

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  // Redirect to home if not authenticated
  return isAuthenticated ? children : <Navigate to="/" />;
};

// ✅ Loading component for lazy loading
export const PageLoader = () => (
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
          <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
              <BrowserRouter>
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    <Route path="/" element={<Layout />}>
                      <Route index element={<App />} />
                      <Route path="faq" element={<FAQ />} />
                      <Route path="for_bedrifter" element={<ForBedrifter />} />
                      <Route path="jobbtorget" element={<Jobbtorget />} />
                      <Route path="om_oss" element={<OmOss />} />
                      <Route path="kontakt_oss" element={<ContactUs />} />

                      {/* ✅ Protect Admin Route - redirect to arrangementer */}
                      <Route
                        path="/admin"
                        element={
                          <PrivateRoute>
                            <Navigate to="/admin/arrangementer" replace />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/admin/arrangementer"
                        element={
                          <PrivateRoute>
                            <AdminEventsPage />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/admin/jobbtorget"
                        element={
                          <PrivateRoute>
                            <AdminJobsPage />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/admin/om_oss"
                        element={
                          <PrivateRoute>
                            <AdminAboutUsPage />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/admin/kontakt_oss"
                        element={
                          <PrivateRoute>
                            <AdminContactUsPage />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/admin/nyheter"
                        element={
                          <PrivateRoute>
                            <AdminNewsPage />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/admin/support"
                        element={
                          <PrivateRoute>
                            <AdminSupportPage />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/admin/last_opp_bilder"
                        element={
                          <PrivateRoute>
                            <AdminUploadPage />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/admin/partnere"
                        element={
                          <PrivateRoute>
                            <AdminPartnersPage />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/admin/styret"
                        element={
                          <PrivateRoute>
                            <AdminBoardPage />
                          </PrivateRoute>
                        }
                      />

                      <Route path="*" element={<NotFound />} />
                    </Route>
                  </Routes>
                </Suspense>
              </BrowserRouter>
            </QueryClientProvider>
          </trpc.Provider>
        </AuthProvider>
      </ToastProvider>
    </ErrorBoundary>
  </StrictMode>
);
