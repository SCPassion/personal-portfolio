import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and Stripe integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates and team features",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Weather Dashboard",
      description:
        "Interactive weather dashboard with data visualization and forecasting",
      tech: ["React", "D3.js", "Weather API", "Tailwind"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#1b293b4d]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12 animate-on-scroll">
            <Briefcase className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 animate-on-scroll"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 hover:scale-105 transition-transform bg-transparent"
                      asChild
                    >
                      <Link href={project.github}>
                        <Github className="h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      className="gap-2 hover:scale-105 transition-transform"
                      asChild
                    >
                      <Link href={project.demo}>
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
