import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const formInputVariants = cva("max-w-[488px]", {
  variants: {
    placeholder: {
      true: "placeholder:text-[#3E3232] placeholder:text-xs w-full rounded-xl border border-[#E6E6E6] bg-input p-2",
      false: "w-full rounded-xl border border-[#E6E6E6] bg-input p-2",
    },
  },
  defaultVariants: {
    placeholder: false,
  },
});

type FormInputProps = VariantProps<typeof formInputVariants> & {
  label?: boolean;
};

const FormInput = ({ placeholder = false, label = true }: FormInputProps) => {
  return (
    <div>
      <form>
        {label && (
          <label
            htmlFor="inputField"
            className={cn("mb-4 block text-md font-semibold text-tertiary")}
          >
            First Name
          </label>
        )}
        {/* Sử dụng className từ cva với biến thể placeholder */}
        <input
          type="text"
          id="inputField"
          placeholder={placeholder ? "First Name" : ""}
          className={cn(formInputVariants({ placeholder }))}
        />
      </form>
    </div>
  );
};

export default FormInput;
