
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'

import { ToastContainer } from "react-toastify";
import TopHeader from "./components/header/topHeader/TopHeader";
import Header from "./components/header/Header";


import Footer from "./components/footer/Footer";

import Home from "./pages/Home";
// import Register from "./pages/Register";
// import Login from "./pages/Login";

import PageNotFound from "./pages/pageNotFound/PageNotFound"
import About from "./pages/aboutUs/About";
import CustomPizzaPage from "./components/customPizza/CustomPizzaPage";
import Order from "./pages/Order";

const  App = () => {
  

  return (
    <>
      <Router>
      <ToastContainer />
      <TopHeader/>
      <Header />

      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
          {/* <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> */}
          <Route path="/customPizza" element={<CustomPizzaPage/>} />
          <Route path="/order" element={<Order/>} />

          <Route path="*" element={<PageNotFound />} />

      </Routes>

      <Footer />


      </Router>
       
    </>
  )
}

export default App;


/*

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./pages/aboutUs/About";
import MoreInfo from "./pages/moreinfo/MoreInfo";
import Footer from "./components/footer/Footer";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import Contact from "./pages/contact/Contact";
import TopHeader from "./components/header/topHeader/TopHeader";
// import Company from "./components/Company";
// import Change from "./components/Change";
import { ToastContainer } from "react-toastify";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Register from "./pages/user/register/Register";
import Login from "./pages/user/login/Login";
import Profile from "./pages/user/profile/Profile";
import ChangePassword from "./pages/user/changePassword/ChangePassword";
import { useDispatch, useSelector } from "react-redux";
import { profile } from "./redux/features/authSlice";
import { useEffect } from "react";
import ProtectedRoutes from "./utils/productRoutes/ProductRoutes";
import AdminDashboard from "./components/admin/adminDashbord/AdminDashboard";
import AddAdminProducts from "./components/admin/adminDashbord/addAdminProducts/AddAdminProducts";
import EditAdminProducts from "./components/admin/adminDashbord/editAdminProducts/EditAdminProducts";


const App = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(profile());
    }
  }, [dispatch, isAuthenticated]);

  return (
    <>
      <Router>
        <ToastContainer />
        <TopHeader isAuthenticated={isAuthenticated} user={user} />
        <Header />
        <Routes>
          <Route
            path="/admin/hamrodokan/panel"
            element={
              <ProtectedRoutes
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin"}
              >
                <AdminDashboard />
              </ProtectedRoutes>
            }
          />

          <Route
            path="/add/admin/product"
            element={
              <ProtectedRoutes
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin"}
              >
                <AddAdminProducts />
              </ProtectedRoutes>
            }
          />
           <Route
            path="/edit/admin/product/:id"
            element={
              <ProtectedRoutes
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin"}
              >
                <EditAdminProducts />
              </ProtectedRoutes>
            }
          />




          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoutes isAuthenticated={isAuthenticated}>
                <Profile />{" "}
              </ProtectedRoutes>
            }
          />

          <Route path="/change/password" element={<ChangePassword />} />

          <Route path="/product/details/:id" element={<ProductDetails />} />
          <Route path="/about/" element={<About />} />
          <Route path="/more-info" element={<MoreInfo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;

*/

