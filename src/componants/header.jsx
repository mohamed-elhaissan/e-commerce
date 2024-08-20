import "../App.css";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { NavLink } from "react-router-dom";
import myImg from "../assets/logo.svg";
export default function Header() {
  const [isMenuopen, setisMenuOpen] = useState(false);
  const container = useRef();
  const timeLine = useRef();
  useGSAP(
    () => {
      gsap.set(".links-item", {
        x : -100,
        opacity: 0,
      });
      gsap.set(".links-section", {
        y: "-100%",
      });
      timeLine.current = gsap
        .timeline({
          paused: true,
        })
        .to(".links-section", {
          duration: 1,
          y: "0%",
          ease: "power4.inOut",
        })
        .to(".links-item", {
          opacity: 1,
          x : 0,
          ease: "power4.inOut",
        });
    },
    {
      scope: container,
    }
  );
  useEffect(() => {
    if (isMenuopen) {
      timeLine.current.play();
    } else {
      timeLine.current.reverse();
    }
  }, [isMenuopen]);
  return (
    <div
      className="header flex justify-between items-center py-4"
      ref={container}
    >
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
              transitionProperty: "all",
              width: isMenuopen ? "0px" : "2.25rem",
              opacity: isMenuopen ? "0" : "1",
            }}
          ></span>
          <span
            className="block w-6 h-1 rounded-xl bg-black duration-main-transition ease-main-transition"
            style={{
              transitionProperty: "all",
              width: isMenuopen ? "2.25rem " : "1.5rem",
            }}
          ></span>
          <span
            className="block w-12 h-1 rounded-xl my-1 bg-black transition duration-main-transition ease-main-transition"
            style={{
              transitionProperty: "all",
              width: isMenuopen ? "0px" : "0.50rem",
              opacity: isMenuopen ? "0" : "1",
            }}
          ></span>
        </div>
        <div className="links-section fixed w-full h-full bg-gray-300 left-0 top-0 z-10">
          <ul className="w-full h-full flex justify-center items-start pl-32 gap-20 flex-col text-5xl">
            <li>
              <NavLink
                to="./"
                className="links-item relative hover:text-gray-500"
              >
                Home <sup className="text-gray-800">(01)</sup>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/collection"
                className="links-item relative hover:text-gray-500"
              >
                Collection <sub className="text-gray-800">(02)</sub>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/new"
                className="links-item relative hover:text-gray-500"
              >
                New <sup className="text-gray-800">(03)</sup>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <img src={myImg} alt="" className="z-50" />
      <div className="flex gap-5 justify-center items-center">
        <ion-icon name="heart-outline"></ion-icon>

        <ion-icon name="cart-outline"></ion-icon>

        <ion-icon name="person-outline"></ion-icon>
      </div>
    </div>
  );
}
