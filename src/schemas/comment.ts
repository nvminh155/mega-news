import { z } from "@/i18n";

export const commentSchema = z.object({
  displayName: z.string().length(3),
  email: z.string().email().optional(),
  website: z.string().url().optional(),
  content: z.string(),
  rate: z.number().int().min(1).max(5).default(1),
});

