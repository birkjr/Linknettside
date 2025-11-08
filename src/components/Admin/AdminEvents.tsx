import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../../supabaseClient';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useToast } from '../../context/ToastContext';
import ImageSelector from '../Tools/ImageSelector';

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
    title: '',
    date: '',
    location: '',
    restaurant: '',
    bedrift: '',
    time: '',
    link: '',
    imageURL: '', // Add image URL field for new events
  });

  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const { showToast } = useToast();

  // Fetch events from Supabase on component mount
  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase.from('events').select('*');
      if (error) {
        console.error('Error fetching events:', error);
      } else {
        console.log('Fetched Events:', data); // Log fetched events
        setEvents(data);
      }
    };
    fetchEvents();
  }, []);

  const removeEvent = useCallback(
    async (id: number) => {
      const { error } = await supabase.from('events').delete().eq('id', id);
      if (error) {
        console.error('Error deleting job:', error);
        showToast('Kunne ikke fjerne arrangement. Prøv igjen.', 'error');
      } else {
        setEvents(prev => prev.filter(event => event.id !== id)); // Update state to remove event
        showToast('Arrangement har blitt fjernet.', 'success');
      }
    },
    [showToast]
  );

  // Function to delete past events
  const deletePastEvents = useCallback(async () => {
    const now = new Date();
    console.log('Current Date and Time:', now);

    const pastEvents = events.filter(event => {
      const eventDateTime = new Date(`${event.date}T${event.time}`);
      console.log(`Checking event: ${event.title}, DateTime: ${eventDateTime}`);
      return eventDateTime < now;
    });

    console.log('Past Events to be deleted:', pastEvents);

    for (const event of pastEvents) {
      await removeEvent(event.id);
    }
  }, [events, removeEvent]);

  // Set up interval to check for past events
  useEffect(() => {
    const intervalId = setInterval(deletePastEvents, 60000); // Check every minute
    console.log('Setting up interval to delete past events');

    return () => {
      clearInterval(intervalId); // Cleanup on unmount
      console.log('Clearing interval');
    };
  }, [deletePastEvents]);

  // Function to add a new event
  const addNewEvent = async () => {
    // Validering av påkrevde felt
    if (
      !newEvent.title ||
      !newEvent.bedrift ||
      !newEvent.location ||
      !newEvent.date ||
      !newEvent.time ||
      !newEvent.link
    ) {
      showToast(
        'Husk å fylle inn alle felt! (Tittel, bedrift, sted, dato, tid og lenke)',
        'error'
      );
      return;
    }

    const { data, error } = await supabase
      .from('events')
      .insert([newEvent])
      .select('*');

    if (error) {
      console.error('Feil ved legge til arrangement:', error);
      showToast(
        'Kunne ikke legge til arrangement. Sjekk at alle felt er riktig utfylt og prøv igjen.',
        'error'
      );
    } else {
      showToast('Arrangement er opprettet!', 'success');
      setEvents([...events, ...data]); // Update the state with the new event
      setNewEvent({
        title: '',
        date: '',
        location: '',
        restaurant: '',
        bedrift: '',
        time: '',
        link: '',
        imageURL: '', // Reset imageUrl
      });
    }
  };

  const editEvent = (event: Event) => {
    setEditingEvent(event);
  };

  const saveEditedEvent = async () => {
    if (!editingEvent) return;

    const { error } = await supabase
      .from('events')
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
      .eq('id', editingEvent.id);

    if (error) {
      console.error('Error updating event:', error);
      showToast('Kunne ikke oppdatere arrangementet. Prøv igjen.', 'error');
    } else {
      setEvents(
        events.map(event =>
          event.id === editingEvent.id ? editingEvent : event
        )
      );
      setEditingEvent(null);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 rounded-xl shadow-lg">
      <h2 className="text-lg font-bold mb-4 text-center">
        Administrer arrangementer
      </h2>

      {/* Form for adding new events */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Tittel"
          value={newEvent.title}
          onChange={e => setNewEvent({ ...newEvent, title: e.target.value })}
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="text"
          placeholder="Bedrift"
          value={newEvent.bedrift}
          onChange={e => setNewEvent({ ...newEvent, bedrift: e.target.value })}
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="text"
          placeholder="Sted"
          value={newEvent.location}
          onChange={e => setNewEvent({ ...newEvent, location: e.target.value })}
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="date"
          placeholder="Dato"
          value={newEvent.date}
          onChange={e => setNewEvent({ ...newEvent, date: e.target.value })}
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="text"
          placeholder="Restaurant"
          value={newEvent.restaurant}
          onChange={e =>
            setNewEvent({ ...newEvent, restaurant: e.target.value })
          }
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="time"
          placeholder="Tid"
          value={newEvent.time}
          onChange={e => setNewEvent({ ...newEvent, time: e.target.value })}
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="text"
          placeholder="Lenke til teknologiporten arrangement"
          value={newEvent.link}
          onChange={e => setNewEvent({ ...newEvent, link: e.target.value })}
          className="w-full p-2 border rounded mb-2"
        />
        {/* Image Search and Selection */}
        <div>
          <ImageSelector
            value={newEvent.imageURL}
            onChange={value => setNewEvent({ ...newEvent, imageURL: value })}
            category="events_jobads"
            placeholder="Velg bilde for arrangement..."
            className="mb-2"
          />
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
          {events.map(event => (
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
          <input
            type="text"
            value={editingEvent.title}
            onChange={e =>
              setEditingEvent({ ...editingEvent, title: e.target.value })
            }
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="text"
            value={editingEvent.bedrift}
            onChange={e =>
              setEditingEvent({ ...editingEvent, bedrift: e.target.value })
            }
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="text"
            value={editingEvent.location}
            onChange={e =>
              setEditingEvent({ ...editingEvent, location: e.target.value })
            }
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="date"
            value={editingEvent.date}
            onChange={e =>
              setEditingEvent({ ...editingEvent, date: e.target.value })
            }
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="text"
            value={editingEvent.restaurant}
            onChange={e =>
              setEditingEvent({ ...editingEvent, restaurant: e.target.value })
            }
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="time"
            value={editingEvent.time}
            onChange={e =>
              setEditingEvent({ ...editingEvent, time: e.target.value })
            }
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="text"
            value={editingEvent.link}
            onChange={e =>
              setEditingEvent({ ...editingEvent, link: e.target.value })
            }
            className="w-full p-2 border rounded mb-2"
          />
          {/* Image Search and Selection */}
          <div>
            <ImageSelector
              value={editingEvent.imageURL}
              onChange={value =>
                setEditingEvent({ ...editingEvent, imageURL: value })
              }
              category="events_jobads"
              placeholder="Velg bilde for arrangement..."
              className="mb-2"
            />
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
