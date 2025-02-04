type JobListingProps = {
    bedrift: string;
    jobType: string;
    jobTitle: string;
    deadline: string;
    link: string;
    place: string;
};

export default function JobListing({ bedrift, jobType, jobTitle, deadline, link, place }: JobListingProps) {
    return (
        <div className="w-full sm:max-w-2xl mx-auto bg-white rounded-lg shadow-lg transition-all duration-300 hover:scale-102 hover:shadow-md">
            
            <a href={link} target="_blank" rel="noopener noreferrer" 
                className="w-full max-w-5xl mx-auto p-4 border border-green-600 rounded-lg shadow-lg flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6" 
                style={{ backgroundColor: '#4AA63933' }}>

                {/* Logo Section */}
                <div className="flex flex-col items-center sm:items-start">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
                        <img 
                            src={`https://logo.clearbit.com/${bedrift.toLowerCase().replace(/\s+/g, "")}.com`} 
                            alt={`${bedrift} Logo`}
                            className="w-full h-full object-contain bg-white rounded-lg shadow-md"
                        />
                    </div>
                    
                    {/* Move title below the image only on mobile */}
                    <h3 className="text-lg sm:hidden font-bold text-center mt-3">{jobTitle}</h3>
                </div>

                {/* Job Info Section */}
                <div className="flex-1 flex flex-col sm:justify-between sm:items-start text-center sm:text-left mx-4 sm:mx-12">
                    <p className="text-gray-900 font-semibold text-xs sm:text-sm">{jobType}</p>
                    <h3 className="hidden sm:block text-2xl font-bold">{jobTitle}</h3> {/* Desktop title */}
                    <p className="text-sm text-gray-900">{place}</p> 
                    <p className="text-xs text-gray-700">Frist: {deadline}</p>
                </div>

            </a>
        </div>
    );
}
