import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className="mt-32 bg-gray-200 text-center p-52" >
        <h2 className="text-6xl font-extrabold">
          <span className="text-gray-500">XV</span>XIVQR
        </h2>
        <div className=" flex justify-center items-center gap-5">
            <Link to='https://github.com/mohamed-elhaissan' className="text-2xl"><ion-icon name="logo-github"></ion-icon></Link>
            <Link to='https://www.instagram.com/mohamed_elhaissan/'  className="text-2xl"><ion-icon name="logo-instagram"></ion-icon></Link>
        </div>
      </div>
    </>
  );
}
