import React from "react";
import vector from '../assets/Vector.png';

const Search = () => {
  return (
    <section className="container mx-auto w-full h-[200px] mt-10 relative rounded-xl bg-[#17B686] flex justify-center items-center px-3">
      
   
      <img
        src={vector}
        alt="vector"
        className="absolute left-1 top-4/5 w-5/7 md:top-4/5 md:left-4    -translate-y-1/2 h-full md:w-1/5 object-contain"
      />




      {/* div for input + icon + button */}
      <div className="flex w-full md:w-1/2 border-2 border-[#38A47E] rounded-lg overflow-hidden relative z-10">
        
        {/* icon */}
        <div className="flex items-center px-3 bg-white">
          <i className="fa-solid fa-magnifying-glass text-gray-500 text-lg"></i>
        </div>

        {/* input */}
        <input
          type="text"
          placeholder="হাদিস খুঁজুন..."
          className="flex-1 p-2 md:p-3 bg-white text-gray-900 outline-none"
        />

        {/* search button */}
        <div className="py-1 px-1 bg-white">
          <button className="bg-[#38A47E] text-white border-2 py-2 px-5 rounded-xl mr-4">
            Search
          </button>
        </div>

      </div>
    </section>
  );
};

export default Search;
