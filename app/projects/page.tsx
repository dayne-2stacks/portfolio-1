import Link from "next/link";
import { projects } from "@/data/projects";
import { navItems } from "@/data/navItems";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <div className="pb-28 pt-20">
          <TextGenerateEffect
            words="Projects"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          ></TextGenerateEffect>

          <ul>
            {projects.map((project) => (
              <li key={project.id} className="mb-10">
                <Link
                  href={`/projects/${project.id}`}
                  className="flex flex-col lg:flex-row items-start"
                >
                  {/* Image Section */}
                  <div className="relative flex items-center justify-center sm:w-96 w-full h-[30vh] lg:h-[40vh] overflow-hidden">
                    {/* Title on top of the image */}
                    <h1 className="absolute top-2 left-2 text-white bg-black bg-opacity-50 px-2 py-1 rounded-md font-bold lg:text-2xl md:text-xl text-base z-20">
                      {project.title}
                    </h1>

                    <div
                      className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                      style={{ backgroundColor: "#13162D" }}
                    >
                      <Image
                        src="/bg.png"
                        alt="background"
                        fill
                        className="absolute w-full h-full object-cover"
                      />
                    </div>

                    <Image
                      src={project.img}
                      alt="cover"
                      fill
                      className="z-10 absolute bottom-0 object-contain"
                    />
                  </div>

                  {/* Description Section */}
                  <div className="mt-4 lg:mt-0 lg:ml-6 flex-1">
                    <p className="text-sm lg:text-base text-gray-400 lg:pt-12">
                      {project.des}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
