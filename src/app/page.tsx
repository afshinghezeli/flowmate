import Hero from "./_components/Hero";
import { Meteors } from "./_components/Meteors";
import TrustedByLogo from "./_components/TrustedByLogo";

export default function Home() {
  return (
    <>
      <div className="size-full relative overflow-hidden font-interTight">
        {/* Meteor effect overlay */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <Meteors number={30} />
        </div>
        <Hero />
      </div>
      <TrustedByLogo />
    </>
  );
}
