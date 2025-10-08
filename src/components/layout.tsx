import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MobileNavigation from './Tools/MobileNavigation';
import PageTransition from './Tools/PageTransition';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <MobileNavigation />
      <main className="flex-grow pb-4">
        <PageTransition>
          <Outlet /> {/* This renders the current page */}
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
}
