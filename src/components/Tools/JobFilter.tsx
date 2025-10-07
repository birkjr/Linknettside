import { useState } from 'react';

type JobFilterProps = {
  onFilterChange: (filters: { jobType: string; place: string }) => void;
};

export default function JobFilter({ onFilterChange }: JobFilterProps) {
  const [filters, setFilters] = useState({ jobType: '', place: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="w-64 p-6 bg-white border border-gray-300 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Filter for jobbannonser</h3>

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
