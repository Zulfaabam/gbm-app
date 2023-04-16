import Artikel from "components/layouts/home/Artikel";
import Hero from "components/layouts/home/Hero";
import InformasiKesehatan from "components/layouts/home/InformasiKesehatan";
import Layanan from "components/layouts/home/Layanan";
import Testimoni from "components/layouts/home/Testimoni";
import MainLayout from "components/layouts/MainLayout";
import { AuthContext } from "context/AuthContext";
import { useContext, useEffect } from "react";

export default function Home() {
  const user = useContext(AuthContext);

  return (
    <MainLayout>
      <Hero />
      <Layanan />
      <InformasiKesehatan />
      <Artikel />
      <Testimoni />
    </MainLayout>
  );
}
