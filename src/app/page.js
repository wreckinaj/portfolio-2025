import Image from "next/image";
import HeaderSection from "./components/HeaderSection"
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-sky-800">
      <div className='container mx-auto px-12 py-4'>
        <HeaderSection/>
        <AboutSection/>
      </div>
    </main>
  );
}
