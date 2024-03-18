import React from "react";
import Image from "next/image";
import Camp from "/public/camp.svg";
import Stars from "/public/star.svg";
import Button from "./button";
import Play from "/public/play.svg";
import Close from "/public/close.svg";

const Hero = () => {
  return (
    <section className="max-container flex flex-col   px-4 md:gap-28 lg:py-20 xl:flex-row  gap-28 py-10 pb-32 border-red-500">
      <div className="flex flex-col lg:flex-row">
        <div className="px-20">
          <div className="hero-map" />

          {/* Left */}
          <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
            <Image src={Camp} alt="Camp" width={50} height={50} />
          </div>
          <h1 className="bold-52 lg:bold-88 z-10">Lorem ipsum dolor sit. </h1>
          <p className="regular-16 mt-16 text-gray-30 xl:max-x-[520px] ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            assumenda fuga minima facilis rerum eaque, ullam officiis maiores
            eum? Nobis!
          </p>
          <div className="my-11 flex flex-wrap gap-5 z-30">
            <div className="flex item-center gap-2">
              {Array(5)
                .fill(1)
                .map((_, i) => (
                  <Image
                    src={Stars}
                    key={i}
                    width={24}
                    height={24}
                    alt="Star"
                  />
                ))}
              <p className="bold-16 lg:bold-20 text-blue-70">198k</p>
              <span className="regular-16 lg:regular-20">
                Excellent reviews
              </span>
            </div>
          </div>
          <div className="w-full p-4 flex flex-col gap-3 sm:flex-row">
            <Button type="button" title="Dowload App" variant="btn_green" />
            <Button
              type="button"
              title="How we work"
              variant="btn_white_text"
            />
          </div>
        </div>
        <div className="relative flex flex-1 items-start px-20">
          <div className="relative z-20 w-[268px] p-8 flex-col gap-8 rounded-3xl bg-green-90">
            <div className="flex flex-col">
              <div className="flexBetween">
                <p className="regular-16 text-gray-20">Location</p>
                <Image src={Close} width={24} height={24} alt="close" />
              </div>
              <p className="blod-20 text-white"> Lorem, ipsum dolor.</p>
            </div>
            <div className="flex flex-col">
              <div className="flexBetween">
                <p className="regular-16 block text-gray-20">Distance</p>
                <p className="bold-20 text-white">17.328 mi</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flexBetween">
                <p className="regular-16 block text-gray-20">Elevation</p>
                <p className="bold-20 text-white">2.040 km</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
