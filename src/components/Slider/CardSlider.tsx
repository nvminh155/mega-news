type CardSliderProps = {
  title?: string;
  description?: string;
  srcImg?: string;
};

const CardSlider: React.FC<CardSliderProps> = ({
  title = "TItle",
  description = "description",
  srcImg,
}) => {
  return (
    <div className="relative w-full max-h-[744px]">
      <img
        src={srcImg}
        className="h-[452px] w-full rounded-md"
        alt="background1"
      />
      <div className="content absolute bottom-0 w-full p-2">
        <div className="rounded-sm bg-white/75 p-4">
          <div className="text-xl font-semibold">{title}</div>
          <div className="text-sm">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
