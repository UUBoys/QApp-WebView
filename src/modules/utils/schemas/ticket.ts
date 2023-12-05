import { z } from "zod";

export const ticketSchema = z.object({
  id: z.number(),
  event_id: z.string(),
  name: z.string().optional(),
  user_id: z.string().optional(),
  amount: z.number().optional(),
});

export type ITicket = z.infer<typeof ticketSchema>;
