import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsGrid3X3GapFill } from "react-icons/bs";

function OnlineCourse() {
  return (
    <div className=" min-h-screen ">
      {/* Appbar */}
      <div className="flex flex-row shadow-sm p-2 justify-around">
        <h1 className="font-black text-violet-500 text-2xl">
          Online<span className="text-stone-600">Course</span>
        </h1>
        {/* Search bar */}
        <div className="w-1/2 bg-slate-100 flex flex-row px-2 rounded-full text-slate-600 space-x-2 items-center">
          <AiOutlineSearch size={20} />
          <input
            type="text"
            className="flex-grow bg-transparent focus:ring-0 focus:ring-transparent outline-none"
            placeholder="Search..."
          />
        </div>

        <button className="text-violet-500 flex flex-row items-center space-x-2">
          <BsGrid3X3GapFill />
          <span>Explore Courses</span>
        </button>

        <button className="bg-violet-500 text-white px-2 text-sm rounded-md">
          Sign in
        </button>
      </div>
      {/* main */}
      <div className="flex-row flex px-12">
        {/* sidebar */}
        <div className="flex-col flex w-1/6 min-h-screen border-r">
          {[
            "For You",
            "Web Development",
            "App Development",
            "Data Structure & Algorithm",
            "Graphics Design",
            "",
          ].map((e) => (
            <p key={e} className="p-2 hover:bg-slate-100 cursor-pointer">
              {e}
            </p>
          ))}
        </div>
        {/* content */}
        <div className="flex-col flex p-5 w-full">
          <div className="bg-slate-100 flex-col flex p-3 rounded-md">
            <h1 className="font-semibold text-xl">My learnings</h1>
            {/* project card */}
            <div className="flex-row flex w-1/3 hover:bg-slate-200 cursor-pointer">
              <div className="flex-col flex p-2 ">
                <h1 className="font-semibold">Lorem ipsum dolor sit</h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="bg-slate-400 w-40 rounded-md">4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineCourse;
