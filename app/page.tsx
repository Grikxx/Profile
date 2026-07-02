"use client";
import { useEffect, useState } from "react";
import { Layers } from "lucide-react";
import { ModeToggle } from "./components/ui/theme";
const lines = [
  {
    quote:
      "At any rate, humans change over time based on their actions. Truth be told, at the end of the day, equality is just a fantasy. And most of us go through life denying the fact that we live in a meritocracy.",
    by: "Shōgo Kinugasa",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    by: "Albert Einstein",
  },
  {
    quote:
      "Society is produced by our wants, and government by our wickedness; the former promotes our happiness positively by uniting our affections, the latter negatively by restraining our vices. The one encourages intercourse, the other creates distinctions. The first is a patron, the last a punisher.",
    by: "Thomas Paine",
  },
  {
    quote:
      "The individual has always had to struggle to keep from being overwhelmed by the tribe. If you try it, you will be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself.",
    by: "Friedrich Nietzsche",
  },
  {
    quote:
      "Man is a masterpiece of creation, if only because no matter how much weight you place on his shoulders, he will always find a way to make it heavier for someone else while claiming to carry the burden alone.",
    by: "Fyodor Dostoevsky",
  },
  {
    quote:
      "The worst thing that can happen to a man is to lose his money, the next worst his health, the next worst his reputation. All other evils are either imaginary or so small that they are not worth naming alongside these three realities.",
    by: "Samuel Butler",
  },
  {
    quote:
      "True freedom is an illusion maintained by those who have never reached the end of their leash. Once you attempt to step beyond the designated boundaries of your societal function, the collar tightens immediately.",
    by: "Niccolò Machiavelli",
  },
  {
    quote:
      "Almost all our suffering comes from our relations with other people. There is no more mistaken path to happiness than worldliness, revelry, and high living. It turns our life into a battlefield where we fight for illusions.",
    by: "Arthur Schopenhauer",
  },
  {
    quote:
      "We are all born originals and die copies. The system requires standardization to function, and the moment a child enters an institution, the slow process of filing down their sharp edges begins until they fit neatly into a spreadsheet.",
    by: "Edward Young",
  },
  {
    quote:
      "Most people do not really want freedom, because freedom involves responsibility, and most people are frightened of responsibility. They would much rather obey a strong hand that promises them security while dictating their thoughts.",
    by: "Sigmund Freud",
  },
  {
    quote:
      "You want to know how to make human beings miserable? Standardize them. Give them all the same size hat, the same size boots, and the same amount of money. Then you will have perfect equality, and absolute misery.",
    by: "Fyodor Dostoevsky",
  },
  {
    quote:
      "The world is not a polite salon where merit is rewarded and virtue is recognized. It is an arena where the rules are written by the victors, and the losers are forced to congratulate them under the guise of sportsmanship.",
    by: "Robert Greene",
  },
  {
    quote:
      "Nothing is more seductive than a system that promises absolute fairness, because it allows the mediocre to blame the structure rather than their own lack of capability when they inevitably fail to rise.",
    by: "Friedrich Nietzsche",
  },
  {
    quote:
      "History is not a record of progress; it is a record of the shifting mechanisms of control. The names of the institutions change, but the fundamental division between those who command and those who comply remains absolute.",
    by: "George Orwell",
  },
  {
    quote:
      "Humanity is a thin layer of bacteria on a lump of rock hurtling through a void. We are profoundly unimportant, yet we behave as if our subjective morality is a universal law written into the fabric of the cosmos.",
    by: "Arthur Schopenhauer",
  },
  {
    quote:
      "A man who is completely honest with himself will realize that his altruism is merely a calculated investment in his own reputation. We protect others because we fear the day when we will be left unprotected.",
    by: "Thomas Hobbes",
  },
  {
    quote:
      "The masses have never thirsted after truth. They turn aside from evidence that is not to their taste, preferring to deify error, if error seduces them. Whoever can supply them with illusions is easily their master.",
    by: "Gustave Le Bon",
  },
  {
    quote:
      "Every generation imagines itself to be more intelligent than the one that went before it, and wiser than the one that comes after it. This is the ultimate hubris of a species that keeps repeating the exact same catastrophes.",
    by: "George Orwell",
  },
  {
    quote:
      "We do not hate the system because it is corrupt; we hate the system because we are not the ones controlling the corruption. Given the chance, ninety-nine percent of people would abuse the exact same levers of power they protest against.",
    by: "Niccolò Machiavelli",
  },
  {
    quote:
      "If you want to know who controls your life, look at who you are not allowed to criticize. The modern world pretends to value free expression, but it merely shifted the blasphemy laws from religion to ideology.",
    by: "Voltaire",
  },
  {
    quote:
      "Intellectual growth should commence at birth and cease only at death. Yet, for the vast majority of human beings, the mind hardens like cement long before the body does, rejecting any data that threatens their comfort zone.",
    by: "Albert Einstein",
  },
  {
    quote:
      "The illusion of choice is the greatest weapon of modern governance. By giving people two identical options and letting them fight bitterly over the minor differences, you ensure they never question the framework itself.",
    by: "Noam Chomsky",
  },
  {
    quote:
      "No one is more hopelessly enslaved than those who falsely believe they are free. The physical chains of the past have merely been replaced by economic and psychological dependencies that are far more difficult to break.",
    by: "Johann Wolfgang von Goethe",
  },
  {
    quote:
      "The truth does not care about your emotional state. It does not adjust itself to make you feel secure or validated. Reality is entirely indifferent to human suffering, and surviving it requires adaptation, not complaints.",
    by: "Marcus Aurelius",
  },
  {
    quote:
      "Cooperation is nothing more than a temporary truce between self-interests. The moment the collective objective no longer aligns with individual survival or profit, the alliance dissolves into betrayal without a second thought.",
    by: "Thomas Hobbes",
  },
  {
    quote:
      "Civilization is a very thin veneer that can be stripped away in a matter of hours. All it takes is the suspension of the supply chain or the collapse of the power grid to reveal that the rule of law is a consensus built on fragile trust.",
    by: "Robert A. Heinlein",
  },
  {
    quote:
      "People spend their entire lives pretending to be unique, yet every action they take is a calculated attempt to secure validation from a collective whose opinions they claim to despise. Conformity is the default state of man.",
    by: "Jean-Paul Sartre",
  },
];
const facts = [
  {
    logo: Layers,
    title: "Software Engineer",
    description:
      "Building scalable web applications using MERN stack and AI-powered solutions",
  },
  {
    logo: Layers,
    title: "Placeholder",
    description:
      "Lorem-ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor ",
  },
  {
    logo: Layers,
    title: "Placeholder",
    description:
      "Lorem-ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor ",
  },
  {
    logo: Layers,
    title: "Placeholder",
    description:
      "Lorem-ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor ",
  },
  {
    logo: Layers,
    title: "Placeholder",
    description:
      "Lorem-ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor ",
  },
];

export default function Home() {
  const [random, setRandom] = useState(0);
  useEffect(() => {
    setRandom(Math.floor(Math.random() * lines.length));
  }, []);

  if (random === null) {
    return null;
  }
  return (
    <div>
      <div className=" bg-primary/10 mx-3 md:mx-20 rounded-3xl py-4 px-4 md:py-10 md:px-10 shadow-2xl shadow-primary/50 ">
        <center>
          <img
            src="/pfp.jpg"
            draggable="false"
            alt="pfp"
            className="w-40 h-auto md:hidden object-cover rounded-4xl  mb-4 border-4 shadow-2xl shadow-primary/40 "
          />
        </center>
        <p className="from-primary/40 to-primary bg-linear-to-r bg-clip-text text-3xl mb-2 md:hidden font-bold font-[sans] text-transparent">
          Hi, I'm Sparsh Gupta!
        </p>
        <div className="flex justify-between">
          <div>
            <p className="hidden md:block from-primary/40 to-primary bg-linear-to-r bg-clip-text text-4xl font-bold font-[sans] text-transparent mb-2">
              Hi, I'm Sparsh Gupta!
            </p>
            <p className="text-1xl md:text-lg text-muted-foreground font-[sans] md">
              I fell down the web development rabbit hole a while ago, and I
              still love doing this every single day. But looking back, it's
              wild to see the unexpected side-quests my brain took along the
              way. I’ve developed a serious love for listening to music while
              coding, a profound appreciation for figuring out new things in
              Arch Linux (btw, I use Arch), and a severe addiction to anime.
            </p>
            <blockquote className="mt-6 border-l-4 pl-6 italic hidden xl:block mr-20 ">
              "{lines[random].quote}"
              <br />
              <div className="text-right ">―{lines[random].by}</div>
            </blockquote>
            <ModeToggle />
          </div>
          <div>
            <img
              src="/pfp.jpg"
              draggable="false"
              alt="pfp"
              className="min-w-40 max-w-50 m-4 h-auto hidden md:block object-cover rounded-4xl border-4 shadow-2xl shadow-primary/50 "
            />
          </div>
        </div>
      </div>
      <div className=" bg-primary/10 mx-3 md:mx-20 rounded-3xl py-4 px-4 md:py-10 md:px-10 shadow-2xl mt-10 shadow-primary/50 ">
        <div className="md:text-3xl text-2xl md:mb-5  font-bold tracking-tight font-[Sans]">
          <center>Quick Facts <span className="text-primary">About Me</span></center>
        </div>
        <div className="lg:flex">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="bg-primary/10 mx-3 md:mx-4 xl:mx-8 lg:mx-4 rounded-3xl py-4 px-4 md:py-6 md:px-6 shadow-md shadow-primary/50 mt-4"
            >
              <center className="">
                <fact.logo size={40} strokeWidth={2} className="bg-primary/50 p-1 m-1 rounded-xl " />
              </center>

              <center> 
                <h3 className="text-lg font-semibold text-foreground font-[sans]">
                {fact.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground font-[sans]">
                {fact.description}
              </p>
              </center>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
