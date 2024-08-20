import "../App.css";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import myImg from "../assets/logo.svg";
export default function Header() {
  const [isMenuopen, setisMenuOpen] = useState(false);
  return (
    <div className="header flex justify-between items-center py-4">
      <div
        className="menu-toggle"
        onClick={() => {
          setisMenuOpen(!isMenuopen);
        }}
      >
        <div className="cursor-pointer relative z-40">
          <span
            className="block w-10 h-1 rounded-xl mb-1 bg-black transition duration-main-transition ease-main-transition"
            style={{
              transitionProperty : 'all',
              width: isMenuopen ? '0px' : '2.25rem',
              opacity: isMenuopen ? "0" : "1",
            }}
            ></span>
          <span className="block w-6 h-1 rounded-xl bg-black duration-main-transition ease-main-transition"
          style={{
            transitionProperty : 'all',
            width:  isMenuopen ? '2.25rem ' : '1.5rem',
          }}
          ></span>
          <span
            className="block w-12 h-1 rounded-xl my-1 bg-black transition duration-main-transition ease-main-transition"
            style={{
              transitionProperty : 'all',
              width: isMenuopen ? '0px' : '2.25rem',
              opacity: isMenuopen ? "0" : "1",
            }}
          ></span>
        </div>
        <div className="fixed w-full h-full bg-gray-300 left-0 top-0 z-10">
          <ul className="w-full h-full flex justify-center items-start pl-32 gap-20 flex-col text-5xl">
            <li>
              <NavLink to="./">Home</NavLink>
            </li>
            <li>
              <NavLink to="/collection">Collection</NavLink>
            </li>
            <li>
              <NavLink to="/new">New</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <img src={myImg} alt="" />
      <div className="flex gap-5 justify-center items-center">
        <ion-icon name="heart-outline"></ion-icon>

        <ion-icon name="cart-outline"></ion-icon>

        <ion-icon name="person-outline"></ion-icon>
      </div>
    </div>
  );
}
