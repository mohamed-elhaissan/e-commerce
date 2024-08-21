import img1 from "../../../assets/design-1.svg";
import img2 from "../../../assets/design-2.svg";
import img3 from "../../../assets/design-3.svg";
import img4 from "../../../assets/design-4.svg";
export default function Fashion() {
  return (
    <>
      <div className="mt-32">
        <div className="text-center flex justify-center items-center flex-col">
          <h2 className="text-5xl font-extrabold">
            Our Approach to fashion design
          </h2>
          <p className="text-sm w-1/3 mt-2 text-center">
            at elegant vogue , we blend creativity with craftsmanship to create
            fashion that transcends trends and stands the test of time each
            design is meticulously crafted, ensuring the highest quelity
            exqulsite finish
          </p>
        </div>
        <div className="flex justify-evenly  mt-10 items-center flex-wrap">
          <img
            src={img1}
            alt=""
            className="mb-5"
            style={{
              boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
            }}
          />
          <img
            src={img2}
            alt=""
            className="mt-10"
            style={{
              boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
            }}
          />
          <img src={img3} alt="" />
          <img src={img4} alt="" className="mt-10" />
        </div>
      </div>
    </>
  );
}
