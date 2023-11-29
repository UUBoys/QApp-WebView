import * as z from "zod";

export const eventSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string().optional(),
  maximumCapacity: z.number(),
  price: z.number(),
  start_date: z.string(),
  end_date: z.string(),
  description: z.string().optional(),
  establishment_id: z.number(),
});

export type IEvent = z.infer<typeof eventSchema>;
