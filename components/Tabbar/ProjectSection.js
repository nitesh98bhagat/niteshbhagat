import React from "react";
import {
  SiFirebase,
  SiFlutter,
  SiNextdotjs,
  SiReact,
  SiRedux,
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
            image:
              "https://firebasestorage.googleapis.com/v0/b/fleeke-ebe0e.appspot.com/o/uploads%2Fstockly.png?alt=media&token=2ff4a308-162f-463c-870e-53ea6b6bdfa2",
            title: "Stockly | Stock Trading App with Finnhub API",
            link: "https://stockly-beta.vercel.app/",
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
              <TechPill
                key={"Firebase"}
                icon={<SiFirebase />}
                title="Firebase"
                size={"text-sm"}
              />,
              <TechPill
                key={"Redux"}
                icon={<SiRedux />}
                title="Redux"
                size={"text-sm"}
              />,
            ],
          },
          {
            image:
              "https://firebasestorage.googleapis.com/v0/b/fleeke-ebe0e.appspot.com/o/uploads%2Fbuyzone.png?alt=media&token=3eb42511-4349-4b31-8c8f-e83c2c126f47",
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
            image:
              "https://firebasestorage.googleapis.com/v0/b/fleeke-ebe0e.appspot.com/o/uploads%2FClubhouse.png?alt=media&token=d372f5ad-1e05-4952-8a7c-78344c5cf050",
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
            image:
              "https://firebasestorage.googleapis.com/v0/b/fleeke-ebe0e.appspot.com/o/uploads%2FShopzilla.png?alt=media&token=147a1612-45f1-493f-901b-6351cefa8636",
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
            image:
              "https://firebasestorage.googleapis.com/v0/b/fleeke-ebe0e.appspot.com/o/uploads%2FZeeoro.png?alt=media&token=14b2e429-651c-43c6-b62a-8928ef1bc43e",
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
            image:
              "https://firebasestorage.googleapis.com/v0/b/fleeke-ebe0e.appspot.com/o/uploads%2Fcspunk.png?alt=media&token=7c90fd14-2879-4dfe-bde3-12fdeb4ff4d2",
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
            image:
              "https://firebasestorage.googleapis.com/v0/b/fleeke-ebe0e.appspot.com/o/uploads%2FtodoRabit.png?alt=media&token=047a7839-d52e-458e-adbe-081f39b17f3c",
            title: "TodoRabit | A Modern Todo app for task management ",
            link: "https://todorabit.web.app",
            tech: [
              <TechPill
                key={"next.js"}
                icon={<SiReact />}
                title="Next"
                size={"text-sm"}
              />,
              <TechPill
                key={"nextjs-vercel"}
                icon={<SiFirebase />}
                title="Vercel"
                size={"text-sm"}
              />,
              
            ],
          },
          {
            image:
              "https://firebasestorage.googleapis.com/v0/b/fleeke-ebe0e.appspot.com/o/uploads%2FniteshBhagat.png?alt=media&token=39bcb16d-c677-42ff-90ae-10aa1264502e",
            title: "Nitesh Bhagat Protfolio(This Website)",
            link: "https://niteshbhagat.vercel.app/",
            tech: [
              <TechPill
                key={"nextjsss"}
                icon={<SiNextdotjs />}
                title="Next"
                size={"text-sm"}
              />,
              <TechPill
                key="tailwind"
                icon={<SiTailwindcss />}
                title="TailwindCss"
                size={"text-sm"}
              />,
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
            image={
              e.image ??
              "https://firebasestorage.googleapis.com/v0/b/fleeke-ebe0e.appspot.com/o/uploads%2Fdefault.jpg?alt=media&token=db0e0b61-86b8-4621-89c6-7ac2f9ee497b"
            }
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;
