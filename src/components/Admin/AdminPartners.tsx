import { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';

type Partners = {
  id: number;
  bedrift: string;
  mainpartner: boolean;
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
  const [newPartner, setNewPartner] = useState<Partners>({
    id: 0, // Temporary ID, will be set by Supabase
    bedrift: '',
    mainpartner: false,
    webUrl: '',
    bedriftskontakt: '',
    mail: '',
    tlf: '',
  });

  // Fetch partners from Supabase
  useEffect(() => {
    const fetchPartners = async () => {
      const { data, error } = await supabase.from('partners').select('*');
      if (error) {
        console.error('Error fetching board partners:', error);
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
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof Partners
  ) => {
    if (editedPartner) {
      setEditedPartner({ ...editedPartner, [field]: e.target.value });
    } else {
      setNewPartner({ ...newPartner, [field]: e.target.value });
    }
  };

  // Save Updates to Supabase
  const handleSave = async () => {
    if (!editedPartner) return;

    // Valider at obligatoriske felt er fylt ut
    if (!editedPartner.bedrift.trim()) {
      alert('Bedriftsnavn er påkrevd!');
      return;
    }

    const { error } = await supabase
      .from('partners')
      .update(editedPartner)
      .eq('id', editedPartner.id);

    if (error) {
      console.error('Error updating partner:', error);
      console.error('Error details:', error.message);
      alert(`Kunne ikke oppdatere partner: ${error.message}`);
    } else {
      setPartners(
        partners.map(p => (p.id === editedPartner.id ? editedPartner : p))
      );
      setEditRow(null);
      setEditedPartner(null);
    }
  };

  // Add New Partner
  const handleAddPartner = async () => {
    // Valider at obligatoriske felt er fylt ut
    if (!newPartner.bedrift.trim()) {
      alert('Bedriftsnavn er påkrevd!');
      return;
    }

    // Fjern id fra objektet før insert - Supabase vil generere det automatisk
    const { id, ...partnerToInsert } = newPartner;

    const { data, error } = await supabase
      .from('partners')
      .insert([partnerToInsert])
      .select('*');

    if (error) {
      console.error('Error adding partner:', error);
      console.error('Error details:', error.message);
      alert(`Kunne ikke legge til partner: ${error.message}`);
    } else {
      setPartners([...partners, ...data]);
      setNewPartner({
        id: 0,
        bedrift: '',
        mainpartner: false,
        webUrl: '',
        bedriftskontakt: '',
        mail: '',
        tlf: '',
      });
    }
  };

  // Remove Partner
  const handleRemovePartner = async (id: number) => {
    const { error } = await supabase.from('partners').delete().eq('id', id);
    if (error) {
      console.error('Error removing partner:', error);
      alert('Could not remove the partner. Try again.');
    } else {
      setPartners(partners.filter(partner => partner.id !== id));
    }
  };

  return (
    <div className="w-full p-4 rounded-xl shadow-lg m-1">
      <h2 className="text-xl font-bold mb-4">Administrer partnere</h2>

      {loading ? (
        <p className="text-center text-gray-600">Laster inn data...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-xs lg:text-xs sm:text-xs">
            <thead>
              <tr className="bg-white">
                <th className="border border-gray-300 p-1 sm:p-2 text-center">
                  Bedrift
                </th>
                <th className="border border-gray-300 p-1 sm:p-2 text-center">
                  Hovedpartner?
                </th>
                <th className="border border-gray-300 p-1 sm:p-2 text-center">
                  Nettside
                </th>
                <th className="border border-gray-300 p-1 sm:p-2 text-center">
                  Kontakt-person
                </th>
                <th className="border border-gray-300 p-1 sm:p-2 text-center">
                  Email
                </th>
                <th className="border border-gray-300 p-1 sm:p-2 text-center">
                  Telefon
                </th>
                <th className="border border-gray-300 p-1 sm:p-2 text-center">
                  Handlinger
                </th>
              </tr>
            </thead>
            <tbody>
              {partners.map(partner => (
                <tr key={partner.id} className="hover:bg-gray-100">
                  {editRow === partner.id ? (
                    <>
                      <td className="border border-gray-300 p-1">
                        <input
                          type="text"
                          value={editedPartner?.bedrift || ''}
                          onChange={e => handleChange(e, 'bedrift')}
                          className="w-full border p-1 rounded text-xs"
                        />
                      </td>
                      <td className="border border-gray-300 p-1">
                        <input
                          type="checkbox"
                          checked={editedPartner?.mainpartner || false}
                          onChange={e => handleChange(e, 'mainpartner')}
                          className="w-full border p-1 rounded text-xs"
                        />
                      </td>
                      <td className="border border-gray-300 p-1">
                        <input
                          type="text"
                          value={editedPartner?.webUrl || ''}
                          onChange={e => handleChange(e, 'webUrl')}
                          className="w-full border p-1 rounded text-xs"
                        />
                      </td>
                      <td className="border border-gray-300 p-1">
                        <input
                          type="text"
                          value={editedPartner?.bedriftskontakt || ''}
                          onChange={e => handleChange(e, 'bedriftskontakt')}
                          className="w-full border p-1 rounded text-xs"
                        />
                      </td>
                      <td className="border border-gray-300 p-1">
                        <input
                          type="text"
                          value={editedPartner?.mail || ''}
                          onChange={e => handleChange(e, 'mail')}
                          className="w-full border p-1 rounded text-xs"
                        />
                      </td>
                      <td className="border border-gray-300 p-1">
                        <input
                          type="text"
                          value={editedPartner?.tlf || ''}
                          onChange={e => handleChange(e, 'tlf')}
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
                      <td className="border border-gray-300 p-1">
                        {partner.bedrift}
                      </td>
                      <td className="border border-gray-300 p-1">
                        {partner.mainpartner.toString()}
                      </td>
                      <td className="border border-gray-300 p-1">
                        {partner.webUrl}
                      </td>
                      <td className="border border-gray-300 p-1">
                        {partner.bedriftskontakt}
                      </td>
                      <td className="border border-gray-300 p-1">
                        {partner.mail}
                      </td>
                      <td className="border border-gray-300 p-1">
                        {partner.tlf}
                      </td>
                      <td className="border border-gray-300 p-1 flex space-x-1">
                        <button
                          onClick={() => handleEdit(partner)}
                          className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 text-xs"
                        >
                          Rediger
                        </button>
                        <button
                          onClick={() => handleRemovePartner(partner.id)}
                          className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 text-xs"
                        >
                          Fjern
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
              {/* New Partner Row */}
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 p-1">
                  <input
                    type="text"
                    value={newPartner.bedrift}
                    onChange={e => handleChange(e, 'bedrift')}
                    className="w-full border p-1 rounded text-xs"
                  />
                </td>
                <td className="border border-gray-300 p-1">
                  <input
                    type="text"
                    checked={newPartner.mainpartner}
                    onChange={e => handleChange(e, 'mainpartner')}
                    className="w-full border p-1 rounded text-xs"
                  />
                </td>
                <td className="border border-gray-300 p-1">
                  <input
                    type="text"
                    value={newPartner.webUrl}
                    onChange={e => handleChange(e, 'webUrl')}
                    className="w-full border p-1 rounded text-xs"
                  />
                </td>
                <td className="border border-gray-300 p-1">
                  <input
                    type="text"
                    value={newPartner.bedriftskontakt}
                    onChange={e => handleChange(e, 'bedriftskontakt')}
                    className="w-full border p-1 rounded text-xs"
                  />
                </td>
                <td className="border border-gray-300 p-1">
                  <input
                    type="text"
                    value={newPartner.mail}
                    onChange={e => handleChange(e, 'mail')}
                    className="w-full border p-1 rounded text-xs"
                  />
                </td>
                <td className="border border-gray-300 p-1">
                  <input
                    type="text"
                    value={newPartner.tlf}
                    onChange={e => handleChange(e, 'tlf')}
                    className="w-full border p-1 rounded text-xs"
                  />
                </td>
                <td className="border border-gray-300 p-1">
                  <button
                    onClick={handleAddPartner}
                    className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700 text-xs"
                  >
                    Legg til
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
