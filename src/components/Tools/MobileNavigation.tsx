import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';
import HelpIcon from '@mui/icons-material/Help';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Hjem', path: '/', icon: HomeIcon },
    { name: 'Jobbtorget', path: '/jobbtorget', icon: WorkIcon },
    { name: 'For bedrifter', path: '/for_bedrifter', icon: BusinessIcon },
    { name: 'FAQ', path: '/faq', icon: HelpIcon },
    { name: 'Om oss', path: '/om_oss', icon: InfoIcon },
    { name: 'Kontakt oss', path: '/kontakt_oss', icon: ContactMailIcon },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 bg-white rounded-full p-3 shadow-lg"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <CloseIcon className="text-gray-600" />
        ) : (
          <MenuIcon className="text-gray-600" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 backdrop-blur-md" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-28 right-0 h-[calc(100vh-7rem)] w-80 bg-white shadow-xl transform transition-transform duration-300 z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Navigation Items */}
          <nav className="flex-1 p-6 pt-6">
            <ul className="space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-4 p-4 rounded-lg transition-colors ${
                        isActive(item.path)
                          ? 'bg-green-100 text-green-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="text-2xl" />
                      <span className="text-lg font-medium">{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

        </div>
      </div>
    </>
  );
}
