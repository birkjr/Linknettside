import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { prefetchRoute } from '../utils/routePrefetch';
import { adminTabs } from '../constants/adminTabs';

export default function AdminNavbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <nav className="bg-gradient-to-b from-red-100 to-red-400 text-white w-full shadow-lg z-50 lg:sticky lg:top-0">
      <div className="flex items-center justify-between w-full px-4 md:px-6 py-4">
        <h1 className="text-2xl md:text-3xl text-red-500">Admin</h1>
        <button
          onClick={async () => {
            const path = location.pathname;
            let publicPath = '/';
            if (path.includes('/admin/jobbtorget')) publicPath = '/jobbtorget';
            else if (path.includes('/admin/om_oss')) publicPath = '/om_oss';
            else if (path.includes('/admin/kontakt_oss'))
              publicPath = '/kontakt_oss';
            else if (path.includes('/admin/nyheter')) publicPath = '/';
            else if (path.includes('/admin/arrangementer')) publicPath = '/';

            await logout();
            navigate(publicPath);
          }}
          className="hidden lg:inline-flex items-center rounded-full px-4 py-1.5 text-sm bg-white text-red-800 hover:bg-red-50 shadow-md"
          title="Logg ut og gå tilbake til brukervisning"
        >
          Logg ut
        </button>
      </div>

      <div className="hidden lg:block w-full border-t border-white/10 bg-white/0">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <div className="flex overflow-x-auto gap-3 no-scrollbar items-center justify-between">
            <div className="flex gap-2 bg-white/10 rounded-xl p-1 backdrop-blur supports-[backdrop-filter]:bg-white/10 ring-1 ring-white/10">
              {adminTabs.map(tab => {
                const active = location.pathname === tab.path;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      navigate(tab.path);
                    }}
                    onMouseEnter={() => prefetchRoute(tab.path)}
                    onFocus={() => prefetchRoute(tab.path)}
                    className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm transition-colors shadow-sm ${
                      active
                        ? 'bg-white text-red-800 shadow-md ring-1 ring-white/70'
                        : 'text-red-50 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
