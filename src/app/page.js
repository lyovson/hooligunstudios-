import Image from "next/image";

import About from "../components/About.js";
import Crew from "../components/Crew.js";
import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import Latest from "../components/Latest.js";

export default function Home() {
  return (
    <main className="mx-auto  flex max-w-[1200px] flex-col  ">
      <Header />

      <About />
      <Latest />
      <Crew />
      <Footer />
    </main>
  );
}
