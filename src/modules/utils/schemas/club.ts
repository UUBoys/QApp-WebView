import * as z from "zod";

import { eventSchema } from "./event";

export const clubSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  profileImage: z.string(),
  coverImage: z.string(),
  city: z.string(),
  events: z.array(eventSchema).optional(),
  street: z.string(),
  country: z.string(),
});

export type IClub = z.infer<typeof clubSchema>;
