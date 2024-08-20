import bijama1 from "../../../assets/bijama-1.svg";
import bijama2 from "../../../assets/bijama-2.svg";
import bijama3 from "../../../assets/bijama-3.svg";
import bijama4 from "../../../assets/bijama-4.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function WeekUpdate() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const images = [bijama1, bijama2, bijama3, bijama4];
  const titles = [
    "Embroidered Seersucker Shirt",
    "Basic Slim Fit T-Shirt",
    "Blurred Print T-Shirt",
    "Full Sleeve Zipper",
  ];
  return (
    <>
      <div className="mt-32">
        <h2 className="text-5xl mb-10 font-extrabold w-1/6">
          NEW THIS WEEK <sub className="text-blue-500">(4)</sub>
        </h2>
        <div>
            <Slider {...settings}>
          {images.map((item, index) => (
             <div key={index} className="flex flex-col items-center  justify-center ">
              <div className="mx-5">
              <img src={item} alt="" className="w-full"/>
              <div className="flex mt-2 font-bold justify-between items-center">
                <h3>{titles[index]}</h3>
                <span>99$</span>
              </div>
              </div>
            </div>
           
          ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
