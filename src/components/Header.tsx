import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useLocation
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useAuth } from "../auth";

const supabaseStorageUrl =
  "https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/";
  

export default function Header() {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth(); // ✅ Get login function from auth

  const correctPassword = "LinkAdmin25"; // Your admin password

  const handleLogin = () => {
    if (password === correctPassword) {
      login(); // ✅ Authenticate user
      localStorage.setItem("isAdmin", "true"); // Store authentication flag
      navigate("/admin");
      setShowPasswordModal(false);
      setPassword(""); // Clear password after login
    } else {
      alert("Feil passord! 🚫");
    }
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get current route

  return (
    <>
      <nav className="bg-stone-100 sticky top-0 w-full shadow-md">
        <div className="flex lg:flex-col sm:flex-row justify-between items-center w-full px-6 py-4">
          {/* Logo */}
          <Link to={"/"}>
            <img
              className="h-20 flex items-center transition-transform duration-300 hover:scale-105"
              src={`${supabaseStorageUrl}logo_transparent.png`}
              alt="Logo"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center py-6">
            
            <ul className="flex flex-row space-x-10 font-medium text-xl text-gray-500">
              {[
                { name: "Jobbtorget", path: "/jobbtorget" },
                { name: "For bedrifter", path: "/for_bedrifter" },
                { name: "FAQ", path: "/faq" },
                { name: "Om oss", path: "/om_oss" },
                { name: "Kontakt oss", path: "/kontakt_oss" },
              ].map(({ name, path }) => (
                <li key={path} className="group relative hover:scale-103">
                  <Link
                    to={path}
                    className={`hover:text-green-800 ${
                      location.pathname === path ? "text-green-800" : ""
                    }`}
                  >
                    {name}
                  </Link>
                </li>
                
              ))}
            </ul>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setShowPasswordModal(true); // Show password modal
              }}
              className="font-medium text-xl text-gray-500 hover:text-red-400 hover:scale-103 mx-10">
              Admin</a>
          </div>
          {/* Password Modal */}
          {showPasswordModal && (
            <div className="fixed inset-0 backdrop-blur-xs bg-opacity-50 flex justify-center items-center">
              <div className="bg-yellow-50 p-6 rounded-lg shadow-lg w-100">
                <h2 className="text-lg font-bold mb-4 text-center">Admin Tilgang</h2>
                <input
                  type="password"
                  placeholder="Skriv inn passord"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border rounded mb-4"
                />
                <div className="flex justify-between">
                  <button onClick={() => setShowPasswordModal(false)} className="bg-gray-500 hover:bg-red-300 text-white px-4 py-2 rounded-md">
                    Avbryt
                  </button>
                  <button onClick={handleLogin} className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800">
                    Logg inn
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="relative lg:hidden flex">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white shadow-md py-4">
            <ul className="flex flex-col items-center space-y-4 text-gray-700">
              {[
                { name: "Jobbtorget", path: "/jobbtorget" },
                { name: "For bedrifter", path: "/for_bedrifter" },
                { name: "FAQ", path: "/faq" },
                { name: "Om oss", path: "/om_oss" },
                { name: "Kontakt oss", path: "/kontakt_oss" },
              ].map(({ name, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className={`hover:text-green-800 ${
                      location.pathname === path ? "text-green-800 font-bold" : ""
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setShowPasswordModal(true); // Show password modal
              }}
              className="flex flex-col items-center text-gray-700 hover:text-red-400 hover:scale-103 my-4">
              Admin</a>
          </div>
        )}
      </nav>
    </>
  );
}
