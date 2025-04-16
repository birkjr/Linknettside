import { useEffect, useCallback } from "react";
import { supabase } from "../../supabaseClient";

interface Job {
    id: string; // Ensure this matches the type in Jobbtorget
    jobTitle: string;
    deadline: string; // Ensure this is in a valid date format
    place: string;
    bedrift: string;
    jobType: string;
    link: string;
    imageURL: string;
}

interface JobCleanerProps {
    jobs: Job[];
    setJobs: React.Dispatch<React.SetStateAction<Job[]>>;
}

const JobCleaner: React.FC<JobCleanerProps> = ({ jobs, setJobs }) => {
    const deletePastJobs = useCallback(async () => {
        const now = new Date();
        const pastJobs = jobs.filter(job => {
            const jobDateTime = new Date(job.deadline); // Ensure deadline is a valid date
            return jobDateTime < now;
        });

        if (pastJobs.length === 0) {
            console.log("Ingen past job to delete.");
            return; // Exit if there are no past jobs
        }

        for (const job of pastJobs) {
            const { error } = await supabase.from("jobs").delete().eq("id", job.id);
            if (error) {
                console.error("Feil: slette jobbannonse:", error);
            } else {
                setJobs(prevJobs => prevJobs.filter(e => e.id !== job.id));
            }
        }
    }, [jobs, setJobs]);

    useEffect(() => {
        deletePastJobs(); // Call immediately on mount

        const intervalId = setInterval(deletePastJobs, 60000); // Check every minute
        return () => clearInterval(intervalId); // Cleanup on unmount
    }, [deletePastJobs]);

    return null; // This component does not render anything
};

export default JobCleaner;