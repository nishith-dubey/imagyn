import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Pricing from "./pages/Pricing";
import Footer from "./components/Footer";
import Result from "./pages/result";
import Login from "./components/Login";
import { AppContext } from "./context/AppContext";
import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const {showLoginDialog} = useContext(AppContext)

  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 border min-h-screen bg-gradient-to-b from-teal-50 to-rose-100 ">
      <Navbar/>
      { showLoginDialog && <Login/> }

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/result" element={<Result/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>

      <ToastContainer />
      <Footer/>
    </div>
  );
}

export default App;
