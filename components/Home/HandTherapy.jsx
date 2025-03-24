import Image from "next/image";

const HandTherapy = () => {
  return (
    <section className="relative pt-12  md:py-16 lg:py-20 z-1 px-4">
      <Image
        src={"/images/ht-right.svg"}
        className="absolute right-0 top-0 w-[200px] md:w-[300px]"
        width={424}
        height={534}
        alt="right shape"
      />
      <div className="container mx-auto ">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 max-lg:gap-8 lg:grid-cols-2 items-center">
          <div className="lg:pl-14 pr-8 order-2 lg:order-1 max-lg:flex justify-center">
            <Image
              src={"/images/ht.png"}
              className="w-full max-md:-mr-4 -mb-14"
              width={424}
              height={534}
              alt="left image"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-3.5 lg:space-y-6">
            <h1 className="font-beatrice font-normal text-headText text-2xl sm:text-3xl md:text-[44px] leading-[1.3] pb-3 ">
              Achieve Success in{" "}
              <span className="font-semibold text-[#699980]">Hand Therapy</span>{" "}
              with Measurable Results
            </h1>
            <p className="w-full lg:w-[85%] font-light text text-sm md:text-lg text-[#757575] leading-normal">
              Our interactive therapy with the DextEgg System enhances your fine
              motor skills, allowing you to perform daily movements with
              confidence and ease.
            </p>
            <ul className="w-full grid gap-1  ">
              <li className="font-light text text-sm md:text-lg text-[#757575] leading-normal">
                <span className="text-[#333331]">✔</span> Gamified Training –
                Engaging exercises with real-time feedback
              </li>
              <li className="font-light text text-sm md:text-lg text-[#757575] leading-normal">
                <span className="text-[#333331]">✔</span> Measurable Progress –
                Digital monitoring for therapists
              </li>
              <li className="font-light text text-sm md:text-lg text-[#757575] leading-normal">
                <span className="text-[#333331]">✔</span> Personalized
                Adaptation – Smart algorithms tailored to your pace
              </li>
              <li className="font-light text text-sm md:text-lg text-[#757575] leading-normal">
                <span className="text-[#333331]">✔</span> Flexible Home Training
                – Train anytime, anywhere. For occupational therapy centers,
                specialized clinics, and home patients.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HandTherapy;
