import { useEffect, useCallback } from "react";
import { supabase } from "../../supabaseClient";

interface Event {
    id: string;
    title: string;
    date: string;
    location: string;
    restaurant: string;
    bedrift: string;
    time: string;
    link: string;
    imageURL: string;
}

interface EventCleanerProps {
    events: Event[];
    setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
}

const EventCleaner: React.FC<EventCleanerProps> = ({ events, setEvents }) => {
    const deletePastEvents = useCallback(async () => {
        const now = new Date();
        const pastEvents = events.filter(event => {
            const eventDateTime = new Date(`${event.date}T${event.time}`);
            return eventDateTime < now;
        });

        if (pastEvents.length === 0) {
            console.log("No past events to delete.");
            return; // Exit if there are no past events
        }

        for (const event of pastEvents) {
            const { error } = await supabase.from("events").delete().eq("id", event.id);
            if (error) {
                console.error("Error deleting event:", error);
            } else {
                setEvents(prevEvents => prevEvents.filter(e => e.id !== event.id));
            }
        }
    }, [events, setEvents]);

    useEffect(() => {
        deletePastEvents(); // Call immediately on mount

        const intervalId = setInterval(deletePastEvents, 60000); // Check every minute
        return () => clearInterval(intervalId); // Cleanup on unmount
    }, [deletePastEvents]);

    return null; // This component does not render anything
};

export default EventCleaner;