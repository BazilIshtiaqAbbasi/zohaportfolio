'use client'
import { useEffect, useState } from 'react';
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import { HeroBanner } from "@/components/HeroBanner";
import IconsBackground from "@/components/IconsBackground";
import NavBar from "@/components/NavBar";
import RecentWork from "@/components/RecentWork";
import Skills from "@/components/Skills";

const Page = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This will only run on the client
  }, []);

  if (!isClient) {
    return null; // Do not render anything on the server
  }

  return (
    <div className="bg-[#0b0e0f]">
      <NavBar />
      <HeroBanner />
      <div className="max-w-7xl mx-auto px-5">
        <About />
        <RecentWork />
        <Skills />
        <Experience />
        <Education />
        <IconsBackground />
      </div>
    </div>
  );
};

export default Page;
