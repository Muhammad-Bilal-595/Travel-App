import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className=" max-container padding-container flex flex-col gap-20  py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row ">
      <div className="hero-map" />
      {/*left side*/}
      <div className="relative z-20 flex fex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={40}
          height={40}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88 ">Putuk Truno Camp Area</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:w-[520px]">
          We whqant to be on each of yoyr journey seaking the satisfaction of
          seeing the incorruptable beauty of nature. We can help you on an
          adventure around the world in just one App.
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  alt="star"
                  width={20}
                  height={20}
                  key={index}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            192K
            <span className="regular-16 lg:regular-20 ml-1 ">
              Excellent Reviews
            </span>
          </p>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Download App" varient="btn_green" />
          <Button
            type="button"
            icon="/play.svg"
            title="How we work?"
            varient="btn_white_text"
          />
        </div>
      </div>
      <div className="relative flex flex-1 items-start lg:ml-[-60px] ">
        <div className="relative z-20 w-[268px] flex flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Locatin</p>
              <Image src="/close.svg" alt="locatin" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Aguas Calientes</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 text-gray-20">Destination</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
