import Head from "next/head";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import ContactMe from "../components/ContactMe";



export default function Home() {
  return (
    <div>
      <Head>
      </Head>
      <NavBar />
      <HeroSection />
      <ProjectSection />
    </div>
  );
}
