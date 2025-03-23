import React from 'react';

const CommingSoon = () => {
    return (
        <section className='relative py-12 md:py-16 lg:py-20 z-1 bg-[#EFFAF4]'>
        <img className='absolute left-0 bottom-0 -z-1' src="/images/left.png" alt="right" />
        <div className="container mx-auto px-4 grid grid-cols-12 items-center">
            
            <div className="col-span-12 lg:col-span-5">

                <h1 className="font-beatrice font-normal text-headText text-2xl sm:text-3xl md:text-[44px] leading-[1.3] ">
                    Not Available Yet – But <span className="font-semibold text-[#699980]">Coming Soon!</span>
                </h1>

                <p className="w-full lg:w-[85%] font-light text text-sm md:text-lg text-[#757575] leading-normal mt-2 mb-6">
                Our solution is still under development. Subscribe to our newsletter for exclusive updates.
                </p>

                <h5 className='font-normal text-xl md:text-2xl text-headText'>For healthcare professionals:</h5>
                <p className='w-full lg:w-[85%] font-light text text-sm md:text-lg text-[#757575] leading-normal mt-2 mb-6 md:mb-8'>Contact us for an exclusive demo and early testing opportunities.</p>

            </div>

            <div className="col-span-12 lg:col-span-7">
                <img className='w-full' src="/images/cs.png" alt="image" />
            </div>

        </div>
    </section>
    );
};

export default CommingSoon;