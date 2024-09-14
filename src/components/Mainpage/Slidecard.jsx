import { useNavigate } from "react-router-dom";
import shoppingData from "./shoppingData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Slidecard = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Redirect the user to the desired page
    navigate("/all-products"); // Replace '/collections' with the actual path
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // appendDots: (dots) => {
    //   return <ul style={{ margin: "0px" }}>{dots}</ul>;
    // },
  };
  return (
    <>
      <Slider {...settings}>
        {shoppingData.map((value, index) => {
          return (
            <div
              className="lg:!flex  text-black items-center lg:px-12"
              key={index}
            >
              <div className="px-6 w-full hidden lg:block">
                <h1
                  className="text-left font-bold lg:text-5xl shadow-none pb-6"
                  style={{
                    boxShadow: "0 4px 1px -1px rgba(16, 185, 129, 20)",
                  }}
                >
                  {value.title}
                </h1>
                <p className="lg:text-xl">{value.desc}</p>
                <button
                  // style={{ marginTop: 20 }}
                  onClick={handleButtonClick}
                  className="px-10 bg-blue-500 hover:bg-blue-700 transition-all py-2 my-5 rounded-md text-white shadow-black shadow-sm"
                  aria-hidden="false"
                >
                  Visit Collections
                </button>
              </div>
              <div className="w-full bg-slate-400 hidden lg:block">
                <img
                  src={value.cover}
                  // style={{ height: "60vh" }}
                  alt="slider-image"
                  fetchpriority="high"
                />
              </div>

              {/* Mobile slider */}
              <div className="relative w-full lg:hidden">
                {/* Content overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-65 z-10 flex flex-col justify-center px-6 text-white">
                  <h1
                    className="font-bold lg:text-2xl text-white text-left shadow-none pb-3"
                    style={{
                      boxShadow: "0 4px 1px -1px rgba(16, 185, 129, 20)",
                    }}
                  >
                    {value.title}
                  </h1>
                  <p className="lg:text-base text-xs md:text-base flex justify-evenly">
                    {value.desc}
                  </p>
                  <button
                    onClick={handleButtonClick}
                    className="px-6 py-2 mt-5 bg-blue-500 hover:bg-blue-700 text-sm transition-all rounded-md text-white shadow-black shadow-sm"
                    aria-hidden="false"
                  >
                    Visit Collections
                  </button>
                </div>

                {/* Image background */}
                <div className="w-full h-[33vh]">
                  <img
                    src={value.cover}
                    className="w-full object-cover h-[33vh]"
                    alt="slider-image"
                    fetchpriority="high"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default Slidecard;
