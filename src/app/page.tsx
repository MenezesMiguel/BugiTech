import Header from "../components/header";
import Footer from "../components/footer";
import PromoWall from "../components/promoWall";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] h-[100vh]">
      <Header />
      <PromoWall />
      <Footer />
    </div>
  );
}