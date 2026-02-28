import { Link } from "react-router-dom";
import Hero from "../sections/Hero";
import Pimpinan from "../sections/Pimpinan";
import Kegiatan from "../sections/Kegiatan";
import Aspirasi from "../sections/Aspirasi";
const Home = () => {
  return (
    <>
      <Hero />
      <Pimpinan />
      <Kegiatan />
      <Aspirasi />
    </>
  );
};

export default Home;
