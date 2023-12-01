import { FEATURES } from "@/constants";
import Image from "next/image";

const Features = () => {
  return (
    <section className="flexCenter flex-col overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src={"/phone.png"}
            alt="mobile"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>
        <div className="z-20 flex w-full flex-col lg:w-[60%] ">
          <div className="relative ">
            <Image
              src={"/camp.svg"}
              alt="camp"
              height={50}
              width={50}
              className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                varient={feature.variant}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type Props = {
  title: string;
  icon: string;
  varient: string;
  description: string;
};

const FeatureItem = ({ title, icon, varient, description }: Props) => {
  return (
    <li className="flex flex-1 w-full flex-col items-start">
      <div
        className={`rounded-full p-4 lg:p-7 ${
          varient === "green" ? "bg-green-50" : "bg-orange-50"
        }`}
      >
        <Image src={icon} alt="camp" height={28} width={28} />
      </div>
      <h2 className="bold-18 lg:bold-32 mt-5 capitalize ">{title}</h2>
      <p className="regular-16  my-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Features;
