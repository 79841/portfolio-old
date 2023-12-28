import { SimpleBox } from "@/components/ui/boxes/SimpleBox";
import { TProjectData } from "@/types/ProjectData";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { siteMetaData } from "@/data";

type TProjectDataProps = {
  project: TProjectData;
};
export const ProjectCard = ({ project }: TProjectDataProps) => {
  return (
    <SimpleBox className="flex max-w-[100%] items-center justify-center gap-12 sm:flex-row">
      <div className="relative flex h-[20rem] w-full items-center justify-center overflow-hidden rounded-lg bg-secondary sm:h-full sm:w-96">
        {typeof project.images !== "undefined" ? (
          <Image
            className="rounded object-cover object-top sm:object-contain sm:object-center"
            src={project.images[0]}
            alt={project.name}
            fill
          />
        ) : (
          <div className="text-xl font-bold">{project.name}</div>
        )}
      </div>
      <div className="hidden h-[80%] border sm:block"></div>
      <div className="flex w-full flex-grow flex-col justify-center gap-6 sm:w-[30rem]">
        <div>
          <h1 className="mb-2 text-xl font-semibold">{project.name}</h1>
          <div className="text-sm text-muted-foreground">
            {project.description}
          </div>
        </div>
        <div className="mb-4 text-sm">{project.content}</div>
        {typeof project.github !== "undefined" && (
          <div className="flex gap-2">
            <div className="flex h-[22px] items-center">
              <FaGithub className="text-xl" />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {project.github.map((githubUrl) => (
                <Badge key={githubUrl}>
                  <Link href={githubUrl}>{githubUrl.split("/").at(-1)}</Link>
                </Badge>
              ))}
            </div>
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="text-sm text-muted-foreground">{project.date}</div>
      </div>
    </SimpleBox>
  );
};
