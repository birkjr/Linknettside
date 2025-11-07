import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import useLocation
import { useAuth } from '../auth';
import { supabase } from '../supabaseClient';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { prefetchRoute } from '../utils/routePrefetch';

export default function Header() {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth(); // ✅ Get login from auth

  const handleLogin = async () => {
    try {
      // Use Supabase Auth instead of hardcoded password
      const { data, error } = await supabase.auth.signInWithPassword({
        email: 'link-styret@emilweb.no', // Admin email
        password: password,
      });

      if (error) {
        alert('Feil passord! 🚫');
        return;
      }
      if (data.user) {
        login(); // Update auth context
        navigate('/admin/arrangementer');
        setShowPasswordModal(false);
        setPassword(''); // Clear password after login
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('En feil oppstod under innlogging');
    }
  };
  const location = useLocation(); // Get current route
  const isAdmin = location.pathname === '/admin';

  return (
    <>
      <nav className="bg-stone-100 w-full shadow-lg z-50 lg:sticky lg:top-0">
        <div className="flex lg:flex-col sm:flex-row justify-between items-center w-full px-6 py-4">
          {/* Logo */}
          <Link to={'/'}>
            <img
              className="h-20 flex items-center transition-transform duration-300 hover:scale-105"
              src={`/images/logos/logo_transparent.png`}
              alt="Logo"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center py-6">
            <ul
              className={`flex flex-row space-x-10 font-medium text-xl ${isAdmin ? 'text-red-100' : 'text-gray-500'}`}
            >
              {[
                { name: 'Jobbtorget', path: '/jobbtorget' },
                { name: 'For bedrifter', path: '/for_bedrifter' },
                { name: 'FAQ', path: '/faq' },
                { name: 'Om oss', path: '/om_oss' },
                { name: 'Kontakt oss', path: '/kontakt_oss' },
              ].map(({ name, path }) => (
                <li key={path} className="group relative hover:scale-103">
                  <Link
                    to={path}
                    onMouseEnter={() => prefetchRoute(path)}
                    onFocus={() => prefetchRoute(path)}
                    className={`${isAdmin ? 'hover:text-white' : 'hover:text-green-800'} ${
                      location.pathname === path
                        ? isAdmin
                          ? 'text-white font-semibold'
                          : 'text-green-800'
                        : ''
                    }`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            {/*<a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setShowPasswordModal(true); // Show password modal
              }}
              className={`font-medium text-xl text-gray-500 hover:text-red-400 hover:scale-103 mx-10 ${
                      location.pathname === "/admin" ? "text-red-400" : ""
                    }`}>
              Admin</a> */}
          </div>
          {/* Password Modal */}
          {showPasswordModal && (
            <div className="fixed inset-0 backdrop-blur-xs bg-opacity-50 flex justify-center items-center z-[100]">
              <div className="bg-yellow-50 p-6 rounded-lg shadow-lg w-100">
                <h2 className="text-lg font-bold mb-4 text-center">
                  Admin Tilgang
                </h2>
                <div className="flex items-center mb-4">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Skriv inn passord"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    onKeyDown={e => {
                      if (e.key === 'Enter') {
                        handleLogin();
                      }
                    }}
                    className="w-full p-2 border rounded-l-md"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="bg-gray-200 p-2 rounded-r-md"
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </button>
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={() => setShowPasswordModal(false)}
                    className="bg-gray-500 hover:bg-red-300 text-white px-4 py-2 rounded-md"
                  >
                    Avbryt
                  </button>
                  <button
                    onClick={handleLogin}
                    className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800"
                  >
                    Logg inn
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Mobile Menu Button - Hidden, using MobileNavigation component instead */}
        </div>
        {/* Mobile Menu - Hidden, using MobileNavigation component instead */}
      </nav>
    </>
  );
}
