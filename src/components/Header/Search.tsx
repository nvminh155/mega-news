import React from "react";
import { z } from "@/i18n";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { cn } from "@/lib/cn";

import { Form } from "../form";
import FormSearch from "../form/FormSearch";

const sche = z.object({
  search: z.string(),
});

type Sche = z.infer<typeof sche>;

type TSearchProps = {
  className?: React.HTMLAttributes<HTMLFormElement>["className"];
};

const Search = ({ className }: TSearchProps) => {
  const form = useForm<Sche>({
    resolver: zodResolver(sche),
  });

  const onSubmit = (data: Sche) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn(className)}>
        <FormSearch control={form.control} />
      </form>
    </Form>
  );
};

export default Search;
