const Contact = () => {
    return (
        <section className="bg-[#FAFAFA] py-12 md:py-24 lg:py-32 relative">
            <div className="container mx-auto px-4">
                <h1 className="max-w-xl mx-auto text-center font-beatrice font-semibold text-headText text-2xl sm:text-3xl md:text-[44px] leading-[1.3] mb-6">
                    Get in touch with us.
                    We're here to assist you.
                </h1>
                <div className="max-w-[800px] mx-auto">
                    <form action="">

                        <div className="grid grid-cols-12 gap-5 md:gap-10">
                            <div className="col-span-12 md:col-span-6">
                                <label className="block font-medium text-sm sm:text-lg md:text-xl lg:text-2xl text-headText mb-2" htmlFor="fname">First Name</label>
                                <input className="w-full font-normal text-sm sm:text-lg text-[#757575] border border-[#757575] rounded-lg p-3 sm:p-4 outline-0" id="fname" type="text" placeholder="Enter your first name" />
                            </div>
                            <div className="col-span-12 md:col-span-6">
                                <label className=" block font-medium text-sm sm:text-lg md:text-xl lg:text-2xl text-headText mb-2" htmlFor="email">Email</label>
                                <input className="w-full font-normal text-sm sm:text-lg text-[#757575] border border-[#757575] rounded-lg p-3 sm:p-4 outline-0" id="email" type="text" placeholder="Enter your email" />
                            </div>
                        </div>

                        <div className="mt-5">
                            <label className="block font-medium text-sm sm:text-lg md:text-xl lg:text-2xl text-headText mb-2 resize-none" htmlFor="email">Message</label>
                            <textarea className="w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] font-normal text-sm sm:text-lg text-[#757575] border border-[#757575] rounded-lg p-3 sm:p-4 outline-0" id="" placeholder="Message"></textarea>
                        </div>

                        <button type="submit" className="font-bold text-white w-full bg-[#699980] py-3 md:py-4 rounded-lg text-sm sm:text-lg mt-5 sm:mt-6 md:mt-10">Submit</button>


                    </form>
                </div>
            </div>

        </section>
    );
};

export default Contact;