import { z } from "@/i18n";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Form } from "@/components/form";
import FormInput from "@/components/form/FormInput";
import { Iconfy } from "@/components/Iconfy";

import { TitleSection } from "../../TitleSection";

const sche = z.object({
  name: z.string(),
});
type Sche = z.infer<typeof sche>;

const NewsLetter = () => {
  const { t } = useTranslation("input");
  const { t: t2 } = useTranslation("global");
  const form = useForm<Sche>({
    resolver: zodResolver(sche),
  });

  const onSubmit = (data: Sche) => {
    console.log(data)
  };

  return (
    <TitleSection
      text={t2("Title-section.news-letters")}
      containerClassName="col-span-2"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormInput
            control={form.control}
            name="name"
            suffix={<Iconfy icon={"ic:round-email"} />}
            placeholder={t("Placeholder.write-your-email")}
            className="border-none !bg-white font-medium text-tertiary/75"
          />
        </form>
      </Form>
    </TitleSection>
  );
};

export default NewsLetter;
