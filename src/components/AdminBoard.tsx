import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

type StyretMember = {
  id: number;
  stilling: string;
  name: string;
  telefon: string;
  mail: string;
};

export default function AdminBoard() {
  const [members, setMembers] = useState<StyretMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [editRow, setEditRow] = useState<number | null>(null);
  const [editedMember, setEditedMember] = useState<StyretMember | null>(null);

  // Fetch members from Supabase
  useEffect(() => {
    const fetchMembers = async () => {
      const { data, error } = await supabase.from("styret").select("*");
      if (error) {
        console.error("Error fetching board members:", error);
      } else {
        setMembers(data);
      }
      setLoading(false);
    };

    fetchMembers();
  }, []);

  // Handle Edit Click
  const handleEdit = (member: StyretMember) => {
    setEditRow(member.id);
    setEditedMember({ ...member });
  };

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof StyretMember) => {
    if (editedMember) {
      setEditedMember({ ...editedMember, [field]: e.target.value });
    }
  };

  // Save Updates to Supabase
  const handleSave = async () => {
    if (!editedMember) return;

    const { error } = await supabase.from("styret").update(editedMember).eq("id", editedMember.id);

    if (error) {
      console.error("Error updating member:", error);
      alert("Could not update the board member. Try again.");
    } else {
      setMembers(members.map((m) => (m.id === editedMember.id ? editedMember : m)));
      setEditRow(null);
      setEditedMember(null);
    }
  };

  return (
    <div className="w-full sm:text-sm max-w-sm sm:max-w-xl lg:max-w-3xl mx-auto p-4 sm:p-6 rounded-xl shadow-lg">
      <h2 className="text-sm sm:text-sm font-bold mb-4 text-center">Styret Administrasjon</h2>

      {loading ? (
        <p className="text-center text-gray-600">Laster inn data...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-xs sm:text-xs">
            <thead>
              <tr className="bg-white">
                <th className="border border-gray-300 p-1 sm:p-2 text-left">Stilling</th>
                <th className="border border-gray-300 p-1 sm:p-2 text-left">Navn</th>
                <th className="border border-gray-300 p-1 sm:p-2 text-left">Tlf</th>
                <th className="border border-gray-300 p-1 sm:p-2 text-left">E-post</th>
                <th className="border border-gray-300 p-1 sm:p-2 text-left">Handling</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id} className="hover:bg-gray-100">
                  {editRow === member.id ? (
                    <>
                      <td className="border border-gray-300 p-1">
                        <input
                          type="text"
                          value={editedMember?.stilling || ""}
                          onChange={(e) => handleChange(e, "stilling")}
                          className="w-full border p-1 rounded text-xs"
                        />
                      </td>
                      <td className="border border-gray-300 p-1">
                        <input
                          type="text"
                          value={editedMember?.name || ""}
                          onChange={(e) => handleChange(e, "name")}
                          className="w-full border p-1 rounded text-xs"
                        />
                      </td>
                      <td className="border border-gray-300 p-1">
                        <input
                          type="text"
                          value={editedMember?.telefon || ""}
                          onChange={(e) => handleChange(e, "telefon")}
                          className="w-full border p-1 rounded text-xs"
                        />
                      </td>
                      <td className="border border-gray-300 p-1">
                        <input
                          type="email"
                          value={editedMember?.mail || ""}
                          onChange={(e) => handleChange(e, "mail")}
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
                      <td className="border border-gray-300 p-1">{member.stilling}</td>
                      <td className="border border-gray-300 p-1">{member.name}</td>
                      <td className="border border-gray-300 p-1">{member.telefon}</td>
                      <td className="border border-gray-300 p-1 truncate">{member.mail}</td>
                      <td className="border border-gray-300 p-1">
                        <button
                          onClick={() => handleEdit(member)}
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
