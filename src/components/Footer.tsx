import { useState } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WindPowerIcon from "@mui/icons-material/WindPower";
import HandshakeIcon from "@mui/icons-material/Handshake";
import GitHubIcon from '@mui/icons-material/GitHub';
import Partners from "./Partners";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth";

export default function Footer() {
  const [isPartnersOpen, setIsPartnersOpen] = useState(false);
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

  return (
    <div className="relative w-full">
      {/* Wave Above Footer */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="w-full h-24"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#A8D5A4"
            fillOpacity="1"
            d="M0,128L48,122.7C96,117,192,107,288,122.7C384,139,480,181,576,202.7C672,224,768,224,864,213.3C960,203,1056,181,1152,165.3C1248,149,1344,139,1392,133.3L1440,128L1440,320L0,320Z"
          />
        </svg>
      </div>

      {/* Footer Section */}
      <footer className="relative text-green-950 text-center py-6 mt-20" style={{ backgroundColor: "#A8D5A4" }}>
        <div className="grid grid-cols-2 justify-center items-center my-6">
          <div>
            {/* Handshake Icon with Click Event */}
            <HandshakeIcon
              fontSize="large"
              className="mb-6 hover:scale-110 text-stone-200 hover:text-green-950 cursor-pointer"
              onClick={() => setIsPartnersOpen(true)}
            />
            <p>
              <a href={`mailto:link-styret@emilweb.no`}>
                <MailOutlineIcon className="hover:scale-110" style={{ fontSize: "40px" }} />
              </a>
              <a href="https://www.instagram.com/emil__link/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="hover:scale-110" style={{ fontSize: "40px" }} />
              </a>
              <a href="https://www.facebook.com/emil.link.773" target="_blank" rel="noopener noreferrer">
                <FacebookIcon className="hover:scale-110" style={{ fontSize: "40px" }} />
              </a>
              <a href="https://www.linkedin.com/company/emillink/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className="hover:scale-110" style={{ fontSize: "40px" }} />
              </a>
            </p>
          </div>
          <div>
            <p className="inline-flex justify-center rounded-xl hover:text-stone-200">
              <a href="https://link.mazemap.com/34oLTzyB" target="_blank" rel="noopener noreferrer">
                <WindPowerIcon /> <br />
                Energi- og miljøingeniørenes linjeforening, EMIL <br />
                NTNU GLØSHAUGEN, ELEKTROBYGGET <br />
                7491 Trondheim
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setShowPasswordModal(true); // Show password modal
            }}
            className="hover:text-red-400 hover:scale-105"
          >
            &copy;{new Date().getFullYear()} EMIL-Link{" "}
          </a>
          <a href="https://github.com/birkjr/Linknettside" target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="hover:scale-110" />
          </a>

        </div>

      </footer>

      {/* Render Partner Popup */}
      <Partners isOpen={isPartnersOpen} onClose={() => setIsPartnersOpen(false)} />

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
    </div>
  );
}
