import Image from "next/image";

export default function Footer() {
  return (
    <footer className="pt-10 pb-10 px-4 md:pt-16 lg:pt-20 md:pb-16 relative  bg-[#283646] overflow-hidden">
      <Image
        className="absolute left-0 top-0 max-sm:size-[200px] max-sm:-ml-24"
        src={"/images/footer-union.svg"}
        alt="footer shape"
        width={240}
        height={240}
      />

      <div className="container mx-auto relative">
        <div className="max-w-[1230px] mx-auto">
          <div className="grid grid-cols-12 gap-8 pb-10 md:pb-16 lg:pb-28 border-b border-[#699980]">
            <div className="col-span-12 lg:col-span-3 xl:col-span-3">
              <a href="#">
                <Image
                  className="w-40"
                  src={"/images/logo/logo.png"}
                  alt="footerLogo"
                  width={160}
                  height={160}
                />
              </a>
              <p className="mt-2 font-normal text-base text-[#CFD3D7] max-w-[90%]">
                MedTech (Medical Technology) with a focus on Rehabilitation
                Technology
              </p>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-2">
              <h2 className="font-bold text-base text-[#699980] capitalize mb-5">
                Service
              </h2>
              <ul className="space-y-3">
                <li>
                  <a className="font-normal text-base text-[#CFD3D7]" href="#">
                    Parkinson’s disease
                  </a>
                </li>
                <li>
                  <a className="font-normal text-base text-[#CFD3D7]" href="#">
                    multiple sclerosis
                  </a>
                </li>
                <li>
                  <a className="font-normal text-base text-[#CFD3D7]" href="#">
                    Stroke
                  </a>
                </li>
                <li>
                  <a className="font-normal text-base text-[#CFD3D7]" href="#">
                    hand Injuries
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-2">
              <h2 className="font-bold text-base text-[#699980] capitalize mb-5">
                Company
              </h2>
              <ul className="space-y-3">
                <li>
                  <a className="font-normal text-base text-[#CFD3D7]" href="#">
                    Rehabilitation Clinics
                  </a>
                </li>
                <li>
                  <a className="font-normal text-base text-[#CFD3D7]" href="#">
                    Occupational Therapy
                  </a>
                </li>
                <li>
                  <a className="font-normal text-base text-[#CFD3D7]" href="#">
                    Home Therapy
                  </a>
                </li>
                <li>
                  <a className="font-normal text-base text-[#CFD3D7]" href="#">
                    On The Go
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-12 lg:col-span-4 xl:col-span-5">
              <h2 className="text-[#699980] font-bold mb-5">
                Join a Newsletter
              </h2>
              <label
                className="font-normal text-base text-[#CFD3D7] mb-3"
                htmlFor="email"
              >
                Your Email
              </label>

              <div className="flex mt-2">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className="max-w-[180px] p-2 md:max-w-[320px] w-full md:p-4 bg-[#4F5A68] placeholder:text-[#77808B] border border-[#387AE7] text-[#CFD3D7] focus:outline-none focus:ring focus:ring-green-400"
                />
                <button className="w-24 sm:w-40 ml-2 md:ml-4 font-medium text-sm bg-[#699980] text-white px-2 md:px-4 py-2 rounded-md">
                  Subscribe
                </button>
              </div>

              <div className="flex space-x-3 mt-6">
                <a
                  href="#"
                  className="bg-[#699980] w-10 h-10 flex items-center justify-center rounded-full text-base font-bold text-white"
                >
                  Dr
                </a>
                <a
                  href="#"
                  className="bg-[#699980] w-10 h-10 flex items-center justify-center rounded-full text-base font-bold text-white"
                >
                  Be
                </a>
                <a
                  href="#"
                  className="bg-[#699980] w-10 h-10 flex items-center justify-center rounded-full text-base font-bold text-white"
                >
                  Ig
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse max-md:gap-4 max-md:items-center  lg:grid lg:grid-cols-12 pt-8">
            <div className="flex md:flex-row mt-4 items-center lg:col-span-3 xl:col-span-5">
              <p className="font-normal text-base text-[#CFD3D7]">
                &copy; Copyright{" "}
              </p>
              <Image
                width={80}
                height={80}
                className="w-20"
                src={"/images/logo/logo.png"}
                alt="logo"
              />
            </div>

            <div className="flex w-full flex-col md:flex-row lg:justify-end lg:col-span-9 xl:col-span-7">
              <div className="flex items-start ">
                <Image
                  className="mr-3"
                  src={"/images/icons/location_on.svg"}
                  alt="icon"
                  width={30}
                  height={30}
                />
                <p className="font-normal text-base text-[#CFD3D7] w-[80%]">
                  8819 Ohio St. South Gate, CA 90280
                </p>
              </div>

              <div className="flex items-start mt-3 md:mt-0 md:ml-5">
                <Image
                  className="mr-3"
                  src={"/images/icons/email.svg"}
                  alt="icon"
                  width={30}
                  height={30}
                />
                <a className="font-normal text-base text-[#CFD3D7]" href="#">
                  gorehab@hello.com
                </a>
              </div>

              <div className="flex items-start mt-3 md:mt-0 md:ml-5 shrink-0">
                <Image
                  className="mr-3"
                  src={"/images/icons/call.svg"}
                  alt="icon"
                  width={30}
                  height={30}
                />
                <a className="font-normal text-base text-[#CFD3D7]" href="#">
                  +1 386-688-3295
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
