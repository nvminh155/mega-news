import { newsSchema } from "@/schemas/news";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { TFormSendNews } from "@/types/post";
import AppLabel from "@/components/AppLabel";
import { Form } from "@/components/form";
import FormInput from "@/components/form/FormInput";
import { Iconfy } from "@/components/Iconfy";
import TextEditor from "@/components/TextEditor";

import Actions from "./FormSend/Actions";
import AppUpload from "./FormSend/AppUpload";

// import ImageGallery from "./ImageGallery";

type TFormSendProps = {
  type?: "image" | "video";
};

const FormSend = ({ type = "image" }: TFormSendProps) => {
  const { t: tInput } = useTranslation("input");
  const { t: tUpload } = useTranslation("upload");

  const form = useForm<TFormSendNews>({
    resolver: zodResolver(newsSchema),
    defaultValues: {
      imageGallery: [],
    },
  });

  const onSubmit = (data: TFormSendNews) => {
    console.log(data);
  };

  const handleChangeImageGallery = (fileUrl: string, index: number) => {
    const imageGallery = form.getValues("imageGallery");

    if (index + 1 <= imageGallery.length) {
      form.setValue(
        "imageGallery",
        imageGallery.filter((f) => f !== fileUrl)
      );
    } else form.setValue("imageGallery", [...imageGallery, fileUrl]);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-row gap-md max-desktop:flex-col"
      >
        <div className="flex flex-1 flex-col gap-md">
          <div className="flex flex-row items-center gap-3 max-desktop:flex-col">
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

          <TextEditor
            value={form.getValues("content")}
            onChangeCallBack={(val) => form.setValue("content", val)}
          />

          {type === "video" && (
            <div className="mt-7 flex flex-col">
              <span className="pb-sm font-medium text-tertiary">
                Image Gallery
              </span>
              <div className="flex flex-row items-center justify-center gap-sm max-desktop:flex-col max-desktop:items-start">
                <AppUpload size="lg" />
                <div className="list grid flex-1 grid-cols-3 gap-sm desktop:pl-[10px]">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <AppUpload
                      key={i + 1}
                      size="sm"
                      defaultPreviewUrl={form.getValues("imageGallery")[i]}
                      onChangeCallback={(fileUrl) => {
                        handleChangeImageGallery(fileUrl, i);
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-md flex-1 desktop:max-w-[360px]">
          <AppLabel
            text={tUpload(
              type === "image" ? "Label.add-img" : "Label.add-video"
            )}
          />
          <div className="flex flex-col items-center justify-center gap-sm">
            <AppUpload
              size="lg"
              type={type}
              onChangeCallback={(fileUrl, type) =>
                form.setValue(type as keyof TFormSendNews, fileUrl)
              }
            />
          </div>
          <div className="flex justify-end max-desktop:pr-[15px]">
            <Actions />
          </div>
        </div>
      </form>
    </Form>
  );
};

export default FormSend;
