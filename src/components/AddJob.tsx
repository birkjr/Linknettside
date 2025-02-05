import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

type Job ={
    id: number;
    bedrift: string;
    jobType: string;
    jobTitle: string;
    deadline: string;
    link: string;
    place: string;
}

export default function AddJob() {
    const [job, setJobs] = useState<Job[]>([]);
    const [newJob, setNewJob] = useState({
        bedrift: "",
        jobType: "",
        jobTitle: "",
        deadline: "",
        link: "",
        place: "",
    });

    useEffect(()=> {
        const fetchJobs = async () =>{
            const { data, error } = await supabase.from("jobs").select("*");
            if (error)  {
                console.error("Error fetching jobs:", error);
            } else {
                setJobs(data);
            }
            };
            fetchJobs();
        }, []);
        

    // Function to add a new job
    const addNewJob = async () => {
        if (!newJob.bedrift || !newJob.jobType || !newJob.jobTitle || !newJob.deadline || !newJob.link || !newJob.place ) {
            alert("Fyll inn alle nødvendige felt.");
            return;
        }

        const { data, error } = await supabase
            .from("jobs")
            .insert([newJob])
            .select("*");

        if (error) {
            console.error("Feil ved legge til jobbannonse:", error);
            alert(`Kunne ikke legge til jobbannonse. Prøv igjen. Error: ${error.message}`);
        } else {
            alert("Jobbannonse er opprettet!");
            setJobs([...job, ...data]); // Update the state with the new Job
            setNewJob({ bedrift: "", jobType: "", jobTitle: "", deadline: "", link: "", place: "" });
        }
    };

    // Function to remove an job
    const removeJob = async (id: number) => {
        const { error } = await supabase.from("jobs").delete().eq("id", id);

        if (error) {
            console.error("Error deleting job:", error);
            alert("Kunne ikke fjerne jobbannonse. Prøv igjen.");
        } else {
            setJobs(job.filter((job) => job.id !== id)); // Update state to remove event
            alert("Jobbannonse har blitt fjernet.");
        }
    };

 

return (
    <div className="w-full max-w-2xl mx-auto p-6 rounded-xl shadow-lg">
            <h2 className="text-lg font-bold mb-4 text-center">Administrer jobbtorget</h2>

            {/* Form for adding new Jobs */}
            <div className="mb-6">
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
            <button className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 w-full" onClick={addNewJob}>
                Legg til jobbannonse
            </button>
        </div>

        {/* Display Existing Jobs */}
        {job.length === 0 ? (
            <p className="text-center">Ingen jobbannonser ute for øyeblikket.</p>
        ) : (
            <ul className="space-y-1">
                {job.map((job) => (
                    <li key={job.id} className="px-12 py-2 rounded-lg shadow-md flex justify-between items-center bg-yellow-100">
                        <div >
                            <p className="font-bold flex text-center">{job.jobTitle }, {job.deadline}</p>
                        </div>
                        <button className="text-red-600 hover:text-red-800 text-lg" onClick={() => removeJob(job.id)}>
                            ✖
                        </button>
                    </li>                
                ))}
            </ul>
        )}
    </div>          
    )
}