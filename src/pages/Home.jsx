import { Link } from "react-router-dom";
import Hero from "../sections/Hero";
import Pimpinan from "../sections/Pimpinan";
import Kegiatan from "../sections/Kegiatan";
// import Aspirasi from "../sections/Aspirasi";
import MomentSection from "../sections/MomentSection";
import WelcomeSection from "../sections/WelcomeSection";

const Home = () => {
  return (
    <>
      <Hero />
      <WelcomeSection />
      <Pimpinan />
      <MomentSection />
      <Kegiatan />
      {/* <Aspirasi /> */}
    </>
  );
};

export default Home;
