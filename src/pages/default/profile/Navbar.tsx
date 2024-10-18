interface NavBarProps {
  children: React.ReactNode; // Đây là prop sẽ nhận nhiều component
  bgImg: string;
}

const NavBar: React.FC<NavBarProps> = ({ children, bgImg }) => {
  return (
    <div className="flex w-full flex-col gap-md items-center rounded-xl bg-gray p-sm">
      <div className="flex h-[150px] flex-col items-center justify-center">
        <img
          className="h-full w-full rounded-lg object-cover"
          src={bgImg}
          alt="background"
        />
      </div>
      <div className="flex w-full items-center justify-between">{children}</div>
    </div>
  );
};

export default NavBar;
