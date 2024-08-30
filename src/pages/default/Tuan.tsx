import { SubmitHandler, useForm } from "react-hook-form";

import FormInput from "@/components/form/FormInput";
import FormSearch from "@/components/form/FormSearch";

type FormValue = {
  [key: string]: string;
};
const Tuan = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit: SubmitHandler<FormValue> = (data: FormValue) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex h-[800px] w-[100%] flex-col space-y-[200px]">
        <div className="h-[40%] w-full">
          <form
            className="flex h-full w-full flex-col space-y-10"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="h-[48px] w-[488px]">
              <FormInput
                control={control}
                label="First Name"
                name="firstName"
                placeholder="First Name"
              />
            </div>
            <div className="h-[48px] w-[488px]">
              <FormInput
                control={control}
                label="Last Name"
                name="lastName"
                placeholder="Last Name"
              />
            </div>
            <div className="h-[48px] w-[488px]">
              <FormInput
                control={control}
                label="Number"
                name="number"
                placeholder="Number"
                type="number"
              />
            </div>

            <div className="h-[48px] w-[488px]">
              <button
                type="submit"
                className="mt-20 rounded bg-primary px-4 py-2 text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="h-[30%] w-full">
          <div className="h-[48px] w-[488px]">
            <form className="h-full w-full" onSubmit={handleSubmit(onSubmit)}>
              <FormSearch
                control={control}
                dots={true}
                placeholder={"Search anything"}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tuan;
