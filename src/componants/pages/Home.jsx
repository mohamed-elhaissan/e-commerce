import Hero from "../pages/sections/hero";
import WeekUpdate from "../pages/sections/Week";
import Collections from "./sections/collections";
import Fashion from "./sections/fashionDesign";
import Footer from "./sections/footer";
export default function Home() {
  return (
    <div>
      <Hero />
      <WeekUpdate />
      <Collections />
      <Fashion />
      <Footer/>
    </div>
  );
}
