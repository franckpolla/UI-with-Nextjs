import React from "react";
import Button from "./button";
import Phones from "/public/phones.png";
import Image from "next/image";

const GetApp = () => {
  return (
    <section className="flexCenter w-ful flex-col pb-[100px]">
      <div className="get-app ">
        <div className="z-20 flex -full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Get for free now!
          </h2>
          <p>
            Download the app to access our full range of features. It's
            completely free, and you
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Image src={Phones} width={550} height={870} alt="Phones" />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
