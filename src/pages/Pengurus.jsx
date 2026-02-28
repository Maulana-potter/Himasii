import React from "react";
import PageHeader from "../components/PageHeader";
import PengurusSection from "../sections/PengurusSection";
const Pengurus = () => {
  return (
    <>
      <PageHeader
        title="PENGURUS KAMI"
        description="Struktur pengurus HIMASI UMSU."
        parentPage="Home"
      />
      <PengurusSection />
    </>
  );
};

export default Pengurus;
