"use client";

import { navItems } from "@/data/navItems";

import {
  Hero,
  Grid,
  Footer,
  Clients,
  Approach,
  Experience,
  RecentProjects,
} from "@/components/sections";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        {/* <Clients /> */}
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
