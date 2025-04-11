import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';
import CancelIcon from '@mui/icons-material/Cancel';

type EditBoardPics = {
    isOpen: boolean;
    onClose: () => void;
};

export default function ImgBoard({ isOpen, onClose }: EditBoardPics) {
    const [files, setFiles] = useState<string[]>([]);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Fetch files when modal is open
    useEffect(() => {
        if (isOpen) {
            fetchFiles();
        }
    }, [isOpen]);

    const fetchFiles = async () => {
        const { data, error } = await supabase.storage.from("bilder").list("board_pic");
        if (error) {
            setError("Error fetching files: " + error.message);
            console.error("Error fetching files:", error);
        } else {
            setFiles(data.map(file => file.name));
            setError(null); // Clear any previous errors
        }
    };

    const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files || event.target.files.length === 0) return;
        setUploading(true);
        setError(null); // Clear previous errors

        const file = event.target.files[0];
        const filePath = `board_pic/${file.name}`;

        const { error } = await supabase.storage.from("bilder").upload(filePath, file);

        if (error) {
            setError("Error uploading file: " + error.message);
            console.error("Error uploading file:", error);
        } else {
            alert("Image uploaded successfully!");
            fetchFiles(); // Refresh the file list
        }

        setUploading(false);
    };

    const handleDelete = async (fileName: string) => {
        const filePath = `board_pic/${fileName}`;
        console.log("Attempting to delete:", filePath); // Debugging line
    
        const { error } = await supabase.storage.from("bilder").remove([filePath]);
    
        if (error) {
            setError("Error deleting file: " + error.message);
            console.error("Error deleting file:", error);
        } else {
            console.log("Delete operation successful for:", filePath); // Debugging line
            alert("Image deleted successfully!");
            fetchFiles(); // Refresh the file list
        }
    };

    if (!isOpen) return null; // Don't render if modal is closed

    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-xl shadow-lg w-[400px] relative">
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-4 right-4 text-red-600 hover:scale-120">
                    <CloseIcon />
                </button>

                <h2 className="text-lg font-bold mb-4 text-center">Manage Board Images</h2>

                {error && <p className="text-red-600 text-center">{error}</p>}

                {/* Upload Section */}
                <label className="cursor-pointer flex items-center justify-center border-2 border-dashed border-gray-400 rounded-lg p-4 mb-4 bg-white hover:border-gray-600 hover:bg-gray-100 transition duration-200">
                    <AddPhotoAlternateIcon className="w-6 h-6 text-gray-600 mr-2" />
                    <span className="text-gray-700 font-medium">Click here to upload a file</span>
                    <input 
                        type="file" 
                        onChange={handleUpload} 
                        accept="image/*" 
                        disabled={uploading} 
                        className="hidden"
                    />
                </label>

                {uploading && <p className="text-gray-600 text-center">Uploading...</p>}

                {/* File List */}
                <ul className="space-y-2">
                    {files.map((file, index) => (
                        <li key={index} className="flex items-center p-3 rounded-lg shadow-sm">
                            <button 
                                onClick={() => handleDelete(file)} 
                                className="text-red-600 hover:scale-110 font-bold text-sm mr-4"
                            >
                                <CancelIcon/>
                            </button>
                            <span className="flex-grow text-gray-800 font-medium">{file}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}