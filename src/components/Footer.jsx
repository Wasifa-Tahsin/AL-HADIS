import React from "react";

const Footer = () => {
  return (
    <section className="container mx-auto py-2 px-2 mt-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-20">
        <div className="space-y-5">
          <h2 className="text-xl text-shadow-2xs">হাদিস পড়ুন,শিখুন এবং জানুন</h2>
          <p>
            আমাদের লক্ষ্য ও উদ্দেশ্য হল সবচেয়ে উত্তম উৎস থেকে  বিশুদ্ধ
            হাদীস সকলের জন্য উন্মুক্ত করে দেয়া। আমরা এই 
            ওয়েবসাইটটি সর্বাধিক গুরুত্বের সাথে তৈরি করেছি যাতে যে  কেউ
            সহজেই হাদিস শিখতে ও শিখাতে পারে। আমরা  আপনাদের একান্ত সহযোগিতা
            চাই এই ওয়েবসাইটটি সহ আমাদের পুরো প্রজেক্টের পরিসর বাড়িয়ে
            এগিয়ে যেতে।  আমাদের একটি মোবাইল অ্যাপ রয়েছে যাতে আপনি যেকোনো{" "}
           স্থানে যেকোন সময় স্বাচ্ছন্দ্যে হাদীস পড়তে পারেন।
          </p>
        </div>



        <div className="space-y-5 text-shadow-2xs">
            <h2>নেভিগেট</h2>
            <ul className="space-y-2">
                
                <li>সাপোর্ট করুন</li>
                <li>প্রাইভেসি পলিসি</li>
                <li>বিষয়ভিত্তিক হাদিস</li>
                <li>হাদিস গ্রন্থসমূহ</li>
            
            </ul>
        </div>



        <div className="space-y-5 text-shadow-2xs">

            <h2>আমাদের প্রজেক্টসমূহ</h2>

            <ul className="space-y-2">
                
                <li>কুরআন মাজিদ</li>
                <li>আল হাদিস</li>
                <li>আইআরডি ফাউন্ডেশন</li>
                <li>দোয়া ও রুকাইয়াহ</li>
            </ul>
        </div>



        <div className="space-y-5 text-shadow-2xs">
            <h2>জনপ্রিয় সাইটসমূহ</h2>
            <ul className="space-y-2">
                <li>sunnah.com</li>
                <li>quran.com</li>
                <li>response-anti-islam</li>
                <li>islamhouse.com</li>
                
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
