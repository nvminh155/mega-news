import { useEffect, useState } from "react";
import { TAdvertising } from "@/types";

import { adsData } from "./data";

const Advertising: React.FC = () => {
  const [ads, setAds] = useState<TAdvertising[]>([]);

  const fetchAds = async () => {
    try {
      setAds(adsData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAds();
  }, []);
  return (
    <>
      {ads.map((ad) => (
        <div
          key={ad.id}
          className="relative h-[180px] w-full overflow-hidden rounded-xl shadow-lg"
        >
          <div
            className="absolute inset-0 bg-cover bg-center blur-sm filter"
            style={{
              backgroundImage: `url(${ad.imageUrl})`,
            }}
          ></div>
          <div className="relative z-10 flex h-full items-center justify-center bg-black bg-opacity-40 text-white">
            <div className="text-center text-lg font-semibold">{ad.title}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Advertising;
