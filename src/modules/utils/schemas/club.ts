import * as z from "zod";

export const clubSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  profileImage: z.string(),
  coverImage: z.string(),
  city: z.string(),
  street: z.string(),
  country: z.string(),
});

export type IClub = z.infer<typeof clubSchema>;
