import { useEffect } from "react";
import { supabase } from "../supabaseClient";

const EventCleaner = ({ events, setEvents }) => {
    const deletePastEvents = async () => {
        const now = new Date();
        const pastEvents = events.filter(event => {
            const eventDateTime = new Date(`${event.date}T${event.time}`);
            return eventDateTime < now;
        });

        for (const event of pastEvents) {
            const { error } = await supabase.from("events").delete().eq("id", event.id);
            if (error) {
                console.error("Error deleting event:", error);
            } else {
                setEvents(prevEvents => prevEvents.filter(e => e.id !== event.id));
            }
        }
    };

    useEffect(() => {
        const intervalId = setInterval(deletePastEvents, 60000); // Check every minute

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, [events]);

    return null; // This component does not render anything
};

export default EventCleaner;