import mainImage from "../assets/Content.png"
import hash from "../assets/hash.svg"
const Highlight = () => {
    return (
        <div className="w-fullbg-white md:p-20 py-8 px-4 md:px-0">
            <div className="c-container mx-auto flex flex-col gap-16">
                <div className="flex gap-3 flex-col w-full items-center z-10 ">
                    <div className="flex items-center gap-2 rounded-full bg-[#f2f2f2] md:py-2 md:px-4 py-1 px-2 text-sm md:text-base w-fit text-primary"> <img src={hash} />  Moments</div>
                    <h3 className="text-primary text-[52px] hidden md:block font-semibold">Highlights from the Product Launch Event</h3>
                    <h3 className="text-primary md:hidden text-3xl text-center font-semibold">Highlights from the Product Launch Event</h3>
                    <p className="text-primary font-light">A glimpse of the exciting moments that marked the debut of our latest innovation.</p>
                </div>
                <img src={mainImage} className="" />
            </div>
        </div>
    )
}

export default Highlight
