import image1 from "../../../assets/colllection-1.svg";
import image2 from "../../../assets/colllection-2.svg";
import image3 from "../../../assets/colllection-3.svg";
export default function Collections() {
  const imgs = [image1, image2, image3];
  const titles = [
    "Basic Heavy Weight T-shirt",
    "Soft Wash straight Fit Jeans",
    "Basic Heavy Weight T-shirt",
  ];
  return (
    <>
      <div className="mt-32">
        <h2 className="text-5xl mb-10 font-extrabold w-1/6">
          XIV COLLECTIONS 23-24 <sup className="text-blue-500">(04)</sup>
        </h2>
        <div className="flex gap-5">
          <h3 className="font-bold">
            ALL <sup>(03)</sup>
          </h3>
          <h3>
            MEN <sup>(03)</sup>
          </h3>
          <h3>
            WOMEN <sup>(00)</sup>
          </h3>
          <h3>
            KIDS <sup>(00)</sup>
          </h3>
        </div>
        <div className="flex justify-between flex-wrap mt-10 ">
          {imgs.map((item, index) => (
            <div key={index}>
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
              <div className="flex justify-evenly mt-2 font-extrabold">
                <h2>{titles[index]}</h2>
                <p>$199</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
