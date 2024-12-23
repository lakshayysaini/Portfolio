import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { BentoGridSecondDemo } from "@/components/GridTwo";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center flex-col items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <BentoGridSecondDemo />
        <RecentProjects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
};
