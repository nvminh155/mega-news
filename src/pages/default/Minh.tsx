import Avatar from "@/components/avatar/Avatar";

const Minh = () => {
  return (
    <div>
      <div className="title flex gap-14 bg-[#f9f9f9] p-8">
        <div>
          <div>Avatar inside</div>
          <Avatar
            type={"inside"}
            containerProps={{
              className: "",
            }}
          />
        </div>

        <div>
          <div>Avatar half side</div>
          <Avatar type={"half-side"} />
        </div>

        <div>
          <div>Avatar only</div>
          <Avatar
            containerProps={{
              className: "w-[44px] h-[44px]",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Minh;
