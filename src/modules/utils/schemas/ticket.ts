import { z } from "zod";

import { eventSchema } from "./event";

export const ticketSchema = z.object({
  id: z.number(),
  event: eventSchema,
  name: z.string().optional(),
  user_id: z.string().optional(),
  amount: z.number().optional(),
});

export type ITicket = z.infer<typeof ticketSchema>;
