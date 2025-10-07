import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import JobListing from '../components/JobListing';
import JobFilter from '../components/Tools/JobFilter';
import JobCleaner from '../components/Tools/JobCleaner';
import SkeletonLoader from '../components/Tools/SkeletonLoader';

type Job = {
  id: string; // Ensure this matches the type in JobCleaner
  bedrift: string;
  jobType: string;
  jobTitle: string;
  deadline: string; // Ensure this is in a valid date format
  link: string;
  place: string;
  imageURL: string;
};

export default function Jobbtorget() {
  const [jobListings, setJobListings] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch jobs from Supabase
  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      const { data, error } = await supabase.from('jobs').select('*');

      if (error) {
        console.error('❌ Error fetching jobs:', error);
        setJobListings([]);
        setFilteredJobs([]);
      } else {
        console.log('✅ Fetched jobs:', data);
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
        (filters.jobType === '' || job.jobType === filters.jobType) &&
        (filters.place === '' ||
          job.place.toLowerCase().includes(filters.place.toLowerCase()))
      );
    });

    setFilteredJobs(filtered);
  };

  return (
    <div className="flex flex-col w-full p-6 lg:px-12">
      {/* Blue Header Section */}
      <div
        className="w-full max-w-6xl mx-auto p-12 text-white text-center rounded-xl"
        style={{ backgroundColor: '#4682B4' }}
      >
        <h1 className="text-white text-3xl my-4">Jobbtorget</h1>
        <p>Her er de nyeste jobbannonsene som ligger ute for EMIL studenter</p>
        <p>SØK!</p>
        <JobCleaner jobs={jobListings} setJobs={setJobListings} />{' '}
        {/* Correctly pass jobListings */}
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
            <SkeletonLoader type="job" count={3} />
          ) : filteredJobs.length > 0 ? (
            <div className="space-y-6">
              {filteredJobs
                .sort((a, b) => {
                  // Ensure the date is treated as a string, and then compare using new Date()
                  return (
                    new Date(a.deadline).getTime() -
                    new Date(b.deadline).getTime()
                  );
                })
                .map(job => (
                  <JobListing
                    key={job.id} // Use job.id as the key
                    bedrift={job.bedrift}
                    jobType={job.jobType}
                    jobTitle={job.jobTitle}
                    deadline={job.deadline}
                    link={job.link}
                    place={job.place}
                    imageURL={job.imageURL}
                  />
                ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-6">
              Ingen jobber funnet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
