import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import { Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import profilePhoto from "../../../public/headshot.jpg";
import { AuroraBackground } from "../ui/aurora-background";
export default function Hero() {
  return (
    <section
      id="home"
      className="flex items-center min-h-screen justify-center lg:justify-start sticky top-0 "
    >
      <AuroraBackground
        className="absolute inset-0 -z-10"
        showRadialGradient={true}
      />

      <div className="flex flex-col justify-center items-center md:flex-row gap-6 md:gap-8 lg:gap-12  lg:px-[15%]  content-center  ">
        <Image
          src={profilePhoto}
          alt="Profile Photo"
          className="rounded-full opacity-90 shadow-orange/50 duration-75 hover:scale-105 hover:transform hover:opacity-50 hover:shadow-2xl"
          width={300}
          height={400}
          quality={70}
          loading="eager"
          priority={true}
        />

        <div className="flex-col flex  justify-center">
          <div className="flex-row  justify-center md:justify-start flex gap-4 order-last md:order-first pt-5 md:pt-0">
            <Link
              href="https://github.com/house-open"
              target="_blank"
              className="social-link"
              aria-label="Visit my GitHub profile"
            >
              <Image
                src={GithubIcon}
                alt="GitHub"
                className="invert-0 dark:invert transition-all duration-300"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://linkedin.com/in/liu-ming-87b067396"
              target="_blank"
              className="social-link"
              aria-label="Visit my LinkedIn profile"
            >
              <Image
                src={LinkedinIcon}
                alt="LinkedIn"
                className="invert-0 dark:invert transition-all duration-300"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="mailto:liumingopen@gmail.com"
              target="_blank"
              className="social-link"
              aria-label="Send me an email"
            >
              <Mail width={24} height={24} />
            </Link>
          </div>
          <h1 className="text-7xl md:pt-4 lg:pt-8 font-serif text-center md:text-left  text-primary">
            <span>Liu</span> {/* Add a space for the inline view */}
            <span className="block lg:inline text-primary">Ming</span>
          </h1>
          <p className="font-serif text-xl pt-4 lg:pt-9 text-muted-foreground">
            Senior Software Engineer | Full Stack Developer
          </p>
        </div>
      </div>
    </section>
  );
}
