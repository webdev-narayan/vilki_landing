
import feature from "../assets/features/feather.svg";
import benefits_1 from "../assets/benefits/benefits-1.svg";
import benefits_2 from "../assets/benefits/benefits-2.svg";
import benefits_3 from "../assets/benefits/benefits-3.svg";
import check from "../assets/benefits/benefits.svg";
import { ButtonSm } from "./ui/Button";

var reasons = [
  {
    title: "Time Management",
    svg: benefits_1,
    detail: ["Streamline your ordering process with automated system, reducing time spent on manual tasks.",
      "Manage inventory and expiry in real-time, with mobile access for on-the-go efficiency."],
    classes: "flex flex-col md:flex-row",
    position: "w-[320px]"
  },
  {
    title: "Right Choice",
    svg: benefits_3,
    detail: [
      "Ensure timely availability of the right medicines with Vilki Medicart's precise tracking system.",
      "Mobile accessibility and automated processes help you manage your inventory and finances efficiently.",
      "Make informed choices that benefit both your business and your customers, staying ahead in the competitive market.",
      "Facilitate efficient order placement and reduce errors, ensuring you deliver the right products at the right time.",
    ],
    classes: "flex flex-col row-span-2",
    position: "w-full mx-auto",
    call_now: true
  },
  {
    title: "Money Management",
    svg: benefits_2,
    detail: [
      "Enhance your competitiveness with cost-saving features.",
      "Avoid overstocking and reduce waste with inventory tracking, while automation cuts losses from expired products.",
      "Make informed, budget-friendly decisions effortlessly."
    ],
    classes: "flex md:flex-row flex-col",
    position: "w-[320px]"

  },
];
export const WhyUs = () => {

  return (
    <section className="w-full bg-[#f4f4f7] md:py-20 py-8 px-4 md:px-0">
      <div className="c-container mx-auto flex flex-col gap-16">
        <div className="flex gap-3 flex-col w-full ">
          <div className="flex items-center gap-2 rounded-full bg-white md:py-2 md:px-4 py-1 px-2 text-sm md:text-base w-fit text-primary"><img src={feature} alt="" /> Benefits</div>
          <h3 className="text-primary text-[52px] hidden md:block font-semibold">Benefits</h3>
          <h3 className="text-primary text-3xl md:hidden font-semibold">Benefits</h3>
          <p className="text-primary font-light">We Unlock The True Potential Of Your Business.</p>
        </div>
        <div className="grid md:grid-cols-2 grid-rows-2 gap-8">
          {reasons.map((item, index) => {
            return <div key={index} className={`border border-[#B3E7FB]  bg-white rounded-[20px] ${item.classes} overflow-hidden`}>
              <div className={`text-primary p-8 flex flex-1 flex-col gap-5`}>
                <h4 className={`text-[32px] font-medium `}>{item.title}</h4>
                {item.detail.map((list, i) => (<p
                  key={i}
                  className="flex gap-2 items-start font-medium">
                  <img src={check} />
                  {list}
                </p>))
                }
                <ButtonSm text={"Get Started "} className={"w-fit p-3 px-7 bg-transparent text-primary border border-primary"} />
              </div>
              <img src={item?.svg} className={`${item?.position}  p-3 bg-white flex-1`} />
            </div>;
          })}

        </div>
      </div>
    </section>
  );
}

export default WhyUs;