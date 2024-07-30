import Image from "next/image";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center flex-col items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <h1>Hello, portfolio</h1>
      </div>
    </main>
  );
}
