import FormInput from "@/components/form/FormInput";
import FormSearch from "@/components/form/FormSearch";

const Tuan = () => {
  return (
    <>
      <div>
        <h1 className="mb-3 text-center text-3xl font-semibold">Form Input</h1>
        <div className="flex h-full w-full flex-col gap-5">
          <div>
            <FormInput label={true} placeholder={false} />
          </div>
          <div>
            <FormInput label={false} placeholder={true} />
          </div>
        </div>
      </div>
      <div className="my-5 flex h-[300px] w-[488px] flex-col gap-5">
        <FormSearch />
        <FormSearch isThreeDots={true} />
      </div>
    </>
  );
};

export default Tuan;
