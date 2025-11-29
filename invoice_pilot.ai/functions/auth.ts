"use server";
import { LoginSchema, UserSchema } from "@/schema/user";
import { z } from "zod";
import { auth } from "@/utils/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

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
      return {
        ...response,
        status: "success",
        message: "user creation success",
      };
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

export const login_user = async (values: z.infer<typeof LoginSchema>) => {
  const result = LoginSchema.safeParse(values);
  try {
    if (result.success) {
      const response = await auth.api.signInEmail({
        body: {
          email: values.email,
          password: values.password,
        },
        asResponse: true,
      });

      if (response.status >= 200 && response.status < 300) {
        return { status: "success", message: "login successful" };
      } else {
        return { status: "error", message: "login unsuccessful" };
      }
    } else {
      return { status: "error", message: "error occurred while logging in" };
    }
  } catch (error) {
    return { status: "error", message: "signin error" };
  }
};

export const logout_user = async () => {
  const all_headers = await headers();
  const cookie = all_headers.get("cookie") || "";
  const response = await auth.api.signOut({
    headers: { cookie },
    asResponse: true,
  });
  if (response.status >= 200 && response.status < 300) {
    return { status: "success", message: "Logged out successfully" };
  } else {
    return { status: "error", message: "Logout failed" };
  }
};

export const check_protections = async () => {
  const all_headers = await headers();
  const cookie = all_headers.get("cookie") || "";
  const session = await auth.api.getSession({ headers: { cookie } });

  if (!session) {
    redirect("/signin");
  }

  return null;
};
