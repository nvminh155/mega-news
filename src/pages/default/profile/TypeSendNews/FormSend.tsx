import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import AppLabel from "@/components/AppLabel";
import { Form } from "@/components/form";
import FormInput from "@/components/form/FormInput";
import { Iconfy } from "@/components/Iconfy";
import TextEditor from "@/components/TextEditor";

import Actions from "./Actions";
import AppUpload from "./AppUpload";
import ImageGallery from "./ImageGallery";

type TForm = {
  title: string;
  tags: string[];
  explanation: string;
  images: string[];
};

type TFormSendProps = {
  type?: "image" | "video";
};

const FormSend = ({ type = "image" }: TFormSendProps) => {
  const { t: tInput } = useTranslation("input");
  const { t: tUpload } = useTranslation("upload");

  const form = useForm<TForm>({});

  const onSubmit = (data: TForm) => {
    console.log(data);
  };

  return (
    <div className="h-max w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full gap-md"
        >
          <div className="left flex flex-1 flex-col gap-md">
            <div className="flex items-center gap-3">
              <FormInput
                control={form.control}
                label={tInput("Label.title")}
                name="title"
                placeholder={tInput("Placeholder.title")}
              />
              <FormInput
                control={form.control}
                label={tInput("Label.add-tags")}
                name="tags"
                placeholder={tInput("Placeholder.add-tags")}
                suffix={
                  <Iconfy
                    icon={"uil:plus"}
                    background
                    className="cursor-pointer"
                  />
                }
              />
            </div>

            <TextEditor />

            {type === "video" && <ImageGallery />}
          </div>

          <div className="right flex flex-col gap-md">
            <div className="flex flex-col gap-sm">
              <AppLabel
                text={tUpload(
                  type === "image" ? "Label.add-img" : "Label.add-video"
                )}
              />
              <AppUpload size="lg" type={type} />
            </div>

            <Actions />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FormSend;
