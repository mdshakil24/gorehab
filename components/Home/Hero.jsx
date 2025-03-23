import Image from "next/image";

export default function Hero() {
  return (


    <section className="bg-[url('/images/hero-bg.png')] bg-no-repeat bg-cover xl:bg-[100%_100%] bg-center pt-10 pb-14 sm:pt-12 sm:pb-16 md:pt-14 md:pb-28">

{/* <div className="pt-6 space-y-10 w-[300px] h-[300px] relative" >
      <img src={"/images/s1.png"} alt="coin" fill />
      <h2 className="text-5xl font-beatrice">Headering </h2>
    </div> */}

      <div className="container mx-auto px-4 grid grid-cols-12 items-center">
        <div className="w-full md:w-[85%] col-span-12 lg:col-span-6">
            <h1 className="font-beatrice font-normal text-white text-2xl sm:text-3xl md:text-[40px] leading-[1.3] ">Regain Control Over Your <span className="font-semibold">Hands with DextEgg</span> – For an Active Life</h1>
            <p className="font-normal text text-sm md:text-lg text-white leading-normal mt-2 mb-8">Our interactive therapy with the DextEgg System enhances your fine motor skills, allowing you to perform daily movements with confidence and ease.</p>
          <div className="flex flex-row items-center">
            <a className="font-bold text-sm sm:text-[15px] text-headText bg-[#BBCCC2] border-2 border-[#BBCCC2] max-w-[200px] w-full p-3 text-center rounded-md mr-4" href="#">Contact Us</a>
            <a className="font-bold text-sm sm:text-[15px] text-white bg-tranparent border-2 border-white col-span-12 lg:col-span-6 max-w-[200px] w-full p-3 text-center rounded-md mr-2" href="#">Newsletter</a>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 mt-8 md:mt-10 lg:mt-0">
            <img className="w-full" src="/images/hero-right.png" alt="HeroImage" />
          </div>
      </div>
    </section>
  );
}
