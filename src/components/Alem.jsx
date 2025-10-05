import React from 'react';
import alem1 from '../assets/Hadis/Ellipse 3.png';
import alem2 from '../assets/Hadis/Ellipse 4 (1).png';
import alem3 from '../assets/Hadis/Ellipse 4.png';
import alem4 from '../assets/Hadis/Ellipse 8.png';
import alem5 from '../assets/Hadis/Ellipse 7.png';
import image from '../assets/Hadis/image 17.png'
const Alem = () => {
  return (
    <section className="container mx-auto py-2 px-5 rounded-xl bg-[#DCF2E9] mt-10">


        <div>
              <img className='' src={image} alt="" />
        </div>
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          বিজ্ঞ আলেমদের দ্বারা প্রশংসিত
        </h2>
      </div>

      {/* Alem Images */}
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
        <img src={alem1} alt="Alem 1" className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover" />
        <img src={alem2} alt="Alem 2" className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover" />
        <img src={alem3} alt="Alem 3" className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover" />
        <img src={alem4} alt="Alem 4" className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover" />
        <img src={alem5} alt="Alem 5" className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover" />
      </div>
    </section>
  );
};

export default Alem;
