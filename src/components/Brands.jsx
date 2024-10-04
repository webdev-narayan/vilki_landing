// import b1 from "../assets/phbrands/1.webp";
// import b2 from "../assets/phbrands/2.webp";
// import b3 from "../assets/phbrands/3.webp";
// import b4 from "../assets/phbrands/4.webp";
// import b5 from "../assets/phbrands/5.webp";
// import b6 from "../assets/phbrands/6.webp";

import { FaPenNib } from "react-icons/fa";
import mainImage from "../assets/brand-deal.svg";

export default function Brands() {

  return (
    <div className="w-fullbg-white md:p-20 py-8 px-4 text-center md:px-0">
      <div className="c-container mx-auto flex flex-col gap-16">
        <div className="flex gap-3 flex-col w-full items-center z-10 ">
          <div className="flex items-center gap-2 rounded-full bg-[#f2f2f2] md:py-2 md:px-4 py-1 px-2 text-sm md:text-base w-fit text-primary"><FaPenNib />  Brands</div>
          <h3 className="text-primary text-[52px] hidden md:block font-semibold">Brands We Deal With</h3>
          <h3 className="text-primary text-3xl md:hidden font-semibold">Brands We Deal With</h3>
          <p className="text-primary font-light">We Unlock The True Potential Of Your Business</p>
        </div>
        <img src={mainImage} className="md:-mt-[400px] -mt-[40%] z-0" />
      </div>
    </div>
  );
}