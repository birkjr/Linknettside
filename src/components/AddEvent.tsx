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

    const [editingEvent, setEditingEvent] = useState<Event | null>(null);

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

    useEffect(() => {
        const checkAndDeleteExpiredEvents = async () => {
            const now = new Date();
            console.log("🔍 Current time:", now.toISOString());
    
            for (const event of events) {
                // Properly format the event datetime
                const eventDateTime = new Date(`${event.date}T${event.time}`);
    
                console.log(`🕒 Checking event: ${event.title}`);
                console.log("   🗓️ Event DateTime:", eventDateTime.toISOString());
    
                // If the current time is equal or past the event time, delete it
                if (now >= eventDateTime) {
                    console.log(`🚨 Deleting event: ${event.title}`);
    
                    const { error } = await supabase.from("events").delete().eq("id", event.id);
                    if (error) {
                        console.error("❌ Error deleting event:", error);
                    } else {
                        setEvents((prev) => prev.filter((e) => e.id !== event.id)); // Remove from UI
                        console.log(`✅ Successfully deleted: ${event.title}`);
                    }
                }
            }
        };
    
        // Run every 10 seconds to ensure events get deleted on time
        const interval = setInterval(checkAndDeleteExpiredEvents, 10000);
    
        return () => clearInterval(interval); // Cleanup function
    }, [events]);
    
    

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
    const editEvent = (event: Event) => {
        setEditingEvent(event);
    };

    // ✅ Save edited event
    const saveEditedEvent = async () => {
        if (!editingEvent) return;

        const { error } = await supabase
            .from("events")
            .update({
                title: editingEvent.title,
                date: editingEvent.date,
                location: editingEvent.location,
                restaurant: editingEvent.restaurant,
                bedrift: editingEvent.bedrift,
                time: editingEvent.time,
                link: editingEvent.link,
            })
            .eq("id", editingEvent.id);

        if (error) {
            console.error("Error updating event:", error);
            alert("Kunne ikke oppdatere arrangementet. Prøv igjen.");
        } else {
            setEvents(events.map((event) => (event.id === editingEvent.id ? editingEvent : event))); // Update UI
            setEditingEvent(null);
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
                <input type="date" placeholder="Dato" value={newEvent.date} onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} className="w-full p-2 border rounded mb-2" />
                <input type="text" placeholder="Restaurant" value={newEvent.restaurant} onChange={(e) => setNewEvent({ ...newEvent, restaurant: e.target.value })} className="w-full p-2 border rounded mb-2" />
                <input type="time" placeholder="Tid" value={newEvent.time} onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })} className="w-full p-2 border rounded mb-2" />
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
                        <li key={event.id} className="px-12 py-2 rounded-lg shadow-md flex justify-between items-center bg-yellow-100 hover:scale-102" onClick={() => editEvent(event)}>
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
            {/* Edit Event Form */}
            {editingEvent && (
                <div className="mt-6 p-4 border rounded-lg shadow-md bg-gray-100">
                    <h3 className="text-lg font-bold mb-2">Rediger arrangement</h3>
                    <input type="text" value={editingEvent.title} onChange={(e) => setEditingEvent({ ...editingEvent, title: e.target.value })} className="w-full p-2 border rounded mb-2" />
                    <input type="text" value={editingEvent.bedrift} onChange={(e) => setEditingEvent({ ...editingEvent, bedrift: e.target.value })} className="w-full p-2 border rounded mb-2" />
                    <input type="text" value={editingEvent.location} onChange={(e) => setEditingEvent({ ...editingEvent, location: e.target.value })} className="w-full p-2 border rounded mb-2" />
                    <input type="date" value={editingEvent.date} onChange={(e) => setEditingEvent({ ...editingEvent, date: e.target.value })} className="w-full p-2 border rounded mb-2" />
                    <input type="text" value={editingEvent.restaurant} onChange={(e) => setEditingEvent({ ...editingEvent, restaurant: e.target.value })} className="w-full p-2 border rounded mb-2" />
                    <input type="time" value={editingEvent.time} onChange={(e) => setEditingEvent({ ...editingEvent, time: e.target.value })} className="w-full p-2 border rounded mb-2" />
                    <input type="text" value={editingEvent.link} onChange={(e) => setEditingEvent({ ...editingEvent, link: e.target.value })} className="w-full p-2 border rounded mb-2" />
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md" onClick={saveEditedEvent}>
                        Lagre endringer
                    </button>
                </div>
            )}
        </div>
    );
}
