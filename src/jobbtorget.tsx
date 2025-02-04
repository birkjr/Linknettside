import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import JobListing from "./components/JobListing";
import JobFilter from "./components/JobFilter";

type Job = {
    id: number;
    bedrift: string;
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

    // Fetch jobs from Supabase
    useEffect(() => {
        const fetchJobs = async () => {
            setLoading(true);
            const { data, error } = await supabase.from("jobs").select("*");

            if (error) {
                console.error("❌ Error fetching jobs:", error);
                setJobListings([]);
                setFilteredJobs([]);
            } else {
                console.log("✅ Fetched jobs:", data);
                setJobListings(data || []); // Ensure non-null value
                setFilteredJobs(data || []);
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

    return (
        <div className="min-h-screen flex flex-col w-full p-6 lg:px-12">
            {/* Blue Header Section */}
            <div className="w-full max-w-6xl mx-auto p-12 text-white text-center rounded-xl" style={{ backgroundColor: "#4682B4" }}>
                <h1 className="text-white text-3xl my-4">Jobbtorget</h1>
                <p>Her er de nyeste jobbannonsene som ligger ute for EMIL studenter</p>
                <p>SØK!</p>
            </div>

            {/* Main Layout: Responsive Filter & Job Listings */}
            <div className="flex flex-col sm:flex-row w-full max-w-6xl mx-auto mt-8">
                {/* Sidebar Filter - Full width on mobile, fixed width on desktop */}
                <div className="w-full sm:w-64 sm:mr-8 mb-6 sm:mb-0">
                    <JobFilter onFilterChange={handleFilterChange} />
                </div>

                {/* Job Listings Section - Full width on mobile */}
                <div className="w-full">
                    {loading ? (
                        <p className="text-center text-gray-500 mt-6">Laster inn jobber...</p>
                    ) : filteredJobs?.length > 0 ? (
                        <div className="space-y-6">
                            {filteredJobs.map((job, index) => (
                                <JobListing 
                                    key={index} 
                                    bedrift={job.bedrift} 
                                    jobType={job.jobType} 
                                    jobTitle={job.jobTitle} 
                                    deadline={job.deadline} 
                                    link={job.link} 
                                    place={job.place} 
                                />
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-500 mt-6">Ingen jobber funnet.</p>
                    )}
                </div>             
            </div>
        </div>
    );
}
