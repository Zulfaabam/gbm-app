import Artikel from "components/layouts/home/Artikel";
import Hero from "components/layouts/home/Hero";
import Layanan from "components/layouts/home/Layanan";
import Testimoni from "components/layouts/home/Testimoni";
import MainLayout from "components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Layanan />
      <Artikel />
      <Testimoni />
    </MainLayout>
  );
}
