import React from "react";
import vector from "../assets/Vector.png";
// import ut from "../assets/Hadis/ut.png";

const Search = () => {
  return (
    <section className="container mx-auto w-full h-[200px] mt-10 relative rounded-xl bg-[#17B686] flex justify-center items-center px-3 overflow-hidden">
      
      {/* left mosque */}
      <img
        src={vector}
        alt="vector"
        className="absolute left-1 bottom-0 w-1/5 md:w-1/6 object-contain opacity-90"
      />

      {/* right camel */}
      {/* <img
        src={ut}
        alt="camel"
        className=" origin-center  absolute bottom-0 right-4 w-1/5 md:w-1/6 opacity-90 z-[2]"
      /> */}

      {/* search bar */}
      <div className="flex w-full md:w-1/2 border-2 border-[#38A47E] rounded-lg overflow-hidden relative z-10 bg-white shadow-md">
        <div className="flex items-center px-3">
          <i className="fa-solid fa-magnifying-glass text-gray-500 text-lg"></i>
        </div>

        <input
          type="text"
          placeholder="হাদিস খুঁজুন..."
          className="flex-1 p-2 md:p-3 text-gray-900 outline-none"
        />

        <div className="py-1 px-1">
          <button className="bg-[#38A47E] text-white border-2 py-2 px-5 rounded-xl mr-2 hover:bg-[#2d8f6a] transition">
            Search
          </button>
        </div>
      </div>

      {/* ✅ Right side curved background (no SVG)
      <div className="absolute bottom-0 right-0 bg-white w-[200px] h-[120px] md:w-[290px] md:h-[90px] rounded-tl-[100%] z-[1] rotate-300"></div>
      <div className="origin-center rotate-45"></div> */}


   

  {/* অন্যান্য কোড */}
  
 
 

</section>

    
  );
};

export default Search;
