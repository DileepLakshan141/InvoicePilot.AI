"use client";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginSchema } from "@/schema/user";

const SigninPage = () => {
  const loginForm = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="w-full h-screen relative flex justify-center items-center">
      <video
        className="absolute top-0 left-0 w-full h-screen object-cover"
        loop
        autoPlay
        playsInline
        muted
      >
        <source src="/video_back.mp4" />
      </video>

      {/* login form */}
      <Card className="mx-3 w-full max-w-[500px] z-2">
        <CardContent>
          <CardTitle className="text-2xl">Welcome Back</CardTitle>
          <CardDescription className="mt-3">
            Great to see you again! Sign in to access your dashboard, manage
            invoices, and stay on top of your payments with ease.
          </CardDescription>
          <Form {...loginForm}>
            <form>
              <div className="mt-4">
                <FormField
                  name="email"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            {...field}
                            placeholder="Enter your email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>

              <div className="mt-4">
                <FormField
                  name="password"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Enter your password"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    );
                  }}
                />
              </div>
              <Button className="w-full mt-8 text-[17px]">Signin</Button>
              <Button
                onClick={() => loginForm.reset()}
                className="w-full mt-3 text-[17px]"
                variant="outline"
              >
                Reset
              </Button>
            </form>
          </Form>
          <CardFooter className="mt-6 flex flex-col justify-center text-gray-500 text-sm">
            <p>
              Dont't have an account yet?{" "}
              <Link className="font-semibold underline" href="/signup">
                Signup
              </Link>{" "}
              now.
            </p>
            <p>Developed & Maintained by Devexus</p>
          </CardFooter>
        </CardContent>
      </Card>
    </div>
  );
};

export default SigninPage;
