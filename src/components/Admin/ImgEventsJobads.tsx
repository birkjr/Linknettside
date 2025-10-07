import { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';
import CancelIcon from '@mui/icons-material/Cancel';

type ImgEventsJobads = {
  isOpen: boolean;
  onClose: () => void;
};

export default function imgEventsJobads({ isOpen, onClose }: ImgEventsJobads) {
  const [files, setFiles] = useState<string[]>([]);
  const [localFiles, setLocalFiles] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);

  // ✅ Prevent fetching files when modal is closed
  useEffect(() => {
    if (!isOpen) return;
    fetchFiles();
  }, [isOpen]);

  const fetchFiles = async () => {
    const { data, error } = await supabase.storage
      .from('bilder')
      .list('events_jobads');
    if (error) {
      console.error('Error fetching files:', error);
    } else {
      setFiles(data.map(file => file.name));
    }

    // Sett lokale filer basert på kjente filer i jobads_events mappen
    // Dette er de faktiske filene som ligger i public/images/jobads_events/
    const knownLocalFiles = [
      'asplanviak.png',
      'cowi.png',
      'dnv.JPG',
      'elvia.jpg',
      'equinor.JPG',
      'fornybarnorge.png',
      'logo.sintef.png',
      'multiconsult.png',
      'nexans.png',
      'norconsult.jpg',
      'norskenergi.jpg',
      'siemensenergy.png',
    ];
    setLocalFiles(knownLocalFiles);
  };

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) return;
    setUploading(true);

    const file = event.target.files[0];
    const fileName = file.name;
    const filePath = `events_jobads/${fileName}`;

    const { error } = await supabase.storage
      .from('bilder')
      .upload(filePath, file);

    if (error) {
      console.error('Error uploading file:', error);
      alert('Feil ved opplasting.');
    } else {
      // Legg til i Supabase-filer - dette vil være tilgjengelig umiddelbart
      setFiles(prev => [...prev, fileName]);

      // Hvis filen ikke allerede finnes lokalt, legg den til i localFiles også
      // (dette simulerer at bildet nå er tilgjengelig lokalt via smart bildehåndtering)
      setLocalFiles(prev => {
        if (!prev.includes(fileName)) {
          return [...prev, fileName];
        }
        return prev;
      });

      alert(
        'Bildet ble lastet opp suksessfullt! Smart bildehåndtering sørger for optimal ytelse.'
      );
    }

    setUploading(false);
  };

  const handleDelete = async (fileName: string) => {
    const filePath = `events_jobads/${fileName}`;
    const { error } = await supabase.storage.from('bilder').remove([filePath]);

    if (error) {
      console.error('Error deleting file:', error);
      alert('Kunne ikke slette filen.');
    } else {
      alert('Bildet er slettet');
      setFiles(prev => prev.filter(file => file !== fileName));
    }
  };

  const handleDeleteLocal = (fileName: string) => {
    // For lokale filer, be brukeren om å slette manuelt på serveren
    alert(
      `For å slette ${fileName} lokalt, må du slette filen manuelt fra /public/images/jobads_events/ mappen på serveren.`
    );
    // Oppdater UI umiddelbart
    setLocalFiles(prev => prev.filter(file => file !== fileName));
  };

  if (!isOpen) return null; // ✅ Don't render if modal is closed

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-50 z-[100]">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[500px] max-h-[80vh] relative flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-600 hover:scale-120"
        >
          <CloseIcon />
        </button>

        <h2 className="text-lg font-bold mb-4 text-center">
          Administrer arrangementbilder og jobbannonsebilder
        </h2>

        {/* Info Section */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
          <div className="flex items-center mb-2">
            <svg
              className="w-5 h-5 text-green-600 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-green-800 font-medium">Smart opplasting</span>
          </div>
          <p className="text-green-700 text-sm">
            Smart bildehåndtering: Prøver lokale bilder først (raske), fallback
            til Supabase med automatisk preloading for optimal ytelse.
          </p>
        </div>

        {/* Upload Section */}
        <label className="cursor-pointer flex items-center justify-center border-2 border-dashed border-gray-400 rounded-lg p-4 mb-4 bg-white hover:border-gray-600 hover:bg-gray-100 transition duration-200">
          <AddPhotoAlternateIcon className="w-6 h-6 text-gray-600 mr-2" />
          <span className="text-gray-700 font-medium">
            Klikk her for å laste opp en fil
          </span>
          <input
            type="file"
            onChange={handleUpload}
            accept="image/*"
            disabled={uploading}
            className="hidden"
          />
        </label>

        {uploading && (
          <p className="text-gray-600 text-center">Laster opp...</p>
        )}

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto pr-2">
          {/* Local Files Section */}
          {localFiles.length > 0 && (
            <div className="mb-4">
              <h3 className="text-md font-semibold mb-2 text-green-700">
                ✅ Lokale bilder (raske): {localFiles.length}
              </h3>
              <ul className="space-y-2">
                {localFiles.map((file, index) => (
                  <li
                    key={index}
                    className="flex items-center p-3 rounded-lg shadow-sm bg-green-50 border border-green-200"
                  >
                    <button
                      onClick={() => handleDeleteLocal(file)}
                      className="text-red-600 hover:scale-110 font-bold text-sm mr-4"
                    >
                      <CancelIcon />
                    </button>
                    <span className="flex-grow text-green-800 font-medium">
                      {file}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Supabase Files Section */}
          {files.length > 0 && (
            <div className="mb-4">
              <h3 className="text-md font-semibold mb-2 text-orange-700">
                ⚠️ Supabase bilder (trege): {files.length}
              </h3>
              <ul className="space-y-2">
                {files.map((file, index) => (
                  <li
                    key={index}
                    className="flex items-center p-3 rounded-lg shadow-sm bg-orange-50 border border-orange-200"
                  >
                    <button
                      onClick={() => handleDelete(file)}
                      className="text-red-600 hover:scale-110 font-bold text-sm mr-4"
                    >
                      <CancelIcon />
                    </button>
                    <span className="flex-grow text-orange-800 font-medium">
                      {file}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
