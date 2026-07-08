"use client";

import InfiniteSlider from "@/components/smoothui/infinite-slider";



const tech = [
  {
    name: "React",
    href: "/logos/React.svg",
  },
    {
    name: "Tailwind CSS",
    href: "/logos/Tailwind CSS.svg",
  },
  {
    name: "Next.js",
    href: "/logos/next.svg",
  },
  {
    name: "CSS3",
    href: "/logos/CSS3.svg",
  },
  {
    name: "HTML5",
    href: "/logos/HTML5.svg",
  },
  {
    name: "Arch Linux",
    href: "/logos/Arch Linux.svg",
  },
  {
    name: "Express.js",
    href: "/logos/Express.svg",
  },
  {
    name: "Fedora",
    href: "/logos/Fedora.svg",
  },
  {
    name: "PostgresSQL",
    href: "/logos/PostgresSQL.svg",
  },
  {
    name: "JavaScript",
    href: "/logos/JavaScript.svg",
  },
  {
    name: "TypeScript",
    href: "/logos/TypeScript.svg",
  },
  {
    name: "Node.js",
    href: "/logos/Node.js.svg",
  }
]

const InfiniteSliderDemo = () => {
  return (
    <div className="flex w-full min-h-[200px] flex-col items-center justify-center gap-2">
      {/* Basic horizontal slider */}
      <div className="w-full max-w-md">
        <InfiniteSlider gap={16} speed={70}>
          {Array.from({ length: tech.length }, (_, i) => (
            <div
              className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground"
              key={`basic-${i + 1}`}
            >
              <img src={tech[i].href} alt={tech[i].name} className="h-12 w-12" draggable="false" />
            </div>
          ))}
        </InfiniteSlider>
      </div>

      {/* Slider with hover pause */}
      <div className="w-full max-w-md">
        <InfiniteSlider gap={16} speed={50} speedOnHover={0}>
          {Array.from({ length: tech.length }, (_, i) => (
            <div
              className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg bg-brand text-foreground"
              key={`hover-${i + 1}`}
            >
              <img src={tech[i].href} alt={tech[i].name} className="h-12 w-12" draggable="false"/>
            </div>
          ))}
        </InfiniteSlider>
      </div>

      {/* Reverse direction */}
      <div className="w-full max-w-md">
        <InfiniteSlider gap={16} reverse speed={70}>
          {Array.from({ length: tech.length }, (_, i) => (
            <div
              className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground"
              key={`reverse-${i + 1}`}
            >
              <img src={tech[i].href} alt={tech[i].name} className="h-12 w-12" draggable="false"/>
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </div>
  );
};

export default InfiniteSliderDemo;
