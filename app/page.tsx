import Hero from "@/components/Hero";
import Approach from "@/components/ui/Approach";
import Experience from "@/components/ui/Experience";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Footer from "@/components/ui/Footer";
import Grid from "@/components/ui/Grid";
import RecentProject from "@/components/ui/RecentProject";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
        <RecentProject />
        <Experience />
        <Approach />
        <Footer />
        <FloatingNav navItems={navItems} />
      </div>
    </main>
  );
}
