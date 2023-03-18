import Hero from "../components/layouts/home/Hero";
import Layanan from "../components/layouts/home/Layanan";
import MainLayout from "../components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Layanan />
    </MainLayout>
  );
}
