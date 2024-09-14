import React from "react";

const Categ = () => {
  const data = [
    {
      cateImg: "./assets/brand/brand-1.png",
      cateName: "Wellness",
    },
    {
      cateImg: "./assets/brand/brand-2.png",
      cateName: "Herbal",
    },
    {
      cateImg: "./assets/brand/brand-3.png",
      cateName: "Kitchen Essentials",
    },
    {
      cateImg: "./assets/brand/brand-2.png",
      cateName: "Health",
    },
    {
      cateImg: "./assets/brand/brand-1.png",
      cateName: "Groceries",
    },
    // {
    //   cateImg: "./assets/brand/brand-2.png",
    //   cateName: "Sony",
    // },
  ];
  return (
    <>
      <div className="category">
        <div className="chead">
          <h1>Categories</h1>
          <h1>Voyger</h1>
        </div>
        {data.map((value, index) => {
          return (
            <div
              style={{ display: "flex", borderRadius: "10px" }}
              className="box brand-box"
              key={index}
            >
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
        <div className="box box2">
          <button>View All Products</button>
        </div>
      </div>
    </>
  );
};

export default Categ;
