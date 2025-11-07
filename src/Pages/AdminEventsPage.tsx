import AddEvent from '../components/Admin/AdminEvents';
import Arrangementer from '../components/Tools/Events';

export default function AdminEventsPage() {
  return (
    <div className="flex flex-col w-full gap-6">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="rounded-2xl border border-red-100 bg-white shadow-xl shadow-red-100/40 p-4 sm:p-6">
          <AddEvent />
        </div>
      </div>
      <div className="w-full px-4">
        <Arrangementer />
      </div>
    </div>
  );
}
