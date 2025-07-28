import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Documents from "@/components/Documents";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Pluses from "@/components/Pluses";

export default function Home() {
  return (
    <>
      <Header />
      <Pluses />
      <About />
      <Documents />
      <Contacts />
      <Feedback />
      <Footer />
    </>
  );
}
