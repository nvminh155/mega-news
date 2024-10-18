import { newsSchema } from "@/schemas/news";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { TFormSendNews } from "@/types/post";
import useDeviceType from "@/hooks/useDeviceType";
import AppLabel from "@/components/AppLabel";
import { Form } from "@/components/form";
import FormInput from "@/components/form/FormInput";
import { Iconfy } from "@/components/Iconfy";
import TextEditor from "@/components/TextEditor";

import Actions from "./Actions";
import AppUpload from "./AppUpload";

// import ImageGallery from "./ImageGallery";

type TFormSendProps = {
  type?: "image" | "video";
};

const FormSend = ({ type = "image" }: TFormSendProps) => {
  const { isMobile, isSemiTablet } = useDeviceType();
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

          <TextEditor
            value={form.getValues("content")}
            onChangeCallBack={(val) => form.setValue("content", val)}
          />

          {type === "video" && (
            <div className="mt-7 flex flex-col">
              <span className="pb-sm font-medium text-tertiary">
                Image Gallery
              </span>
              <div className="flex w-full gap-md pb-20">
                <AppUpload size="lg" />
                <div className="list grid flex-1 grid-cols-4 gap-sm max-semi-tablet:grid-cols-2">
                  {Array.from({ length: isMobile || isSemiTablet ? 4 : 8 }).map(
                    (_, i) => (
                      <AppUpload
                        key={i + 1}
                        size="sm"
                        defaultPreviewUrl={form.getValues("imageGallery")[i]}
                        onChangeCallback={(fileUrl) => {
                          handleChangeImageGallery(fileUrl, i);
                        }}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="right flex flex-col gap-md">
          <div className="flex flex-col gap-sm">
            <AppLabel
              text={tUpload(
                type === "image" ? "Label.add-img" : "Label.add-video"
              )}
            />
            <AppUpload
              size="lg"
              type={type}
              onChangeCallback={(fileUrl, type) =>
                form.setValue(type as keyof TFormSendNews, fileUrl)
              }
            />
          </div>

          <Actions />
        </div>
      </form>
    </Form>
  );
};

export default FormSend;
