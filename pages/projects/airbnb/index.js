import React from "react";
import { AiFillStar, AiOutlineSearch } from "react-icons/ai";

import { RiHotelFill } from "react-icons/ri";

function AirBnb() {
  return (
    <div>
      {/* Header */}
      <div className="flex-row flex p-2 items-center justify-around">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          alt="logo"
          className="w-32"
        />
        {/* search */}
        {/* Search bar */}
        <div className="w-1/2 bg-slate-50 border border-slate-100 flex flex-row px-2 rounded-full text-slate-600 space-x-2 items-center p-2">
          <AiOutlineSearch size={25} />
          <input
            type="text"
            className="flex-grow bg-transparent focus:ring-0 focus:ring-transparent outline-none"
            placeholder="Search..."
          />
        </div>
        {/* Sign up */}
        <button className="bg-rose-400 rounded-full p-2 px-4 text-white font-bold">
          Sign up
        </button>
      </div>

      {/* body */}

      <div className=" pt-5  items-start  px-20  flex-wrap flex gap-8">
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
        <CardTile />
      </div>
    </div>
  );
}

export default AirBnb;

function CardTile() {
  return (
    <div className="container max-w-xs flex flex-col space-y-2 hover:scale-105 cursor-pointer">
      <img
        src="https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/9da40e3c-5846-4359-bb41-05c27b09a8f5.jpeg?im_w=720"
        alt="image"
        className="w-full rounded-xl"
      />
      <div className="flex-row flex justify-between">
        <h1 className="text-lg font-bold">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <h1 className="text-lg font-bold flex flex-row items-center px-2 text-amber-500">
          <AiFillStar />
          <span>4.3</span>
        </h1>
      </div>
      <p className="text-sm  text-slate-600">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
        provident saepe autem!
      </p>

      <div className="flex-row flex justify-between items-center">
        <p className="text-xl font-semibold">₹1,487/night</p>

        <h1 className=" flex flex-row items-center px-2 space-x-2">
          <RiHotelFill className="text-rose-600 " size={20} />
          <span>Room Available</span>
        </h1>
      </div>
    </div>
  );
}
