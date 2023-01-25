import Link from "next/link";

function ProjectCard({ title, link, tech }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex-col flex  border border-zinc-800 p-3 rounded-lg  hover:bg-zinc-800/30 cursor-pointer"
    >
      <h1 className="text-base ">{title ?? "Name of the project"}</h1>
      <div className="flex-1" />
      <h1 className="text-sm text-emerald-600 py-2 ">{link ?? "/"}</h1>
      <div className="flex-wrap flex gap-3  ">{tech}</div>
    </a>
  );
}

export default ProjectCard;

export function LocalProject({ title, link, tech }) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex-col flex  border border-zinc-800 p-3 rounded-lg  hover:bg-zinc-800/30 cursor-pointer mb-5"
    >
      <h1 className="text-base ">{title ?? "Name of the project"}</h1>
      <div className="flex-1" />
      <h1 className="text-sm text-emerald-600 py-2 ">{link ?? "/"}</h1>
      <div className="flex-wrap flex gap-3  ">{tech}</div>
    </Link>
  );
}
