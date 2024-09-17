import { Input, InputProps } from "antd";
import { Control, FieldPath, FieldValues } from "react-hook-form";

import { cn } from "@/lib/cn";

import { FormField, FormMessage } from ".";

export type TFormInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = InputProps & {
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
}: TFormInputProps<TFieldValues, TFieldName>) => {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field: { onChange, value, ...fieldProps } }) => (
        <div className="flex h-full w-full flex-col space-y-sm">
          {label && (
            <label className="block text-md font-semibold text-tertiary">
              {label}
            </label>
          )}

          <Input
            value={value ?? ""}
            {...inputProps}
            {...fieldProps}
            placeholder={placeholder ?? name}
            className={cn(
              "h-full w-full rounded-md border border-none border-[#E6E6E6] !bg-accent-gray/50 p-2 outline-none ring-0 focus-visible:outline-none",
              className,
              {
                "!placeholder:text-tertiary/75 placeholder:text-xs":
                  placeholder,
              }
            )}
            onChange={onChange}
          />

          <FormMessage />
        </div>
      )}
    />
  );
};

export default FormInput;
