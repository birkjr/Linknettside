import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const supabaseStorageUrl =
  "https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/";

export default function Header() {
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
              src={`${supabaseStorageUrl}logo_transparent.JPG`}
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
          </div>

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
          </div>
        )}
      </nav>
    </>
  );
}
