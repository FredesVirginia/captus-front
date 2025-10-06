import { Footer, MainHeader, MainSection, PresentationMain } from "../components";
import MainFloors from "../components/MainFloors";

export default function Home() {
  return (
    <div>
      <MainHeader />
      <PresentationMain />
      <MainFloors />
      <Footer />
    </div>
  );
}
