import React from "react";
import {
  SiFirebase,
  SiFlutter,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import ProjectCard from "../ProjectCard";
import TechPill from "../TechPill";

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

      <div className="grid-cols-1 sm:grid-cols-3 grid gap-3 p-3 sm:p-0">
        {[
          {
            title: "Buyzone | E-commerce webapp using Next js & TailwindCss",
            link: "https://buyzone.vercel.app/",
            tech: [
              <TechPill
                key={"nextjs"}
                icon={<SiNextdotjs />}
                title="Next js"
                size={"text-sm"}
              />,
              <TechPill
                key={"vercel"}
                icon={<SiVercel />}
                title="Vercel"
                size={"text-sm"}
              />,
            ],
          },
        
          {
            title: "Clubhouse clone using Flutter web",
            link: "https://nitesh-clubhouse.web.app/#/",
            tech: [
              <TechPill
                key={"clubhouse"}
                icon={<SiFlutter />}
                title="Flutter"
                size={"text-sm"}
              />,
            ],
          },
          {
            title: "E-commerce app using Flutter web",
            link: "https://saytrest-backend.web.app/#/",
            tech: [
              <TechPill
                key={"flutter"}
                icon={<SiFlutter />}
                title="Flutter"
                size={"text-sm"}
              />,
            ],
          },
          {
            title: "Startup Landing Page ",
            link: "https://finanze-4664f.web.app/",
            tech: [
              <TechPill
                key={"startup landing"}
                icon={<SiReact />}
                title="React"
                size={"text-sm"}
              />,
              <TechPill
                key={"firebase"}
                icon={<SiFirebase />}
                title="Firebase"
                size={"text-sm"}
              />,
            ],
          },

          {
            title: "Cspunk | Social Netwok for developers",
            link: "https://cspunk.vercel.app/",
            tech: [
              <TechPill
                key={"next.js"}
                icon={<SiNextdotjs />}
                title="Next"
                size={"text-sm"}
              />,
              <TechPill
                key={"nextjs-vercel"}
                icon={<SiVercel />}
                title="Vercel"
                size={"text-sm"}
              />,
            ],
          },
          {
            title: "Nitesh Bhagat Protfolio(This Website)",
            link: "https://niteshbhagat.vercel.app/",
            tech: [
              <TechPill
                key={"nextjsss"}
                icon={<SiNextdotjs />}
                title="Next"
                size={"text-sm"}
              />,
              <TechPill key="tailwind" icon={<SiTailwindcss />}
                title="TailwindCss"
                size={"text-sm"} />,
              <TechPill
                key={"nextjs-vercel-deployed"}
                icon={<SiVercel />}
                title="Vercel"
                size={"text-sm"}
              />,
            ],
          },
        ].map((e) => (
          <ProjectCard
            key={e.title}
            title={e.title}
            link={e.link}
            tech={e.tech}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;
