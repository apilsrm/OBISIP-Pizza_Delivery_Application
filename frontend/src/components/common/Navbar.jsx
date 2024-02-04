import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'; // Import your logo image

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="bg-red-600 py-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-white text-2xl font-bold">
                    <img src={logo} alt="Logo" className="h-8" /> {/* Display logo image */}
                </Link>
                {/* Responsive menu icon for small screens */}
                <button
                    onClick={toggleMenu}
                    className="text-white block md:hidden focus:outline-none"
                >
                    {showMenu ? (
                        // Close icon when menu is open
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        // Menu icon when menu is closed
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
                {/* Navigation links */}
                <ul className={`flex space-x-4 md:flex ${showMenu ? 'block' : 'hidden'}`}>
                    <li>
                        <Link
                            to="/dashboard"
                            className="text-white hover:text-gray-200 block md:inline-block"
                        >
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/order"
                            className="text-white hover:text-gray-200 block md:inline-block"
                        >
                            Order
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/login"
                            className="text-white hover:text-gray-200 block md:inline-block"
                        >
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
