type DropdownProps = {
  items?: string[];
};

const Dropdown = ({ items }: DropdownProps) => {
  return (
    <div className="absolute top-full mt-6 w-[170px] cursor-pointer rounded-md bg-white shadow-lg">
      <ul className="text-tertiary-75 flex h-[160px] flex-col justify-center space-y-1 p-2 text-xs">
        {items &&
          items.length > 0 &&
          items.map((item) => (
            <li className="rounded px-2 py-1 hover:bg-input">{item}</li>
          ))}
      </ul>
    </div>
  );
};

export default Dropdown;
