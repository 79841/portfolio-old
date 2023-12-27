import { SimpleBox } from "@/components/ui/boxes/SimpleBox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TProjectData } from "@/types/ProjectData";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

type TProjectDataProps = {
  project: TProjectData;
};
export const ProjectCard = ({ project }: TProjectDataProps) => {
  return (
    <SimpleBox className="flex max-w-[100%] items-center justify-center gap-12 sm:flex-row">
      <div className="relative h-[20rem] w-full rounded-md bg-secondary sm:h-full sm:w-96">
        {project.images && (
          <Image
            className="rounded object-cover object-top sm:object-contain sm:object-center"
            src={project.images[0]}
            alt={project.name}
            fill
          />
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
        <div className="flex gap-2">
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
