"use client"; // Needed for Next.js (if using App Router)

import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const About = () => {
  const teamMembers = [
    {
      name: "Nick Krummenacher",
      role: "Founder CEO",
      image: "/images/s1.png",
    },
    {
      name: "Dr. Samuel Knobel",
      role: "Founder CTO",
      image: "/images/s2.png",
    },
    {
      name: "Dr. Stephan Gerber",
      role: "QA/RA",
      image: "/images/s3.png",
    },
    {
      name: "Dr. Samuel Knobel",
      role: "Founder CTO",
      image: "/images/s2.png",
    },
    {
      name: "Nick Krummenacher",
      role: "Founder CEO",
      image: "/images/s1.png",
    },
  ];

  return (
    <section className="relative  px-4 py-12 sm:py-16 overflow-x-clip ">
      <Image
        className="absolute w-[200px] md:w-[350px] -right-24 sm:right-0 top-10 sm:top-12 md:top-16 lg:top-20 -z-1"
        src={"/images/right.svg"}
        alt="right"
        width={400}
        height={400}
      />
      <div className="container mx-auto relative">
        <div className="text-center">
          <h1 className="font-beatrice font-normal text-headText text-2xl sm:text-3xl md:text-[44px] leading-[1.3] ">
            About Us
          </h1>

          <div className="max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-18 lg:mb-22">
            <p className="font-light text text-sm md:text-lg text-[#757575] leading-normal mt-2 mb-6">
              We are a young startup from the ARTORG Center for Biomedical
              Engineering Research at the University of Bern. Our goal is to
              redefine rehabilitation through innovative, interactive, and
              data-driven solutions, with our first solution being the DextEgg
              System.
            </p>
            <p className="font-light text text-sm md:text-lg text-[#757575] leading-normal mt-2 mb-6">
              We are passionate about providing effective and motivating therapy
              for individuals with rehabilitative needs—independent of location
              and time. By leveraging digital technologies, we aim to
              revolutionize therapy both in clinics and beyond, fostering
              long-term improvements in independent daily living.
            </p>
          </div>
        </div>

        <div className="w-full px-4 max-w-4xl mx-auto">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide
                key={index}
                className="flex flex-col items-center justify-center text-center"
              >
                <div className="relative w-60 h-60 rounded-full mx-auto ">
                  <Image
                    className="absolute left-0 top-0 w-full h-full"
                    src={"/images/image-circle.svg"}
                    alt="shape two"
                    width={400}
                    height={400}
                  />
                  <Image
                    className="object-fit-cover rounded-full mx-auto "
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                  />
                </div>
                <h3 className="font-semibold text-base sm:text-lg md:text-xl text-[#699980] mt-4 md:mt-5">
                  {member.name}
                </h3>
                <p className="font-normal text-base sm:text-lg md:text-xl text-[#757575] mt-1">
                  {member.role}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default About;
