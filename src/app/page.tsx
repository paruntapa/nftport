import { InfiniteScroll } from "@/components/infiniteScroll";
import MenuBar from "@/components/menuBar";
import HudOverlay from "@/components/hudOverlay";
import Hero from "@/components/hero";
import NeftSec from "@/components/neftSec";
import Footer from "@/components/footer";

export default function Home() {

  
  return (
    <>
    <div className="relative min-h-screen  overflow-hidden bg-horizon">
      <MenuBar/>
      <Hero/>
      <HudOverlay/>
    </div>
      <InfiniteScroll/>
      <NeftSec/>
      <Footer />
    </>
  );
}
