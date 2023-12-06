import { z } from "zod";

export const ticketSchema = z.object({
  ticket_id: z.number(),
  event_id: z.string(),
  name: z.string().optional(),
  user_id: z.number().optional(),
  amount: z.number().optional(),
});

export type ITicket = z.infer<typeof ticketSchema>;
