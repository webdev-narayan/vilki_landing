import testimonial from "../assets/testimonials/testimonial.svg"
import amit from "../assets/testimonials/amit.png"
import anita from "../assets/testimonials/anita.png"
import meera from "../assets/testimonials/meera.png"
import priya from "../assets/testimonials/priya.png"
import rajesh from "../assets/testimonials/rajesh.png"
import ravi from "../assets/testimonials/ravi.png"
import sunita from "../assets/testimonials/sunita.png"
import suresh from "../assets/testimonials/suresh.png"
import vikram from "../assets/testimonials/vikram.png"
const reviews = [
  {
    name: "Amit Sharma",
    location: "Delhi, India",
    profile: amit,
    review: "The marketplace and accounting solutions transformed our pharmacy, saving time with ",
    tag: "easy-to-use inventory management."
  },
  {
    name: "Priya Patel",
    profile: priya,
    location: "Mumbai, India",
    review: "This solution simplified tracking and boosted sales with ",
    tag: "top-notch accounting and marketplace integration."
  },
  {
    name: "Ravi Kumar",
    profile: ravi,
    location: "Bangalore, India",
    review: "This software integrates seamlessly with our systems, making ",
    tag: "GST filing easy and tracking expenses a breeze. A must-have for pharmacies."
  },
  {
    name: "Sunita Verma",
    profile: sunita,
    location: "Jaipur, India",
    review: "I was skeptical, but this platform simplified managing ",
    tag: "my pharmacy's finances and boosted sales."
  },
  {
    name: "Rajesh Desai",
    profile: rajesh,
    location: "Ahmedabad, India",
    review: "This solution transformed our pharmacy with ",
    tag: "real-time inventory tracking and seamless invoicing, boosting efficiency."
  },
  {
    name: "Anita Iyer",
    profile: anita,
    location: "Chennai, India",
    review: "Managing a pharmacy is challenging, but this software simplifies billing and inventory management. ",
    tag: "The intuitive accounting tools save time, making it essential for my business."
  },
  {
    name: "Vikram Singh",
    profile: vikram,
    location: "Lucknow, India",
    review: "Comprehensive features simplify pharmacy management, ",
    tag: "marketplace integration boosts revenue."
  },
  {
    name: "Meera Nair",
    profile: meera,
    location: "Kochi, India",
    review: "This software has everything a pharmacy needs, streamlining sales tracking and ",
    tag: "account management while significantly expanding our customer base through its marketplace feature."
  },
  {
    name: "Suresh Reddy",
    profile: suresh,
    location: "Hyderabad, India",
    review: "Stands out for its ease of use, impressive ",
    tag: "accounting tools, and marketplace integration."
  },
];

export default function Testimonials() {

  return (
    <section id="testimonials" className="w-full bg-[#f4f4f7] md:py-20 py-8 px-4 md:px-0">
      <div className="c-container mx-auto flex flex-col gap-16">
        <div className="flex gap-3 flex-col w-full ">
          <div className="flex items-center gap-2 rounded-full bg-white md:py-2 md:px-4 py-1 px-2 text-sm md:text-base w-fit text-primary"><img src={testimonial} alt="" /> Testimonial</div>
          <h3 className="text-primary text-[52px] hidden md:block font-semibold">Our Customer Love us</h3>
          <h3 className="text-primary text-3xl md:block font-semibold">Our Customer Love us</h3>
          <p className="text-primary font-light">We Unlock The True Potential Of Your Business.</p>
        </div>
        <div className="grid md:grid-cols-3 grid-rows-2 gap-8">
          {reviews.map((item, index) => {
            return <div key={index} className={`bg-white border border-[#B3E7FB] rounded-[20px] p-8 flex flex-col justify-center `}>
              <div className={`text-primary flex gap-4 items-center`}>
                <img src={item.profile} />
                <div className="text-primary">
                  <p className={`text-[24px] font-medium `}>{item.name}</p>
                  <p className={`text-[18px] -mt-2`}>{item.location}</p>
                </div>
              </div>
              <p className="text-gray-500 pt-4 text-[18px]">{item.review} <span className="text-[#00aeef]">{item.tag}</span></p>
            </div>;
          })}

        </div>
      </div>
    </section>
  );
}