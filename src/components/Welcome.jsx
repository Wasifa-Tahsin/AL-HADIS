import React from "react";
import phone from "../assets/phone.png";
import image3 from "../assets/image 3.png";
import image4 from "../assets/image 4.png";

const Welcome = () => {
  return (
    <section className="container bg-[#DCF2E9] rounded-xl mx-auto py-5 px-5 mt-10 border-[#17B686] border-2">
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center">
        
        {/* Phone Image */}
        <div className="w-full md:h-64 md:w-34 flex justify-center md:justify-start">
          <img className="border rounded-xl w-3/4 md:w-full" src={phone} alt="phone" />
        </div>

        {/* Text + Buttons */}
        <div className="space-y-4 w-full md:w-1/3 text-center md:text-left">
          <h1 className="font-bold text-xl md:text-3xl">আল হাদিস সাইটে আপনাকে স্বাগতম</h1>
          <p className="text-base ">
            আল হাদিস এপের মাধ্যমে হাদিস পড়া, বুকমার্ক, অনলাইন সিংকিং সহ আরও অনেক কিছু সহজেই পারবেন।
          </p>
          <p className=" md:text-xl font-semibold">
            ডাউনলোড করুন <br />
            আল হাদিস মোবাইল অ্যাপ
          </p>

          {/* App Store / Google Play Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mt-2 justify-center md:justify-start">
            {/* App Store */}
            <div className="border-2 py-2 px-4 rounded-xl bg-[#E7FFF7] flex items-center gap-3">
              <div>
                <i className="fa-brands fa-apple text-3xl"></i>
              </div>
              <div className="text-left">
                <p className="text-sm md:text-base">Download on the</p>
                <h4 className=" font-bold">App Store</h4>
              </div>
            </div>

            {/* Google Play */}
            <div className="border-2 py-2 px-4 rounded-xl bg-[#E7FFF7] flex items-center gap-3">
              <div>
                <i className="fa-brands fa-google-play text-3xl"></i>
              </div>
              <div className="text-left">
                <p className="text-sm md:text-base">GET IT ON</p>
                <h4 className=" font-bold">Google Play</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Images */}
        <div className="flex flex-col sm:flex-row gap-3 mt-5 md:mt-0 w-full md:w-auto justify-center">
          <img className="w-3/4 sm:w-1/2 md:w-auto mx-auto" src={image3} alt="image3" />
          <img className="w-3/4 sm:w-1/2 md:w-auto mx-auto" src={image4} alt="image4" />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
