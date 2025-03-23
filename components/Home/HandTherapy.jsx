import React from 'react';

const HandTherapy = () => {
    return (
        <section className='relative py-12 md:py-16 lg:py-20 z-1'>
            <img className='absolute right-0 top-0 -z-1' src="/images/ht-right.png" alt="right" />
            <div className="container mx-auto px-4 grid grid-cols-12 items-center">
                <div className="col-span-12 lg:col-span-5 md:ml-[10%]">
                    <img className='lg:w-[95%]' src="/images/ht.png" alt="image" />
                </div>
                <div className="col-span-12 lg:col-span-7">

                    <h1 className="font-beatrice font-normal text-headText text-2xl sm:text-3xl md:text-[44px] leading-[1.3] ">
                        Achieve Success in <span className="font-semibold text-[#699980]">Hand Therapy</span> with Measurable Results
                    </h1>

                    <p className="w-full lg:w-[85%] font-light text text-sm md:text-lg text-[#757575] leading-normal mt-3 mb-6 md:mt-4 md:mb-8">
                        Our interactive therapy with the DextEgg System enhances your fine motor skills, allowing you to perform daily movements with confidence and ease.
                    </p>

                    <ul className='w-full lg:w-[85%]'>
                        <li className='font-light text text-sm md:text-lg text-[#757575] leading-normal'>
                            <span className='text-[#333331]'>✔</span> Gamified Training – Engaging exercises with real-time feedback
                        </li>
                        <li className='font-light text text-sm md:text-lg text-[#757575] leading-normal'>
                            <span className='text-[#333331]'>✔</span> Measurable Progress – Digital monitoring for therapists
                        </li>
                        <li className="font-light text text-sm md:text-lg text-[#757575] leading-normal">
                            <span className='text-[#333331]'>✔</span> Personalized Adaptation – Smart algorithms tailored to your pace
                        </li>
                        <li className="font-light text text-sm md:text-lg text-[#757575] leading-normal">
                            <span className="text-[#333331]">✔</span> Flexible Home Training – Train anytime, anywhere. For occupational therapy centers, specialized clinics, and home patients.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HandTherapy;
