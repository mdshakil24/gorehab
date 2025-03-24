import Image from "next/image";

export default function Header() {
  return (
    <header className="py-5 px-4 md:py-7 ">
      <div className="container mx-auto">
        <div className="max-w-[1230px] mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <a href="#">
                <Image
                  className="w-32"
                  src={"/images/logo/logo.png"}
                  alt="websiteLogo"
                  width={128}
                  height={128}
                />
              </a>
            </div>

            <div>
              <ul className="flex items-center ">
                <li>
                  <a className="font-semibold text-base text-headText" href="#">
                    DE{" "}
                  </a>
                </li>
                <span className="mx-1">| </span>
                <li>
                  <a href="#"> EN</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
