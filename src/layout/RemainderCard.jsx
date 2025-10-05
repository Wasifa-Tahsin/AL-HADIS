import React from 'react';

const RemainderCard = ({image,title,description}) => {
    return (
        <section className='border-2 p-5 mt-5 rounded-lg'>
            <div className='space-y-2'>
                <img className='' src={image} alt="" />
                <h1 className='text-shadow-xs'>{title}</h1>
                <p className='text-xs'>{description}</p>
            </div>
        </section>
    );
};

export default RemainderCard;