import { ESize, ETags, IMG_URL } from "@/types";

import Hashtag from "@/components/hashtag/Hashtag";
import LoadingBar from "@/components/loadingBar/LoadingBar";

export const Phuoc = () => {
  console.log(`${IMG_URL}/${ETags.FOOD}/01`);
  return (
    <div>
      <div>
        <Hashtag imgIndex={2} title={ETags.FOOD} status="cover" />

        <Hashtag imgIndex={3} title={ETags.TECHNOLOGY} status="split" />
      </div>
      <br></br>

      <div>
        <p>small 320px 20%</p>
        <LoadingBar size={ESize.Small} percent={20} />
        <p>small 320px</p>
        <LoadingBar size={ESize.Small} percent={100} />
        <p>size 270px 20%</p>
        <LoadingBar size={270} percent={20} />
        <p>larg 540px 40%</p>
        <LoadingBar size={ESize.Large} percent={40} />
        <p>larg 540px </p>
        <LoadingBar size={ESize.Large} percent={100} />
      </div>
    </div>
  );
};
