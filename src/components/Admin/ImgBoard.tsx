import { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';
import CancelIcon from '@mui/icons-material/Cancel';
import { useToast } from '../Tools/ToastProvider';

type EditBoardPics = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ImgBoard({ isOpen, onClose }: EditBoardPics) {
  const [files, setFiles] = useState<string[]>([]);
  const [localFiles, setLocalFiles] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { showToast } = useToast();

  // Fetch files when modal is open
  useEffect(() => {
    if (isOpen) {
      fetchFiles();
      fetchLocalFiles();
    }
  }, [isOpen]);

  const fetchFiles = async () => {
    const { data, error } = await supabase.storage
      .from('bilder')
      .list('board_pic');
    if (error) {
      setError('Kunne ikke hente bilder: ' + error.message);
      console.error('Kunne ikke hente bilder:', error);
    } else {
      setFiles(data.map(file => file.name));
      setError(null); // Clear any previous errors
    }
  };

  const fetchLocalFiles = async () => {
    try {
      // Sjekk hvilke lokale filer som finnes
      const localFileNames = [
        'Annie.png',
        'Aqeel.png',
        'Aryan.png',
        'Julia.png',
        'Julie.png',
        'Julius.png',
        'Kaia.png',
        'Stina.png',
      ];
      setLocalFiles(localFileNames);
    } catch (error) {
      console.log('Kunne ikke hente lokale filer:', error);
    }
  };

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) return;
    setUploading(true);
    setError(null); // Clear previous errors

    const file = event.target.files[0];
    const fileName = file.name;

    // Sjekk om filen allerede eksisterer lokalt
    const existingLocalFile = localFiles.find(
      f => f.toLowerCase() === fileName.toLowerCase()
    );
    if (existingLocalFile) {
      showToast(
        `Bildet ${fileName} eksisterer allerede som lokalt bilde!`,
        'error'
      );
      setUploading(false);
      return;
    }

    // Sjekk om filen allerede eksisterer i Supabase
    const existingSupabaseFile = files.find(
      f => f.toLowerCase() === fileName.toLowerCase()
    );
    if (existingSupabaseFile) {
      showToast(`Bildet ${fileName} eksisterer allerede i Supabase!`, 'error');
      setUploading(false);
      return;
    }

    // Last opp til Supabase som backup, men legg til i lokale filer
    const filePath = `board_pic/${fileName}`;
    const { error } = await supabase.storage
      .from('bilder')
      .upload(filePath, file);

    if (error) {
      setError('Kunne ikke laste opp bilde: ' + error.message);
      console.error('Kunne ikke laste opp bilde:', error);
    } else {
      // Legg til i lokale filer i stedet for Supabase-filer
      setLocalFiles(prev => [...prev, fileName]);
      showToast('Bildet ble lastet opp som lokalt bilde!', 'success');
    }

    setUploading(false);
  };

  const handleDelete = async (fileName: string) => {
    const filePath = `board_pic/${fileName}`;
    console.log('Attempting to delete:', filePath); // Debugging line

    const { error } = await supabase.storage.from('bilder').remove([filePath]);

    if (error) {
      setError('Kunne ikke slette bilde: ' + error.message);
      console.error('Kunne ikke slette bilde:', error);
    } else {
      console.log('Suksessfull sletting av:', filePath); // Debugging line
      showToast('Bilde slettet suksessfullt!', 'success');
      fetchFiles(); // Refresh the file list
    }
  };

  const handleDeleteLocal = async (fileName: string) => {
    const confirmed = window.confirm(
      `Er du sikker på at du vil slette ${fileName}?`
    );

    if (confirmed) {
      // Slett fra Supabase også (siden vi lagrer backup der)
      const filePath = `board_pic/${fileName}`;
      const { error } = await supabase.storage
        .from('bilder')
        .remove([filePath]);

      if (error) {
        console.error('Error deleting from Supabase:', error);
        // Fortsett med å fjerne fra lokale filer uansett
      }

      // Fjern fra lokale filer
      setLocalFiles(prev => prev.filter(file => file !== fileName));
      showToast(
        `${fileName} er slettet fra både lokale og Supabase bilder!`,
        'success'
      );
    }
  };

  if (!isOpen) return null; // Don't render if modal is closed

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
          Administrer Styret Bilder
        </h2>

        {error && <p className="text-red-600 text-center">{error}</p>}

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
            Nye bilder lastes opp som lokale bilder (raske) og lagres også som
            backup i Supabase.
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
                      title="Slett lokalt bilde"
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
