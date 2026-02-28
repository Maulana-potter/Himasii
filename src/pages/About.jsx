import PageHeader from "../components/PageHeader";
import AboutSection from "../sections/AboutSection";

const About = () => {
  return (
    <>
      <PageHeader
        title="TENTANG KAMI"
        description="Mengenal lebih dekat visi, misi, dan sejarah perjuangan HIMASI UMSU."
        parentPage="Home"
      />
      <AboutSection />
    </>
  );
};

export default About;
