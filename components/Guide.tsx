import Image from "next/image";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className=" padding-container max-container w-full pb-24">
        <Image src={"/camp.svg"} alt="camp" height={50} width={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are here for you
        </p>
        <div className="flex  flex-wrap justify-between gap-5">
          <h2 className="bold-40 lg:bold-60 xl:max-w-[390px]">
            Easy to use path
          </h2>
          <p className="reagular-16 text-gray-30 xl:max-w-[520px]">
            Only with the hillink application you will on longer get lost and
            get lost again, because we already support offline maps when there
            is no in ter net connection in the field.Invite friends ,relative to
            have fun in the wildness through the valley and reach the top of the
            mountain.
          </p>
        </div>
      </div>
      <div className=" flexCenter max-container relative w-full ">
        <Image
          src={"/boat.png"}
          alt="boat"
          height={1140}
          width={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />
        <div
          className="border shadow-[0px_15px_10px_-12px_rgba(0,0,0,0.5)]  absolute flex bg-white py-8 pl-5
         pr-7 gap-3 rounded-3xl  md:left-[5%] lg:top-20"
        >
          <Image
            src={"/meter.svg"}
            alt="meter"
            height={16}
            width={158}
            className="w-auto h-full drop-shadow-[2px_2px_2px_rgba(0,255,0,0.5)]"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col ">
              <div className="flexBetween w-full ">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-18 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>

            <div className="flex w-full flex-col ">
              <p className="regular-16 text-gray-20">Start Track</p>

              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Wonorejo Pasuruan
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
