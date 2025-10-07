import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import JobListing from '../components/JobListing';
import JobFilter from '../components/Tools/JobFilter';
import JobCleaner from '../components/Tools/JobCleaner';
import SkeletonLoader from '../components/Tools/SkeletonLoader';
import Swipeable from '../components/Tools/Swipeable';
import PullToRefresh from '../components/Tools/PullToRefresh';

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
  const [currentJobIndex, setCurrentJobIndex] = useState(0);

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
    setCurrentJobIndex(0); // Reset to first job when filtering
  };

  // Refresh jobs
  const handleRefresh = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('jobs').select('*');
    
    if (error) {
      console.error('❌ Error refreshing jobs:', error);
    } else {
      setJobListings(data || []);
      setFilteredJobs(data || []);
      setCurrentJobIndex(0);
    }
    setLoading(false);
  };

  // Swipe handlers
  const handleSwipeLeft = () => {
    if (currentJobIndex < filteredJobs.length - 1) {
      setCurrentJobIndex(currentJobIndex + 1);
    }
  };

  const handleSwipeRight = () => {
    if (currentJobIndex > 0) {
      setCurrentJobIndex(currentJobIndex - 1);
    }
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
          <PullToRefresh onRefresh={handleRefresh}>
            {loading ? (
              <SkeletonLoader type="job" count={3} />
            ) : filteredJobs.length > 0 ? (
              <div className="space-y-6">
                {/* Mobile: Swipeable single job view */}
                <div className="lg:hidden">
                  <Swipeable
                    onSwipeLeft={handleSwipeLeft}
                    onSwipeRight={handleSwipeRight}
                  >
                    <div className="relative">
                      <JobListing
                        key={filteredJobs[currentJobIndex]?.id}
                        bedrift={filteredJobs[currentJobIndex]?.bedrift}
                        jobType={filteredJobs[currentJobIndex]?.jobType}
                        jobTitle={filteredJobs[currentJobIndex]?.jobTitle}
                        deadline={filteredJobs[currentJobIndex]?.deadline}
                        link={filteredJobs[currentJobIndex]?.link}
                        place={filteredJobs[currentJobIndex]?.place}
                        imageURL={filteredJobs[currentJobIndex]?.imageURL}
                      />
                      {/* Swipe indicator */}
                      <div className="flex justify-center mt-4 space-x-2">
                        {filteredJobs.map((_, index) => (
                          <div
                            key={index}
                            className={`w-2 h-2 rounded-full ${
                              index === currentJobIndex
                                ? 'bg-blue-500'
                                : 'bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      {/* Swipe hint */}
                      <p className="text-center text-gray-500 text-sm mt-2">
                        Swipe for å se flere jobber ({currentJobIndex + 1}/{filteredJobs.length})
                      </p>
                    </div>
                  </Swipeable>
                </div>

                {/* Desktop: All jobs list */}
                <div className="hidden lg:block space-y-6">
                  {filteredJobs
                    .sort((a, b) => {
                      return (
                        new Date(a.deadline).getTime() -
                        new Date(b.deadline).getTime()
                      );
                    })
                    .map(job => (
                      <JobListing
                        key={job.id}
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
              </div>
            ) : (
              <p className="text-center text-gray-500 mt-6">
                Ingen jobber funnet.
              </p>
            )}
          </PullToRefresh>
        </div>
      </div>
    </div>
  );
}
