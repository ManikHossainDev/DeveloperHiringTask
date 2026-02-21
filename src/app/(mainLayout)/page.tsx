
import AllProducts from "@/components/Pages/Home/allProducts";
import Categories from "@/components/Pages/Home/Categories";
import HeroBannerSection from "@/components/Pages/Home/HeroBannerSection";
import Reviews from "@/components/Pages/Home/Reviews";
import React from "react";

const HomePage = () => {
  return (
    <section>
      <HeroBannerSection />
      <div className="py-[40px]">
        <AllProducts />
      </div>
      <Categories />
      <div className="py-[40px]">
       <Reviews />
      </div>
    </section>
  );
};

export default HomePage;
