import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { SparklesIcon } from '@heroicons/react/24/solid'

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 flex-wrap justify-center">
        <ProjectCard
          src="/duartrizani.com.png"
          title="Old Portfolio"
          description="This used to be my portfolio it was made with only html, css, js"
          links="https://old-portfolio-gray-chi.vercel.app"
        />
        <ProjectCard
          src="/duartrizanitest.com.png"
          title="Website to make offers"
          description="This web app is used to create offers for someone, it was made with ReactJS"
          links="https://driloni1.vercel.app/"
        />
          <ProjectCard
            src="/duarttest.site.png"
            title="German Employeement System"
            description="This website was made for companies, to use the same system as they do in germany, for admins and employees, username: admin , password: 123456"
            links="https://drgroup-ks.com"
          />
        <ProjectCard
          src="/deskdemons.fun.png"
          title="Desk Demons (VALORANT)"
          description="This website was made for fun, its a website about a game called VALORANT which uses VALORANT's API to get data about the players (DESKTOP ONLY)"
          links="https://deskdemons2-0.vercel.app/"
        />
        <ProjectCard
          src="/drgroup.png"
          title="My website"
          description="This website was made to sell products to others"
          links="https://drgroup-nine.vercel.app/"
        />
        <ProjectCard
          src="/comingsoon.jpg"
          title="More Coming Soon"
          description="There Will be more Project added to this Portfolio"
          links="#projects"
        />
      </div>
    </div>
  );
};

export default Projects;
