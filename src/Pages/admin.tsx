import SupportManager from '../components/Admin/SupportManager';
import AdminBoard from '../components/Admin/AdminBoard';
import AddNews from '../components/Admin/AdminNews';
import AddEvent from '../components/Admin/AdminEvents';
import AddJob from '../components/Admin/AdminJobs';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '../auth';
import UploadPhoto from '../components/Admin/UploadPhoto';
import AdminPartners from '../components/Admin/AdminPartners';

export default function admin() {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth(); // ✅ Get authentication state

  useEffect(() => {
    if (!isAuthenticated) {
      alert('Ingen tilgang! 🚫');
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-center font-4xl bg-red-400 w-2/3 my-4 rounded-xl text-black py-6">
        ADMIN
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="w-full max-w-sm sm:max-w-sm lg:max-w-4xl text-center border border-gray-300 rounded-xl bg-amber-50 py-6">
          <AddEvent />
        </div>
        <div className="w-full max-w-sm sm:max-w-sm lg:max-w-4xl text-center border border-gray-300 rounded-xl bg-amber-50 py-6">
          <AddJob />
        </div>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="w-full max-w-sm sm:max-w-sm lg:max-w-4xl text-center border border-gray-300 rounded-xl bg-amber-50 py-6">
          <SupportManager />
        </div>
        <div className="w-full max-w-sm sm:max-w-sm lg:max-w-4xl text-center border border-gray-300 rounded-xl bg-amber-50 py-6">
          <AddNews />
        </div>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="w-full max-w-sm sm:max-w-sm lg:max-w-4xl text-center border border-gray-300 rounded-xl bg-amber-50 py-6">
          <AdminBoard />
        </div>
        <div className="w-full max-w-sm sm:max-w-sm lg:max-w-4xl text-center border border-gray-300 rounded-xl bg-amber-50 py-6">
          <UploadPhoto />
        </div>
      </div>
      <div className="flex w-full justify-center">
        <div className="w-full text-center border border-gray-300 rounded-xl bg-amber-50 py-6">
          <AdminPartners />
        </div>
      </div>
    </div>
  );
}
