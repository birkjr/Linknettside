import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

// Debounce helper function
const useDebounce = (value: any, delay: any) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

type Event = {
    id: number;
    title: string;
    date: string;
    location: string;
    restaurant: string;
    bedrift: string;
    time: string;
    link: string;
    imageURL: string; // Store the selected image URL
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
        imageURL: "", // Add image URL field for new events
    });

    const [editingEvent, setEditingEvent] = useState<Event | null>(null);
    const [imageSearch, setImageSearch] = useState(""); // Track search input for images
    const [images, setImages] = useState<string[]>([]); // Store available images in state

    // Use debounce to wait for user to stop typing before fetching images
    const debouncedSearch = useDebounce(imageSearch, 500); // 500ms debounce

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

    // Fetch images from the 'events_jobads' folder in Supabase storage
    useEffect(() => {
        if (!debouncedSearch) return; // Do not fetch images if search is empty

        const fetchImages = async () => {
            const { data, error } = await supabase
                .storage
                .from('bilder')
                .list('events_jobads', { search: debouncedSearch.toLowerCase() }); // Filter images by search term
            
            if (error) {
                console.error("Error fetching images:", error);
            } else {
                console.log("Fetched images:", data); // Add log to check the response
                setImages(data.map(item => item.name)); // Store image names
            }
        };

        fetchImages();
    }, [debouncedSearch]); // Re-fetch images when the debounced search term changes

    // Function to add a new event
    const addNewEvent = async () => {
        if (!newEvent.title || !newEvent.date || !newEvent.location || !newEvent.restaurant || !newEvent.bedrift || !newEvent.time || !newEvent.link || !newEvent.imageURL) {
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
            setNewEvent({
                title: "",
                date: "",
                location: "",
                restaurant: "",
                bedrift: "",
                time: "",
                link: "",
                imageURL: "", // Reset imageUrl
            });
        }
    };

2

    const editEvent = (event: Event) => {
        setEditingEvent(event);
    };

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
                imageURL: editingEvent.imageURL,
            })
            .eq("id", editingEvent.id);

        if (error) {
            console.error("Error updating event:", error);
            alert("Kunne ikke oppdatere arrangementet. Prøv igjen.");
        } else {
            setEvents(events.map((event) => (event.id === editingEvent.id ? editingEvent : event))); 
            setEditingEvent(null);
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto p-6 rounded-xl shadow-lg">
            <h2 className="text-lg font-bold mb-4 text-center">Administrer arrangementer</h2>

            {/* Form for adding new events */}
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Tittel"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                    className="w-full p-2 border rounded mb-2"
                />
                <input
                    type="text"
                    placeholder="Bedrift"
                    value={newEvent.bedrift}
                    onChange={(e) => setNewEvent({ ...newEvent, bedrift: e.target.value })}
                    className="w-full p-2 border rounded mb-2"
                />
                <input
                    type="text"
                    placeholder="Sted"
                    value={newEvent.location}
                    onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                    className="w-full p-2 border rounded mb-2"
                />
                <input
                    type="date"
                    placeholder="Dato"
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                    className="w-full p-2 border rounded mb-2"
                />
                <input
                    type="text"
                    placeholder="Restaurant"
                    value={newEvent.restaurant}
                    onChange={(e) => setNewEvent({ ...newEvent, restaurant: e.target.value })}
                    className="w-full p-2 border rounded mb-2"
                />
                <input
                    type="time"
                    placeholder="Tid"
                    value={newEvent.time}
                    onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                    className="w-full p-2 border rounded mb-2"
                />
                <input
                    type="text"
                    placeholder="Lenke til teknologiporten arrangement"
                    value={newEvent.link}
                    onChange={(e) => setNewEvent({ ...newEvent, link: e.target.value })}
                    className="w-full p-2 border rounded mb-2"
                />
                {/* Image Search and Selection */}
                <div>
                    <input
                        type="text"
                        placeholder="Legg til bilde"
                        value={imageSearch}
                        onChange={(e) => setImageSearch(e.target.value)}
                        className="w-full p-2 border rounded mb-2"
                    />
                    {/* Only display the images if there is a search term */}
                    {debouncedSearch && (
                        <div className="flex flex-col mb-4 gap-2">
                            {images.length > 0 ? (
                                images.map((image, index) => (
                                    <div
                                        key={index}
                                        className="pb-2 text-green-500"
                                        onClick={() => setNewEvent({ ...newEvent, imageURL: image })}
                                    > 
                                        <em>{image}</em>
                                    </div>
                                ))
                            ) : (
                                <p>No images found.</p>
                            )}
                        </div>
                    )}
                </div>
                <button
                    className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 w-full cursor-pointer"
                    onClick={addNewEvent}
                >
                    Legg til arrangement
                </button>
            </div>

            {/* Display Existing Events */}
            {events.length === 0 ? (
                <p className="text-center">Ingen arrangementer ute for øyeblikket.</p>
            ) : (
                <ul className="space-y-1">
                    {events.map((event) => (
                        <li key={event.id}>
                            <div className="flex flex-row">
                                <div
                                    className="px-12 py-2 rounded-lg shadow-md flex justify-between items-center bg-amber-100 hover:bg-amber-200 cursor-pointer"
                                    onClick={() => editEvent(event)}
                                >
                                    <p className="font-bold flex text-center">
                                        {event.title}, {event.date}
                                    </p>
                                </div>
                                <button
                                    className="text-red-600 hover:scale-110 text-lg cursor-pointer"
                                    onClick={() => removeEvent(event.id)}
                                >
                                    <DeleteForeverIcon />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            {/* Edit Event Form */}
            {editingEvent && (
                <div className="mt-6 p-4 border rounded-lg shadow-md bg-gray-100">
                    <h3 className="text-lg font-bold mb-2">Rediger arrangement</h3>
                    <input type="text" value={editingEvent.title} onChange={(e) => setEditingEvent({ ...editingEvent, title: e.target.value })} className="w-full p-2 border rounded mb-2"/>
                    <input type="text" value={editingEvent.bedrift} onChange={(e) => setEditingEvent({ ...editingEvent, bedrift: e.target.value })} className="w-full p-2 border rounded mb-2"/>
                    <input type="text" value={editingEvent.location} onChange={(e) => setEditingEvent({ ...editingEvent, location: e.target.value })} className="w-full p-2 border rounded mb-2"/>
                    <input type="date" value={editingEvent.date} onChange={(e) => setEditingEvent({ ...editingEvent, date: e.target.value })} className="w-full p-2 border rounded mb-2"/>
                    <input type="text" value={editingEvent.restaurant} onChange={(e) => setEditingEvent({ ...editingEvent, restaurant: e.target.value })} className="w-full p-2 border rounded mb-2"/>
                    <input type="time" value={editingEvent.time} onChange={(e) => setEditingEvent({ ...editingEvent, time: e.target.value })} className="w-full p-2 border rounded mb-2"/>
                    <input type="text" value={editingEvent.link} onChange={(e) => setEditingEvent({ ...editingEvent, link: e.target.value })} className="w-full p-2 border rounded mb-2"/>
                    {/* Image Search and Selection */}
                    <div>
                    <input 
                    type="text"
                    //placeholder={`${editingJob.bedrift}.png`}
                    value={editingEvent.imageURL}
                    onChange={(e) => setEditingEvent({...editingEvent, imageURL: e.target.value})}
                    className="w-full p-2 border rounded mb-2"
                    />
                    {/* Only display the images if there is a search term */}
                    {debouncedSearch && (
                        <div className="flex flex-col mb-4 gap-2">
                            {images.length > 0 ? (
                                images.map((image, index) => (
                                    <div
                                        key={index}
                                        className="pb-2 text-green-500"
                                        onClick={() => setEditingEvent({ ...editingEvent, imageURL: image })}
                                    > 
                                        <em>{image}</em>
                                    </div>
                                ))
                            ) : (
                                <p>Ingen bilder funnet. Legg til dette først.</p>
                            )}
                        </div>
                    )}
                    </div>

                    <button
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                        onClick={saveEditedEvent}
                    >
                        Lagre endringer
                    </button>
                </div>
            )}
        </div>
    );
}
