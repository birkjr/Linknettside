import { useState } from "react";
import AddCompanyLogo from "./AddCompanyLogo";
import EditBoardPics from "./EditBoardPics";
import EditSubGroup from "./EditSubGroup";

export default function UploadPhoto(){
  const [isAddCompanyLogoOpen, setIsAddCompanyLogoOpen] = useState(false);
  const [isEditBoardPicOpen, setIsEditBoardPicOpen] = useState(false);
  const [isEditSubGroupOpen, setIsEditSubGroupOpen] = useState(false);
  return(
    <div className="flex flex-col justify-center items-center">
      <div
        className="mb-6 hover:scale-110 text-black hover:text-black cursor-pointer border-1 p-2 rounded-xl"
        onClick={() => setIsAddCompanyLogoOpen(true)}>
          Adminstrer bilder for bedrifter
      </div>
      <div
        className="mb-6 hover:scale-110 text-black hover:text-black cursor-pointer border-1 p-2 rounded-xl"
        onClick={() => setIsEditBoardPicOpen(true)}>
          Adminstrer styrebilder
      </div>
      <div
        className="mb-6 hover:scale-110 text-black hover:text-black cursor-pointer border-1 p-2 rounded-xl"
        onClick={() => setIsEditSubGroupOpen(true)}>
          Adminstrer gruppebilder
      </div>
      <AddCompanyLogo isOpen={isAddCompanyLogoOpen} onClose={() => setIsAddCompanyLogoOpen(false)} />
      <EditBoardPics isOpen={isEditBoardPicOpen} onClose={() => setIsEditBoardPicOpen(false)} />
      <EditSubGroup isOpen={isEditSubGroupOpen} onClose={() => setIsEditSubGroupOpen(false)} />
    </div>
  )
}