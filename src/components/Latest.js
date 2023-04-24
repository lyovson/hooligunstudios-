import { faImdb } from "@fortawesome/free-brands-svg-icons";
import { faSafari } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import localFont from "next/font/local";
import Image from "next/image";

import Border from "./Border.jsx";
import Video from "./Video.jsx";

const berg = localFont({ src: "../../public/berg.ttf" });

export default function Latest() {
  return (
    <section
      style={{
        backgroundImage: "url(/latest-bckg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative flex flex-col items-center gap-4  p-8 pb-20 lg:px-20"
    >
      <section className="  flex flex-col items-center justify-between gap-4 md:flex-row md:items-start">
        <Image
          src={"/posternew.jpg"}
          alt={"OTTK film logo"}
          width="400"
          height="400"
          className="  rounded-xl shadow-md md:-ml-2 md:-mt-2 md:w-[35%]"
        />

        <article className="flex flex-col  gap-4">
          <h2 className={` ${berg.className} py-4  text-left  text-3xl`}>
            OTTK:
          </h2>
          <article className="">
            <p>
              {`Our first project, the OTTK, is a wild ride that should not be missed, and it proved to be a genuine wild card. It is about one night in the life of a grated businessman who got bamboozled by his partner (who hasn't been at least once in a lifetime?). But this guy is determined to get back what’s his. To that end, he hires an all-Armenian heist team of professionals from all over the world. That might sound like a recipe for success, right? But wait, it gets better. These guys speak different Armenian dialects and don't understand each other a bit in addition to their cultural differences. Evidently, that inconvenience leads to some hilarious and awkward situations. OTTK is a black comedy with as much action as we could afford and unrestricted creativity of the authors. We put heart, brain, and muscle into this movie to make it watchable even in 20 years. And the reviews so far are more than inspiring. We did this project with all we had, and it is giving us heartening feedback. You should watch it. We can't promise everybody the same thrill, but those who have already seen it advise not to drink all daily intake of water before watching it.`}
            </p>
          </article>
          <footer className="  className={`max-w-`} flex justify-center gap-4 py-4 md:order-2 md:justify-start">
            <a
              className="flex gap-2 rounded-lg border-2 border-[#bab49e] p-2 shadow-md "
              href="https://ottkfilm.com"
              target="_blank"
            >
              <FontAwesomeIcon icon={faSafari} className="h-6 w-6 " />
              Official Website
            </a>
            <a
              className="flex gap-2 rounded-lg border-2 border-[#bab49e] p-2 shadow-md"
              href="https://www.imdb.com/title/tt27466882/?ref_=fn_al_tt_1"
              target="_blank"
            >
              <FontAwesomeIcon icon={faImdb} className="h-6 w-6 " />
              IMDB Page
            </a>
          </footer>
        </article>
      </section>

      <section className=" grid w-full  grid-cols-1 gap-8 md:grid-cols-2 ">
        <Video
          className={` `}
          videoId={"UaP1C6Wuf9o"}
          title={"Official Trailer"}
          info={
            "You won’t get much plot from the trailer, but it’ll certainly intrigue you."
          }
        />

        <Video
          className={``}
          videoId={"db1zcLX-GQI"}
          title={"OTTK Yerevan Premiere"}
          info={
            "We made it to the big screens. Finally. And let me tell you, we slayed."
          }
        />
        <Video
          className={` `}
          videoId={"rYmIC5VdQOg"}
          title={"Interview With Levon Beglaryan"}
          info={"Get to know our cast in a fun interview with Levon Beglaryan."}
        />
        <Video
          className={` `}
          videoId={"TfBm1bmpjXI"}
          title={"Karotilim From OTTK OST"}
          info={"Keep calm and plunge into the OTTK world with our soundtrack."}
        />
      </section>
      <Image
        src={"/border-short-header.svg"}
        alt={"Stylized border with a skull"}
        width="1200"
        height="50"
        className="absolute -bottom-12 z-10 mx-auto px-4   sm:-bottom-16 md:-bottom-20 lg:hidden"
      />
      <Image
        src={"/border-long-header.svg"}
        alt={"Stylized border with a skull"}
        width="1200"
        height="50"
        className="absolute -bottom-16 z-10 mx-auto hidden  px-4 lg:block"
      />
    </section>
  );
}
