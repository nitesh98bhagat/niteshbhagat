import React from "react";
import ProjectCard from "../ProjectCard";

function ProjectSection() {
  return (
    <div>
      <p className="text-slate-400  text-lg mt-2 mb-5 px-3 sm:p-0 ">
        All Projects are
        <span className="text-emerald-500 font-semibold italic">
          {" Live "}
        </span>
        . Click on them to view in a new tab
      </p>

      <div className="grid-cols-1 sm:grid-cols-3 grid gap-8 p-3 sm:p-0">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default ProjectSection;
