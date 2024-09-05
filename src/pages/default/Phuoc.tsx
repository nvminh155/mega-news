import { ESize } from "@/types";

import Hashtag from "@/components/hashtag/Hashtag";
import LoadingBar from "@/components/loadingBar/LoadingBar";

export const Phuoc = () => {
  return (
    <div>
      <div>
        <Hashtag srcimg="public/food01.jpg" title="Food" status="cover" />

        <Hashtag srcimg="public/food01.jpg" title="Food" status="split" />
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
