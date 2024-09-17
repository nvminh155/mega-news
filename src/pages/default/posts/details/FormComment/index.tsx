import { commentSchema } from "@/schemas/comment";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { TCommentForm } from "@/types/comment";
import AppButton from "@/components/Button";
import { Form } from "@/components/form";
import FormInput from "@/components/form/FormInput";
import FormTextArea from "@/components/form/FormTextArea";
import { Iconfy } from "@/components/Iconfy";
import { TitleSection } from "@/components/TitleSection";

import Rate from "./Rate";

const FormComment = () => {
  const { t } = useTranslation("input");

  const form = useForm<TCommentForm>({
    resolver: zodResolver(commentSchema),
  });

  const onSubmit = (data: TCommentForm) => {
    console.log(data);
  };

  return (
    <div className="h-max w-full">
      <TitleSection text="Add A Comment" />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-sm"
        >
          <div className="flex gap-5">
            <div className="flex w-1/2 max-w-[488px] flex-col gap-3">
              <FormInput
                control={form.control}
                label="Name"
                name="displayName"
                placeholder={t("Placeholder.display-name")}
              />
              <FormInput
                control={form.control}
                label="Website"
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
                label="Comment"
                name="content"
                className="flex-1"
                placeholder={t("Placeholder.type-anything")}
              />
            </div>
          </div>

          <div className="rate flex w-full items-center gap-[50px]">
            <Rate />
            <AppButton
              htmlType="submit"
              prefixIcon={<Iconfy icon={"uiw:message"} />}
            >
              Send Comment
            </AppButton>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FormComment;
