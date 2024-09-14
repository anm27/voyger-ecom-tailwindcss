import React from "react";
import "./features.css";
import { FaTruckFast } from "react-icons/fa6";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { GiSwordsPower } from "react-icons/gi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdLocalAirport } from "react-icons/md";
import { IoIosClock } from "react-icons/io";

const Features = () => {
  const data = [
    {
      cover: <FaTruckFast size={30} />,
      title: "Fast Delivery",
      desc: "We offer fast delivery on our 100 million plus products.",
    },
    {
      cover: <BsCreditCard2FrontFill size={30} />,
      title: "Safe Payment",
      desc: "We offer 100% safe payment on our 100 million plus products.",
    },
    {
      cover: <GiSwordsPower size={30} />,
      title: "Shop With Confidence",
      desc: "We offer competitive prices on our 100 million plus products so you can shop confidently.",
    },
    {
      cover: <MdOutlineSupportAgent size={30} />,
      title: "24/7 Support",
      desc: "We offer 24/7 support to each and every customer so you have no issues shopping.",
    },
    {
      cover: <MdLocalAirport size={30} />,
      title: "Global Shipping",
      desc: "We offer global shipping on our 100 million plus product any range.",
    },
    {
      cover: <IoIosClock size={30} />,
      title: "24 Hours Delivery",
      desc: "We offer 24 hours delivery on our 100 million plus products anywhere.",
    },
  ];
  return (
    <>
      <section className="wrapper bg-slate-100 py-10 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:mx-12 mx-4">
          {data.map((value, index) => {
            return (
              <div className="product" key={index}>
                <div className="flex justify-center mb-6">
                  <div className="bg-slate-100 p-5 rounded-full">
                    {value.cover}
                  </div>
                </div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Features;
