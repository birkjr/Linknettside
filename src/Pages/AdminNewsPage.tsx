import AddNews from '../components/Admin/AdminNews';
import News from '../components/Schema/News';

export default function AdminNewsPage() {
  return (
    <div className="flex flex-col w-full gap-6">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="rounded-2xl border border-red-100 bg-white shadow-xl shadow-red-100/40 p-4 sm:p-6">
          <h2 className="text-lg font-semibold mb-4">Legg til nyhet</h2>
          <AddNews />
        </div>
      </div>
      <div className="w-full px-4">
        <div className="flex flex-col justify-center items-center rounded-xl text-serif lg:w-full text-center text-lg sm:text-xl font-bold">
          <News />
        </div>
      </div>
    </div>
  );
}
