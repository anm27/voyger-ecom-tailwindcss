import React from "react";
import { CiPhone } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";

export const Head = () => {
  return (
    <>
      <section className="hidden lg:block">
        <div className="lg:flex lg:justify-between bg-[#0f3460] text-white p-4 sm:hidden lg:px-12">
          <div className="flex items-center gap-7">
            <div className="flex gap-2 items-center">
              <CiPhone size={20} />
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=9875437382"
                className="text-sm"
              >
                {/* <i className="fa fa-phone"></i> */}
                +919875437382
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <IoMdMail size={20} />
              <a
                target="_blank"
                href="mailto:amarendra7722@gmail.com"
                className="text-sm"
              >
                contact@voyger.com
              </a>
            </div>
          </div>
          <div className="flex gap-3 text-sm">
            <span>
              <label htmlFor="">Need Help ?</label>
            </span>
            <span>
              <span>🇧🇩 </span>
              <label htmlFor="">EN</label>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
