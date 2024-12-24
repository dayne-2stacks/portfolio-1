import Link from "next/link";
import { projects } from "@/data";

export default function ProjectsPage() {
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link href={`/projects/${project.id}`}>
              <a>{project.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
