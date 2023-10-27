import { useRef } from "react";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Service from "./pages/Service";
import ShowReel from "./pages/ShowReel";
import Team from "./pages/Team";
import Navigation from "./ui/Navigation";
import Footer from "./ui/Footer";

export default function App() {
  const homeRef = useRef(null);
  const serviceRef = useRef(null);
  const showreelRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Navigation
        refs={{
          service: serviceRef,
          showreel: showreelRef,
          team: teamRef,
          contact: contactRef,
          home: homeRef,
        }}
      />
      <Home
        ref={homeRef}
        elements={{
          service: serviceRef,
          showreel: showreelRef,
          team: teamRef,
          contact: contactRef,
          home: homeRef,
        }}
      />
      <Service ref={serviceRef} />
      <ShowReel ref={showreelRef} />
      <Team ref={teamRef} />
      <Contact ref={contactRef} />
      <Footer homeRef={homeRef} />
    </>
  );
}
