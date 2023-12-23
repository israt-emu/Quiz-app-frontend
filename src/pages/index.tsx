import MainLayout from "@/layouts/MainLayout";
import Banner from "@/components/home/Banner";
import Supports from "@/components/home/Supports";

export default function Home() {
  return (
    <MainLayout>
      <Banner />
      <Supports />
    </MainLayout>
  );
}
