import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Link } from "react-router-dom";

export default function Nyheter(){
    return (
        <div className="my-6 p-4 font-bold font-serif flex flex-col justify-center items-center">
            <h1 className="text-2xl">Nyheter</h1>
            <div className="font-medium mt-2 flex justify-center items-center">
                <Link to={"/jobbtorget"} className="bg-green-800 py-6 px-4 rounded-xl text-sm hover:scale-102 text-white">Sjekk ut nyeste jobbannonser <ArrowCircleRightIcon/> </Link>
            </div>
        </div>
    )
}