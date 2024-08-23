import bijama1 from "../../../assets/bijama-1.svg";
import bijama2 from "../../../assets/bijama-2.svg";
import bijama3 from "../../../assets/bijama-3.svg";
import bijama4 from "../../../assets/bijama-4.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./section.css";
import Slider from "react-slick";
export default function WeekUpdate() {
  var settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 4,
    autoplaySpeed: 2000,
    focusOnSelect: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
        <h2 className="text-5xl mb-10 font-extrabold lg:w-1/6 sm:w-full">
          NEW THIS WEEK <sub className="text-blue-500">(4)</sub>
        </h2>
        <div>
          <Slider {...settings}>
            {images.map((item, index) => (
              <div key={index} className="">
                <div className="mx-5">
                  <div className="shopcontainer transition-all ease-main-transition-all duration-main-transition flex relative flex-col items-center  justify-center overflow-hidden cursor-pointer">
                    <img src={item} alt="" className="w-full" />
                    <div className="shop absolute w-full h-full flex justify-center gap-2 items-center transition-all ease-main-transition duration-main-transition text-black rounded-sm  bg-gray-200 z-20">
                      <span className="text-4xl">
                        <ion-icon name="heart-outline"></ion-icon>
                      </span>
                      <span className="text-4xl">
                        <ion-icon name="cart-outline"></ion-icon>
                      </span>
                    </div>
                  </div>
                  <div className="flex mt-2 sm:flex-col sm:text-center font-bold justify-between items-center">
                    <h3 className="sm:text-sm">{titles[index]}</h3>
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
