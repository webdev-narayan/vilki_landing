import hash from "../assets/hash.svg"

import img1 from "../assets/gallery/image (1).webp";
import img2 from "../assets/gallery/image (2).webp";
import img3 from "../assets/gallery/image (3).webp";
import img4 from "../assets/gallery/image (4).webp";
import img5 from "../assets/gallery/image (5).webp";
import img6 from "../assets/gallery/image (6).webp";
import img7 from "../assets/gallery/image (7).webp";
import img8 from "../assets/gallery/image (8).webp";
import img9 from "../assets/gallery/image (9).webp";
import img11 from "../assets/gallery/image (11).webp";
import img12 from "../assets/gallery/image (12).webp";
import img13 from "../assets/gallery/image (13).webp";
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img11, img12, img13]
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
                <div className="grid grid-cols-3 gap-4">
                    {images.map((item, i) => {
                        return <img key={i} src={item} className="border-[#B3E7FB] border rounded-[20px] object-cover" />
                    })}
                </div>
                {/* <img src={mainImage} className="" /> */}
            </div>
        </div>
    )
}

export default Highlight
