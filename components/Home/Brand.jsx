import Image from "next/image";

const Brand = () => {
  return (
    <div className="border-b-2 px-4 border-[#F3F3F3]">
      <div className="container mx-auto ">
        <div className="max-w-[1230px] mx-auto">
          <div className="flex flex-wrap items-center justify-center xl:justify-between py-8 sm:py-10">
            <Image
              className="m-4"
              width={99}
              height={90}
              src={"/images/brand/b1.svg"}
              alt="BrandLogo"
            />
            <Image
              className="m-4"
              width={200}
              height={36}
              src={"/images/brand/b2.svg"}
              alt="BrandLogo"
            />
            <Image
              className="m-4"
              width={210}
              height={87}
              src={"/images/brand/b3.svg"}
              alt="BrandLogo"
            />
            <Image
              className="m-4"
              width={267}
              height={60}
              src={"/images/brand/b4.svg"}
              alt="BrandLogo"
            />
            <Image
              className="m-4"
              width={168}
              height={46}
              src={"/images/brand/b5.svg"}
              alt="BrandLogo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
