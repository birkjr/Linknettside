import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import PlaceIcon from "@mui/icons-material/Place";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

type Event = {
    id: string;
    title: string;
    date: string;
    location: string;
    restaurant: string;
    bedrift: string;
    time: string;
    link: string;
};

export default function Arrangementer() {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            const { data, error } = await supabase.from("events").select("*");

            if (error) {
                console.error("Kunne ikke hente arrangementer:", error);
            } else {
                setEvents(data);
            }
            setLoading(false);
        };

        fetchEvents();
    }, []);



    return (
        <div className="w-full max-w-6xl mx-auto p-6 sm:p-12 text-black rounded-xl" style={{ backgroundColor: "#4682B4" }}>
            <h1 className="text-white text-3xl text-center">Arrangementer</h1>
            <p className="text-white text-sm text-center pb-4">Her er de kommende arrangementene for EMIL studenter</p>

            {loading ? (
                <p className="text-center text-black">Laster inn arrangementer...</p>
            ) : events.length > 0 ? (
                <div >
                    {events.map((event) => (
                        <a key={event.id} href={event.link} target="_blank" rel="noopener noreferrer">
                            <div className="w-full sm:max-w-2xl mx-auto bg-white py-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-102 hover:shadow-md text-black mb-4">
                            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left px-6">
                                    {/* Logo Section */}
                                    <div className="ml-4 w-20 h-20 sm:w-24 sm:h-24 bg-stone-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <img
                                            src={`https://logo.clearbit.com/${event.bedrift.toLowerCase().replace(/\s+/g, "")}.com`}
                                            alt={event.bedrift}
                                            className="w-full h-full object-contain rounded-xl"
                                        />
                                    </div>

                                    {/* Event Info Section */}
                                    <div className="flex-1 text-center md:text-left px-4">
                                        <h2 className="text-lg sm:text-xl font-semibold">{event.bedrift}</h2>
                                        <p className="italic text-gray-700">{event.title}</p>
                                    </div>

                                    {/* Event Details */}
                                    <div className="flex-1 text-center md:text-left flex-col md:items-start text-sm text-black font-serif md:mt-0">
                                        <p className="flex items-center space-x-4 py-1">
                                            <PlaceIcon fontSize="inherit" />
                                            <span>{event.location}</span>
                                        </p>
                                        <p className="flex items-center space-x-4 py-1">
                                            <RestaurantMenuIcon fontSize="inherit" />
                                            <span>{event.restaurant}</span>
                                        </p>
                                        <p className="flex items-center space-x-4 py-1">
                                            <CalendarMonthIcon fontSize="inherit" />
                                            <span>{event.date}</span>
                                        </p>
                                        <p className="flex items-center space-x-4 py-1">
                                            <AccessTimeIcon fontSize="inherit" />
                                            <span>{event.time}</span>
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </a>
                    ))}
                </div>
            ) : (
                <p className="text-center text-white">Ingen arrangementer funnet.</p>
            )}
        </div>
    );
}
