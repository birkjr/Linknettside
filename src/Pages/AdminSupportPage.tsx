import SupportManager from '../components/Admin/SupportManager';

export default function AdminSupportPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6">
      <div className="rounded-2xl border border-red-100 bg-white shadow-xl shadow-red-100/40 p-4 sm:p-6">
        <h2 className="text-lg font-semibold mb-4">Support</h2>
        <SupportManager />
      </div>
    </div>
  );
}
