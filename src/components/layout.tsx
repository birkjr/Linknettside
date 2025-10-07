import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <main className="flex-grow pb-4">
        <Outlet /> {/* This renders the current page */}
      </main>
      <Footer />
    </div>
  );
}
