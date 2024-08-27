const AvatarTwo = () => {
  return (
    <div className="relative flex h-[266px] w-[232px] flex-col items-center justify-evenly">
      <div className="shadow- absolute bottom-0 h-[206px] w-[232px] rounded-xl bg-white shadow-lg"></div>
      <div className="absolute z-10 flex h-full w-full flex-col items-center justify-evenly space-y-6">
        <img
          className="h-[124px] w-[124px] object-cover"
          src="/avatar.svg"
          alt=""
        />
        <p className="h-[15px] w-[52px] text-xs font-bold text-tertiary-75">
          Designer
        </p>
        <button className="h-[47px] w-[212px] rounded-xl bg-[#F5F5F5] text-md font-bold">
          Jon Kantner
        </button>
      </div>
    </div>
  );
};

export default AvatarTwo;
