

const AvatarOne = () => {
  return (
    <div className="flex h-[266px] w-[232px] flex-col items-center justify-evenly space-y-6 rounded-xl bg-white shadow-lg">
      <img className="h-[124px] w-[124px] object-cover" src="/avatar.svg" alt="" />
      <p className="h-[15px] w-[52px] text-xs font-bold text-tertiary-75">
        Designer
      </p>
      <button className="h-[47px] w-[212px] rounded-xl bg-[#F5F5F5] text-md font-bold">
        Jon Kantner
      </button>
    </div>
  );
};

export default AvatarOne;
