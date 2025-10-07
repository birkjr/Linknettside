import { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';
import CancelIcon from '@mui/icons-material/Cancel';
import InfoIcon from '@mui/icons-material/Info';

type EditSubGroup = {
    isOpen: boolean;
    onClose: () => void;
};

export default function ImgSubGroups({ isOpen, onClose }: EditSubGroup) {
    const [files, setFiles] = useState<string[]>([]);
    const [localFiles, setLocalFiles] = useState<string[]>([]);
    const [uploading, setUploading] = useState(false);

    // ✅ Prevent fetching files when modal is closed
    useEffect(() => {
        if (!isOpen) return;
        fetchFiles();
        fetchLocalFiles();
    }, [isOpen]);

    const fetchFiles = async () => {
        const { data, error } = await supabase.storage.from("bilder").list("subGroup");
        if (error) {
            console.error("Error fetching files:", error);
        } else {
            setFiles(data.map(file => file.name));
        }
    };

    const fetchLocalFiles = async () => {
        try {
            // Sjekk hvilke lokale filer som finnes
            const localFileNames = [
                'styret.png', 'bedrift.png', 'marked.png', 'logistikk.png', 'fa.png'
            ];
            setLocalFiles(localFileNames);
        } catch (error) {
            console.log('Kunne ikke hente lokale filer:', error);
        }
    };

    const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files || event.target.files.length === 0) return;
        setUploading(true);

        const file = event.target.files[0];
        const fileName = file.name;
        const filePath = `subGroup/${fileName}`;

        const { error } = await supabase.storage.from("bilder").upload(filePath, file);

        if (error) {
            console.error("Error uploading file:", error);
            alert("Feil ved opplasting.");
        } else {
            alert("Bildet ble lastet opp til Supabase! Husk å flytte det til public/images/subgroups/ for raskere lasting.");
            setFiles(prev => [...prev, fileName]);
        }

        setUploading(false);
    };

    const handleDelete = async (fileName: string) => {
        const filePath = `subGroup/${fileName}`;
        const { error } = await supabase.storage.from("bilder").remove([filePath]);

        if (error) {
            console.error("Error deleting file:", error);
            alert("Kunne ikke slette filen.");
        } else {
            alert("Bildet er slettet");
            setFiles(prev => prev.filter(file => file !== fileName));
        }
    };

    if (!isOpen) return null; // ✅ Don't render if modal is closed

    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-50 z-[100]">
            <div className="bg-white p-6 rounded-xl shadow-lg w-[400px] relative">
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-4 right-4 text-red-600 hover:scale-120">
                    <CloseIcon />
                </button>

                <h2 className="text-lg font-bold mb-4 text-center">Administrer gruppebilder</h2>

                {/* Info Section */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                    <div className="flex items-center mb-2">
                        <InfoIcon className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="text-blue-800 font-medium">Optimalisering</span>
                    </div>
                    <p className="text-blue-700 text-sm">
                        For raskeste bildehastning, flytt bilder til <code>public/images/subgroups/</code> etter opplasting.
                    </p>
                </div>

                {/* Local Files Section */}
                {localFiles.length > 0 && (
                    <div className="mb-4">
                        <h3 className="text-md font-semibold mb-2 text-green-700">✅ Lokale bilder (raske):</h3>
                        <ul className="space-y-1">
                            {localFiles.map((file, index) => (
                                <li key={index} className="flex items-center p-2 rounded-lg bg-green-50 border border-green-200">
                                    <span className="text-green-800 font-medium text-sm">{file}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Upload Section */}
                <label className="cursor-pointer flex items-center justify-center border-2 border-dashed border-gray-400 rounded-lg p-4 mb-4 bg-white hover:border-gray-600 hover:bg-gray-100 transition duration-200">
                    <AddPhotoAlternateIcon className="w-6 h-6 text-gray-600 mr-2" />
                    <span className="text-gray-700 font-medium">Klikk her for å laste opp en fil</span>
                    <input 
                        type="file" 
                        onChange={handleUpload} 
                        accept="image/*" 
                        disabled={uploading} 
                        className="hidden"
                    />
                </label>

                {uploading && <p className="text-gray-600 text-center">Laster opp...</p>}

                {/* Supabase Files Section */}
                {files.length > 0 && (
                    <div className="mb-4">
                        <h3 className="text-md font-semibold mb-2 text-orange-700">⚠️ Supabase bilder (trege):</h3>
                        <ul className="space-y-2">
                            {files.map((file, index) => (
                                <li key={index} className="flex items-center p-3 rounded-lg shadow-sm bg-orange-50 border border-orange-200">
                                    <button 
                                        onClick={() => handleDelete(file)} 
                                        className="text-red-600 hover:scale-110 font-bold text-sm mr-4"
                                    >
                                        <CancelIcon/>
                                    </button>
                                    <span className="flex-grow text-orange-800 font-medium">{file}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
