import { useState } from "react";
import AddCompanyLogo from "./AddCompanyLogo";
import EditBoardPics from "./EditBoardPics";
import EditSubGroup from "./EditSubGroup";
import EditIcon from '@mui/icons-material/Edit';
import AddEventsJobads from "./AddEventsJobads";

export default function UploadPhoto(){
  const [isAddCompanyLogoOpen, setIsAddCompanyLogoOpen] = useState(false);
  const [isEditBoardPicOpen, setIsEditBoardPicOpen] = useState(false);
  const [isEditSubGroupOpen, setIsEditSubGroupOpen] = useState(false);
  const [isAddEventsJobads, setIsAddEventsJobads] = useState(false);
  return(
    <div className="max-w-2xl mx-auto p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Adminstrer bilder</h2>
      <div
        className="mb-6 bg-amber-100 hover:scale-102 text-black cursor-pointer border-1 p-2 rounded-xl"
        onClick={() => setIsAddCompanyLogoOpen(true)}>
          <EditIcon/> Samarbeidspartnere
      </div>
      <div
        className="mb-6 bg-amber-100 hover:scale-102 text-black cursor-pointer border-1 p-2 rounded-xl"
        onClick={() => setIsEditBoardPicOpen(true)}>
          <EditIcon/> Styret
      </div>
      <div
        className="mb-6 bg-amber-100 hover:scale-102 text-black cursor-pointer border-1 p-2 rounded-xl"
        onClick={() => setIsEditSubGroupOpen(true)}>
          <EditIcon/> Undergrupper
      </div>
      <div
        className="mb-6 bg-amber-100 hover:scale-102 text-black cursor-pointer border-1 p-2 rounded-xl"
        onClick={() => setIsAddEventsJobads(true)}>
          <EditIcon/> Arrangementbilder og jobbannonsebilder
      </div>
      <AddCompanyLogo isOpen={isAddCompanyLogoOpen} onClose={() => setIsAddCompanyLogoOpen(false)} />
      <EditBoardPics isOpen={isEditBoardPicOpen} onClose={() => setIsEditBoardPicOpen(false)} />
      <EditSubGroup isOpen={isEditSubGroupOpen} onClose={() => setIsEditSubGroupOpen(false)} />
      <AddEventsJobads isOpen={isAddEventsJobads} onClose={() => setIsAddEventsJobads(false)} />
    </div>
  )
}