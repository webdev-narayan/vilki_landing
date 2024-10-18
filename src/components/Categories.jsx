import categoryIcon from "../assets/category/category-icon.svg"

// import catImg1 from "../assets/category/cat-card-1.png"
// import catImg2 from "../assets/category/cat-card-2.png"
// import catImg3 from "../assets/category/cat-card-3.png"
// import catImg4 from "../assets/category/cat-card-4.png"
// import catImg5 from "../assets/category/cat-card-5.png"
// import catImg6 from "../assets/category/cat-card-6.png"

// import logo_1 from "../assets/category/subimgs/logo-1.png"
// import logo_2 from "../assets/category/subimgs/logo-2.png"
// import logo_3 from "../assets/category/subimgs/logo-3.png"
// import logo_4 from "../assets/category/subimgs/logo-4.png"
// import logo_5 from "../assets/category/subimgs/logo-5.png"
// import logo_6 from "../assets/category/subimgs/logo-6.png"
// import logo_7 from "../assets/category/subimgs/logo-7.png"
// import logo_8 from "../assets/category/subimgs/logo-8.png"
// import logo_9 from "../assets/category/subimgs/logo-9.png"
import mainImg from "../assets/category/main.webp"

const Categories = () => {

  return (
    <div className="w-full bg-[#f4f4f7] md:py-20 px-4 md:px-0 py-8">
      <div className="c-container mx-auto flex flex-col gap-16">
        <div className="flex gap-3 flex-col w-full ">
          <div className="flex items-center gap-2 rounded-full bg-white md:py-2 md:px-4 py-1 px-2 text-sm md:text-base w-fit text-primary"><img src={categoryIcon} alt="" /> Categories</div>
          <h3 className="text-primary md:text-[52px] hidden md:block  font-semibold">Medicine Categories</h3>
          <h3 className="text-primary md:hidden text-3xl font-semibold">Medicine Categories</h3>
        </div>

        <img src={mainImg} className="-mt-4 md:mt-0" />
      </div>
    </div>

  );
}

export default Categories
