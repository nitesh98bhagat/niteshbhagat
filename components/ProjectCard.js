import { SiFirebase, SiNextdotjs } from "react-icons/si";
import TechPill from "./TechPill";

function ProjectCard() {
  return (
    <div className="flex-col flex space-y-2">
      <div className="bg-zinc-800 rounded-xl h-48 text-center">s</div>
      <h1 className="text-lg">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </h1>
      <div className="flex-wrap flex gap-3">
        <TechPill icon={<SiNextdotjs />} title="Next js" size={"text-sm"} />
        <TechPill icon={<SiFirebase />} title="Firebase" size={"text-sm"} />
      </div>
    </div>
  );
}

export default ProjectCard;
