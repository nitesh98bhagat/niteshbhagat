import React, { useState } from "react";
import { workExperience } from "../Data";
import EducationTile from "./Education";

function WorkSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div>
      {/* Education */}
      <div className="flex-col flex ">
        <p className="text-slate-400  text-lg mt-2 mb-5 px-3 sm:p-0 "></p>
        <div className="flex-row flex">
          <div className="container w-full md:w-1/2">
            {workExperience.map((e, i) => (
              <button
                key={i}
                className={`text-left pl-3 rounded-xl pr-14 ${
                  currentIndex == i && "bg-zinc-800"
                }`}
                onClick={() => setCurrentIndex(i)}
              >
                <EducationTile props={e} />
              </button>
            ))}
          </div>
          <div className="flex-1 hidden md:block border-2 p-6 rounded-2xl shadow-2xl border-zinc-800 px-5 text-zinc-400 space-y-2">
            <h1 className="text-3xl font-bold text-zinc-50">
              {workExperience[currentIndex].degree}
            </h1>
            <div className="flex flex-row gap-7">
              <h1 className="text-lg font-[400]">
                {workExperience[currentIndex].institute}
              </h1>

              <p class="leading-relaxed">
                {workExperience[currentIndex].year ?? "20XX-20XX"}
              </p>
              <p class="leading-relaxed">
                {workExperience[currentIndex].location ?? "Kolkata, India"}
              </p>
              <p class="leading-relaxed">
                {workExperience[currentIndex].subtitle ?? "Subtitle"}
              </p>
            </div>

            <p className="border-t border-zinc-600 py-2">
              {workExperience[currentIndex].desciption ?? "Lorem Ipsum"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkSection;
