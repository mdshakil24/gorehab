export default function Footer() {
  return (
    <footer className="pt-10 pb-10 md:pt-16 lg:pt-20 md:pb-16 relative  bg-[#283646] overflow-hidden">
      <img className="w-[280px] absolute left-0 top-0" src="/images/footer-union.png" alt="Image" />
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-12 gap-8 pb-10 md:pb-16 lg:pb-28 border-b border-[#699980]">

          <div class="col-span-12 lg:col-span-3 xl:col-span-3">
            <a href="#"><img className="w-40" src="/images/logo/logo.png" alt="footerLogo" /></a>
            <p class="mt-2 font-normal text-base text-[#CFD3D7] max-w-[90%]">MedTech (Medical Technology) with a focus on Rehabilitation Technology</p>
          </div>

          <div class="col-span-12 md:col-span-6 lg:col-span-2">
            <h2 class="font-bold text-base text-[#699980] capitalize mb-5">Service</h2>
            <ul class="space-y-3">
              <li><a className="font-normal text-base text-[#CFD3D7]" href="#">Parkinson’s disease</a></li>
              <li><a className="font-normal text-base text-[#CFD3D7]" href="#">multiple sclerosis</a></li>
              <li><a className="font-normal text-base text-[#CFD3D7]" href="#">Stroke</a></li>
              <li><a className="font-normal text-base text-[#CFD3D7]" href="#">hand Injuries</a></li>
            </ul>
          </div>


          <div class="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-2">
            <h2 class="font-bold text-base text-[#699980] capitalize mb-5">Company</h2>
            <ul class="space-y-3">
              <li><a className="font-normal text-base text-[#CFD3D7]" href="#">Rehabilitation Clinics</a></li>
              <li><a className="font-normal text-base text-[#CFD3D7]" href="#">Occupational Therapy</a></li>
              <li><a className="font-normal text-base text-[#CFD3D7]" href="#">Home Therapy</a></li>
              <li><a className="font-normal text-base text-[#CFD3D7]" href="#">On The Go</a></li>
            </ul>
          </div>


          <div class="col-span-12 lg:col-span-4 xl:col-span-5">
            <h2 class="text-[#699980] font-bold mb-5">Join a Newsletter</h2>
            <label className="font-normal text-base text-[#CFD3D7] mb-3" for="email">Your Email</label>

            <div class="flex mt-2">
              <input type="email" id="email" placeholder="Enter Your Email"
                class="max-w-[180px] p-2 md:max-w-[320px] w-full md:p-4 bg-[#4F5A68] placeholder:text-[#77808B] border border-[#387AE7] text-[#CFD3D7] focus:outline-none focus:ring focus:ring-green-400" />
              <button class="w-24 sm:w-40 ml-2 md:ml-4 font-medium text-sm bg-[#699980] text-white px-2 md:px-4 py-2 rounded-md">Subscribe</button>
            </div>

            <div class="flex space-x-3 mt-6">
              <a href="#" class="bg-[#699980] w-10 h-10 flex items-center justify-center rounded-full text-base font-bold text-white">Dr</a>
              <a href="#" class="bg-[#699980] w-10 h-10 flex items-center justify-center rounded-full text-base font-bold text-white">Be</a>
              <a href="#" class="bg-[#699980] w-10 h-10 flex items-center justify-center rounded-full text-base font-bold text-white">Ig</a>
            </div>
          </div>

        </div>

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 pt-8">

          <div className="flex md:flex-row mt-4 items-center lg:col-span-3 xl:col-span-5">
            <p className="font-normal text-base text-[#CFD3D7]">&copy; Copyright </p>
            <img className="w-20" src="/images/logo/logo.png" alt="logo" />
          </div>

          <div className="flex flex-col md:flex-row lg:justify-end lg:col-span-9 xl:col-span-7">

            <div className="flex items-start ">
              <img className="mr-3" src="/images/icons/location_on.png" alt="icon" />
              <p className="font-normal text-base text-[#CFD3D7] w-[80%]">8819 Ohio St. South Gate,
              CA 90280</p>
            </div>

            <div className="flex items-start mt-3 md:mt-0 md:ml-5">
              <img className="mr-3" src="/images/icons/email.png" alt="icon" />
              <a className="font-normal text-base text-[#CFD3D7]" href="#">gorehab@hello.com</a>
            </div>

            <div className="flex items-start mt-3 md:mt-0 md:ml-5">
              <img className="mr-3" src="/images/icons/call.png" alt="icon" />
              <a className="font-normal text-base text-[#CFD3D7]" href="#">+1 386-688-3295</a>
            </div>

          </div>
        </div>


      </div>
    </footer>

  );
}
