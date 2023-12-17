import { z } from "zod";

export const ticketSchema = z.object({
  ticket_id: z.string(),
  event_id: z.string(),
  ticket_name: z.string(),
  user_id: z.string(),
  price: z.number(),
  bought_quantity: z.number(),
});

export type ITicket = z.infer<typeof ticketSchema>;
