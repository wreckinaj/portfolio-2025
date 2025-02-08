import Image from "next/image";
import HeaderSection from "./components/HeaderSection"
import AboutSection from "./components/AboutSection";
import WorkSection from "./components/WorkSection";
import ContactForm from "./components/ContactForm";
import SocialSection from "./components/SocialSection";
import ExpSection from "./components/ExpSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-sky-800">
      <div className='container mx-auto px-12 py-4'>
        <HeaderSection/>
        <AboutSection/>
        <ExpSection/>
        <WorkSection/>
        <ContactForm/>
        <SocialSection/>
      </div>
    </main>
  );
}
