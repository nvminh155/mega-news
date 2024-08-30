import { ComponentProps } from "react";
import { Control, useController } from "react-hook-form";

import { cn } from "@/lib/cn";

type FormInputProps = ComponentProps<"input"> & {
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
};

const FormInput = ({
  name,
  label,
  placeholder,
  control,
  className,
  ...inputProps
}: FormInputProps) => {
  const {
    fieldState: { error },
  } = useController({ control, name });
  return (
    <div className="flex h-full w-full flex-col space-y-4">
      {label && (
        <div>
          <label className="m-2 block text-md font-semibold text-tertiary">
            {label}
          </label>
        </div>
      )}

      <input
        {...control.register(name)}
        {...inputProps}
        placeholder={placeholder ?? ""}
        className={cn(
          "h-full w-full rounded-xl border border-[#E6E6E6] bg-gray p-2",
          className,
          {
            "placeholder:text-xs placeholder:text-tertiary": placeholder,
          }
        )}
      />
      {error && (
        <span className="text-red-500">{error.message?.toString()}</span>
      )}
    </div>
  );
};

export default FormInput;
