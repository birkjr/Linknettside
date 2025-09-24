import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient"; // Ensure your Supabase client is correctly configured

const supabaseStorageUrl = "https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/company_logo";

type PartnersProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Partners({ isOpen, onClose }: PartnersProps) {
  const [mainPartners, setMainPartners] = useState<string[]>([]);
  const [otherPartners, setOtherPartners] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open

    const fetchPartners = async () => {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from("partners")
        .select("*");

      if (error) {
        console.error("Error fetching partners:", error);
        setError("Kunne ikke hente partnere. Prøv igjen senere.");
        setLoading(false);
        return;
      }

      if (!data || data.length === 0) {
        setError("Ingen partnere funnet.");
        setLoading(false);
        return;
      }

      // Separate main partners and other partners
      const main = data.filter((p) => p.mainpartner).map((p) => p.bedrift);
      const others = data.filter((p) => !p.mainpartner).map((p) => p.bedrift);

      setMainPartners(main);
      setOtherPartners(others);
      setLoading(false);
    };

    fetchPartners();

    return () => {
      document.body.style.overflow = "auto"; // Restore scrolling when modal is closed
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-xs flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-4xl w-full relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-700 rounded-full p-2 hover:scale-125"
        >
          ✕
        </button>

        {/* Loading State */}
        {loading && <p className="text-center text-gray-500">Laster inn partnere...</p>}

        {/* Error Message */}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && (
          <>
            {/* Main Partners */}
            {mainPartners.length > 0 && (
              <div className="mb-6">
                <h3 className="flex justify-center text-lg font-bold text-center mb-4">Hovedpartnere</h3>
                <div className="grid grid-cols-2 sm:space-x-1 px-4 space-x-4">
                  {mainPartners.map((partner) => (
                    <img
                      key={partner}
                      src={`${supabaseStorageUrl}/${partner}.JPG`}
                      alt={partner}
                      onError={(e) => (e.currentTarget.src = "/images/placeholder.JPG")} // Fallback image if not found
                      className="h-20 rounded-xl hover:scale-105 p-4 flex justify-center items-center"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Other Partners */}
            {otherPartners.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-center mb-4">Samarbeidspartnere</h3>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-8 justify-center items-center px-4">
                  {otherPartners.map((partner) => (
                    <img
                      key={partner}
                      src={`${supabaseStorageUrl}/${partner}.JPG`}
                      alt={partner}
                      onError={(e) => (e.currentTarget.src = "/images/placeholder.JPG")} // Fallback image if not found
                      className="h-20 rounded-xl hover:scale-105 p-4 flex justify-center items-center"
                    />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
