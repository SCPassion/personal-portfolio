import { Badge } from "@/components/ui/badge";
import { Code } from "lucide-react";

export default function SkillsSection() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Python",
    "Convex",
    "Git",
    "Unity",
    "C#",
    "C++",
    "Tailwind CSS",
    "SQL",
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8 animate-on-scroll">
            <Code className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Skills & Technologies</h2>
          </div>
          <div className="flex flex-wrap gap-3 animate-on-scroll justify-center gap-4">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-sm py-2 px-4 hover:scale-110 transition-transform cursor-pointer rounded-full bg-gray-800"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
