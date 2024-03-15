import React from 'react';
import nextMoviesImage from '../assets/nextMoviesLogo.png';

function NavBar() {

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-50">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 lg:px-6">
                <div className="flex items-center">
                    <img
                        src={nextMoviesImage}
                        className="w-[150px] max-h-[57px] min-h-[57px]"
                        alt="Next Movies Logo"
                    />
                </div>
            </div>
        </nav>

    );
}

export default NavBar;