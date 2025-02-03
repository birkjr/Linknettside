import { useState } from "react";
import { supabase } from "./supabaseClient";

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
    companyLogo: string;
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
                companyLogo: "",
                jobType: "",
                jobTitle: "",
                deadline: "",
                link: "",
                place: ""
            });
    
    // Function to check password before adding a job
    const checkPasswordForAddJob = () => {
        const enteredPassword = prompt("Enter the admin password:");
        if (enteredPassword === "Link25") {
            setJobShowForm(true);
        } else {
            alert("Incorrect password! You are not authorized.");
        }
    };

    // Function to check password before removing a job
    const checkPasswordForDeleteJob = async () => {
        const enteredPassword = prompt("Enter the admin password:");
        if (enteredPassword === "Link25") {
            removeJob();
        } else {
            alert("Incorrect password! You are not authorized.");
        }
    };

    // Function to add a new job
    const addNewJob = async () => {
        if (!newJob.companyLogo || !newJob.jobTitle || !newJob.link || !newJob.jobType || !newJob.place || !newJob.deadline) {
            alert("Please fill in all required fields.");
            return;
        }

        

        const { data, error } = await supabase
            .from("jobs")
            .insert([newJob])
            .select("*");

        if (error) {
            console.error("Error adding job:", error);
            alert(`Failed to add job. Try again. Error: ${error.message}`);
        } else {
            alert("Jobbannonse lagt til!");
            setJobListings([...jobListings, ...data]);

            // Reset the form fields after submitting
            setNewJob({ 
                companyLogo: "", 
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
        const jobToDelete = prompt("Skriv nøyaktig annonsetittel på jobbd:");
        if (!jobToDelete) return;

        const { error } = await supabase.from("jobs").delete().eq("jobTitle", jobToDelete);

        if (error) {
            console.error("Error deleting job:", error);
            alert("Klarte ikke å fjerne jobb. Prøv igjen.");
        } else {
            setJobListings(jobListings.filter(job => job.jobTitle !== jobToDelete));
            alert(`"${jobToDelete}" har blitt fjernet.`);
        }
    };

    // Function to check password before adding an event
    const checkPasswordForAddEvent = () => {
    const enteredPassword = prompt("Skriv inn admin passord:");
    if (enteredPassword === "Mia") {
        setEventShowForm(true);
    } else {
        alert("Feil passord!");
        }
    };

    // Function to check password before removing an event
    const checkPasswordForDeleteEvent = async () => {
    const enteredPassword = prompt("Skriv in admin passord:");
    if (enteredPassword === "Mia") {
        removeEvent();
    } else {
        alert("Feil passord!");
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
            console.error("Error adding event:", error);
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
        const eventToDelete = prompt("Enter the exact title of the event you want to delete:");
        if (!eventToDelete) return;

        const { error } = await supabase.from("events").delete().eq("title", eventToDelete);

        if (error) {
            console.error("Error deleting event:", error);
            alert("Failed to delete event. Try again.");
        } else {
            setEvents(events.filter(event => event.title !== eventToDelete));
            alert(`"${eventToDelete}" has been removed.`);
        }
    };

    return (
        <div className="bg-stone-100 flex flex-col items-center justify-center">
            <div className="flex justify-center font-4xl bg-red-400 w-2/3 mt-6 rounded-xl text-black py-6">
                ADMIN
            </div>
        
        <div className="grid justify-center py-8">
            {/* Add/Remove Event Buttons */}
            <div className="px-12 flex flex-col items-center py-4 text-black space-y-4">
                Adminstrer arrangementer
                    <div className=" border-1 rounded-2xl border-gray-300 p-6">
                        <button 
                            className="hover:scale-105 text-green-700 font-semibold flex justify-center items-center text-lg rounded-full"
                            onClick={checkPasswordForAddEvent}
                        >
                            Legg til arrangement
                        </button>

                        <button 
                            className="hover:scale-105 text-red-700 font-semibold flex justify-center items-center text-lg rounded-full "
                            onClick={checkPasswordForDeleteEvent}
                        >
                            Fjern arrangement
                        </button>
                    </div>
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
            </div>
            <div className="grid justify-center">

            {/* Add/Remove Job Buttons */}
            <div className="px-12 flex flex-col items-center py-4 text-black space-y-4">
                Adminstrer jobbannonser
                <div className=" border-1 rounded-2xl border-gray-300 p-6">
                    <button 
                        className="hover:scale-105 text-green-700 font-semibold flex justify-center items-center text-lg rounded-full"
                        onClick={checkPasswordForAddJob}
                    >
                        Legg til jobbannonse
                    </button>

                    <button 
                        className="hover:scale-105 text-red-700 font-semibold flex justify-center items-center text-lg rounded-full "
                        onClick={checkPasswordForDeleteJob}
                    >
                        Fjern jobbannonse
                    </button>
                </div>
            </div>
                    
            {/* New Job Form */}
            {showJobForm && (
                <div className="relative max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-6">
                    <button className="absolute top-3 right-3 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-lg font-bold hover:bg-red-700" onClick={() => setJobShowForm(false)}>
                        ✕
                    </button>

                    <h2 className="text-xl font-semibold mb-4">Legg til ny jobb</h2>

                    <label className="text-xs text-blue-400">
                        https://logo.clearbit.com/{`{bedriftsnavn}`}.com
                    </label>
                    <input type="text" placeholder="Logo URL" value={newJob.companyLogo} onChange={(e) => setNewJob({ ...newJob, companyLogo: e.target.value })} className="w-full p-2 border rounded mb-2" />

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

        
    )
}