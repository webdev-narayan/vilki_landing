import FeaturesCards from "../components/FeaturesCards";
import WhatDoWeOffer from "../components/WhatDoWeOffer";
import Stats from "../components/Stats";
import Sellers from "../components/Sellers";
import Categories from "../components/Categories";
import Brands from "../components/Brands";
import WhyUs from "../components/WhyUs";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Hero from "../components/Hero";
import Highlight from './../components/Highlight';
export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      <FeaturesCards />

      <WhatDoWeOffer />

      <Stats />

      <Sellers />

      <Categories />

      <Brands />

      <WhyUs />

      <Testimonials />

      <Highlight />

      <Footer />
    </div>
  );
}
