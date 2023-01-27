import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <div
      className="max-w-[1640px] mx-auto flex justify-between 
                 items-center p-8"
    >
      <div className="flex items-center ">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h2>
        <div
          className=" hidden lg:flex items-center bg-gray-200 
              rounded-full p-2 text-[12px] "
        >
          <p className="bg-black rounded-full  text-white  p-1">Delivery</p>
          <p className="p-1">Pickup</p>
        </div>
      </div>
      {/* search  */}
      <div
        className="bg-gray-200 rounded-full flex items-center p-1
           w-[200px] sm:w-[400px] lg:w-[500px] "
      >
        <AiOutlineSearch size={20} />
        <input
          className="bg-transparent p-2  w-full
              focus:outline-none"
          type="text"
          placeholder="Search foods"
        />
      </div>
      {/* cart button */}
      <button
        className="bg-black text-white hidden md:flex 
         items-center py-2 rounded-full"
      >
        <BsFillCartFill size={20} /> Cart
      </button>
      {/* mobile view */}
      {/* overlay */}
      {nav ? (
        <div
          className=" fixed bg-black/80 w-full h-screen z-10 
               top-10 left-0"
        />
      ) : (
        ""
      )}

      {/* sideDrawer */}
      <div
        className={nav? "fixed top-0  left-0 w-[300px] h-screen bg-white z-10  duration-300" :
        "fixed top-0  left-[-300px] w-[300px] h-screen bg-white z-10  duration-300" }
      >
        <AiOutlineClose
          size={30} onClick={()=>{setNav(!nav)}}
          className="absolute right-4 top-4 
                    cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold  ">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="flex py-4 text-xl">
              <TbTruckDelivery className="mr-4" size={25} /> Orders
            </li>
            <li className="flex py-4 text-xl">
              <MdFavorite className="mr-4" size={25} /> Favourite
            </li>
            <li className="flex py-4 text-xl">
              <FaWallet className="mr-4" size={25} /> Wallet
            </li>
            <li className="flex py-4 text-xl">
              <MdHelp className="mr-4" size={25} /> Help
            </li>
            <li className="flex py-4 text-xl">
              <AiFillTag className="mr-4" size={25} /> Promotions
            </li>
            <li className="flex py-4 text-xl">
              <BsFillSaveFill className="mr-4" size={25} /> BestOnes
            </li>
            <li className="flex py-4 text-xl">
              <FaUserFriends className="mr-4" size={25} /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
