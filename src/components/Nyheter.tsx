import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Link } from "react-router-dom";

type News = {
  id: number;
  title: string;
  description: string;
  link: string;
};

export default function Nyheter() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="my-6 p-4 font-serif flex flex-col justify-center items-center">
      <h1 className="text-2xl">Nyheter</h1>
      <div className="font-medium mt-2 flex justify-center items-center">
        <Link
          to={"/jobbtorget"}
          className="bg-green-800 py-6 px-4 rounded-xl text-sm hover:scale-102 text-white"
        >
          Sjekk ut nyeste jobbannonser <ArrowCircleRightIcon />
        </Link>
      </div>

      {/* Display News */}
      <div className="mt-6 w-full max-w-xs">
        {loading ? (
          <p className="text-gray-600 text-center">Laster inn nyheter...</p>
        ) : news.length === 0 ? (
            <div></div>
        ) : (
          news.map((item) => (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-amber-50 rounded-xl text-black hover:scale-102"
              >
                <div key={item.id} className="p-4 rounded-lg shadow-md mb-4 w-full break-words overflow-hidden">
                    <h2 className="text-lg">{item.title}</h2>
                    <p className="text-sm text-gray-700">{item.description}</p>
                </div>
              </a>
          ))
        )}
      </div>
    </div>
  );
}
