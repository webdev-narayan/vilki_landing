
import icon_1 from "../assets/statics/icon-1.svg"
import icon_2 from "../assets/statics/icon-2.svg"
import icon_3 from "../assets/statics/icon-3.svg"
import icon_4 from "../assets/statics/icon-4.svg"
import main_icon from "../assets/statics/main-icon.svg"
import cg_map from "../assets/statics/cg-map.svg"

const stats = [
  {
    title: "₹2.8L",
    subtitle: "Total Sales",
    svg: icon_1
  },
  {
    title: "4k+",
    subtitle: "Medicines",
    svg: icon_2
  },
  {
    title: "4k+",
    subtitle: "Wholesalers",
    svg: icon_3
  },
  {
    title: "10k",
    subtitle: "App Downloads",
    svg: icon_4
  },
]

const Stats = () => {
  return (
    <section className="bg-primary md:py-20 md:pb-56 py-8 px-4 md:px-0">
      <div className="c-container mx-auto relative">
        <div>
          <div className="flex gap-3 flex-col w-full ">
            <div className="flex items-center gap-2 rounded-full bg-[#f2f2f2]/10 md:py-2 md:px-4 py-1 px-2 text-sm md:text-base w-fit text-white"><img src={main_icon} alt="" /> Statistics</div>
            <h3 className="text-white lg:text-[52px] text-2xl font-semibold md:leading-[70px]">Trusted By E-commerce<br />Businesses</h3>
            <p className="text-primary font-light">We Unlock The True Potential Of Your Business</p>
          </div>
          <img src={cg_map} className="md:hidden" />

          <div className="grid md:grid-cols-1 grid-cols-2 gap-4">
            {stats.map((item, i) => {
              return <div
                key={i}
                className="border-white border rounded-xl flex items-center md:w-[331px] justify-between md:p-8 p-4"
              >
                <img src={item.svg} className="w-6 md:w-auto" />
                <div className="text-end">
                  <h3 className="md:text-[42px] text-2xl font-medium text-white">{item.title}</h3>
                  <p className="text-end text-gray-400 md:text-[18px] text-[10px]">{item.subtitle}</p>
                </div>
              </div>
            })}
          </div>
        </div>
        <img src={cg_map} className="absolute -top-10 -right-16 hidden md:block" />
      </div>
    </section>
  );
}

export default Stats;