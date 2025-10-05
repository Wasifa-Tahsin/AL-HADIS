import React from 'react';
import EmailImage from '../assets/image 6.png';

const Email = () => {
  return (
    <section className="container mx-auto mt-10 px-5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 bg-[#E7F5F0] rounded-xl px-6 py-8">
        
        {/* Left image */}
        <div className="w-32 md:w-48 flex justify-center">
          <img src={EmailImage} alt="Email illustration" className="w-full h-auto" />
        </div>

        {/* Text */}
        <div className="text-center md:text-left flex-1">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">
            প্রতিদিন ইমেইলে হাদিস পেতে আমাদের সাবস্ক্রাইব করুন
          </h2>
        </div>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto justify-center md:justify-end">
          <input
            type="email"
            placeholder="Enter your email address"
            className="border-2 border-[#2B9E76] py-2 px-4 rounded-lg outline-none focus:ring-2 focus:ring-[#38A47E] flex-1"
          />
          <button className="border-none bg-[#2B9E76] text-white rounded-lg px-5 py-2 hover:bg-[#218c68] transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Email;
