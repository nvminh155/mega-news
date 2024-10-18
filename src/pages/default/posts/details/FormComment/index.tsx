import { commentSchema } from "@/schemas/comment";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { TCommentForm } from "@/types/comment";
import AppButton from "@/components/Button";
import { Form } from "@/components/form";
import FormInput from "@/components/form/FormInput";
import FormRate from "@/components/form/FormRate";
import FormTextArea from "@/components/form/FormTextArea";
import { Iconfy } from "@/components/Iconfy";
import { TitleSection } from "@/components/TitleSection";

const FormComment = () => {
  const { t } = useTranslation("input");
  const { t: tComment } = useTranslation("comment");
  const form = useForm<TCommentForm>({
    resolver: zodResolver(commentSchema),
  });

  const onSubmit = (data: TCommentForm) => {
    console.log(data)
  };

  return (
    <div className="h-max w-full">
      <TitleSection text={tComment("add A Comment")} className="my-[30px]" />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-sm"
        >
          <div className="flex items-stretch gap-5 max-desktop:flex-col">
            <div className="flex w-1/2 max-w-[488px] flex-col gap-3 max-desktop:w-full max-desktop:max-w-[1024px]">
              <FormInput
                control={form.control}
                label={t("Label.name")}
                name="displayName"
                placeholder={t("Placeholder.display-name")}
              />
              <FormInput
                control={form.control}
                label={t("Placeholder.website")}
                name="website"
                placeholder={t("Placeholder.website")}
              />
              <FormInput
                control={form.control}
                label="Email"
                name="email"
                placeholder={t("Placeholder.email")}
              />
            </div>
            <div className="flex-1">
              <FormTextArea
                control={form.control}
                label={t("Label.comment")}
                name="content"
                className="flex-1"
                placeholder={t("Placeholder.type-anything")}
              />
            </div>
          </div>

          <div className="rate flex w-full items-center justify-center gap-md max-desktop:flex-col">
            <FormRate
              control={form.control}
              name="rate"
              onChangeCallBack={(val) => form.setValue("rate", val)}
              className=""
            />
            <AppButton
              className="ml-auto max-w-[160px]"
              htmlType="submit"
              prefixIcon={<Iconfy icon={"uiw:message"} />}
            >
              {tComment("Send Comment")}
            </AppButton>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FormComment;
