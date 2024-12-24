import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems, projects } from "@/data";
import { Spotlight } from "@/components/ui/Spotlight";
import { notFound } from "next/navigation";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import MagicButton from "@/components/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import Sandbox from "@/components/ui/projects/sandbox4";

export default function ProjectDetails({ params }) {
  const project = projects.find((proj) => proj.id === parseInt(params.id));

  if (!project) {
    return notFound();
  }

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <div className="pb-28 pt-36">
          <FloatingNav navItems={navItems} />
          <TextGenerateEffect
            words={project.title}
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />

          {/* <img src={project.img} alt={project.title} /> */}
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            {project.des}
          </p>

          <p className="uppercase tracking-widest text-xs  text-blue-100 max-w-80">
            Technologies
          </p>
          <div className="flex items-center justify-between mt-7 mb-3">
            <div className="flex items-center">
              {project.iconLists.map((icon, index) => (
                <div
                  key={index}
                  className="border border-white/[.2] rounded-full bg-black lg:w-12 lg:h-12 w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * index + 2}px)`,
                  }}
                >
                  <img src={icon} alt="icon5" className="p-2" />
                </div>
              ))}
            </div>
          </div>
          <a href="#about">
            <MagicButton
              title="Visit Project"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <div>
            <Sandbox />
          </div>
        </div>
      </div>
    </main>
  );
}
