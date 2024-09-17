import { TitleSection } from "@/components/TitleSection";

import Categories from "./Categories";
import CopyRight from "./CopyRight";
import NewsLetter from "./NewsLetter";
import SocialNetwork from "./SocialNetwork";

const AboutMegaNews = () => (
  <TitleSection text="Mega News" containerClassName="col-span-2">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra
      accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel
      elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem
      mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh
      tortor id aliquet lectus proin
    </p>
  </TitleSection>
);

const LeftFooter = () => {
  return (
    <div className="w-1/2 rounded-br-[50px] rounded-tr-[50px] bg-tertiary/5">
      <div className="grid grid-cols-4 gap-[20px] gap-x-[152px] p-lg">
        <AboutMegaNews />
        <Categories />

        <NewsLetter />
        <SocialNetwork />
      </div>

      <CopyRight />
    </div>
  );
};

export default LeftFooter;
