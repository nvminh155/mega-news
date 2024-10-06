import { PropsWithChildren } from "react";
import { Control, FieldPath, FieldValues } from "react-hook-form";

import { cn } from "@/lib/cn";
import AppButton from "@/components/Button";
import { FormField, FormMessage } from "@/components/form";
import { Iconfy } from "@/components/Iconfy";

type FormRateProps<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  control: Control<TFieldValues>;
  name: TFieldName;
  className?: string;
  onChangeCallBack: (data: any) => void;
} & PropsWithChildren;

const moods = [
  {
    name: "lucide:angry",
    color: "#FC5C65",
    text: "Angry",
  },
  {
    name: "lets-icons:sad",
    color: "#FA8231",
    text: "Bad",
  },
  {
    name: "zondicons:mood-neutral-outline",
    color: "#F7B731",
    text: "Neutral",
  },
  {
    name: "zondicons:mood-happy-outline",
    color: "#45AAF2",
    text: "Happy",
  },
  {
    name: "hugeicons:in-love",
    color: "#26DE81",
    text: "Good",
  },
];

const FormRate = <
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  control,
  className,
  onChangeCallBack,
}: FormRateProps<TFieldValues, TFieldName>) => {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field: { onChange, value = 4, ...fieldProps } }) => (
        <div
          className={cn("flex h-full w-full flex-col space-y-sm", className)}
        >
          <div className="flex flex-1 justify-between rounded-md bg-accent-gray p-[4px] pl-[12px] max-tablet:flex-col">
            <span className="my-auto font-medium text-tertiary">
              Rate the usefulness of the article
            </span>
            <div className="mood flex items-center gap-0.5">
              {moods.map((m, i) => {
                const active = i === value;

                return (
                  <AppButton
                    key={m.name}
                    className={
                      "hover:!bg- bg-transparent" + ` ${fieldProps.name}`
                    }
                    style={{
                      backgroundColor: active ? m.color : "transparent",
                    }}
                    onClick={() => {
                      onChangeCallBack(i);
                    }}
                  >
                    <Iconfy
                      icon={m.name}
                      style={{
                        color: !active ? m.color : "inherit",
                      }}
                    />
                    {active && <span>{m.text}</span>}
                  </AppButton>
                );
              })}
            </div>
          </div>
          <FormMessage />
        </div>
      )}
    />
  );
};

export default FormRate;
