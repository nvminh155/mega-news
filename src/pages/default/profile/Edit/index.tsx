import { z } from "@/i18n";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form } from "@/components/form";
import AppUpload from "@/components/form/AppUpload";
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
            label="First Name"
            placeholder="Enter your first name .."
          />
          <FormInput
            control={form.control}
            name="lastName"
            label="Last Name"
            placeholder="Enter your last name .."
          />
          <FormInput
            control={form.control}
            name="userName"
            label="Username"
            placeholder="Enter your username .."
          />
          <FormInput
            control={form.control}
            name="password"
            label="Password"
            placeholder="Enter your password.."
          />
          <FormInput
            control={form.control}
            name="email"
            label="Email"
            placeholder="Enter your email .."
          />
          <div className="banner">
            <AppUpload
              onChangeCallback={(url, type) => {
                if (type === "image") {
                  form.setValue("bannerUrl", url);
                }
              }}
            />
          </div>
          <TextEditor
            value={form.getValues("explanationHTML")}
            onChangeCallBack={(val) => form.setValue("explanationHTML", val)}
          />

          <AppUpload
            onChangeCallback={(url, type) => {
              if (type === "image") {
                form.setValue("avatarUrl", url);
              }
            }}
          />
        </form>
      </Form>
    </div>
  );
};

export default EditProfile;
