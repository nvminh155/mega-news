type CardSliderProps = {
  title?: string;
  description?: string;
  src?: string;
};

const CardSlider: React.FC<CardSliderProps> = ({
  title = "TItle",
  description = "description",
  src,
}) => {
  return (
    <div className="relative h-full w-full">
      <img src={src} className="x h-full w-full rounded-md" alt="background" />
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
