"use client";
import { Building2, Calendar, School, University, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "High-School",
    company: "Shanti Niketan World School",
    period: "2016 - 2022",
    description:
      "Completed high school education with a focus on science and mathematics, achieving top grades in all subjects.",
    technologies: ["HTML", "CSS", "JavaScript"],
    icon: School,
  },
  {
    title: "Inter-mediate",
    company: "St. Fidelis Sr. Sec. School",
    period: "2022 - 2024",
    description:
      "Pursued inter-mediate education with a specialization in computer science, while studing for both CBSE boards and JEE.",
    technologies: ["Python", "MySQL"],
    icon: University,
  },
  {
    title: "B.Tech in Civil and Infrastructure Engineering",
    company: "Indian Institute of Technology, Jodhpur",
    period: "2025 - Present",
    description:
      "Pursuing a Bachelor of Technology degree in Civil Engineering with focus on programming.",
    technologies: ["C", "C++"],
    icon: GraduationCap,
  },
  {
    title: "Learning Full Stack Development",
    company: "Self-Learning",
    period: "2025 - Present",
    description:
      "Currently learning full stack development through online resources, tutorials, and personal projects, with a focus on building web applications using modern technologies.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Express.js", "Node.js", "PostgreSQL", "Prisma ORM", "Next.js", "TypeScript"],
    icon: Building2,
  },
];

export default function Page() {
  return (
    <div className="mx-auto md:mx-5 max-w-(--breakpoint-sm) px-6 py-12 md:py-20">
      <div className="relative ml-3">
        {/* Timeline line */}
        <div className="absolute top-4 bottom-0 left-0 border-l-2" />

        {experiences.map(
          ({ company, description, period, technologies, title, icon }, index) => {
            const Icon = icon;
            return (
            <div className="relative pb-12 pl-8 last:pb-0" key={index}>
              {/* Timeline dot */}
              <div className="absolute top-3 left-px h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background" />

              {/* Content */}
              <div className="space-y-3 hover:bg-primary/10 hover:shadow-xl hover:shadow-primary/10 md:p-4 rounded-lg transition-colors duration-300">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent">
                    <Icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <span className="font-medium text-base">{company}</span>
                </div>
                <div>
                  <h3 className="font-medium text-xl tracking-[-0.01em]">
                    {title}
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{period}</span>
                  </div>
                </div>
                <p className="text-pretty text-muted-foreground text-sm sm:text-base">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge
                      className="rounded-full"
                      key={tech}
                      variant="secondary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )
        }
        )}
      </div>
    </div>
  );
}

