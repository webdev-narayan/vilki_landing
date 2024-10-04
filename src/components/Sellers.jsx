import logo1 from "../assets/seller/logo-1.webp";
import logo2 from "../assets/seller/logo-2.webp";
import logo3 from "../assets/seller/logo-3.webp";
import logo4 from "../assets/seller/logo-4.webp";
import logo5 from "../assets/seller/logo-5.webp";
import logo6 from "../assets/seller/logo-6.webp";

import cover1 from "../assets/seller/cover-1.webp";
import cover2 from "../assets/seller/cover-2.webp";
import cover3 from "../assets/seller/cover-3.webp";
import cover4 from "../assets/seller/cover-4.webp";
import cover5 from "../assets/seller/cover-5.webp";
import cover6 from "../assets/seller/cover-6.webp";

import seller from "../assets/seller/seller.svg";
const medicalShops = [
  {
    name: "Swasthya Pharma",
    address: "Raipur, Chhattisgarh",
    logo: logo1,
    cover: cover1,
  },
  {
    name: "Arogya Medico",
    address: "Bilaspur, Chhattisgarh",
    logo: logo2,
    cover: cover2,
  },
  {
    name: "HealthCure Pharmacy",
    address: "Durg, Chhattisgarh",
    logo: logo3,
    cover: cover3,
  },
  {
    name: "Sanjeevani Medicals",
    address: "Korba, Chhattisgarh",
    logo: logo4,
    cover: cover4,
  },
  {
    name: "AyuCare Chemist",
    address: "Bhilai, Chhattisgarh",
    logo: logo5,
    cover: cover5,
  },
  {
    name: "Shakti Pharma",
    address: "Rajnandgaon, Chhattisgarh",
    logo: logo6,
    cover: cover6,
  },
];

export default function Sellers() {

  return (
    <div className="w-full bg-white md:py-20 py-8 px-4 md:px-0">
      <div className="c-container mx-auto flex flex-col gap-16">
        <div className="flex gap-3 flex-col w-full ">
          <div className="flex items-center gap-2 rounded-full bg-[#f2f2f2] md:py-2 md:px-4 py-1 px-2 text-sm md:text-base w-fit text-primary"><img src={seller} alt="" /> Our Sellers</div>
          <h3 className="text-primary md:text-[52px] hidden md:block font-semibold">Our Precious Sellers</h3>
          <h3 className="text-primary md:hidden text-3xl font-semibold">Our Precious Sellers</h3>
          <p className="text-primary font-light">We Unlock The True Potential Of Your Business</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {medicalShops.map((item, index) => {
            return <div key={index} className={`feature-card border border-[#B3E7FB] rounded-[16px] overflow-hidden`}>
              <img src={item.cover} className={` border-[#B3E7FB] w-full h-[200px] object-cover`} />
              <div className={`text-primary p-6 flex items-center gap-4`}>
                <img src={item.logo} className="rounded-full w-[55px] h-[55px] object-cover border border-[#B3E7FB]" />
                <div>
                  <h4 className={`text-[24px] font-medium`}>{item.name}</h4>
                  <p className="text-gray-500 text-[14px]">{item.address}</p>
                </div>
              </div>
            </div>;
          })}

        </div>
      </div>
    </div>
  );
}

