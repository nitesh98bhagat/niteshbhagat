import Head from "next/head";
import { DiReact } from "react-icons/di";
import { HiDownload } from "react-icons/hi";
import { BsFacebook, BsTrophyFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdOutlineWork, MdSchool } from "react-icons/md";
import { HiLanguage } from "react-icons/hi2";
import { FaLaptopCode } from "react-icons/fa";
import { GoFileCode } from "react-icons/go";

import {
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import ProjectCard, { LocalProject } from "../components/ProjectCard";
import TechPill from "../components/TechPill";
import EducationTile from "../components/Education";
import { useEffect, useState } from "react";
import ProjectSection from "../components/Tabbar/ProjectSection";
import TechnologySection from "../components/Tabbar/TechnologySection";
import EducationSection from "../components/Tabbar/EducationSection";
import Image from "next/image";
import WorkSection from "../components/WorkSection";

export default function Home() {
  const [tabIndex, setTabIndex] = useState(0);

  const tabBarView = [
    <ProjectSection key={"project"} />,
    <TechnologySection key={"technologies"} />,
    <EducationSection key={"education"} />,
  ];

  const schema = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: "Nitesh Bhagat",
    url: "https://niteshbhagat.vercel.app/",
    image: "https://niteshbhagat.vercel.app/nitesh.jpeg",
    sameAs: [
      "https://www.instagram.com/_nitesh_bhagat_/",
      "https://www.linkedin.com/in/nitesh-bhagat-a8b996137/",
      "https://github.com/nitesh98bhagat",
    ],
    jobTitle: "Software Developer",
    worksFor: {
      "@type": "Organization",
      name: "Rehook.ai",
    },
  };

  return (
    <div className="flex flex-col bg-zinc-900 text-zinc-50">
      <Head>
        <title>
          Nitesh Kumar Bhagat | Seasoned web developer skilled in React,
          Tailwind, Next.js, Express.
        </title>

        <link rel="icon" href="/nitesh.jpeg" />

        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Seasoned web developer skilled in React, Tailwind, Next.js, Express. Crafting dynamic, efficient web solutions for your success."
        />
        <meta
          name="keywords"
          content="React, Tailwind, Express, MongoDB, web development, frontend, backend, JavaScript, API, responsive design"
        />
        <meta name="author" content="Nitesh Kumar Bhagat" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      {/* intro-section */}
      <div className="flex flex-col-reverse  sm:flex-row  md:py-8 md:px-24 p-4  justify-between ">
        <div className="w-full sm:w-1/2 space-y-3 md:space-y-5 py-4">
          <h1 className="text-3xl sm:text-7xl font-bold text-slate-300 ">
            Nitesh
            <span className="text-emerald-500 font-black">{" Kumar "}</span>
            Bhagat
          </h1>

          <h1 className="text-slate-400  text-lg">
            Highly energetic and self-motivated individual who loves to take
            challenges to{" "}
            <span className="text-emerald-500 font-semibold italic">
              {" Grow "}
            </span>
          </h1>
          <div className="flex-wrap flex gap-3">
            <TechPill icon={<DiReact />} title="React js" />
            <TechPill icon={<SiNextdotjs />} title="Next js" />
            <TechPill icon={<SiFlutter />} title="Flutter" />
            <TechPill icon={<SiExpress />} title="Express js" />
            <TechPill icon={<SiMongodb />} title="MongoDB" />
            <TechPill icon={<SiFirebase />} title="Firebase" />
            <TechPill title="Many more" />
          </div>

          <div className="flex-col sm:flex-row flex sm:space-x-2 sm:space-y-0 space-y-4">
            {/* <button className="bg-emerald-700 p-3 rounded-lg text-zinc-50 font-bold flex flex-row items-center justify-center space-x-2">
              <HiDownload size={20} />
              <span>Download Resume</span>
            </button> */}

            <a
              href="https://github.com/nitesh98bhagat"
              // rel="no_reference"
              rel="noreferrer"
              target="_blank"
              className="bg-zinc-800 p-3 rounded-lg text-zinc-50 font-bold flex flex-row items-center justify-center space-x-2"
            >
              <AiFillGithub size={20} />
              <span>View Github Profile</span>
            </a>
            <a
              href="https://www.linkedin.com/in/nitesh-bhagat-a8b996137/"
              // rel="no_reference"
              rel="noreferrer"
              target="_blank"
              className="bg-zinc-800 p-3 rounded-lg text-zinc-50 font-bold flex flex-row items-center justify-center space-x-2"
            >
              <AiFillLinkedin size={20} />
              <span>View Linkedin Profile</span>
            </a>
          </div>
        </div>

        <img
          src={"./nitesh.jpeg"}
          alt="Nitesh Bhagat's picture"
          className="rounded-full aspect-square w-1/3 h-1/3  object-cover border-4 md:border-8 border-zinc-100  "
        />
      </div>
      {/* Work section */}.
      <div className="bg-zinc-800/30 w-full sm:py-10 sm:px-24 flex flex-col ">
        <h1 className=" cursor-pointer  p-3 sm:p-0 mt-10 flex flow-row items-start gap-2  ">
          <MdOutlineWork size={40} />

          <div className="flex-col flex">
            <span className="text-2xl sm:text-4xl font-bold">
              Work Experience
            </span>
          </div>
        </h1>

        <WorkSection />
      </div>
      {/* Project */}
      <div className="bg-zinc-800/30 w-full sm:py-10 sm:px-24 flex flex-col ">
        <h1 className=" cursor-pointer  p-3 sm:p-0 mt-10 flex flow-row items-start gap-2  ">
          <FaLaptopCode size={40} />

          <div className="flex-col flex">
            <span className="text-2xl sm:text-4xl font-bold">Projects</span>
          </div>
        </h1>

        <ProjectSection />
      </div>
      {/* Technologies */}
      <div className="bg-zinc-800/30 w-full sm:py-10 sm:px-24 flex flex-col ">
        <h1 className=" cursor-pointer  p-3 sm:p-0 mt-10 flex flow-row items-start gap-2  ">
          <GoFileCode size={40} />

          <div className="flex-col flex">
            <span className="text-2xl sm:text-4xl font-bold">
              Technologies & Languages
            </span>
          </div>
        </h1>

        <TechnologySection />
      </div>
      {/* Technologies */}
      <div className="bg-zinc-800/30 w-full sm:py-10 sm:px-24 flex flex-col ">
        <h1 className=" cursor-pointer  p-3 sm:p-0 mt-10 flex flow-row items-start gap-2  ">
          <MdSchool size={40} />

          <div className="flex-col flex">
            <span className="text-2xl sm:text-4xl font-bold">
              Qualifications
            </span>
          </div>
        </h1>

        <EducationSection />
      </div>
      <div className="bg-zinc-800/30 w-full sm:py-10 sm:px-24 flex flex-col ">
        {/* Ui Design */}
        <h1 className="text-2xl sm:text-4xl font-bold cursor-pointer  p-3 sm:p-0 mt-10">
          UI Design
        </h1>
        <p className="mb-10 mx-4 sm:mx-0">User Interface Design Practice</p>

        {[
          {
            title: "Airbnb clone",
            link: "/projects/airbnb",
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
          {
            title: "VSCODE Clone UI",
            link: "/projects/vscode-clone",
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
          {
            title: "Online Course Platform",
            link: "/projects/online-course",
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
          <LocalProject
            key={e.title}
            title={e.title}
            link={e.link}
            tech={e.tech}
          />
        ))}
      </div>
      {/* languages, programing lang */}
      <div className="flex-row flex justify-between p-24">
        <HiLanguage size={300} className="text-emerald-500" />
        <div className="flex-col flex">
          <h1 className="text-4xl font-bold">Comunicative Languages</h1>

          <ul className="list-disc space-y-2">
            {[
              {
                title: "English",
                level: "Fluent in Writing, Reading & Speaking ",
              },
              {
                title: "Hindi",
                level: "Fluent in Writing, Reading & Speaking ",
              },
              {
                title: "Bengali",
                level: "Familiar in Writing, Reading & Speaking ",
              },
            ].map((e, i) => (
              <li key={i}>
                <div className="flex flex-col p-3">
                  <span className="font-medium text-xl">{e.title}</span>
                  <span className="text-sm">{e.level} </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
