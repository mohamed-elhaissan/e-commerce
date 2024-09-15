import img1 from "../../assets/items1.svg";
import img2 from "../../assets/items2.svg";
import img3 from "../../assets/items3.svg";
import img4 from "../../assets/items4.svg";
import img7 from "../../assets/items7.svg";
import img8 from "../../assets/items8.svg";
import img9 from "../../assets/items9.svg";
import search from "../../assets/search.svg";
export default function Collection() {
  const imgs = [img1, img2, img3, img4,img7,img8,img9];
  return (
    <div>
      <p className="text-sm opacity-40">COLLECTIONS</p>
      <h2 className="text-5xl mt-10 font-extrabold">PROUDUCTS</h2>
      <div>
        <span className=" mt-5  mb-10 bg-secondary transition duration-main-transition ease-main-transition py-4 cursor-pointer  w-1/4 flex items-center gap-5 justify-start rounder-sm  px-10">
          <img src={search} alt="" />
          <input
            type="text"
            className="bg-transparent outline-none border-none "
            placeholder="Search..."
          />
        </span>
      </div>
      <h3 className="py-2 px-16 bg-gray-200 border-gray-400 border-solid border-1 inline mb-20">NEW</h3>
      <div className="flex flex-wrap justify-evenly items-center">
        {imgs.map((item, index) => (
          <div key={index}>
            <img src={item} alt="" className="m-5 cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
}
