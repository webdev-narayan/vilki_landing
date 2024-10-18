import tab from "../assets/weoffer/tab.png"
import iphone from "../assets/weoffer/iphone.png"
import offerIcon from "../assets/weoffer/offer-icon.svg"
import offerCheck from "../assets/weoffer/check.svg"

import { ButtonSm } from "./ui/Button"
import { FaGooglePlay } from "react-icons/fa"

const data = [
  {
    title: "Vilki Billing Software",
    lists: ["It ensures accuracy & efficiency in every billing process, revolutionizing  your business finances. ",
      "Simplify your billing cycle and empower informed decisions with our user friendly billing solution."
    ],
    button: "Get Started",
    link: "tel:+917509095550",
    icon: "",
    image: tab
  },
  {
    title: "Vilki Mobile App",
    lists: ["Our user-friendly Android & iOS app empowers seamless product selection &order placement, transforming the shopping experience.",
      "Stay ahead in mobile commerce with our intuitive app. Streamline the entire purchasing process for a frictionless experience."
    ],
    button: "Get the App",
    link: "tel:+917509095550",
    icon: <FaGooglePlay />,
    image: iphone
  },
]

export default function WhatDoWeOffer() {
  return (
    <>
      <div id="products" className="w-full bg-white md:py-20 py-8 md:px-0 px-4 ">
        <div className="c-container mx-auto flex flex-col gap-16">
          <div className="flex gap-3 flex-col w-full ">
            <div className="flex items-center gap-2 rounded-full bg-[#f2f2f2] md:py-2 md:px-4 py-1 px-2 text-sm md:text-base w-fit text-primary"><img src={offerIcon} alt="" /> Our Products</div>
            <h3 className="text-primary lg:text-[52px] hidden md:block font-semibold ">What do we offer ?</h3>
            <h3 className="text-primary md:hidden text-3xl">What do we offer ?</h3>
            <p className="text-primary font-light">Reach your goals  your whay with features designed for the fastets, most<br />fun way to learn a language.</p>
          </div>
          <div className="grid md:grid-cols-2  gap-8">
            {data.map((item, index) => {
              return <div key={index} className={`offer-card border pt-8 px-8 border-[#B3E7FB] rounded-[20px] ${item.classes} overflow-hidden flex flex-col gap-8`}>
                <div className={`text-primary flex flex-col gap-6`}>
                  <h4 className={`text-[32px]  font-medium `}>{item.title}</h4>
                  {item.lists.map((list, i) => (<p
                    key={i}
                    className="flex gap-2 items-start font-medium">
                    <img src={offerCheck} alt="" />
                    {list}
                  </p>))
                  }
                </div>
                <ButtonSm text={item.button} href={item.link} className={"px-[20px] py-[10px] text-base w-fit text-white"} Icon={item.icon} />
                <img src={item.image} className={`border-[#B3E7FB]`} />
              </div>;
            })}

          </div>
        </div>
      </div>

      {/* <div className="bg-gray-100 px-4 py-8 sm:px-6 sm:py-12 lg:px-28 lg:py-16 flex flex-col gap-8">
      <div className="w-full mb-16">
        <h2 className="text-3xl font-bold sm:text-4xl text-center">
          What do we offer ?
        </h2>
      </div>

      <section className="overflow-hidden sm:grid sm:grid-cols-2 bg-white rounded-xl">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-start ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Billing System
            </h2>

            <p className=" text-gray-500 md:mt-4 my-4 sm:my-0">
              It ensures accuracy & efficiency in every billing
              process,revolutionizing your business finances.
            </p>

            <p className=" text-gray-500 md:mt-4 ">
              Simplify your billing cycle and empower informed decisions with
              our user friendly billing solution.
            </p>

            <div className="mt-4 md:mt-8">
              <a
                href="#"
                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>

        <img
          alt=""
          src={billing}
          className="h-56 w-full object-cover sm:h-full"
        />
      </section>

      <section className="overflow-hidden sm:grid sm:grid-cols-2 bg-white rounded-xl">
        <img
          alt=""
          src={app_image}
          className="h-56 w-full object-cover sm:h-full"
        />

        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-start ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Medicart Application
            </h2>

            <p className=" text-gray-500 md:mt-4 my-4 sm:my-0">
              Our user-friendly Android & iOS app empowers seamless product
              selection &order placement, transforming the shopping experience.
            </p>

            <p className=" text-gray-500 md:mt-4 ">
              Stay ahead in mobile commerce with our intuitive app. Streamline
              the entire purchasing process for a frictionless experience.
            </p>

            <div className="mt-4 md:mt-8">
              <a
                href="#"
                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </div> */}
    </>
  );
}