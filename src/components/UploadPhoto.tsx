import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

export default function UploadPhoto() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [fileNames, setFileNames] = useState<string[]>([]);

  // ** Fetch all image file names on component load **
  useEffect(() => {
    fetchFileNames();
  }, []);

  const fetchFileNames = async () => {
    const { data, error } = await supabase.storage.from("bilder").list("public/bilder", { limit: 100 });

    if (error) {
      console.error("❌ Error fetching files:", error);
    } else {
      setFileNames(data.map((file) => file.name)); // Store only file names
    }
  };

  // ** Upload file to Supabase **
  const uploadFile = async () => {
    if (!selectedFile) {
      alert("Vennligst velg et bilde først!");
      return;
    }

    setUploading(true);
    const filePath = `public/bilder/${Date.now()}_${selectedFile.name}`;

    const { error } = await supabase.storage.from("bilder").upload(filePath, selectedFile);

    if (error) {
      console.error("❌ Feil ved opplasting:", error);
      alert("Kunne ikke laste opp bildet. Prøv igjen.");
    } else {
      alert("✅ Bildet ble lastet opp!");
      setFileNames((prev) => [...prev, filePath.split("/").pop()!]); // Add only file name
      setSelectedFile(null);
    }

    setUploading(false);
  };

  // ** Delete file from Supabase **
  const deleteFile = async (fileName: string) => {
    const filePath = `public/bilder/${fileName}`; // Ensure correct file path

    console.log("🔍 Attempting to delete file:", filePath);

    // Fetch public URL before deletion
    const { data } = supabase.storage.from("bilder").getPublicUrl(filePath);


    console.log("🌍 Public URL of image before deletion:", data.publicUrl);

    // Attempt to delete the file from Supabase Storage
    const { error } = await supabase.storage.from("bilder").remove([filePath]);

    if (error) {
      console.error("❌ Error deleting file from Supabase:", error);
      alert("Kunne ikke slette bildet. Prøv igjen.");
      return;
    }

    // Remove from UI
    setFileNames((prev) => prev.filter((name) => name !== fileName));
    alert("✅ Bildet ble slettet fra Supabase!");
  };

  // ** Handle file drop (Drag & Drop) **
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
    } else {
      alert("Kun bildefiler er tillatt! 📷");
    }
  };

  // ** Handle file selection via input (Finder) **
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
    } else {
      alert("Kun bildefiler er tillatt! 📷");
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto p-6 rounded-xl shadow-lg">
      <h2 className="text-lg font-bold mb-4 text-center">Last opp bilder</h2>

      {/* File Input Button */}
      <div
        className="flex flex-col items-center justify-center space-y-4 border-2 border-dashed border-gray-400 p-6 rounded-lg text-center cursor-pointer hover:bg-yellow-100"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <AddPhotoAlternateIcon />
        <label className="hover:bg-yellow-200 text-gray-400 px-4 py-2 rounded-md cursor-pointer border-2 border-dashed">
          <UploadFileIcon />
          <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
        </label>
      </div>

      {/* Upload Button */}
      <button
        onClick={uploadFile}
        disabled={uploading}
        className="bg-green-700 text-white px-4 py-2 my-2 rounded-md hover:bg-green-800 w-full"
      >
        {uploading ? "Laster opp..." : "Last opp bilde"}
      </button>

      {/* Display File Names */}
      <div className="mt-6">
        <h3 className="text-md font-bold mb-2">Opplastede bilder</h3>
        {fileNames.length === 0 ? (
          <p className="text-gray-500">Ingen bilder funnet.</p>
        ) : (
          <ul className="list-disc pl-5">
            {fileNames.map((fileName) => (
              <li key={fileName} className="flex justify-between items-center mb-2 p-2 shadow-md bg-yellow-100 rounded-xl">
                <span className="text-gray-700">{fileName}</span>
                <button
                  onClick={() => deleteFile(fileName)}
                  className="text-red-600 hover:text-red-800 text-lg"
                >
                  ✖
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
