import React from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";

interface Props {
  src: string;
  title: string;
  description: string;
  links: string;
}

const ProjectCard = ({ src, title, description, links }: Props) => {
  return (
    <div className=" overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] max-md:w-[300px] max-md:h-[500px] w-[500px] h-[550px] min-md:w-[400px] flex flex-col justify-between">
      <div>
        <img src={src} className="w-full object-contain" alt="" />

        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </div>

      <div className="relative p-4 flex flex-row">
        <SparklesIcon className="text-[#b49bff] h-5 w-5" />{" "}
        <a href={links} target="_blank">
          <button className="text-red-100 pl-3">Click Here!</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
