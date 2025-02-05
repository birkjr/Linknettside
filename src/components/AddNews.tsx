import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

type News = {
  id: number;
  title: string;
  description: string;
  link: string;
};

export default function AddNews() {
  const [news, setNews] = useState<News[]>([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newLink, setNewLink] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch news on mount
  useEffect(() => {
    const fetchNews = async () => {
      const { data, error } = await supabase.from("news").select("*");

      if (error) {
        console.error("Error fetching news:", error);
      } else {
        setNews(data);
      }
      setLoading(false);
    };

    fetchNews();
  }, []);

  // Add a new news item
  const addNewsItem = async () => {
    if (!newTitle || !newDescription || !newLink) {
      alert("Fyll inn alle feltene.");
      return;
    }

    const { data, error } = await supabase
      .from("news")
      .insert([{ title: newTitle, description: newDescription, link: newLink }])
      .select("*");

    if (error) {
      console.error("Error adding news:", error);
      alert("Kunne ikke legge til nyhet.");
    } else {
      alert("Nyhet lagt til!");
      setNews([...news, ...data]); // Update the local state
      setNewTitle("");
      setNewDescription("");
      setNewLink("");
    }
  };

  // Delete a news item
  const deleteNewsItem = async (id: number) => {
    const { error } = await supabase.from("news").delete().eq("id", id);

    if (error) {
      console.error("Error deleting news:", error);
      alert("Kunne ikke slette nyhet.");
    } else {
      setNews(news.filter((item) => item.id !== id)); // Remove from local state
      alert("Nyhet slettet.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Administrer Nyheter</h2>

      {/* Add News Form */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Tittel"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <textarea
          placeholder="Beskrivelse"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="text"
          placeholder="Lenke til artikkel"
          value={newLink}
          onChange={(e) => setNewLink(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <button
          onClick={addNewsItem}
          className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800"
        >
          Legg til nyhet
        </button>
      </div>

      {/* Display News List */}
      {loading ? (
        <p className="text-gray-500">Laster inn nyheter...</p>
      ) : news.length === 0 ? (
        <p className="text-gray-500">Ingen nyheter ute for øyeblikket.</p>
      ) : (
        <ul className="space-y-4">
          {news.map((item) => (
            <li key={item.id} className="border p-4 rounded-lg shadow-md flex justify-between items-center">
              <div>
                <p className="font-bold">{item.title}</p>
                <p className="text-sm text-gray-700">{item.description}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  Les mer
                </a>
              </div>
              <button
                onClick={() => deleteNewsItem(item.id)}
                className="text-red-600 hover:text-red-800 text-lg"
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
