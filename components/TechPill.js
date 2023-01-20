import React from "react";
import { DiReact } from "react-icons/di";

function TechPill({ icon, title, size }) {
  return (
    <div>
      <div className="rounded-full bg-zinc-800/50 px-3 py-1 flex flex-row items-center justify-center  text-xl">
        {icon}
        <span className={`mx-1 ${size ?? "text-lg"}`}>{title ?? "Tech"}</span>
      </div>
    </div>
  );
}

export default TechPill;
