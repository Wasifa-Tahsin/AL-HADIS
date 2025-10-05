import React from 'react';
import RemainderCard from '../layout/RemainderCard';
import image1 from '../assets/Picture.png';
import image2 from '../assets/Picture (1).png';
import image3 from '../assets/Picture (2).png';
import image4 from '../assets/Picture (3).png';

const Remainder = () => {
  return (
    <section className="container mx-auto mt-10 py-10 px-5">
      {/* Heading */}
      <div className="flex justify-center mb-8">
        <h2 className="text-3xl font-bold text-[#166A4E]">ডেইলি রিমেইন্ডার</h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <RemainderCard
          image={image1}
          title="৪০ হাদিস"
          description="আবূ হুরায়রা রাদিয়াল্লাহু ’আনহু হতে বর্ণিত হয়েছে, তিনি বলেন— রাসূলুল্লাহ (সা.) বলেছেন: 'অনর্থক অপ্রয়োজনীয় বিষয় ত্যাগ করাই একজন ব্যক্তির উত্তম ইসলাম।' [তিরমিযী: ২৩১৮, ইবনু মাজাহ: ৩৯৭৬]"
        />
        <RemainderCard
          image={image2}
          title="আজকের দোয়া"
          description="প্রয়োজনীয় চাহিদা মেটাতে আল্লাহর অনুগ্রহ পাওয়ার জন্য মূসা (আঃ) এর দোয়া [২৮:২৪]
رَبِّ اِنِّىۡ لِمَاۤ اَنۡزَلۡتَ اِلَىَّ مِنۡ خَيۡرٍ فَقِيۡرٌ‏
হে আমার রব, নিশ্চয় আপনি আমার প্রতি যে অনুগ্রহই নাযিল করবেন, আমি তার মুখাপেক্ষী"
        />
        <RemainderCard
          image={image3}
          title="আজকের হাদিস"
          description="রাসূল (সাল্লাল্লাহু ‘আলাইহি ওয়াসাল্লাম) বলেছেন, ‘তোমাদের মধ্যে সে ব্যক্তিই সর্বপেক্ষা উত্তম, যে চরিত্রের দিক দিয়ে উত্তম’ (বুখারী, মুসলিম, মিশকাত হা/৫০৭৫)।"
        />
        <RemainderCard
          image={image4}
          title="আল্লাহর ৯৯ নামসমূহ"
          description='
          আস-সালাম                السلام
          
          
        অর্থঃ নিরাপত্তা-দানকারী, শান্তি-দানকারী, ত্রাণকর্তা, দোষমুক্ত'
        />
      </div>

     <div className='flex justify-center mt-5'>
         <button className='border-1 border-[#33896B] py-3 px-3 rounded-xl'>আরো দেখুন...</button>
     </div>
    </section>
  );
};

export default Remainder;
