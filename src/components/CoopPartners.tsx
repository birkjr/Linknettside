import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient"; // Ensure your Supabase client is correctly configured

const supabaseStorageUrl = "https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/company_logo";

export default function Partners() {
  const [mainPartners, setMainPartners] = useState<string[]>([]);
  const [otherPartners, setOtherPartners] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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
  }, []);

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4">
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
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-8 justify-center items-center px-4">
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