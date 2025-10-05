import React from "react";
import frame from "../assets/Frame.png";
const Header = () => {
  return (
    <section className="container mx-auto py-5 px-1">
      <div className="flex justify-between">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <img src={frame} alt="" />
          <h1 className="text-[#34AB82] font-bold ">আল হাদিস</h1>
        </div>

        <div className="">
            <ul className="hidden md:flex items-center gap-5">
                <li>হোম </li>
                <li>হাদিসে যান </li>
                <li>হাদিস গ্রন্থসমূহ </li>
                <li>আমাদের প্রজেক্ট</li>
            </ul>
        </div>

        <div className="gap-5 flex">
            <button className="border-2 py- px-3 bg-[#EF2950] text-white rounded-xl">সাপোর্ট করুন 
                <i className="fa-solid fa-hand-holding-heart ml-3 "></i>
            </button>
            <button className="border-2 border-[#38A47E] rounded-xl py-2 px-2 text-[#38A47E]">ডাউনলোড করুন</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
