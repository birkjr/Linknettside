import AdminBoard from '../components/Admin/AdminBoard';

export default function AdminBoardPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6">
      <div className="rounded-2xl border border-red-100 bg-white shadow-xl shadow-red-100/40 p-4 sm:p-6">
        <h2 className="text-lg font-semibold mb-4">Styret</h2>
        <AdminBoard />
      </div>
    </div>
  );
}
