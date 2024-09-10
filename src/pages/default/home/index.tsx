import { useEffect } from "react";
import { z } from "@/i18n";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form } from "@/components/form";
import FormInput from "@/components/form/FormInput";

const schema = z.object({
  name: z.string().length(5),
  age: z.number(),
});

type Schema = z.infer<typeof schema>;

const Home = () => {
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {}, []);

  const onSubmit = (data: Schema) => {
    console.log(data);
  };

  return (
    <div className="h-full">
      Home Page
      <div className="h-[500px]">
        <div className="mx-auto my-auto h-5 w-1/2">asfjlsajfsaf</div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormInput control={form.control} name="name" />

          <input type="submit" onClick={() => {
            console.log(form.getValues("name"));
          }} />
        </form>
      </Form>
    </div>
  );
};

export default Home;
