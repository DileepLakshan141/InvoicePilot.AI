import { z } from "zod";

export const UserSchema = z
  .object({
    username: z
      .string()
      .min(4, "minimum 4 letters/chars required")
      .max(50, "maximum 50 letteers is the limit"),
    email: z.string().email("valid email is required"),
    password: z.string().min(8, "minimum 8 characters required"),
    confirm_password: z.string(),
  })
  .refine((data) => data.confirm_password === data.password, {
    message: "passwords can not be mismatched",
    path: ["confirm_password"],
  });

export const LoginSchema = z.object({
  email: z.email(),
  password: z.string().min(8, "Invalid password"),
});
