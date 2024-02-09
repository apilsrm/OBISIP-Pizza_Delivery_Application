import AppStore from "../../assest/appstore.png"
import GooglePay from "../../assest/googleplay.png"
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { SiFacebook, SiTwitter, SiInstagram } from "react-icons/si";
import { Link } from "react-router-dom";

// import fb from "../../assest/image/fb.png"
// import insta from "../../assest/image/instergram.png"
const Footer = () => {
  
  return (
    <>
      <footer className=" flex flex-wrap font-sans bg-gray-200 py-8">
        <div className="container mx-auto flex flex-wrap ">
          <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 mb-8">
            <h2 className="text-gray-600 text-lg font-semibold mb-4">
              Inside Deals and Offers !!
            </h2>
            <div className="flex flex-col">
              <Link>
                <div className="mb-2">
                  <img
                    src={GooglePay}
                    alt="Google Pay"
                    className="h-8 md:h-12 inline rounded-md shadow-md"
                  />
                </div>
              </Link>
              <Link>
                <div>
                  <img
                    src={AppStore}
                    alt="App Store"
                    className="h-8 md:h-12 inline rounded-md shadow-md"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 mb-8">
            <h2 className="text-gray-600 text-lg font-semibold mb-4">Links</h2>
            <ul className="text-gray-600">
              <li className="mb-2">
                <Link to="/about" className="no-underline hover:text-orange-400">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <a href="/contact"  target="_blank" className="no-underline hover:text-orange-400">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <Link to="" className="no-underline hover:text-orange-400">
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link to="" className="no-underline hover:text-orange-400">
                  {`FAQ'S`}
                </Link>
              </li>
              <li>
                <Link to="" className="no-underline hover:text-orange-400">
                  Hiring
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 mb-8">
            <h2 className="text-gray-600 text-lg font-semibold mb-4">
              Policies
            </h2>
            <ul className="text-gray-600">
              <li className="mb-2 ">
                <Link to="" className="no-underline hover:text-orange-400 text-gray-400">
                  Terms and Conditions
                </Link>
              </li>
              <li className="mb-2">
                <Link to="" className="no-underline hover:text-orange-400">
                  Return Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link to="" className="no-underline hover:text-orange-400">
                  Data Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link to="" className="no-underline hover:text-orange-400">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="" className="no-underline hover:text-orange-400">
                  G-Cash Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 mb-8">
            <h2 className="text-gray-600 text-lg font-semibold mb-4">
              Contact Us
            </h2>
            <ul className="text-gray-600 ">
              <Link to="" className="no-underline text-gray-400">
                <li className="mb-2 flex items-center">
                  <FaPhone className="mr-2" />
                  <span>123-456-7890/9861315260</span>
                </li>
              </Link>
              <Link to="" className="no-underline">
                <li className="mb-2 flex items-center ">
                  <FaEnvelope className="mr-2" />
                  <span>info@example.com</span>
                </li>
              </Link>
              <li className="flex items-center ">
                <Link>
                  <SiFacebook className="mr-2 text-blue-500" />
                </Link>
                <Link>
                  <SiTwitter className="mr-2 text-blue-700" />
                </Link>
                <Link>
                  <SiInstagram className="text-red-400" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className=" flex flex-row w-100 items-center text-gray-600 text-lg font-semibold mb-0">
          <p>&copy; {new Date().getFullYear()} Pizza Delivery. All rights reserved.The Pizza Bazar name, logos, and related marks are trademarks of Pizza Bazar, Inc. </p>
        </div>
      </footer>

    </>
  );
};
export default Footer;


// const Footer = () => {
  
//     return (
//       <>

// <footer className="hidden md:hidden lg:hidden text-center bg-gray-600 mobile-footer p-5">
//     <div className="flex flex-col justify-center items-center">
//         <div className="container mx-auto my-0">
//             <div className="flex flex-col items-center">
//                 <h4 className="text-white">Quick Links</h4>
//                 <a href="/menu" className="text-white">MENU</a>
//                 <a href="/home/about" className="text-white">ABOUT US</a>
//                 <a href="/Home/Hotline" className="text-white">HOTLINE</a>
//                 <a href="/home/terms" className="text-white">T & C</a>
//             </div>
//             <div className="flex flex-col items-center mt-4">
//                 <h4 className="text-white mt-4">Find Us on Social Media</h4>
//                 <div className="flex justify-center items-center">
//                     <a href="https://www.facebook.com/pizzahutsrilanka/" target="_blank" className="w-7">
//                         <img src={fb} alt="Download Pizza Hut Facebook Page" />
//                     </a>
//                     <a href="https://www.instagram.com/pizzahutsl/" target="_blank" className="w-7">
//                         <img src={insta} alt="Download Pizza Hut Instagram Page" />
//                     </a>
//                 </div>
//             </div>
//             <p className="text-white mt-4">© Pizza Hut Sri Lanka</p>
//         </div>
//     </div>
// </footer>

// <footer className="hidden sm:hidden xs:hidden">
//     <div className="container">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//             <div className="col-span-1">
//                 <h3>Order Now</h3>
//                 <a href="/menu/promo/meal-deal">PROMOS</a>
//                 <a href="/menu/pizza/pan-and-other-crust">PIZZAS</a>
//                 <a href="/menu/appitizers-other/pasta">PASTAS</a>
//                 <a href="/menu/appitizers-other/appetizers">APPETIZERS</a>
//                 <a href="/menu/appitizers-other/rice">RICE</a>
//                 <a href="/menu/appitizers-other/dessert">DESSERTS</a>
//                 <a href="/menu/appitizers-other/others">BEVERAGES</a>
//             </div>
//             <div className="col-span-1">
//                 <h3>About</h3>
//                 <a href="#">CAREERS</a>
//                 <a href="/home/about">ABOUT US</a>
//                 <a href="/contact/">FEEDBACK</a>
//                 <a href="/home/hotline">HOTLINE</a>
//             </div>
//             <div className="col-span-1">
//                 <h3>Policy</h3>
//                 <a href="/home/terms">TERMS & CONDITIONS</a>
//                 <a href="/home/privacy">PRIVACY POLICY</a>
//             </div>
//             <div className="col-span-1">
//                 <h3>My Pizza Hut</h3>
//                 <a href="/order/start">SIGN IN / REGISTER</a>
//             </div>
//         </div>
//         <div className="flex justify-center items-center mt-4">
//             <h4 className="text-white">Find Us on Social Media</h4>
//             <div className="flex justify-center items-center">
//                 <a href="https://www.facebook.com/pizzahutsrilanka/" target="_blank" className="w-7">
//                     <img src={fb} alt="Download Pizza Hut Facebook Page" />
//                 </a>
//                 <a href="https://www.instagram.com/pizzahutsl/" target="_blank" className="w-7">
//                     <img src="\assest\image\instergram.png" alt="Download Pizza Hut Instagram Page" />
//                 </a>
//             </div>
//         </div>
//         <p>® 2024 Pizza Hut, Inc. All rights reserved. The Pizza Hut name, logos, and related marks are trademarks of Pizza Hut, Inc.</p>
//     </div>
// </footer>


// </>
//   );
// };
// export default Footer;
