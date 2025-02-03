import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className=" text-white text-center py-4 mt-auto" style={{backgroundColor: '#3CB371'}}>
            <div className='flex justify-end items-end mr-6'>
                        <Link to={'/admin'} className='rounded-xl hover:shadow-md text-gray-200 text-sm p-2'>@</Link>
                    </div>
            <div className="grid grid-cols-2 justify-center items-center my-6">
                <div>
                    <p>
                        <a href='https://www.facebook.com/emil.link.773' target="_blank" rel="noopener noreferrer">
                            <MailOutlineIcon className='hover:scale-105' style={{ fontSize: '40px' }}/>
                        </a>
                        <a href='https://www.instagram.com/emil__link/' target="_blank" rel="noopener noreferrer">
                            <InstagramIcon className='hover:scale-105' style={{ fontSize: '40px' }}/>
                        </a>
                        <a href='https://www.facebook.com/emil.link.773' target="_blank" rel="noopener noreferrer">
                            <FacebookIcon className='hover:scale-105' style={{ fontSize: '40px' }}/>
                        </a>
                        <a href='https://www.linkedin.com/company/emillink/posts/?feedView=all' target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon className='hover:scale-105' style={{ fontSize: '40px' }}/> 
                        </a>
                    </p>
                </div>
                <div className="space-y-6">
                    <p>Energi- og miljøingeniørenes linjeforening, EMIL</p>
                    <p>NTNU GLØSHAUGEN, ELEKTROBYGGET</p>
                    <p>7491 Trondheim</p>
                </div>
            </div>
            <p>&copy; {new Date().getFullYear()} EMIL-Link.</p>
        </footer>
    );
}

 