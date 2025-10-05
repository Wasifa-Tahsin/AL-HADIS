import React from 'react';
import Book1 from '../assets/Rectangle 1.png';
import Book2 from '../assets/Rectangle 1 (1).png';
import Book3 from '../assets/Rectangle 1 (2).png';
import Book4 from '../assets/Rectangle 1 (3).png';
import Book5 from '../assets/Rectangle 1 (4).png';
import Book6 from '../assets/Rectangle 1 (5).png';
import BooksCrd from '../layout/BooksCrd';

const Books = () => {
  return (
    <section className="container mx-auto py-10 px-5 mt-10">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold text-[#166A4E]">হাদিসের বইসমূহ</h1>
        <p className="text-gray-700 leading-relaxed">
          হাদিসের কিতাবগুলো মুসলিমদের জন্য হেদায়েত এবং অনুপ্রেরণার একটি গুরুত্বপূর্ণ উৎস। এই কিতাবগুলো মহানবী <br />
          মুহাম্মদ (সাল্লাল্লাহু আলাইহি ওয়া সালাম)-এর সীরাত (জীবনী) ও দিক-নির্দেশনার প্রতি অন্তর্দৃষ্টি প্রদান করে।
        </p>
      </div>

      {/* Books grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        <BooksCrd title="সহীহ বুখারী" description="হাদিসের রেঞ্জ ৭০৫৩" image={Book1} />
        <BooksCrd title="সহীহ মুসলিম" description="হাদিসের রেঞ্জ ৭৪৫৩" image={Book2} />
        <BooksCrd title="সুনানে আবু দাউদ" description="হাদিসের রেঞ্জ ৫২৭৪" image={Book3} />
        <BooksCrd title="জাল যয়ীফ হাদিস সিরিজ" description="হাদিসের রেঞ্জ ১০২" image={Book4} />
        <BooksCrd title="মুয়াত্তা ইমাম মালিক" description="হাদিসের রেঞ্জ ১৮৩২" image={Book5} />
        <BooksCrd title="সুনানে ইবনে মাজাহ" description="হাদিসের রেঞ্জ ৪৩৪১" image={Book6} />
      </div>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <button className="border border-[#2B9E76] rounded-lg py-4 px-6 bg-[#2B9E76] text-white font-medium hover:bg-[#24906A] transition">
          সকল হাদিস গ্রন্থসমূহ

          <i class="fa-solid fa-arrow-right ml-4"></i>
        </button>
      </div>
    </section>
  );
};

export default Books;
