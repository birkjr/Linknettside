import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import AdminNavbar from './AdminNavbar';
import Footer from './Footer';
import MobileNavigation from './Tools/MobileNavigation';
import PageTransition from './Tools/PageTransition';

export default function Layout() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  return (
    <div className={`flex flex-col min-h-screen ${isAdmin ? 'bg-red-50' : ''}`}>
      {isAdmin ? <AdminNavbar /> : <Header />}
      <MobileNavigation />
      <main
        className={`flex-grow pb-4 ${
          isAdmin ? 'bg-red-50 px-4 sm:px-6 lg:px-8' : ''
        }`}
      >
        <PageTransition>
          <Outlet /> {/* This renders the current page */}
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
}
