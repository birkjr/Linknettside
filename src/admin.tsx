import { useState } from "react";
import { supabase } from "./supabaseClient";
import SupportManager from "./components/SupportManager";

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

type Job = {
    id: number;
    bedrift: string;
    jobType: string;
    jobTitle: string;
    deadline: string;
    link: string;
    place: string;
};

export default function admin(){
    const [events, setEvents] = useState<Event[]>([]);
        const [showEventForm, setEventShowForm] = useState(false);
        const [newEvent, setNewEvent] = useState({
            title: "",
            date: "",
            location: "",
            restaurant: "",
            bedrift: "",
            time: "",
            link: "",
        });
        const [jobListings, setJobListings] = useState<Job[]>([]);
            const [showJobForm, setJobShowForm] = useState(false);
            const [newJob, setNewJob] = useState({
                bedrift: "",
                jobType: "",
                jobTitle: "",
                deadline: "",
                link: "",
                place: ""
            });
    
    // Function to add a new job
    const addNewJob = async () => {
        if (!newJob.bedrift || !newJob.jobTitle || !newJob.link || !newJob.jobType || !newJob.place || !newJob.deadline) {
            alert("Fyll inn alle felt.");
            return;
        }

        

        const { data, error } = await supabase
            .from("jobs")
            .insert([newJob])
            .select("*");

        if (error) {
            console.error("Kunne ikke legge til jobbannonse:", error);
            alert(`Kunne ikke legge til jobb. Prøv igjen eller kontakt oss. Error: ${error.message}`);
        } else {
            alert("Jobbannonse lagt til!");
            setJobListings([...jobListings, ...data]);

            // Reset the form fields after submitting
            setNewJob({ 
                bedrift: "", 
                jobType: "", 
                jobTitle: "", 
                deadline: "", 
                link: "", 
                place: "" 
            });

            setJobShowForm(false);
        }
    };

    // Function to remove a job
    const removeJob = async () => {
        const jobToDelete = prompt("Skriv nøyaktig annonsetittel på jobbannonse du vil fjerne:");
        if (!jobToDelete) return;

        const { error } = await supabase.from("jobs").delete().eq("jobTitle", jobToDelete);

        if (error) {
            console.error("Feil ved fjerning av jobb:", error);
            alert("Klarte ikke å fjerne jobb. Prøv igjen.");
        } else {
            setJobListings(jobListings.filter(job => job.jobTitle !== jobToDelete));
            alert(`"${jobToDelete}" har blitt fjernet.`);
        }
    };

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
            setEvents([...events, ...data]);
            setNewEvent({ title: "", date: "", location: "", restaurant: "", bedrift: "", time: "", link: "" });
            setEventShowForm(false);
        }
    };
    
    // Function to remove an event
    const removeEvent = async () => {
        const eventToDelete = prompt("Skriv nøyaktig tittel på arrangement du vil fjerne:");
        if (!eventToDelete) return;

        const { error } = await supabase.from("events").delete().eq("title", eventToDelete);

        if (error) {
            console.error("Error deleting event:", error);
            alert("Failed to delete event. Try again.");
        } else {
            setEvents(events.filter(event => event.title !== eventToDelete));
            alert(`"${eventToDelete}" har blitt fjernet.`);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex justify-center font-4xl bg-red-400 w-2/3 mt-6 rounded-xl text-black py-6">
                ADMIN
            </div>

            <div className="grid grid-cols-4 space-x-6 mx-4">
                <div className="grid text-center justify-center py-8 border border-gray-300 rounded-xl my-6 bg-amber-50">
                    <div className="font-bold">Arrangementer og jobbannonser</div>
                    {/* Add/Remove Event Buttons */}
                    <div className="px-12 flex flex-col items-center py-4 text-black space-y-4">
                        Adminstrer arrangementer
                        <div className=" border-1 rounded-2xl border-gray-300 p-6">
                            <button 
                                className="hover:scale-105 text-green-700 font-semibold flex justify-center items-center text-sm rounded-full"
                                onClick={() => setJobShowForm(true)}>
                                    Legg til arrangement
                            </button>
                            <button 
                                className="hover:scale-105 text-red-700 font-semibold flex justify-center items-center text-sm rounded-full "
                                onClick={() => removeEvent()}>
                                    Fjern arrangement
                            </button>
                            </div>
                                {/* New Event Form */}
                                {showEventForm && (
                                    <div className="relative max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-6">
                                        <button className="absolute top-3 right-3 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-lg font-bold hover:bg-red-700" onClick={() => setEventShowForm(false)}>
                                            ✕
                                        </button>

                                        <h2 className="text-xl font-semibold mb-4">Legg til nytt arrangement</h2>

                                        <input type="text" placeholder="Tittel" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} className="w-full p-2 border rounded mb-2" />
                                        <input type="text" placeholder="Bedrift" value={newEvent.bedrift} onChange={(e) => setNewEvent({ ...newEvent, bedrift: e.target.value })} className="w-full p-2 border rounded mb-2" />
                                        <input type="text" placeholder="Sted" value={newEvent.location} onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })} className="w-full p-2 border rounded mb-2" />
                                        <input type="text" placeholder="Dato" value={newEvent.date} onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} className="w-full p-2 border rounded mb-2" />
                                        <input type="text" placeholder="Restaurant" value={newEvent.restaurant} onChange={(e) => setNewEvent({ ...newEvent, restaurant: e.target.value })} className="w-full p-2 border rounded mb-2" />
                                        <input type="text" placeholder="Tid" value={newEvent.time} onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })} className="w-full p-2 border rounded mb-2" />
                                        <input type="text" placeholder="Lenke til teknologiporten arrangement" value={newEvent.link} onChange={(e) => setNewEvent({ ...newEvent, link: e.target.value })} className="w-full p-2 border rounded mb-2" />
                                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md w-full mt-2" onClick={addNewEvent}>
                                            Legg til arrangement
                                        </button>
                                    </div>
                                    )}
                    {/* Add/Remove Job Buttons */}
                    <div className="px-12 flex flex-col items-center py-4 text-black space-y-4">
                        Adminstrer jobbannonser
                        <div className=" border-1 rounded-2xl border-gray-300 p-6">
                            <button 
                                className="hover:scale-105 text-green-700 font-semibold flex justify-center items-center text-sm rounded-full"
                                onClick={() => setEventShowForm(true)}>
                                        Legg til jobbannonse
                            </button>
                            <button 
                                className="hover:scale-105 text-red-700 font-semibold flex justify-center items-center text-sm rounded-full "
                                onClick={() => removeJob()}>
                                    Fjern jobbannonse
                            </button>
                        </div>
                        {/* New Job Form */}
                        {showJobForm && (
                            <div className="relative max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-6">
                                <button className="absolute top-3 right-3 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-lg font-bold hover:bg-red-700" onClick={() => setJobShowForm(false)}>
                                    ✕
                                </button>
                                <h2 className="text-xl font-semibold mb-4">Legg til ny jobb</h2>
                                <input type="text" placeholder="Bedrift" value={newJob.bedrift} onChange={(e) => setNewJob({ ...newJob, bedrift: e.target.value })} className="w-full p-2 border rounded mb-2" />

                                <select className="w-full p-2 border rounded mb-2" onChange={(e) => setNewJob({ ...newJob, jobType: e.target.value })} value={newJob.jobType}>
                                    <option value="">Velg stillingstype</option>
                                    <option value="Sommerjobb">Sommerjobb</option>
                                    <option value="Internship">Internship</option>
                                    <option value="Heltidsstilling">Heltidsstilling</option>
                                </select>
                                <input type="text" placeholder="Tittel" value={newJob.jobTitle} onChange={(e) => setNewJob({ ...newJob, jobTitle: e.target.value })} className="w-full p-2 border rounded mb-2" />
                                <input type="text" placeholder="Sted (Place)" value={newJob.place} onChange={(e) => setNewJob({ ...newJob, place: e.target.value })} className="w-full p-2 border rounded mb-2" />
                                <input type="text" placeholder="Søknadsfrist" value={newJob.deadline} onChange={(e) => setNewJob({ ...newJob, deadline: e.target.value })} className="w-full p-2 border rounded mb-2" />
                                <input type="text" placeholder="Link til annonse her" value={newJob.link} onChange={(e) => setNewJob({ ...newJob, link: e.target.value})} className="w-full p-2 border rounded mb-2" /> 
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md w-full mt-2" onClick={addNewJob}>
                                    Legg til jobb
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="grid text-center justify-center py-8 border border-gray-300 rounded-xl my-6 bg-amber-50">
                <div className="font-bold">Adminstrer bilder og styret</div>
            </div>
            <div className="grid text-center justify-center py-8 border border-gray-300 rounded-xl my-6 bg-amber-50">
                <div className="font-bold">Legg til nyheter</div>
            </div>
            <div className="grid text-center justify-center py-8 border border-gray-300 rounded-xl my-6 bg-amber-50">
                <div className="font-bold">Support</div>
                <div>
                    <SupportManager/>
                </div>
            </div>
        </div>
    </div>


        
    )
}