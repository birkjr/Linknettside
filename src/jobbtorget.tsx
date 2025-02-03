import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import JobListing from "./components/JobListing";
import JobFilter from "./components/JobFilter";

type Job = {
    id: number;
    companyLogo: string;
    jobType: string;
    jobTitle: string;
    deadline: string;
    link: string;
    place: string;
};

export default function Jobbtorget() {
    const [jobListings, setJobListings] = useState<Job[]>([]);
    const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [newJob, setNewJob] = useState({
        companyLogo: "",
        jobType: "",
        jobTitle: "",
        deadline: "",
        link: "",
        place: ""
    });

    // Fetch jobs from Supabase
    useEffect(() => {
        const fetchJobs = async () => {
            setLoading(true);
            const { data, error } = await supabase.from("jobs").select("*");

            if (error) {
                console.error("Error fetching jobs:", error);
            } else {
                setJobListings(data);
                setFilteredJobs(data);
            }
            setLoading(false);
        };

        fetchJobs();
    }, []);

    // Handle filter changes
    const handleFilterChange = (filters: { jobType: string; place: string }) => {
        const filtered = jobListings.filter(job => {
            return (
                (filters.jobType === "" || job.jobType === filters.jobType) &&
                (filters.place === "" || job.place.toLowerCase().includes(filters.place.toLowerCase()))
            );
        });

        setFilteredJobs(filtered);
    };

    // Function to check password before adding a job
    const checkPasswordForAdd = () => {
        const enteredPassword = prompt("Enter the admin password:");
        if (enteredPassword === "Link25") {
            setShowForm(true);
        } else {
            alert("Incorrect password! You are not authorized.");
        }
    };

    // Function to check password before removing a job
    const checkPasswordForDelete = async () => {
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
            alert("Job added successfully!");
            setJobListings([...jobListings, ...data]);
            setFilteredJobs([...jobListings, ...data]);

            // Reset the form fields after submitting
            setNewJob({ 
                companyLogo: "", 
                jobType: "", 
                jobTitle: "", 
                deadline: "", 
                link: "", 
                place: "" 
            });

            setShowForm(false);
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
            setFilteredJobs(jobListings.filter(job => job.jobTitle !== jobToDelete));
            alert(`"${jobToDelete}" har blitt fjernet.`);
        }
    };

    return (
        <div className="min-h-screen flex flex-col w-full p-6 lg:px-12 bg-stone-100">
            {/* Blue Header Section */}
            <div className="w-full max-w-6xl mx-auto p-12 text-white text-center rounded-xl" style={{ backgroundColor: "#4682B4" }}>
                <h1 className="text-white text-3xl my-4">Jobbtorget</h1>
                <p>Her er de nyeste jobbannonsene som ligger ute for EMIL studenter</p>
                <p>SØK!</p>
            </div>

            {/* Main Layout: Sidebar (Filter) + Job Listings */}
            <div className="flex w-full max-w-6xl mx-auto mt-8">
                {/* Sidebar Filter */}
                <div className="w-64 mr-8">
                    <JobFilter onFilterChange={handleFilterChange} />
                </div>

                {/* Job Listings Section */}
                <div className="flex-1">
                    {loading ? (
                        <p className="text-center text-gray-500 mt-6">Laster inn jobber...</p>
                    ) : filteredJobs.length > 0 ? (
                        <div className="space-y-6">
                            {filteredJobs.map((job, index) => (
                                <JobListing 
                                    key={index} 
                                    companyLogo={job.companyLogo} 
                                    jobType={job.jobType} 
                                    jobTitle={job.jobTitle} 
                                    deadline={job.deadline} 
                                    link={job.link} 
                                    place={job.place} 
                                />
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-500 mt-6">Ingen jobber funnet med disse filtrene.</p>
                    )}
                    {/* Add/Remove Job Buttons */}
                    <div className=" mt-2 right-1 flex flex-row justify-end">
                        <button 
                            className="hover:shadow-md text-gray-200 font-semibold w-10 h-10 flex items-center justify-center text-lg rounded-full"
                            onClick={checkPasswordForAdd}
                        >
                            +
                        </button>

                        <button 
                            className="hover:shadow-md text-gray-200 font-semibold w-10 h-10 flex items-center justify-center text-lg rounded-full"
                            onClick={checkPasswordForDelete}
                        >
                            -
                        </button>
                    </div>
                </div>
                
            </div>

            {/* New Job Form */}
            {showForm && (
                <div className="relative max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-6">
                    <button className="absolute top-3 right-3 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-lg font-bold hover:bg-red-700" onClick={() => setShowForm(false)}>
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
    );
}
