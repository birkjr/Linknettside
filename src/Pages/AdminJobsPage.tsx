import AddJob from '../components/Admin/AdminJobs';
import Jobbtorget from './Jobs';

export default function AdminJobsPage() {
  return (
    <div className="flex flex-col w-full gap-6">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="rounded-2xl border border-red-100 bg-white shadow-xl shadow-red-100/40 p-4 sm:p-6">
          <AddJob />
        </div>
      </div>
      <Jobbtorget />
    </div>
  );
}
