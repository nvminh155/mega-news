import { z } from "@/i18n";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Form } from "@/components/form";
import FormInput from "@/components/form/FormInput";
import TextEditor from "@/components/TextEditor";

const profileSchema = z.object({
  id: z.string(),
  avatarUrl: z.string(),
  bannerUrl: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  userName: z.string(),
  password: z.string(),
  email: z.string(),
  title: z.string(),
  followerIds: z.array(z.string()),
  explanationHTML: z.string(),
});

type ProfileForm = z.infer<typeof profileSchema>;

const EditProfile = () => {
  const form = useForm<ProfileForm>({
    resolver: zodResolver(profileSchema),
  });

  const onsubmit = (data: any) => {
    console.log(data);
  };
  const { t } = useTranslation("input");
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onsubmit)}
          className="grid grid-cols-2 gap-md"
        >
          <FormInput
            control={form.control}
            name="firstName"
            label={t("Label.First Name")}
            placeholder={t("Placeholder.write-your-first-name")}
          />
          <FormInput
            control={form.control}
            name="lastName"
            label={t("Label.Last Name")}
            placeholder={t("Placeholder.write-your-last-name")}
          />
          <FormInput
            control={form.control}
            name="userName"
            label={t("Label.Username")}
            placeholder={t("Placeholder.write-your-username")}
          />
          <FormInput
            control={form.control}
            name="password"
            label={t("Label.Password")}
            placeholder={t("Placeholder.write-your-password")}
          />
          <FormInput
            control={form.control}
            name="email"
            label="Email"
            placeholder={t("Placeholder.write-your-email")}
          />
          <div></div>
          <TextEditor
            value={form.getValues("explanationHTML")}
            onChangeCallBack={(val) => form.setValue("explanationHTML", val)}
          />

        </form>
      </Form>
    </div>
  );
};

export default EditProfile;
