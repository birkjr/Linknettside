import { Link } from "react-router";
const supabaseStorageUrl = "https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/";

export default function Header(){
    return (
        <>
        <nav className='flex flex-col justify-center items-center bg-stone-100 h-1/5 sticky top-0 space-y-8'>
            <div className='flex items-center justify-center w-full mt-4'>
                <Link to={"/"}>
                <img 
                    className="h-32 transition-transform duration-300 hover:scale-105" 
                    src={`${supabaseStorageUrl}logo_transparent.JPG`}/>
                </Link>
            </div>
            <div className='hidden lg:flex items-center justify-center w-3/5'>
                <ul className='flex flex-row space-x-20 font-medium text-xl text-gray-500 '>
                    <li className="group relative hover:scale-103 hover:text-black">
                        <Link to={"/jobbtorget"}>
                            Jobbtorget
                        </Link>
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-tpPink'></span>
                    </li>
                    <li className="group relative hover:scale-103 hover:text-black">
                        <Link to={"/for_bedrifter"}>
                            For bedrifter
                        </Link>
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-tpPink'></span>
                    </li>
                    <li className="group relative hover:scale-103 hover:text-black">
                        <a href="https://www.emilntnu.no/" target="_blank" rel="noopener noreferrer">
                            For studenten
                        </a>
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-tpPink"></span>
                    </li>
                    <li className="group relative hover:scale-103 hover:text-black">
                        <Link to={"/faq"}>
                            FAQ
                        </Link>
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-tpPink'></span>
                    </li>
                    <li className="group relative hover:scale-103 hover:text-black">
                        <Link to={"/om_oss"}>
                            Om oss
                        </Link>
                        <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-tpPink'></span>
                    </li>
                    <li className="group relative hover:scale-103 hover:text-black">
                        <Link to={"kontakt_oss"}>
                            Kontakt oss
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )

}