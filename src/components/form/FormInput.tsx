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
    <div className="flex h-full w-full flex-col space-y-1">
      {label && (
        <label className="block text-md font-semibold text-tertiary">
          {label}
        </label>
      )}

      <input
        {...control.register(name)}
        {...inputProps}
        placeholder={placeholder ?? ""}
        className={cn(
          "h-full w-full rounded-xl border border-[#E6E6E6] bg-accent-gray/50 p-2 focus-visible:outline-primary",
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
