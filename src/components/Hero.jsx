import { BiPhoneIncoming } from "react-icons/bi";
import HeaderNav from "../components/HeaderNav";
import Button from "../components/ui/Button";
import draw_web from "../assets/hero_section_artifacts/draw.svg"
import imageCover from "../assets/hero_section_artifacts/deskimg.png"
import iphone from "../assets/hero_section_artifacts/iphone.png"
import floating_1 from "../assets/hero_section_artifacts/1.svg"
import floating_2 from "../assets/hero_section_artifacts/2.svg"
import floating_3 from "../assets/hero_section_artifacts/3.svg"
import floating_4 from "../assets/hero_section_artifacts/4.svg"
const Hero = () => {
    return (
        <section id="about-us" className="bg-[#E6F7FE]">
            <div className="lg:min-h-screen c-container flex gap-10 flex-col z-10 pb-16 relative">
                <img src={draw_web} className="absolute top-[30%] md:top-0 w-full z-0" />
                <img src={floating_1} className="absolute w-[120px] hidden lg:block top-[250px] left-16" />
                <img src={floating_2} className="absolute w-[120px] hidden lg:block top-[250px] right-16" />
                <img src={floating_3} className="absolute w-[120px] hidden lg:block top-[420px] left-[20%]" />
                <img src={floating_4} className="absolute w-[120px] hidden lg:block top-[420px] right-[20%]" />
                <HeaderNav />
                <div className="text-primary z-10 flex justify-center items-center flex-col relative gap-6 mt-10 px-4 md:px-0">
                    <span className="md:text-6xl text-4xl text-center font-bold lg:leading-[70px]">
                        Transforming Pharmaceutical<br />Sector <span className="text-secondary">Across Bharat</span>
                    </span>

                    <span className="md:text-xl text-center ">
                        With mobile app and billing software platform designed to streamline B2B transactions for<br />both retailers and wholesalers.
                    </span>
                    <div className="flex flex-row gap-8">
                        <Button
                            href={"tel:+917509095550"}
                            text={"Contact Now"}
                            className={"text-white bg-primary text-[12px]"}
                            Icon={<BiPhoneIncoming className="md:h-6 md:w-6 h-5 w-5" />} />

                        <Button
                            href={"tel:+917509095550"}
                            text={"Download Now"}
                            className={"md:bg-transparent text-primary border border-primary  hover:shadow-lg text-[12px]"}
                            Icon={<BiPhoneIncoming className="md:h-6 md:w-6 h-5 w-5" />} />

                    </div>

                </div>
                <div className="p-6 relative lg:w-[1000px] w-full h-[704px] mx-auto md:mt-[70px] hidden md:block">

                    <div className="w-full lg:w-[929px] lg:h-[614px] bg-white shadow-lg  z-10 rounded-lg mx-auto relative overflow-hidden">
                        <img src={imageCover} className="object-cover object-left -mt-2 h-full" />
                    </div>
                    <img src={iphone} className="absolute bottom-0 right-6 z-10" />
                </div>
            </div>
        </section>
    )
}

export default Hero
