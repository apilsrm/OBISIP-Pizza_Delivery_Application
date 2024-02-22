// import { useState } from "react";
// import { BsCartPlus } from "react-icons/bs";
// import { AiOutlineHeart } from "react-icons/ai";
// import { AiOutlineSearch } from "react-icons/ai";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [activeTab, setActiveTab] = useState("Home");

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <nav className="bg-yellow-300 py-4">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <Link to="/" className="text-black text-2xl font-bold no-underline ">
//           Pizza Bazar
//         </Link>
//         {/* Navigation links */}
//         <ul className="flex space-x-4 text-black-500">
//           <li>
//             <Link
//               to="/home"
//               className={` no-underline mr-4 ${
//                 activeTab === "Home"
//                   ? "font-bold text-white-600"
//                   : "font-normal"
//               }`}
//               onClick={() => handleTabClick("Home")}
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/about"
//               className={` no-underline hover: scale-50  mr-4 ${
//                 activeTab === "About"
//                   ? "font-bold text-white-600"
//                   : "font-normal"
//               }`}
//               onClick={() => handleTabClick("About")}
//             >
//               About
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/login"
//               className={`no-underline mr-4 ${
//                 activeTab === "Contact"
//                   ? "font-bold text-black-600"
//                   : "font-normal"
//               }`}
//               onClick={() => handleTabClick("Contact")}
//             >
//               Contact
//             </Link>
//           </li>
//         </ul>
//         <div className=" flex items-center ml-4 mx-5">
//           <input
//             type="text"
//             placeholder="Search"
//             className="bg-white hidden sm:block rounded-lg px-1 py-1 focus:outline-none"
//           />
//           <button className=" hidden sm:block bg-gray-600 mx-0 text-white px-2 py-2 space-x-1 rounded-lg hover:bg-black ">
//             <AiOutlineSearch />
//           </button>
//         </div>

//         <div className="flex h-10 text-black-500 w-100%">
//           <h4 className="mr-3 py-1">Wishlist</h4>
//           <p className="py-1 mr-4">
//             <AiOutlineHeart className="w-8 h-8" />
//           </p>
//           <button className="text-black-500 w-10 h-10">
//             <BsCartPlus className="w-8 h-8" />
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;

import { BsCartPlus } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = ({ isAuthenticated, user }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const [isLoggedIn, setIsLoggedIn] = useState(false); // State variable for authentication status

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    isAuthenticated ? setIsLoggedIn(true): setIsLoggedIn(false)
  })

  //  navigation links based on authentication status
  const navLinks = isLoggedIn
    ? ( user.role === 'admin' ? ( [
      { name: "Dashboard", to: "/admin/dashboard" },
        { name: "aaaaaaa", to: "/custompizza" },
        { name: "Orders", to: "/order" },

    ]) : (
      [
        { name: "Dashboard", to: "/dashboard" },
        { name: "Custom Pizza", to: "/custompizza" },
        { name: "Order", to: "/order" },
      ]
    )
)
    : ( [
        { name: "Home", to: "/home" },
        { name: "About", to: "/about" },
        { name: "Contact", to: "/login" },
      ]);

  return (
    <nav className="bg-yellow-300 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-black text-2xl font-bold no-underline">
          Pizza Bazar
        </Link>
        {/* Navigation links */}

        <ul className="flex space-x-4 text-black-500">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                className={`no-underline mr-4 ${
                  activeTab === link.name ? "font-bold text-white-600" : "font-normal"
                }`}
                onClick={() => handleTabClick(link.name)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className=" flex items-center ml-4 mx-5">
          <input
            type="text"
            placeholder="Search"
            className="bg-white hidden sm:block rounded-lg px-1 py-1 focus:outline-none"
          />
          <button className="hidden sm:block bg-gray-600 mx-0 text-white px-2 py-2 space-x-1 rounded-lg hover:bg-black">
            <AiOutlineSearch />
          </button>
        </div>
        {
        user.role !== 'admin' && ( <>
        <div className="flex h-10 text-black-500 w-100%">
          <h4 className="mr-3 py-1">Wishlist</h4>
          <p className="py-1 mr-4">
            <AiOutlineHeart className="w-8 h-8" />
          </p>
          <button className="text-black-500 w-10 h-10">
            <BsCartPlus className="w-8 h-8" />
          </button>
        </div>
        </> )

        }
        
      </div>
    </nav>
  );
};

export default Header;

// import { BsCartPlus } from "react-icons/bs";
// import { AiOutlineHeart } from "react-icons/ai";
// import { AiOutlineSearch } from "react-icons/ai";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// const Header = ({isAuthenticated,user}) => {
//   const [activeTab, setActiveTab] = useState("Home");

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };


//   return (
//     <>
//       <nav className="bg-yellow-300 py-4">
//         <div className="container mx-auto flex justify-between items-center">
//           {/* Logo */}
//           <Link to="/" className="text-black text-2xl font-bold no-underline">
//             Pizza Bazar
//           </Link>
//           {/* Navigation links */}

//           {isAuthenticated ? (
//             <ul className="flex space-x-4 text-black-500">
//               <li>
//                 <Link
//                   to="/dashboard"
//                   className={` no-underline mr-4 ${
//                     activeTab === "Dashboard"
//                       ? "font-bold text-white-600"
//                       : "font-normal"
//                   }`}
//                   onClick={() => handleTabClick("Dashboard")}
//                 >
//                   Dashboard
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/customPizza"
//                   className={` no-underline hover: scale-50  mr-4 ${
//                     activeTab === "CustomPizza"
//                       ? "font-bold text-white-600"
//                       : "font-normal"
//                   }`}
//                   onClick={() => handleTabClick("CustomPizza")}
//                 >
//                   Custom Pizza
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/order"
//                   className={`no-underline mr-4 ${
//                     activeTab === "order"
//                       ? "font-bold text-black-600"
//                       : "font-normal"
//                   }`}
//                   onClick={() => handleTabClick("order")}
//                 >
//                   Order
//                 </Link>
//               </li>
//             </ul>
//           ) : (
//             <ul className="flex space-x-4 text-black-500">
//               <li>
//                 <Link
//                   to="/home"
//                   className={` no-underline mr-4 ${
//                     activeTab === "Home"
//                       ? "font-bold text-white-600"
//                       : "font-normal"
//                   }`}
//                   onClick={() => handleTabClick("Home")}
//                 >
//                   Home
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   to="/about"
//                   className={` no-underline hover: scale-50  mr-4 ${
//                     activeTab === "About"
//                       ? "font-bold text-white-600"
//                       : "font-normal"
//                   }`}
//                   onClick={() => handleTabClick("About")}
//                 >
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/login"
//                   className={`no-underline mr-4 ${
//                     activeTab === "Contact"
//                       ? "font-bold text-black-600"
//                       : "font-normal"
//                   }`}
//                   onClick={() => handleTabClick("Contact")}
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           )}
//           <div className=" flex items-center ml-4 mx-5">
//             <input
//               type="text"
//               placeholder="Search"
//               className="bg-white hidden sm:block rounded-lg px-1 py-1 focus:outline-none"
//             />
//             <button className="hidden sm:block bg-gray-600 mx-0 text-white px-2 py-2 space-x-1 rounded-lg hover:bg-black">
//               <AiOutlineSearch />
//             </button>
//           </div>

//           <div className="flex h-10 text-black-500 w-100%">
//             <h4 className="mr-3 py-1">Wishlist</h4>
//             <p className="py-1 mr-4">
//               <AiOutlineHeart className="w-8 h-8" />
//             </p>
//             <button className="text-black-500 w-10 h-10">
//               <BsCartPlus className="w-8 h-8" />
//             </button>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Header;
