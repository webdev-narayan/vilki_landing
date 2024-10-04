
import marketSVG from "../assets/features/market.svg";
import acountingSVG from "../assets/features/acounting.svg";
import friendlySVG from "../assets/features/friendly.svg";
import feature from "../assets/features/feather.svg";
const features = [
  {
    title: "Marketplace",
    detail:
      "Seamlessly connect with a vast network of buyers and sellers, expanding your reach and boosting your sales with our integrated marketplace. Manage your listings, track orders, and engage with customers all in one place.",
    svg: marketSVG,
    span: true,
    classes: "row-span-2 flex flex-col gap-4",
    position: "-ml-8  rounded-tr-[20px]"
  },
  {
    title: "Accounting",
    detail:
      "Simplify your financial management with powerful accounting tools designed to keep your business finances on track. From invoicing to expense tracking, gain real-time insights and ensure compliance with ease.",
    svg: acountingSVG,
    classes: "flex gap-6 p-8 md:flex-row flex-col",
    position: "md:-mr-8 md:-mt-8 rounded-bl-[20px]"
  },
  {
    title: "User Friendly",
    detail: "Experience an intuitive interface that’s designed with you in mind. Whether you’re a seasoned professional or new to the platform, our app is easy to navigate, making your business operations smoother and more efficient.",
    svg: friendlySVG,
    classes: "flex gap-6 p-8 md:flex-row flex-col",
    position: "-mr-8 -mb-8 rounded-tl-[20px] "
  },
];

const Features = () => {

  return (
    <div className="w-full bg-white md:py-20 py-8 px-4">
      <div className="c-container mx-auto flex flex-col gap-16">
        <div className="flex gap-3 flex-col w-full ">
          <div className="flex items-center gap-2 rounded-full bg-[#f2f2f2] md:py-2 md:px-4 py-1 px-2 text-sm md:text-base w-fit text-primary"><img src={feature} alt="" /> Features</div>
          <h3 className="text-primary lg:text-[52px] hidden md:block font-semibold">Features</h3>
          <h3 className="text-primary md:hidden text-3xl font-semibold">Features</h3>
          <p className="text-primary font-light">Reach your goals  your whay with features designed for the fastets.</p>
        </div>
        <div className="grid md:grid-cols-2 grid-rows-2 md:gap-8 gap-4">
          {features.map((item, index) => {
            return <div key={index} className={`feature-card border border-[#B3E7FB] rounded-[20px] ${item.classes} overflow-hidden`}>
              <div className={`text-primary ${index == 0 && "p-8"}`}>
                <h4 className={`text-[32px] font-medium `}>{item.title}</h4>
                <p>{item.detail}</p>
              </div>
              <img src={item.svg} className={`${item.position} border-[#B3E7FB] border p-3 bg-white`} />
            </div>;
          })}

        </div>
      </div>
    </div>
  );
}

export default Features
