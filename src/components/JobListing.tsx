type JobListingProps = {
    companyLogo: string;
    jobType: string;
    jobTitle: string;
    deadline: string;
    link: string;
    place: string;
}

export default function JobListing({ companyLogo, jobType, jobTitle, deadline, link, place }: JobListingProps) {
    return (
        <div className="w-full sm:max-w-2xl mx-auto bg-white rounded-lg shadow-lg transition-all duration-300 hover:scale-102 hover:shadow-md">
            
            <a href={link} target="_blank" rel="noopener noreferrer" className="w-full max-w-5xl mx-auto p-4 border border-green-600 rounded-lg shadow-lg flex items-center space-x-6" style={{ backgroundColor: '#4AA63933' }}>
                
                {/* Logo Section */}
                <div className="w-24 h-24 flex-shrink-0 ml-8">
                    <img src={companyLogo} alt="Company Logo" className="w-full h-full object-contain bg-white rounded-lg shadow-md" />
                </div>

                {/* Text Section */}
                <div className="flex-1 flex justify-between items-center mx-12">
                    <div>
                        <p className="text-gray-900 font-semibold text-xs">{jobType}</p>
                        <h3 className="text-2xl font-bold">{jobTitle}</h3>
                        <p className="text-sm text-gray-900">{place}</p> {/* NEW - Display place */}
                        <p className="text-xs text-gray-700">Frist: {deadline}</p>
                    </div>
                </div>
            </a>
        </div>
    );
}
