import Hero from "./_components/Hero";
import { Meteors } from "./_components/Meteors";

export default function Home() {
  return (
    <div className="size-full relative bg-black overflow-hidden font-interTight">
      {/* Meteor effect overlay */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <Meteors number={30} />
      </div>
      <Hero />
    </div>
  );
}
