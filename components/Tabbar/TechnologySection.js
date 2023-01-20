import React from "react";

function TechnologySection() {
  return (
    <div>
      <p className="text-slate-400  text-lg mt-2 mb-5 px-3 sm:p-0 ">
        List of
        <span className="text-emerald-500 font-semibold italic">
          {" Technologies "}
        </span>
        {"that I've worked with"}
      </p>

      <div className="flex flex-col sm:flex-row w-full">
        <div className="flex-col flex flex-grow ">
          {/* framework */}
          {[
            { title: "Flutter", subtitle: "Cross Platform Mobile Development" },
            { title: "React", subtitle: "Frontend Web Development" },
            {
              title: "Next",
              subtitle: "Frontend framework for React application",
            },
            { title: "Express", subtitle: "Backend " },
            { title: "MongoDB", subtitle: "Database" },
            { title: "Firebase", subtitle: "Backend-as-a-Service Platform" },
            { title: "Supabase", subtitle: "Backend-as-a-Service Platform" },
          ].map((e) => (
            <div
              key={e.title}
              className="flex-col flex bg-zinc-900/40 rounded-xl overflow-hidden p-3 my-1"
            >
              <h1 className="text-xl">{e.title} </h1>
              <div className="flex-row flex space-x-3 text-sm text-zinc-500">
                <h3>{e.subtitle}</h3>
                <h3>{e.year}</h3>
              </div>
            </div>
          ))}
        </div>
        {/* Lanuage */}
        <div className="flex-col flex w-1/3 px-5">
          <h1 className="text-2xl font-bold">Programming Languages</h1>
          {[
            {
              title: "Javascript",
            },
            {
              title: "Dart",
            },
            {
              title: "C++",
            },
            {
              title: "C",
            },
          ].map((e) => (
            <div
              key={e.title}
              className="flex-col flex border-zinc-800 border-b my-1 py-1"
            >
              <h1>{e.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechnologySection;
