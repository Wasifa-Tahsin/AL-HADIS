import React from 'react';

const BooksCrd = ({title,description,image}) => {
    return (
        <div className=' bg-[#EEF9F8]   rounded-lg  gap-5  space-y-3'>
           <div className=' border-1 border-[#17B686] p-5 rounded-lg flex gap-5 space-y-3'>
             <div>
                <h2 className='text-2xl text-black'>{title}</h2>
                <p className='text-xs mt-1'>{description}</p>
            </div>
            <div>
                <img src={image} alt="" />
            </div>
           </div>
        </div>
    );
};

export default BooksCrd;