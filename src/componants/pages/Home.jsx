import Hero from "../pages/sections/hero";
import WeekUpdate from "../pages/sections/Week";
import Collections from "./sections/collections";
import Fashion from "./sections/fashionDesign";
export default function Home() {
  return (
    <div>
      <Hero />
      <WeekUpdate />
      <Collections />
      <Fashion />
    </div>
  );
}
