import PageHeader from "../components/PageHeader";
import GallerySection from "../sections/GallerySection";

const Gallery = () => {
  return (
    <>
      <PageHeader
        title="Gallery"
        description="Menyajikan berbagai kegiatan yang dilaksanakan oleh HIMASI UMSU."
        parentPage="Home"
      />
      <GallerySection />
    </>
  );
};

export default Gallery;
