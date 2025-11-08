import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';
import HelpIcon from '@mui/icons-material/Help';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { prefetchRoute } from '../../utils/routePrefetch';
import { adminTabs } from '../../constants/adminTabs';
import { useAuth } from '../../context/AuthContext';

type IconComponent = typeof HomeIcon;

type NavItem = {
  name: string;
  path: string;
  icon?: IconComponent;
};

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const isAdmin = location.pathname.startsWith('/admin');

  const publicNavItems: NavItem[] = [
    { name: 'Hjem', path: '/', icon: HomeIcon },
    { name: 'Jobbtorget', path: '/jobbtorget', icon: WorkIcon },
    { name: 'For bedrifter', path: '/for_bedrifter', icon: BusinessIcon },
    { name: 'FAQ', path: '/faq', icon: HelpIcon },
    { name: 'Om oss', path: '/om_oss', icon: InfoIcon },
    { name: 'Kontakt oss', path: '/kontakt_oss', icon: ContactMailIcon },
  ];

  const adminNavItems: NavItem[] = adminTabs.map(tab => ({
    name: tab.label,
    path: tab.path,
  }));

  const navItems = isAdmin ? adminNavItems : publicNavItems;

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 right-4 z-50 flex items-center gap-3">
        {isAdmin && (
          <button
            onClick={async () => {
              const path = location.pathname;
              let publicPath = '/';
              if (path.includes('/admin/jobbtorget'))
                publicPath = '/jobbtorget';
              else if (path.includes('/admin/om_oss')) publicPath = '/om_oss';
              else if (path.includes('/admin/kontakt_oss'))
                publicPath = '/kontakt_oss';
              else if (path.includes('/admin/nyheter')) publicPath = '/';
              else if (path.includes('/admin/arrangementer')) publicPath = '/';

              await logout();
              navigate(publicPath);
              setIsOpen(false);
            }}
            className="rounded-full px-4 py-2 bg-white text-red-700 font-medium shadow-md"
          >
            Logg ut
          </button>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white rounded-full p-3 shadow-lg"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <CloseIcon className="text-gray-600" />
          ) : (
            <MenuIcon className="text-gray-600" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        />
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
              {navItems.map(item => {
                const Icon = item.icon;
                const active = isActive(item.path);
                const activeClasses = isAdmin
                  ? 'bg-red-100 text-red-700'
                  : 'bg-green-100 text-green-700';
                const hoverClasses = isAdmin
                  ? 'text-gray-700 hover:bg-red-50'
                  : 'text-gray-700 hover:bg-gray-100';

                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      onMouseEnter={() => prefetchRoute(item.path)}
                      onFocus={() => prefetchRoute(item.path)}
                      className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${
                        active ? activeClasses : hoverClasses
                      }`}
                    >
                      {Icon ? <Icon className="text-2xl" /> : null}
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
