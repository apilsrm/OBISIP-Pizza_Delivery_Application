/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
// import {FaSignOutAlt} from "react-icons/fa"
import { toast } from "react-toastify";
import { setLogout } from "../../../redux/features/authSlice";

// import jwt_decode from '/node_modules/.vite/deps/jwt-decode.js?v=3977dbcb';
// import { decode } from "jwt-decode"
// import { decode } from '/node_modules/.vite/deps/jwt-decode.js?v=3977dbcb';
import { jwtDecode } from 'jwt-decode';

const TopHeader = ({isAuthenticated,user}) => {
  const [isDropDownShown, setIsDropDownShown] = useState(false);

 

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userToken  = localStorage?.getItem("token") //jwt token 
  //  console.log(userToken);

  useEffect(()=> {
    if(userToken){
      const decodedToken = jwtDecode(userToken)
      //  console.log(decodedToken);

      if(decodedToken.exp * 1000 < new Date().getTime()){
        // dispatch( toast.success("logoutsssssssslogout successfully"))
        dispatch(setLogout())
        navigate('/login')

        toast.warning("your session expired Login first !")
      }
    }
  },[dispatch , navigate , userToken])

  const handleLogOut =() => {   
    // dispatch ( toast.success("logout sssssssssssuccessfully"))
  dispatch(setLogout())

  navigate("/")
  toast.success("logout successfully")

  }

  return (
    <div className="bg-grey-500 text-black py-2">
      <div className="container mx-auto flex text-center justify-between">
        <div>
          <span className="mr-2">Call Us </span>
          <span className="font-sans">9800000000</span>
        </div>

        <div className="relative">
          {isAuthenticated ? (
            <div className="flex items-center">
              <button className="flex items-center space-x-2 focus:outline-none"
              onClick={()=>setIsDropDownShown(!isDropDownShown)}>
                <img
                  src={user?.avatar?.url}
                  alt={user.fullName}
                  className="w-8 h-8 rounded-full"
                />
                <span>{user.fullName}</span>
              </button>
          
              {isDropDownShown && (
                <div className="fixed z-10 top-0 right-0 mt-12 w-44 bg-white shadow-sm rounded-sm"> 
                
                <ul className="py-2">
                  <li className="px-4 py-2">
                  <NavLink to="/profile">Profile</NavLink>
                  </li>
                  {user && user.role === 'admin' && (
                     <li className="px-4 py-2">
                     <NavLink to="/admin/dashboard">adminDashbord</NavLink>
                     </li>
                  )}
                  <li className="px-4 py-2">
                  <NavLink to="/myorder">My Orders</NavLink>
                  </li>
                  <li className="px-4 py-2">
                  <NavLink to="/mycards">My cards</NavLink>
                  </li>
                  <li className="px-4 py-2">
                  <NavLink to="/change/password">Change password</NavLink>
                  </li>
                  <li className="px-4 py-2">
                  <button onClick={handleLogOut}>LogOut</button>
                  </li>
                </ul>
                </div>
              )}
            </div>
          ) : (
            <>
              <NavLink to="/login">
                <button>login</button>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
