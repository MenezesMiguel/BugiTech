import Header from "../components/header";
import Footer from "../components/footer";
import '../app/globals.css';

export default function Admin() {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] h-[100vh]">
      <Header />
      <div>ADMIIIIIN</div>
      <Footer />
    </div>
  );
}