import { ComponentProps } from "react";
import {
  Control,
  FieldPath,
  FieldValues,
} from "react-hook-form";

import { cn } from "@/lib/cn";

import { FormField } from ".";

type FormInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = ComponentProps<"input"> & {
  control: Control<TFieldValues>;
  name: TFieldName;
  label?: string;
  placeholder?: string;
};

const FormInput = <
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  label,
  placeholder,
  control,
  className,
  ...inputProps
}: FormInputProps<TFieldValues, TFieldName>) => {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field: { onChange, value, ...fieldProps }, fieldState }) => (
        <div className="flex h-full w-full flex-col space-y-1">
          {label && (
            <label className="block text-md font-semibold text-tertiary">
              {label}
            </label>
          )}

          <input
            value={value ?? ""}
            {...inputProps}
            {...fieldProps}
            placeholder={placeholder ?? ""}
            className={cn(
              "h-full w-full rounded-xl border border-[#E6E6E6] bg-accent-gray/50 p-2 focus-visible:outline-primary",
              className,
              {
                "placeholder:text-xs placeholder:text-tertiary": placeholder,
              }
            )}
            onChange={onChange}
          />
          {fieldState.error && (
            <div className="text-red-500">{fieldState.error.message}</div>
          )}
        </div>
      )}
    />
  );
};

export default FormInput;
