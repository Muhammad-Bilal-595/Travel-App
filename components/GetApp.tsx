import Image from "next/image";
import Button from "./Button";

const GetApp = () => {
  return (
    <>
      <section className="flexCenter w-full flex-col pb-[100px]">
        <div className="get-app">
          <div className="flex z-20 w-full  flex-1 flex-col items-start justify-center gap-12">
            <h2 className="bold-40 lg:bold-64 capitalize xl:max-w-[320px]">
              Get for free now!
            </h2>
            <p className="regular-16 text-gray-10">
              Available on Android and iOS, download now!{" "}
            </p>
            <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row ">
              <Button
                type="button"
                title="App Store"
                icon="/apple.svg"
                varient="btn_white"
                full
              />
              <Button
                type="button"
                title="Play Store"
                icon="/android.svg"
                varient="btn_dark_green_outline"
                full
              />
            </div>
          </div>
          <div className="flex flex-1 items-center justify-end">
            <Image src={"/phones.png"} alt="phones" width={440} height={1000} />
          </div>
        </div>
      </section>
    </>
  );
};

export default GetApp;
