
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

const  App = () => {
  

  return (
    <>
      <Router>
      {/* <Header/> */}

      <Routes>
      <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />

      </Router>
       
    </>
  )
}

export default App;
