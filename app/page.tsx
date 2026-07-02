
const lines= [
  {
    quote: "At any rate, humans change over time based on their actions. Truth be told, at the end of the day, equality is just a fantasy. And most of us go through life denying the fact that we live in a meritocracy.",
    by: "Shōgo Kinugasa"
  },
  {
    quote: " Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    by: "Albert Einstein"
  }
];
const random = Math.floor(Math.random() * lines.length) ;
export default function Home() {
  return (
    <div className=" bg-primary/10 mx-3 md:mx-20 rounded-3xl py-4 px-4 md:py-10 md:px-10 shadow-2xl shadow-primary/50 ">
      <center><img
          src= '/pfp.jpg'
          draggable="false"
          alt="pfp"
          className="w-40 h-auto md:hidden object-cover rounded-4xl  mb-4 border-4 shadow-2xl shadow-primary/40 "
        /></center>
      <p className="from-primary/40 to-primary bg-linear-to-r bg-clip-text text-2xl md:hidden font-semibold text-transparent">
          Hi, I'm Sparsh Gupta!
        </p>
    <div className="flex justify-between">
      <div>
        <p className="hidden md:block from-primary/40 to-primary bg-linear-to-r bg-clip-text text-4xl font-semibold text-transparent mb-2">
          Hi, I'm Sparsh Gupta!
        </p>
        <p className="text-1xl md:text-xl text-foreground ">
          I fell down the web development rabbit hole a while ago, and I still love doing this every single day. But looking back, it's wild to see the unexpected side-quests my brain took along the way. I’ve developed a serious love for listening to music while coding, a profound appreciation for figuring out new things in Arch Linux (btw, I use Arch), and a severe addiction to anime.   
        </p>
          <blockquote className="mt-6 border-l-4 pl-6 italic hidden xl:block ">
              "{lines[random].quote}"
              <br / ><div className="text-right mr-20">―{lines[random].by}</div>
          </blockquote>    
         

      </div>
      <div>
        <img
          src= '/pfp.jpg'
          draggable="false"
          alt="pfp"
          className="min-w-40 max-w-50 m-4 h-auto hidden md:block object-cover rounded-4xl border-4 shadow-2xl shadow-primary/50 "
        />
      </div>

  
    </div>
    </div>
  );
}
