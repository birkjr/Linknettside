import { useState } from 'react';
import ImgSubGroups from '../components/Admin/ImgSubGroups';
import OmOss from './AboutUs';

export default function AdminAboutUsPage() {
  const [isSubGroupModalOpen, setIsSubGroupModalOpen] = useState(false);

  return (
    <div className="flex flex-col w-full gap-6">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="rounded-2xl border border-red-100 bg-white shadow-xl shadow-red-100/40 p-4 sm:p-6">
          <h2 className="text-lg font-semibold mb-4">
            Administrer bilder (Om oss)
          </h2>
          <button
            type="button"
            className="w-full sm:w-auto px-4 py-2 rounded-lg bg-red-500 text-white font-semibold shadow hover:bg-red-600 transition"
            onClick={() => setIsSubGroupModalOpen(true)}
          >
            Administrer gruppebilder
          </button>
          <ImgSubGroups
            isOpen={isSubGroupModalOpen}
            onClose={() => setIsSubGroupModalOpen(false)}
          />
        </div>
      </div>
      <OmOss />
    </div>
  );
}
