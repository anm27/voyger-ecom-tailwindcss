import React from "react";
import categoryData from "./categoryData";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="category">
      {categoryData.map((category, index) => {
        return (
          <>
            {/* <Link to={category.categoryName.toLowerCase()}>
              <div
                className="box-category box f_flex"
                style={{ paddingTop: 10, paddingBottom: 10 }}
                key={index}
              >
                <img src={category.categoryImg} alt="no img" />
                <span>{category.categoryName}</span>
              </div>
            </Link> */}
          </>
        );
      })}
    </div>
  );
};

export default Categories;
