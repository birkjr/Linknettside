import SupportManager from "./components/SupportManager";
import AdminBoard from "./components/AdminBoard";
import AddNews from "./components/AddNews";
import AddEvent from "./components/AddEvent";
import AddJob from "./components/AddJob";
import EditPhoto from "./components/EditPhoto";

export default function admin(){
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex justify-center font-4xl bg-red-400 w-2/3 mt-6 rounded-xl text-black py-6 mb-6">
                ADMIN
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="w-full max-w-sm sm:max-w-sm lg:max-w-4xl text-center border border-gray-300 rounded-xl bg-amber-50 py-6">
                    <AddEvent/>
                </div>
                <div className="w-full max-w-sm sm:max-w-sm lg:max-w-4xl text-center border border-gray-300 rounded-xl bg-amber-50 py-6">
                    <AddJob/>
                </div>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="w-full max-w-sm sm:max-w-sm lg:max-w-4xl text-center border border-gray-300 rounded-xl bg-amber-50 py-6">
                    <SupportManager/>
                </div>
                <div className="w-full max-w-sm sm:max-w-sm lg:max-w-4xl text-center border border-gray-300 rounded-xl bg-amber-50 py-6">
                    <AddNews/>
                </div>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="w-full max-w-sm sm:max-w-sm lg:max-w-4xl text-center border border-gray-300 rounded-xl bg-amber-50 py-6">
                    <AdminBoard/>
                </div>
                <div className="w-full max-w-sm sm:max-w-sm lg:max-w-4xl text-center border border-gray-300 rounded-xl bg-amber-50 py-6">
                    <EditPhoto/>
                </div>
            </div>
        </div>



        
    )
}