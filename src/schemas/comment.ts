import { z } from "@/i18n";

export const commentSchema = z.object({
  displayName: z.string(),
  email: z.string().email(),
  website: z.string().url().optional(),
  content: z.string().min(2),
  rate: z.number().int().min(1).max(5),
});
