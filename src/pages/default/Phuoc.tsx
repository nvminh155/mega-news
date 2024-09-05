import Hashtag from "@/components/hashtag/Hashtag";
import LoadingBar from "@/components/loadingBar/LoadingBar";

export const Phuoc = () => {
  return (
    <div>
      <div>
        <Hashtag srcImage="public/food01.jpg" title="Food" />

        <Hashtag srcImage="public/food01.jpg" title="Food" status="variant2" />
      </div>
      <br></br>

      <div>
        <p>small 320px 20%</p>
        <LoadingBar size="small" percent={20} />
        <p>small 320px</p>
        <LoadingBar size="small" percent={100} />
        <p>size 270px 20%</p>
        <LoadingBar size={270} percent={20} />
        <p>larg 540px 40%</p>
        <LoadingBar size="larg" percent={40} />
        <p>larg 540px </p>
        <LoadingBar size="larg" percent={100} />
      </div>
    </div>
  );
};
