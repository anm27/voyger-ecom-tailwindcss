import React from "react";
import TopCategoriesCard from "./TopCategoriesCard";
import { FcHighPriority } from "react-icons/fc";

const TopCategories = () => {
  return (
    <>
      <section className="topCat background">
        <div className="">
          <div className="">
            <div className="flex items-center lg:mx-12 mb-12 mt-9 mx-4 gap-3">
              <FcHighPriority size={35} color="blue" />
              <h2 className="font-bold lg:text-3xl md:text-3xl text-2xl text-gray-700">
                Top Categories
              </h2>
            </div>
            {/* <div className="heading-right row">
            <span>View All</span>
            <i className="fa fa-caret-right"></i>
          </div> */}
          </div>
          <TopCategoriesCard />
        </div>
      </section>
    </>
  );
};

export default TopCategories;
