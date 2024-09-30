import { useEffect, useState } from "react";
import { TAdvertising } from "@/types";

import { cn } from "@/lib/cn";

import { adsData } from "./data";

interface AdvertisingProps {
  className?: string;
}
const Advertising: React.FC<AdvertisingProps> = ({ className }) => {
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
    <div className={cn(className)}>
      {ads.map((ad, index) => (
        <div
          key={ad.id}
          className={cn(
            "relative h-[180px] w-full overflow-hidden rounded-xl shadow-lg",
            index != 0 && "max-tablet:hidden"
          )}
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
    </div>
  );
};

export default Advertising;
