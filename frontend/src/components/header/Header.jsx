import { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="bg-yellow-300 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-black text-2xl font-bold ">
          Pizza Bazar
        </Link>
        {/* Navigation links */}
        <ul className="flex space-x-4 text-black-500">
          <li>
            <Link
              to="/home"
              className={` no-underline mr-4 ${
                activeTab === "Home"
                  ? "font-bold text-white-600"
                  : "font-normal"
              }`}
              onClick={() => handleTabClick("Home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={` no-underline hover: scale-50  mr-4 ${
                activeTab === "About"
                  ? "font-bold text-white-600"
                  : "font-normal"
              }`}
              onClick={() => handleTabClick("About")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className={`no-underline mr-4 ${
                activeTab === "Contact"
                  ? "font-bold text-black-600"
                  : "font-normal"
              }`}
              onClick={() => handleTabClick("Contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className=" flex items-center ml-4 mx-5">
          <input
            type="text"
            placeholder="Search"
            className="bg-white hidden sm:block rounded-lg px-1 py-1 focus:outline-none"
          />
          <button className=" hidden sm:block bg-gray-600 mx-0 text-white px-2 py-2 space-x-1 rounded-lg hover:bg-black ">
            <AiOutlineSearch />
          </button>
        </div>

        <div className="flex h-10 text-black-500 w-100%">
          <h4 className="mr-3 py-1">Wishlist</h4>
          <p className="py-1 mr-4">
            <AiOutlineHeart className="w-8 h-8" />
          </p>
          <button className="text-black-500 w-10 h-10">
            <BsCartPlus className="w-8 h-8" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
