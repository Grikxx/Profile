import Navbar from "./components/layout/navbar";
export default function Home() {
  return (
    <div className="flex justify-between bg-primary/10 mx-10 rounded-3xl py-10 px-10">
      <div>
        <p className="from-primary/40 to-primary bg-linear-to-r bg-clip-text text-4xl font-semibold text-transparent">
          Hello
        </p>
        <p className="text-lg text-foreground">
          Welcome to my portfolio webapp! Explore my projects and skills.
        </p>
      </div>
      <div>
        <img
          src= '/pfp.jpg'
          draggable="false"
          alt="pfp"
          className="w-50 h-auto object-cover rounded-full "
        />
      </div>
  
    </div>
  );
}
