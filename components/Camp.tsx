"use client";

import { PEOPLE_URL } from "@/constants";

import Image from "next/image";

interface Props {
  backgroundImge: string;
  title: string;
  subtle: string;
  peopleJoined: string;
}

const CamSide = ({ peopleJoined, title, subtle, backgroundImge }: Props) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImge} bg-cover bg-no-repeat lg:rounded-r-5xl  2xl:rounded-5xl mb-4 `}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src={"/folded-map.svg"} alt="map" width={24} height={24} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                key={url}
                src={url}
                alt="profile-pic"
                height={52}
                width={52}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-gray-10">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className=" 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex items-start justify-start w-full gap-8 h-[340px]  overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CamSide
          backgroundImge="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtle="Prigen, Pasuruan"
          peopleJoined="50 + Joined"
        />
        <CamSide
          backgroundImge="bg-bg-img-2"
          title="Mountain View Camp"
          subtle="Somewhere in whilderness"
          peopleJoined="30 + Joined"
        />
      </div>
      <div className=" flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8  lg:w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-44 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting fromthe anxiety of climbers when visiting new climbing
            location, the possiblity of getting lost is very larg. That's why we
            are here for those of you who whan to start an adventure
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
