import { useState } from "react";
import { supabase } from "../supabaseClient";


export default function AddJob() {
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

 

return (
    <div className="w-full sm:text-sm max-w-sm sm:max-w-xl lg:max-w-3xl mx-auto p-4 sm:p-6 rounded-xl shadow-lg">
        <h2 className="text-sm sm:text-sm font-bold mb-4 text-center">Adminstrer jobbtorget</h2>
            <button 
                className="hover:scale-105 text-green-700 font-semibold flex justify-center items-center text-sm rounded-full"
                    onClick={() => setJobShowForm(true)}>
                        Legg til jobbannonse
            </button>
            <button 
                className="hover:scale-105 text-red-700 font-semibold flex justify-center items-center text-sm rounded-full "
                onClick={() => removeJob()}>
                    Fjern jobbannonse
            </button>
            {showJobForm && (
                <div className="relative max-w-lg mx-auto bg-stone-100 p-6 rounded-lg shadow-lg mt-6">
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
    )
}