import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

type Partners = {
  id: number;
  bedrift: string;
  mainpartner: Boolean;
  webUrl: string;
  bedriftskontakt: string;
  mail: string;
  tlf: string;
};

export default function AdminBoard() {
  const [partners, setPartners] = useState<Partners[]>([]);
  const [loading, setLoading] = useState(true);
  const [editRow, setEditRow] = useState<number | null>(null);
  const [editedPartner, setEditedPartner] = useState<Partners | null>(null);

  // Fetch partners from Supabase
  useEffect(() => {
    const fetchPartners = async () => {
      const { data, error } = await supabase.from("partners").select("*");
      if (error) {
        console.error("Error fetching board partners:", error);
      } else {
        setPartners(data);
      }
      setLoading(false);
    };

    fetchPartners();
  }, []);

  // Handle Edit Click
  const handleEdit = (partner: Partners) => {
    setEditRow(partner.id);
    setEditedPartner({ ...partner });
  };

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof Partners) => {
    if (editedPartner) {
      setEditedPartner({ ...editedPartner, [field]: e.target.value });
    }
  };

  // Save Updates to Supabase
  const handleSave = async () => {
    if (!editedPartner) return;

    const { error } = await supabase.from("partners").update(editedPartner).eq("id", editedPartner.id);

    if (error) {
      console.error("Error updating partner:", error);
      alert("Could not update the board partner. Try again.");
    } else {
      setPartners(partners.map((p) => (p.id === editedPartner.id ? editedPartner : p)));
      setEditRow(null);
      setEditedPartner(null);
    }
  };

  return (
    <div className="w-full p-4 rounded-xl shadow-lg m-1">
      <h2 className="text-xl font-bold mb-4">Adminstrer styret</h2>

      {loading ? (
        <p className="text-center text-gray-600">Laster inn data...</p>
      ) : (
        <div className="overflow-x-auto"> {/* Enable horizontal scrolling on small screens */}
          <table className="w-full border-collapse border border-gray-300 text-xs lg:text-xs sm:text-xs">
            <thead>
              <tr className="bg-white">
                <th className="border border-gray-300 p-1 sm:p-2 text-center">Bedrift</th>
                <th className="border border-gray-300 p-1 sm:p-2 text-center">Hovedpartner?</th>
                <th className="border border-gray-300 p-1 sm:p-2 text-center">Nettside</th>
                <th className="border border-gray-300 p-1 sm:p-2 text-center">Kontakt-person</th>
                <th className="border border-gray-300 p-1 sm:p-2 text-center">Email</th>
                <th className="border border-gray-300 p-1 sm:p-2 text-center">Telefon</th>
              </tr>
            </thead>
            <tbody>
              {partners.map((partner) => (
                <tr key={partner.id} className="hover:bg-gray-100">
                  {editRow === partner.id ? (
                    <>
                      <td className="border border-gray-300 p-1">
                        <input
                          type="text"
                          value={editedPartner?.bedrift || ""}
                          onChange={(e) => handleChange(e, "bedrift")}
                          className="w-full border p-1 rounded text-xs"
                        />
                      </td>
                      <td className="border border-gray-300 p-1">
                        <input
                          type="text"
                          value={editedPartner?.mainpartner.toString() || ""}
                          onChange={(e) => handleChange(e, "mainpartner")}
                          className="w-full border p-1 rounded text-xs"
                        />
                      </td>
                      <td className="border border-gray-300 p-1">
                        <input
                          type="text"
                          value={editedPartner?.webUrl || ""}
                          onChange={(e) => handleChange(e, "webUrl")}
                          className="w-full border p-1 rounded text-xs"
                        />
                      </td>
                      <td className="border border-gray-300 p-1">
                        <input
                          type="text"
                          value={editedPartner?.webUrl || ""}
                          onChange={(e) => handleChange(e, "bedriftskontakt")}
                          className="w-full border p-1 rounded text-xs"
                        />
                      </td>
                      <td className="border border-gray-300 p-1">
                        <input
                          type="text"
                          value={editedPartner?.webUrl || ""}
                          onChange={(e) => handleChange(e, "mail")}
                          className="w-full border p-1 rounded text-xs"
                        />
                      </td>
                      <td className="border border-gray-300 p-1">
                        <input
                          type="text"
                          value={editedPartner?.webUrl || ""}
                          onChange={(e) => handleChange(e, "tlf")}
                          className="w-full border p-1 rounded text-xs"
                        />
                      </td>
                      <td className="border border-gray-300 p-1 flex space-x-1">
                        <button
                          onClick={handleSave}
                          className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700 text-xs"
                        >
                          Lagre
                        </button>
                        <button
                          onClick={() => setEditRow(null)}
                          className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 text-xs"
                        >
                          Avbryt
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="border border-gray-300 p-1">{partner.bedrift}</td>
                      <td className="border border-gray-300 p-1">{partner.mainpartner.toString()}</td>
                      <td className="border border-gray-300 p-1">{partner.webUrl}</td>
                      <td className="border border-gray-300 p-1">{partner.bedriftskontakt}</td>
                      <td className="border border-gray-300 p-1">{partner.mail}</td>
                      <td className="border border-gray-300 p-1">{partner.tlf}</td>
                      <td className="border border-gray-300 p-1">
                        <button
                          onClick={() => handleEdit(partner)}
                          className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 text-xs"
                        >
                          Rediger
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
