import Project from "#models/project";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function ProjectCard({project}:{project: Project}) {
    return (
      <Card
        className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      >
        <div className="relative h-48 w-full">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{project.description}</CardDescription>
        </CardContent>
      </Card>
    )
  }
  