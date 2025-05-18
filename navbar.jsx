import React from "react";
import { Button } from "react-bootstrap";
import logo from "./src/assets/Logo (1).svg";
import CallIcon from '@mui/icons-material/Call';

const CustomNavbar = () => {
  return (
    <nav className="bg-white w-full px-4 py-3 fixed z-10">
      <div className="max-w-7xl mx-auto flex  items-center justify-around gap-4">
       
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-14 h-14" />
          <span className="text-2xl font-bold text-black">Chef's Kitchen.</span>
        </div>

        
        <div className="hidden lg:flex flex-col lg:flex-row items-center gap-8">
         
            <a href="#home" className="text-gray-500 font-medium hover:text-amber-700 text-xl">Home</a>
          
            <a href="#about" className="text-gray-500 font-medium hover:text-amber-700 text-xl">About Us</a>
          
            <a href="#recipe" className="text-gray-500 font-medium hover:text-amber-700 text-xl">Recipe</a>
          
            <a href="#gallery" className="text-gray-500 font-medium hover:text-amber-700 text-xl">Gallery</a>
        </div>
       

        
        <div className="flex items-center gap-3">
          <CallIcon className="h-5 w-5 text-amber-700" />

          <span className="font-bold text-black text-xl  hover:text-amber-700 cursor-pointer">+1(909)235-9814</span>
          <Button className="px-8 py-4 text-amber-700 bg-orange-200 hover:text-white hover:bg-amber-700 text-xl font-medium rounded-4xl cursor-pointer hidden lg:flex">Sign In</Button>
          <Button className="px-8 py-4 text-white bg-amber-700 hover:text-amber-700 hover:bg-orange-200 text-xl font-medium rounded-4xl cursor-pointer hidden lg:flex">Sign Up</Button>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
