import Image from "next/image";

const CommingSoon = () => {
  return (
    <section className="relative overflow-x-clip px-4 py-12 md:py-16 lg:py-32 z-1 bg-[#EFFAF4]">
      <Image
        className="absolute -left-24 sm:left-0 bottom-0   w-[200px] md:w-[350px] "
        src={"/images/left.svg"}
        alt="right"
        width={400}
        height={400}
      />
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2  max-lg:gap-8 items-center max-w-[1200px] mx-auto">
          <div className="">
            <h1 className="font-beatrice font-normal text-headText text-2xl sm:text-3xl md:text-[44px] leading-[1.3] ">
              Not Available Yet – But{" "}
              <span className="font-semibold text-[#699980]">Coming Soon!</span>
            </h1>

            <p className="w-full lg:max-w-[430px] font-light text text-sm md:text-lg text-[#757575] leading-normal mt-2 mb-6">
              Our solution is still under development. Subscribe to our
              newsletter for exclusive updates.
            </p>

            <h5 className="font-normal text-xl md:text-2xl text-headText">
              For healthcare professionals:
            </h5>
            <p className="w-full lg:max-w-[430px] font-light text text-sm md:text-lg text-[#757575] leading-normal mt-2 mb-6 md:mb-8">
              Contact us for an exclusive demo and early testing opportunities.
            </p>
          </div>
          <div className="">
            <Image
              className="w-full -mb-8"
              width={594}
              height={340}
              src={"/images/cs.png"}
              alt="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommingSoon;
