import { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';
import CancelIcon from '@mui/icons-material/Cancel';
import { useToast } from '../Tools/ToastProvider';
import { updateImageCacheVersion } from '../../utils/imageUtils';

type EditSubGroup = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ImgSubGroups({ isOpen, onClose }: EditSubGroup) {
  const [files, setFiles] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const { showToast } = useToast();

  // ✅ Prevent fetching files when modal is closed
  useEffect(() => {
    if (!isOpen) return;
    fetchFiles();
  }, [isOpen]);

  const fetchFiles = async () => {
    // Subgroups ligger i subGroups mappen i Supabase
    const { data, error } = await supabase.storage
      .from('bilder')
      .list('subGroups');
    if (error) {
      console.error('Error fetching files:', error);
      showToast('Kunne ikke hente bilder fra Supabase.', 'error');
    } else {
      // Hent alle filer fra subGroups mappen
      const subgroupFiles = data
        ?.filter(file => file.name && !file.name.endsWith('/'))
        .map(file => file.name) || [];
      setFiles(subgroupFiles);
    }
  };

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) return;
    setUploading(true);

    const file = event.target.files[0];
    const fileName = file.name;

    // Sjekk om filen allerede eksisterer i Supabase
    const existingSupabaseFile = files.find(
      f => f.toLowerCase() === fileName.toLowerCase()
    );
    if (existingSupabaseFile) {
      showToast(`Bildet ${fileName} eksisterer allerede i Supabase!`, 'error');
      setUploading(false);
      return;
    }

    // Last opp til Supabase (subgroups ligger i subGroups mappen)
    const filePath = `subGroups/${fileName}`;
    const { error } = await supabase.storage
      .from('bilder')
      .upload(filePath, file);

    if (error) {
      console.error('Error uploading file:', error);
      showToast('Feil ved opplasting.', 'error');
    } else {
      // Oppdater cache-versjon for å tvinge refresh av bilder
      updateImageCacheVersion();
      showToast('Bildet ble lastet opp til Supabase!', 'success');
      fetchFiles(); // Refresh the file list
    }

    setUploading(false);
  };

  const handleDelete = async (fileName: string) => {
    // Subgroups ligger i subGroups mappen i Supabase
    const filePath = `subGroups/${fileName}`;
    const { error } = await supabase.storage.from('bilder').remove([filePath]);

    if (error) {
      console.error('Error deleting file:', error);
      showToast('Kunne ikke slette filen.', 'error');
    } else {
      // Oppdater cache-versjon for å tvinge refresh av bilder
      updateImageCacheVersion();
      showToast('Bildet er slettet', 'success');
      fetchFiles(); // Refresh the file list
    }
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
          Administrer gruppebilder
        </h2>

        {/* Info Section */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
          <div className="flex items-center mb-2">
            <svg
              className="w-5 h-5 text-blue-600 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-blue-800 font-medium">Supabase opplasting</span>
          </div>
          <p className="text-blue-700 text-sm">
            Alle bilder lastes opp direkte til Supabase og hentes fra Supabase.
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
          {/* Supabase Files Section */}
          {files.length > 0 ? (
            <div className="mb-4">
              <h3 className="text-md font-semibold mb-2 text-blue-700">
                📁 Supabase bilder: {files.length}
              </h3>
              <ul className="space-y-2">
                {files.map((file, index) => (
                  <li
                    key={index}
                    className="flex items-center p-3 rounded-lg shadow-sm bg-blue-50 border border-blue-200"
                  >
                    <button
                      onClick={() => handleDelete(file)}
                      className="text-red-600 hover:scale-110 font-bold text-sm mr-4"
                    >
                      <CancelIcon />
                    </button>
                    <span className="flex-grow text-blue-800 font-medium">
                      {file}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-gray-500 text-center py-4">
              Ingen bilder funnet. Last opp bilder for å se dem her.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
