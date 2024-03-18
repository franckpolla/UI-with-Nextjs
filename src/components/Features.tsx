import React from "react";
import Image from "next/image";
import Phone from "/public/phone.png";
import Camp from "/public/camp.svg";
import { FEATURES } from "@/constant";

type FeaturesItem = {
  title: string;
  icon: string;
  variant: string;
  description: string;
};

const FeaturesItem = ({ title, icon, variant, description }: FeaturesItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30"> </p>
    </li>
  );
};

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-no-repeat py-24">
      <div className="max-container flex padding-container relative w-full justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src={Phone}
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              src={Camp}
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px] lg:px-4"
            />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>
          <div className="flexCenter">
            <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
              {FEATURES.map((feature) => (
                <FeaturesItem
                  title={feature.title}
                  key={feature.title}
                  icon={feature.icon}
                  variant={feature.variant}
                  description={feature.description}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
