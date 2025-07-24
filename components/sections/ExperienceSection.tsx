import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

export default function ExperienceSection() {
  const experience = [
    {
      title: "Backend Developer",
      company: "x.",
      period: "2022 - Present",
      description:
        "Developed backend data analysis pipelines for EEG using C++ and C#.",
    },
    {
      title: "Unity Developer",
      company: "x.",
      period: "2020 - 2022",
      description:
        "Developed prototype games using Brain-Computer-Interface and self-projects. Gained experience in game development and game design.",
    },
    {
      title: "Matlab Simulink Developer",
      company: "x",
      period: "2019 - 2020",
      description:
        "Build and maintain Matlab Simulink models for EEG data analysis with Virtual Reality integration.",
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12 animate-on-scroll">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Work Experience</h2>
          </div>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 animate-on-scroll"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <CardTitle className="text-xl">{job.title}</CardTitle>
                    <Badge variant="outline">{job.period}</Badge>
                  </div>
                  <CardDescription className="text-lg font-medium text-foreground">
                    {job.company}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
