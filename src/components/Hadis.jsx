import React from "react";
import BooksCrd from "../layout/BooksCrd";
import Hadis1 from "../assets/Hadis/Hadis1.png";
import Hadis2 from "../assets/Hadis/Hadis2.png";
import Hadis3 from "../assets/Hadis/Hadis3.png";
import Hadis4 from "../assets/Hadis/Hadis4.png";
import Hadis5 from "../assets/Hadis/Hadis5.png";
import Hadis6 from "../assets/Hadis/Hadis6.png";
const Hadis = () => {
  return (
    <section className="container mx-auto mt-12 ">
      <div>
        <div className="justify-center space-y-5 text-center ">
          <h1 className="text-shadow-2xs text-2xl">বিষয়ভিত্তিক হাদিস</h1>
          <p>
            বিষয়ভিত্তিক হাদীস হচ্ছে হাদীসের এমন সংকলন যা বর্ণনাকারী বা সনদ
            দ্বারা নয় বরং বিষয় অনুসারে সজ্জিত। এর <br /> মাধ্যমে ইসলামের
            নির্দিষ্ট বিষয়গুলোর উপর সহজে জ্ঞানার্জন সম্ভব হয়। এই সঙ্কলন আলেমগণ
            ও শিক্ষকদের জন্যও <br /> সহায়ক হতে পারে যারা নির্দিষ্ট বিষয়ে
            শিক্ষা প্রদান করতে চাইছেন।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          <BooksCrd
            image={Hadis1}
            title="আকিদা"
            description="হাদিসের রেঞ্জ ৭"
          />
          <BooksCrd image={Hadis2} title="ঈমান" description="হাদিসের রেঞ্জ ৫" />
          <BooksCrd
            image={Hadis3}
            title="পবিত্রতা"
            description="হাদিসের রেঞ্জ ১২"
          />
          <BooksCrd
            image={Hadis4}
            title="হাদিসের গল্প"
            description="হাদিসের রেঞ্জ ৩১"
          />
          <BooksCrd
            image={Hadis5}
            title="সালাত"
            description="হাদিসের রেঞ্জ ৩৮"
          />
          <BooksCrd
            image={Hadis6}
            title="দান সদকাহ"
            description="হাদিসের রেঞ্জ ১"
          />
        </div>

        <div className="flex justify-center mt-5 ">
          <button className="border-1 bg-[#2B9E76] border-[#33896B] py-3 px-3 rounded-xl font-medium hover:scale-105 transition">
            সকল ক্যাটাগরি দেখুন

            <i class="fa-solid fa-arrow-right ml-2"></i>
          </button>

        </div>
      </div>
    </section>
  );
};

export default Hadis;
