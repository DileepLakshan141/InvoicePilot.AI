"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { z } from "zod";
import { UserSchema } from "@/schema/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { create_new_user } from "@/functions/auth";
import { toast } from "sonner";

const SignupPage = () => {
  const signupForm = useForm<z.infer<typeof UserSchema>>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  const handleSubmission = async (values: z.infer<typeof UserSchema>) => {
    const results = await create_new_user(values);
    if (results.status === "error") {
      toast.error(results.message);
    } else {
      toast.success(results.message);
      signupForm.reset();
      signupForm.clearErrors();
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/video_back.mp4" />
      </video>

      {/* signup form */}
      <Card className="mx-3 w-full max-w-[500px] z-1">
        <CardContent>
          <CardTitle className="text-2xl">Let’s Get You Started</CardTitle>
          <CardDescription className="mt-3">
            Welcome to InvoicePilot.ai! Let’s get to know you and your business
            so we can take the hassle out of invoicing.
          </CardDescription>

          <Form {...signupForm}>
            <form onSubmit={signupForm.handleSubmit(handleSubmission)}>
              {/* username */}
              <div className="mt-4">
                <FormField
                  control={signupForm.control}
                  name="username"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Enter your username" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
              {/* email */}
              <div className="mt-4">
                <FormField
                  name="email"
                  control={signupForm.control}
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter your email address"
                            type="email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
              {/* password */}
              <div className="mt-4">
                <FormField
                  name="password"
                  control={signupForm.control}
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter your password"
                            type="password"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
              {/* confirm password */}
              <div className="mt-4">
                <FormField
                  name="confirm_password"
                  control={signupForm.control}
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Re-enter your password"
                            type="password"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
              <Button className="w-full mt-8 text-[17px]">
                Create Account
              </Button>
              <Button
                onClick={() => signupForm.reset()}
                className="w-full mt-3 text-[17px]"
                variant="outline"
              >
                Reset
              </Button>
            </form>
          </Form>
          <CardFooter className="mt-6 flex flex-col justify-center text-gray-500">
            <p>
              Already have an account?{" "}
              <Link className="font-semibold underline" href="/signin">
                Signin
              </Link>{" "}
              to your account.
            </p>
            <p>Developed & Maintained by Devexus</p>
          </CardFooter>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupPage;
