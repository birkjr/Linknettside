import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

type Event = {
    id: number;
    title: string;
    date: string;
    location: string;
    restaurant: string;
    bedrift: string;
    time: string;
    link: string;
};

export default function AddEvent() {
    const [events, setEvents] = useState<Event[]>([]);
    const [newEvent, setNewEvent] = useState({
        title: "",
        date: "",
        location: "",
        restaurant: "",
        bedrift: "",
        time: "",
        link: "",
    });

    // Fetch events from Supabase on component mount
    useEffect(() => {
        const fetchEvents = async () => {
            const { data, error } = await supabase.from("events").select("*");
            if (error) {
                console.error("Error fetching events:", error);
            } else {
                setEvents(data);
            }
        };
        fetchEvents();
    }, []);

    // Function to add a new event
    const addNewEvent = async () => {
        if (!newEvent.title || !newEvent.date || !newEvent.location || !newEvent.restaurant || !newEvent.bedrift || !newEvent.time || !newEvent.link) {
            alert("Fyll inn alle nødvendige felt.");
            return;
        }

        const { data, error } = await supabase
            .from("events")
            .insert([newEvent])
            .select("*");

        if (error) {
            console.error("Feil ved legge til arrangement:", error);
            alert(`Kunne ikke legge til arrangement. Prøv igjen. Error: ${error.message}`);
        } else {
            alert("Arrangement er opprettet!");
            setEvents([...events, ...data]); // Update the state with the new event
            setNewEvent({ title: "", date: "", location: "", restaurant: "", bedrift: "", time: "", link: "" });
        }
    };

    // Function to remove an event
    const removeEvent = async (id: number) => {
        const { error } = await supabase.from("events").delete().eq("id", id);

        if (error) {
            console.error("Error deleting event:", error);
            alert("Kunne ikke fjerne arrangement. Prøv igjen.");
        } else {
            setEvents(events.filter((event) => event.id !== id)); // Update state to remove event
            alert("Arrangementet har blitt fjernet.");
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto p-6 rounded-xl shadow-lg">
            <h2 className="text-lg font-bold mb-4 text-center">Administrer arrangementer</h2>

            {/* Form for adding new events */}
            <div className="mb-6">
                <input type="text" placeholder="Tittel" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} className="w-full p-2 border rounded mb-2" />
                <input type="text" placeholder="Bedrift" value={newEvent.bedrift} onChange={(e) => setNewEvent({ ...newEvent, bedrift: e.target.value })} className="w-full p-2 border rounded mb-2" />
                <input type="text" placeholder="Sted" value={newEvent.location} onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })} className="w-full p-2 border rounded mb-2" />
                <input type="text" placeholder="Dato" value={newEvent.date} onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} className="w-full p-2 border rounded mb-2" />
                <input type="text" placeholder="Restaurant" value={newEvent.restaurant} onChange={(e) => setNewEvent({ ...newEvent, restaurant: e.target.value })} className="w-full p-2 border rounded mb-2" />
                <input type="text" placeholder="Tid" value={newEvent.time} onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })} className="w-full p-2 border rounded mb-2" />
                <input type="text" placeholder="Lenke til teknologiporten arrangement" value={newEvent.link} onChange={(e) => setNewEvent({ ...newEvent, link: e.target.value })} className="w-full p-2 border rounded mb-2" />
                <button className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 w-full" onClick={addNewEvent}>
                    Legg til arrangement
                </button>
            </div>

            {/* Display Existing Events */}
            {events.length === 0 ? (
                <p className="text-center">Ingen arrangementer ute for øyeblikket.</p>
            ) : (
                <ul className="space-y-1">
                    {events.map((event) => (
                        <li key={event.id} className="px-12 py-2 rounded-lg shadow-md flex justify-between items-center bg-yellow-100">
                            <div >
                                <p className="font-bold flex text-center">{event.title }, {event.date}</p>
                            </div>
                            <button className="text-red-600 hover:text-red-800 text-lg" onClick={() => removeEvent(event.id)}>
                                ✖
                            </button>
                        </li>
                        
                    ))}
                </ul>
            )}
        </div>
    );
}
