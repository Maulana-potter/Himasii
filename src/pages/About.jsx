import PageHeader from "../components/PageHeader";
import IdentitySection from "../sections/IdentitySection";
import FilosofiSection from "../sections/FilosofiSection";
import CTASection from "../sections/CTASection";

const About = () => {
  return (
    <>
      <PageHeader
        title="TENTANG KAMI"
        description="Mengenal lebih dekat visi, misi, dan sejarah perjuangan HIMASI UMSU."
        parentPage="Home"
      />
      <IdentitySection />
      <FilosofiSection />
      <CTASection />
    </>
  );
};

export default About;
