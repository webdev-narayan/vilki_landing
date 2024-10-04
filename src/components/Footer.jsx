import logo from "../assets/logo-vilki.png";
import { FaEnvelope, FaInstagram, FaPhoneAlt, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {

  return (
    <>
      <footer className="bg-primary text-white">
        <div className="mx-auto c-container px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="flex flex-col md:flex-row justify-between w-full gap-8">

            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex justify-center text-teal-600 sm:justify-start">
                <img src={logo} alt="logo" className="h-20 bg-white p-4 rounded-lg" />
              </div>

              <p className="mt-6 md:max-w-md text-center leading-relaxed text-gray-300 sm:max-w-xs sm:text-left w-full">
                Vilki Medicart is a user-friendly mobile app and billing software platform designed to streamline B2B <br />transactions for both retailers and wholesalers.
              </p>

              <div className="flex gap-4">
                <Link target="_blank" to={"https://www.instagram.com/vilkimedicart"} className="text-white bg-white/10 p-3 rounded-full grid place-items-center"><FaTwitter className="size-8" /></Link>
                <Link target="_blank" to={"https://x.com/vilkimedicart"} className="text-white bg-white/10 p-3 rounded-full grid place-items-center"><FaYoutube className="size-8" /></Link>
                <Link target="_blank" to={"https://www.youtube.com/channel/UCWv7BevpFyKI62Mb9QcMXCg"} className="text-white bg-white/10 p-3 rounded-full grid place-items-center"><FaInstagram className="size-8" /></Link>

              </div>
            </div>

            <div className="flex gap-8 md:flex-row flex-col">
              <div className=" flex flex-col items-start gap-3">
                <h4 className="text-[18px]">Contact Us</h4>
                <p className=" text-gray-400 text-base flex items-center gap-4"><FaPhoneAlt /> <span className="">+91-7509095550</span></p>
                <p className=" text-gray-400 text-base flex items-center gap-4"><FaEnvelope /> <span className="">vilkimedicart@gmail.com</span></p>
              </div>
              <div className="flex flex-col items-start gap-3">
                <h4 className="text-[18px]">Address</h4>
                <p className=" text-gray-400 text-base flex items-center gap-4"><FaLocationDot /> <span className="">Plot No. 3557, Regarpura Pusa road, near Khalsa<br />collage Karolbagh, New Delhi - 110005</span> </p>
                <p className=" text-gray-400 text-base flex items-center gap-4"><FaLocationDot /> <span className="">410 Durga nagar, Nagar Nigam road, birgaon, <br />Raipur, Chhattisgarh - 493221</span> </p>
              </div>

            </div>

          </div>


        </div>

        <div className="mt-12 c-container border-t border-gray-100 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500">
              <span className="block sm:inline">
                Design & Developed by Techkaka 💻{" "}
              </span>
            </p>

            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
              &copy; 2024 Vilki. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}