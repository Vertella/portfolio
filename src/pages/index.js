import Head from "next/head";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import ContactMe from "../components/ContactMe";



export default function Home() {
  return (
    <div>
      <Head>
        <title>Veronica Rosén</title>
        <meta name="description" content="Welcome to my portfolio site showcasing my work." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
      <HeroSection />
      <ProjectSection />
    </div>
  );
}
