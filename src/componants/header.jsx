import "../App.css";
import { NavLink } from "react-router-dom";
import myImg from "../assets/logo.svg";
export default function Header() {
  return (
    <div className="header flex justify-between items-center py-4">
      <div className="menu-toggle">
        <div className="cursor-pointer">
          <span className="block w-10 h-1 rounded-xl mb-1 bg-black"></span>
          <span className="block w-6 h-1 rounded-xl bg-black"></span>
          <span className="block w-12 h-1 rounded-xl my-1 bg-black"></span>
        </div>
        <div>
          <ul>
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
