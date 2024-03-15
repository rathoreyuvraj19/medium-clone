import { z } from "zod";

export const signUpInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string(),
});

export type signUpParam = z.infer<typeof signUpInput>;
