import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth';

export default function AdminNavbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const adminTabs = [
    {
      id: 'arrangementer',
      label: 'Arrangementer',
      path: '/admin/arrangementer',
    },
    { id: 'jobbtorget', label: 'Jobbtorget', path: '/admin/jobbtorget' },
    { id: 'nyheter', label: 'Nyheter', path: '/admin/nyheter' },
    { id: 'om_oss', label: 'Om oss', path: '/admin/om_oss' },
    { id: 'kontakt_oss', label: 'Kontakt oss', path: '/admin/kontakt_oss' },
    { id: 'support', label: 'Support', path: '/admin/support' },
    {
      id: 'last_opp_bilder',
      label: 'Last opp bilder',
      path: '/admin/last_opp_bilder',
    },
    { id: 'partnere', label: 'Partnere', path: '/admin/partnere' },
    { id: 'styret', label: 'Styret', path: '/admin/styret' },
  ];

  return (
    <nav className="bg-gradient-to-b from-red-100 to-red-400 text-white w-full shadow-lg z-50 lg:sticky lg:top-0">
      <div className="flex lg:flex-col sm:flex-row justify-between items-center w-full px-6 py-4">
        {/* Admin Logo/Text */}
        <div className="flex items-center">
          <h1 className="text-3xl text-red-500">Admin</h1>
        </div>
      </div>

      {/* Admin Tabs */}
      <div className="w-full border-t border-white/10 bg-white/0">
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
            <div className="flex items-center gap-2">
              <button
                onClick={async () => {
                  // Map current admin route to public route
                  const path = location.pathname;
                  let publicPath = '/';
                  if (path.includes('/admin/jobbtorget'))
                    publicPath = '/jobbtorget';
                  else if (path.includes('/admin/om_oss'))
                    publicPath = '/om_oss';
                  else if (path.includes('/admin/kontakt_oss'))
                    publicPath = '/kontakt_oss';
                  else if (path.includes('/admin/nyheter')) publicPath = '/';
                  else if (path.includes('/admin/arrangementer'))
                    publicPath = '/';

                  await logout();
                  navigate(publicPath);
                }}
                className="inline-flex items-center rounded-full px-4 py-1.5 text-sm bg-white text-red-800 hover:bg-red-50 shadow-md"
                title="Logg ut og gå tilbake til brukervisning"
              >
                Logg ut
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
