import React from "react";
import {
  SiC,
  SiCplusplus,
  SiCss3,
  SiDart,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";

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
            {
              title: "Flutter",
              subtitle: "Cross Platform Mobile Development",
              icon: <SiFlutter size={35} />,
            },
            {
              title: "React",
              subtitle: "Frontend Web Development",
              icon: <SiReact size={35} />,
            },
            {
              title: "TailwindCss",
              subtitle: "Frontend Web Development",
              icon: <SiTailwindcss size={35} />,
            },
            {
              title: "Next",
              subtitle: "Frontend framework for React application",
              icon: <SiNextdotjs size={35} />,
            },
            {
              title: "Git & GitHub",
              subtitle: "Version control",
              icon: <SiGithub size={35} />,
            },
            {
              title: "Express",
              subtitle: "Backend ",
              icon: <SiExpress size={35} />,
            },
            {
              title: "MongoDB",
              subtitle: "Database",
              icon: <SiMongodb size={35} />,
            },
            {
              title: "Firebase",
              subtitle: "Backend-as-a-Service Platform",
              icon: <SiFirebase size={35} />,
            },
            {
              title: "Supabase",
              subtitle: "Backend-as-a-Service Platform",
              icon: <SiSupabase size={35} />,
            },
          ].map((e) => (
            <div
              key={e.title}
              className="flex-row flex items-center bg-zinc-900/40 space-x-3 rounded-xl overflow-hidden p-3 my-1 border border-zinc-800 "
            >
              {e.icon ?? <SiSupabase />}
              <div className="flex-col flex">
                <h1 className="text-xl">{e.title} </h1>
                <h3>{e.subtitle}</h3>
              </div>
            </div>
          ))}
        </div>
        {/* Lanuage */}
        <div className="flex-col flex w-full sm:w-1/3 px-5 py-5  sm:py-0">
          <h1 className="text-2xl font-bold">Languages</h1>
          {[
            {
              title: "Javascript",
              icon: <SiJavascript size={30} />,
            },
            {
              title: "HTML5",
              icon: <SiHtml5 size={30} />,
            },
            {
              title: "CSS",
              icon: <SiCss3 size={30} />,
            },
            {
              title: "Dart",
              icon: <SiDart size={30} />,
            },
            {
              title: "C++",

              icon: <SiCplusplus size={30} />,
            },
            {
              title: "C",

              icon: <SiC size={30} />,
            },
          ].map((e) => (
            <div
              key={e.title}
              className="flex-row flex border-zinc-800 border-b my-2 py-2 space-x-2"
            >
              {e.icon ?? <SiJavascript />}
              <h1 className="text-xl">{e.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechnologySection;
