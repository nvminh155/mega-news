interface NavBarProps {
  children: React.ReactNode; // Đây là prop sẽ nhận nhiều component
  bgImg: string;
}

const NavBar: React.FC<NavBarProps> = ({ children, bgImg }) => {
  return (
    <div className="flex h-[260px] w-full flex-col items-center rounded-xl px-sm bg-gray mb-[45px]">
      <div className="mt-2 flex h-[150px] flex-col items-center justify-center">
        <img
          className="h-full w-full rounded-lg object-cover"
          src={bgImg}
          alt="background"
        />
      </div>
      <div className="flex h-[100px] w-full items-center justify-between">
        {children}
      </div>
    </div>
  );
};

export default NavBar;
