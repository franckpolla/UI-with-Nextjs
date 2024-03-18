import { PEOPLE_URL } from "@/constant";
import Image from "next/image";
import Map from "/public/folded-map.svg";
interface Camprops {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampStite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: Camprops) => {
  return (
    <div
      className={`h-full w-full min-w[1100px] ${backgroundImage} bg-cover rounded-2xl bg-no-repeat lg:rounded-2xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter ha.gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src={Map} width={25} height={25} alt="map" />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                src={url}
                key={url}
                alt="person"
                width={20}
                height={20}
                className="rounded-full inline-block h-10 w-10"
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar xl:h-[640px] px-4 flex h-96 w-full flex-col md:flex-row  items-start justify-start gap-8 overflow-x-auto lg:h-[400px]">
        <CampStite
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen ,Pasuruan"
          peopleJoined="50+ Joined"
        />

        <CampStite
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="Prigen ,Pasuruan"
          peopleJoined="50+ Joined"
        />
      </div>

      <div className="flexCenter lg:flexEnd  mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-500 px-8 py-4 lg:max-w-[300px] xl:max-w-[534px] xl:rounded-5xl xl:px-10 xl:py-4 relative w-96  overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> And Not konwing The way
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
            nostrum deserunt voluptatem error officia id, aperiam architecto?
            Minima, suscipit impedit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Camp;
