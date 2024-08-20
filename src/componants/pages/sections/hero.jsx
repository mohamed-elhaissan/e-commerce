import search from "../../../assets/search.svg";
import arrow from "../../../assets/arrow.svg";
import item_1 from "../../../assets/item-1.svg";
import item_2 from "../../../assets/item-2.svg";
import { NavLink } from "react-router-dom";
export default function Hero() {
  return (
    <>
      <div className="mt-20  flex flex-col">
        <div>
          <h2 className="text-base">MEN</h2>
          <h2 className="text-base">WOMEN</h2>
          <h2 className="text-base">KIDS</h2>
        </div>
        <span className=" mt-5 bg-secondary transition duration-main-transition ease-main-transition py-4 cursor-pointer  w-1/4 flex items-center gap-5 justify-start rounder-sm  px-10">
          <img src={search} alt="" />
          <input
            type="text"
            className="bg-transparent outline-none border-none "
            placeholder="Search..."
          />
        </span>
      </div>
      <div className="flex mt-10  gap-10">
        <div className="flex flex-col justify-between items-center">
          <div>
            <h2 className="text-5xl font-extrabold mb-3	 w-1/2 text-primary">NEW COLLECTION</h2>
            <p>
              Summer <sup>2024</sup>
            </p>
          </div>
          <div>
            <NavLink to="NotFound.jsx" className="flex items-center py-2 px-5 gap-5 bg-secondary">
                Go To Shop
              <img src={arrow} alt="" />
            </NavLink>
            
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
            <img src={item_1} alt=""/>
            <img src={item_2} alt=""/>
        </div>
      </div>
    </>
  );
}
