import { z } from "@/i18n";

export const newsSchema = z.object({
  title: z.string(),
  tags: z.array(z.string()).optional(),
  content: z.string(),
  imageGallery: z.array(z.string()).default([]),
  image: z.string().optional(),
  video: z.string().optional(),
});
