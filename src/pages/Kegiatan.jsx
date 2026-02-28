import PageHeader from "../components/PageHeader";
import KegiatanSection from "../sections/KegiatanSection";
const Kegiatan = () => {
  return (
    <>
      <PageHeader
        title="KEGIATAN KAMI"
        description="Menyajikan berbagai kegiatan yang dilaksanakan oleh HIMASI UMSU."
        parentPage="Home"
      />
      <KegiatanSection />
    </>
  );
};

export default Kegiatan;
