import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

type JobFilterProps = {
  onFilterChange: (filters: { jobType: string; place: string }) => void;
  onSearch: (query: string) => void;
};

export default function JobFilter({
  onFilterChange,
  onSearch,
}: JobFilterProps) {
  // Load saved filters from localStorage
  const savedFilters = localStorage.getItem('jobFilters');
  const initialFilters = savedFilters
    ? JSON.parse(savedFilters)
    : { jobType: '', place: '' };

  const [filters, setFilters] = useState(initialFilters);
  const [searchQuery, setSearchQuery] = useState('');

  // Apply saved filters on mount
  useEffect(() => {
    if (savedFilters) {
      onFilterChange(initialFilters);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);

    // Save to localStorage
    localStorage.setItem('jobFilters', JSON.stringify(updatedFilters));

    onFilterChange(updatedFilters);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    onSearch('');
  };

  return (
    <div className="w-70 p-6 bg-white border border-gray-300 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Filter for jobbannonser</h3>

      {/* Search Bar */}
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Søk
      </label>
      <div className="relative mb-4">
        <SearchIcon
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          fontSize="small"
        />
        <input
          type="text"
          value={searchQuery}
          onChange={e => handleSearchChange(e.target.value)}
          placeholder="Søk etter jobbannonse"
          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-sm"
        />
        {searchQuery && (
          <button
            onClick={handleClearSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Clear search"
          >
            <ClearIcon fontSize="small" />
          </button>
        )}
      </div>

      {/* Job Type Filter */}
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Stillingstype
      </label>
      <select
        name="jobType"
        value={filters.jobType}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
      >
        <option value="">Alle</option>
        <option value="Sommerjobb">Sommerjobb</option>
        <option value="Internship">Internship</option>
        <option value="Heltidsstilling">Heltidsstilling</option>
      </select>

      {/* Location Filter */}
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Sted
      </label>
      <input
        type="text"
        name="place"
        placeholder="Skriv inn sted"
        value={filters.place}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
    </div>
  );
}
