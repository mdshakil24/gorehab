import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative px-4  pt-10 pb-14 sm:pt-12 sm:pb-16 md:pt-14 md:pb-28">
      <Image
        src={"/images/hero-bg.svg"}
        className="w-full object-cover object-bottom"
        alt="hero bg"
        fill
      />
      <div className="container mx-auto relative ">
        <div className="max-w-[1230px] mx-auto">
          <div className="grid grid-cols-1 max-lg:gap-12 lg:grid-cols-2 items-center">
            <div className="pr-4 lg:pr-14">
              <h1 className="font-beatrice font-normal text-white text-2xl sm:text-3xl md:text-[40px] leading-[1.3] ">
                Regain Control Over Your{" "}
                <span className="font-semibold">Hands with DextEgg</span> – For
                an Active Life
              </h1>
              <p className="font-normal text text-sm md:text-lg text-white leading-normal mt-2 mb-8">
                Our interactive therapy with the DextEgg System enhances your
                fine motor skills, allowing you to perform daily movements with
                confidence and ease.
              </p>
              <div className="flex flex-row items-center pt-4">
                <a
                  className="font-bold text-sm sm:text-[15px] text-headText bg-[#BBCCC2] border-2 border-[#BBCCC2] max-w-[200px] w-full p-3 text-center rounded-md mr-4"
                  href="#"
                >
                  Contact Us
                </a>
                <a
                  className="font-bold text-sm sm:text-[15px] text-white bg-tranparent border-2 border-white col-span-12 lg:col-span-6 max-w-[200px] w-full p-3 text-center rounded-md mr-2"
                  href="#"
                >
                  Newsletter
                </a>
              </div>
            </div>
            <div className="">
              <Image
                className="w-full"
                src={"/images/hero-right.png"}
                alt="HeroImage"
                width={650}
                height={410}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
