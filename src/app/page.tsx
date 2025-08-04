import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Documents from "@/components/Documents";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LazySection from "@/components/LazySection/LazySection";
import Pluses from "@/components/Pluses";

export default function Home() {
  return (
    <>
      <Hero />
      <Pluses />
      <LazySection>
        <About />
      </LazySection>
      <LazySection>
        <Documents />
      </LazySection>
      <LazySection>
        <Contacts />
      </LazySection>
      <Footer />
    </>
  );
}
