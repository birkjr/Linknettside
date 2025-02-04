import { useState } from "react";
import { Link } from "react-router";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const supabaseStorageUrl =
  "https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-stone-100 sticky top-0 w-full shadow-md">
        {/* Desktop & Mobile Header Container */}
        <div className="flex flex-col justify-between items-center w-full px-6 py-4">
          {/* Logo */}
          <Link to={"/"}>
            <img
              className="h-20 transition-transform duration-300 hover:scale-105"
              src={`${supabaseStorageUrl}logo_transparent.JPG`}
              alt="Logo"
            />
          </Link>

          {/* Desktop Menu (Hidden on Mobile) */}
          <div className="hidden lg:flex items-center py-6">
            <ul className="flex flex-row space-x-10 font-medium text-xl text-gray-500">
              <li className="group relative hover:scale-103 hover:text-black">
                <Link to={"/jobbtorget"}>Jobbtorget</Link>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-tpPink"></span>
              </li>
              <li className="group relative hover:scale-103 hover:text-black">
                <Link to={"/for_bedrifter"}>For bedrifter</Link>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-tpPink"></span>
              </li>
              <li className="group relative hover:scale-103 hover:text-black">
                <a
                  href="https://www.emilntnu.no/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  For studenten
                </a>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-tpPink"></span>
              </li>
              <li className="group relative hover:scale-103 hover:text-black">
                <Link to={"/faq"}>FAQ</Link>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-tpPink"></span>
              </li>
              <li className="group relative hover:scale-103 hover:text-black">
                <Link to={"/om_oss"}>Om oss</Link>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-tpPink"></span>
              </li>
              <li className="group relative hover:scale-103 hover:text-black">
                <Link to={"/kontakt_oss"}>Kontakt oss</Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <CloseIcon fontSize="large" />
              ) : (
                <MenuIcon fontSize="large" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {menuOpen && (
          <div className="lg:hidden bg-white shadow-md py-4">
            <ul className="flex flex-col items-center space-y-4 text-gray-700">
              <li>
                <Link to={"/jobbtorget"} onClick={() => setMenuOpen(false)}>
                  Jobbtorget
                </Link>
              </li>
              <li>
                <Link to={"/for_bedrifter"} onClick={() => setMenuOpen(false)}>
                  For bedrifter
                </Link>
              </li>
              <li>
                <a
                  href="https://www.emilntnu.no/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                >
                  For studenten
                </a>
              </li>
              <li>
                <Link to={"/faq"} onClick={() => setMenuOpen(false)}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link to={"/om_oss"} onClick={() => setMenuOpen(false)}>
                  Om oss
                </Link>
              </li>
              <li>
                <Link to={"/kontakt_oss"} onClick={() => setMenuOpen(false)}>
                  Kontakt oss 
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
