import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { DesignProcess } from "@/components/DesignProcess";
import { DesignSkills } from "@/components/DesignSkills";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { SelectedWork } from "@/components/SelectedWork";
import { Services } from "@/components/Services";
import { TechnicalSkills } from "@/components/TechnicalSkills";
import { Testimonials } from "@/components/Testimonials";
import { WhyHireMe } from "@/components/WhyHireMe";
import { resume } from "@/data/resume";

export default function Home() {
  const {
    personal,
    about,
    experience,
    figmaSkills,
    technicalSkills,
    certifications,
    workingStyle,
  } = resume;

  return (
    <>
      <Header personal={personal} />
      <main>
        <Hero personal={personal} />
        <Marquee />
        <Services />
        <About about={about} workingStyle={workingStyle} />
        <WhyHireMe personal={personal} />
        <SelectedWork />
        <Experience experience={experience} />
        <DesignProcess />
        <DesignSkills figmaSkills={figmaSkills} />
        <TechnicalSkills technicalSkills={technicalSkills} />
        <Testimonials />
        <Contact personal={personal} certifications={certifications} />
      </main>
      <Footer />
    </>
  );
}
