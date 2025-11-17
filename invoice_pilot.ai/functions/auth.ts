"use server";
import { UserSchema } from "@/schema/user";
import { z } from "zod";
import { auth } from "@/utils/auth";

export const create_new_user = async (values: z.infer<typeof UserSchema>) => {
  const results = UserSchema.safeParse(values);
  if (results.success) {
    const response = await auth.api.signUpEmail({
      body: {
        email: values.email,
        name: values.username,
        password: values.password,
      },
      asResponse: true,
    });

    if (response.status >= 200 && response.status < 300) {
      return { status: "success", message: "user creation success" };
    } else {
      return {
        status: "error",
        message: "Error occurred while creating the user",
      };
    }
  } else {
    return { status: "error", message: "user creation unsuccessful" };
  }
};
