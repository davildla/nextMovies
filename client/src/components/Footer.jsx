import React, { useState } from 'react';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import nextMoviesIcom from '../assets/nextMoviesIcon.png';

function Footer() {
    const [expanded, setExpanded] = useState(false);

    const toggleFooter = () => {
        setExpanded(!expanded);
    };
    return (
        <footer className={`bg-gray-900 py-8 px-6 relative ${expanded ? 'h-auto' : 'h-16'} sticky bottom-0 z-50`}>
            <div className="container mx-auto text-center text-white">
                {expanded ? (
                    <>
                        <img src={nextMoviesIcom} alt="App Icon" className="w-10 h-10 mx-auto mb-4" />
                        <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
                        <p className="mb-2">support@mail.com</p>
                        <p>Mon - Fri | 6:00 am - 5:00 pm PT</p>
                        <div className="flex justify-center mt-4">
                            <FacebookIcon className="mr-4 cursor-pointer hover:text-blue-500" />
                            <LinkedInIcon className="mr-4 cursor-pointer hover:text-blue-500" />
                            <XIcon className="mr-4 cursor-pointer hover:text-blue-500" />
                            <InstagramIcon className="mr-4 cursor-pointer hover:text-blue-500" />
                            <YouTubeIcon className="mr-4 cursor-pointer hover:text-blue-500" />
                        </div>
                    </>
                ) : (
                    <h2 className="text-lg font-semibold text-white">Contact Information</h2>
                )}
            </div>
            <button
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 bg-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none"
                title={expanded ? "Hide" : "Expand"}
                onClick={toggleFooter}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {expanded ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    )}
                </svg>
            </button>
        </footer>

    );
}

export default Footer;