import React from "react";
import Image from "next/image";
import Camp from "/public/camp.svg";
import Boat from "/public/boat.png";
import Meter from "/public/meter.svg";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full ">
        <Image src={Camp} width={50} height={50} alt="camp" />
        <p className="regular-18 -mt-1 mb-3 text-green-50">
          WE ARE HERE FOR YOU
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          {" "}
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide You to Easy Path
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui saepe,
            voluptatibus tempore eligendi delectus modi eum commodi enim culpa
            tempora, iure, ratione vitae non veniam!
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full border-2 border-blue-500">
        <Image
          className="w-full object-cover  object-center 2xl:rounded-5xl"
          src={Boat}
          width={1400}
          height={500}
          alt="boat"
        />
        <div className="absolute flex  bg-white  py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20 ">
          <Image
            src={Meter}
            width={10}
            height={18}
            alt="meter"
            className="flex-start"
          />
          <div className="flex flex-col">
            <div className="flexBetween flex-col">
              <div className="flex w-full flex-col">
                <div className="flexBetween w-full">
                  <p className="regular-16 text-gray-20">Destination</p>
                  <p className="bold-16 text-green-50">48 min</p>
                </div>
              </div>
              <p className="bold-20 mt-2"> Aguas calientes</p>
            </div>

            <div className="flex  flex-col w-full">
              <p className="regular-16 text-gray-20 ">start track</p>
              <h4 className="bold-16 mt-2 whitespace-nowrap">wonorejof</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Guide;
