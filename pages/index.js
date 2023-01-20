import Head from "next/head";
import { DiReact } from "react-icons/di";
import { HiDownload } from "react-icons/hi";
import { BsFacebook, BsTrophyFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { HiLanguage } from "react-icons/hi2";
import {
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiMongodb,
  SiNextdotjs,
} from "react-icons/si";
import ProjectCard from "../components/ProjectCard";
import TechPill from "../components/TechPill";
import EducationTile from "../components/Education";
import { useState } from "react";
import ProjectSection from "../components/Tabbar/ProjectSection";
import TechnologySection from "../components/Tabbar/TechnologySection";
import EducationSection from "../components/Tabbar/EducationSection";
import Image from "next/image";

export default function Home() {
  const [tabIndex, setTabIndex] = useState(0);

  const tabBarView = [
    <ProjectSection key={"project"} />,
    <TechnologySection key={"technologies"} />,
    <EducationSection key={"education"} />,
  ];

  return (
    <div className="flex flex-col">
      <Head>
        <title>Nitesh Kumar Bhagat</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* intro-section */}
      <div className="flex flex-col-reverse  sm:flex-row  md:py-8 md:px-24 p-4  justify-between ">
        <div className="w-full sm:w-1/2 space-y-3 md:space-y-5 py-4">
          <h1 className="text-3xl sm:text-7xl font-bold text-slate-300 ">
            Nitesh
            <span className="text-emerald-500 font-black">{" Kumar "}</span>
            Bhagat
          </h1>

          <p className="text-slate-400  text-lg">
            Highly energetic and self-motivated individual who loves to take
            challenges to{" "}
            <span className="text-emerald-500 font-semibold italic">
              {" Grow "}
            </span>
          </p>
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
            <button className="bg-emerald-700 p-3 rounded-lg text-zinc-50 font-bold flex flex-row items-center justify-center space-x-2">
              <HiDownload size={20} />
              <span>Download Resume</span>
            </button>
            <button className="bg-zinc-800 p-3 rounded-lg text-zinc-50 font-bold flex flex-row items-center justify-center space-x-2">
              <AiFillGithub size={20} />
              <span>View Github Profile</span>
            </button>
          </div>
        </div>

        <Image
          src="https://firebasestorage.googleapis.com/v0/b/fleeke-ebe0e.appspot.com/o/webAssets%2FWhatsApp%20Image%202020-02-17%20at%2011.44.18%20AM.jpeg?alt=media&token=ed3e9338-bbdd-4b6e-94db-8822931e6b83"
          alt="Nitesh Bhagat's picture"
          width={100}
          height={100}
          className="rounded-full sm:w-1/3 sm:h-1/3 object-contain border-4 md:border-8 border-zinc-100  "
        />
      </div>

      {/* Project section */}
      <div className="bg-zinc-800/30 w-full sm:py-8 sm:px-24 flex flex-col ">
        <div className="flex-row flex space-x-8 overflow-x-auto sm:overflow-hidden">
          {["Projects", "Technologies", "Qualifications"].map((e, i) => (
            <h1
              key={i}
              onClick={() => setTabIndex(i)}
              className={`text-2xl sm:text-4xl font-bold cursor-pointer  p-3 sm:p-0 ${
                tabIndex === i ? "text-zinc-50" : "text-zinc-600"
              }`}
            >
              {e}
            </h1>
          ))}
        </div>
        {tabBarView[tabIndex]}
      </div>

      {/* Achievement */}
      {/* <div className="flex-row flex justify-between p-24">
        <div className="flex-col flex space-y-5">
          <h1 className="text-4xl font-bold">Achievements</h1>

          <ul className="list-disc list-inside space-y-5">
            <li>Won a Business Model Competition at RCCIIT in Kolkata</li>
            <li>
              2nd prize in Arduino Model Making Competition at College Level
            </li>
          </ul>
        </div>
        <BsTrophyFill size={300} className="text-emerald-500" />
      </div> */}

      {/* languages, programing lang */}
      {/* <div className="flex-row flex justify-between p-24">
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
      </div> */}
    </div>
  );
}