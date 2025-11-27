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
import { login_user } from "@/functions/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SigninPage = () => {
  const router = useRouter();
  const loginForm = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLoginSubmission = async (values: z.infer<typeof LoginSchema>) => {
    const result = await login_user(values);
    if (result.status === "success") {
      toast.success(result.message);
      router.replace("/dashboard/main");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="w-full h-screen relative flex justify-center items-center">
      {/* <video
        className="absolute top-0 left-0 w-full h-screen object-cover"
        loop
        autoPlay
        playsInline
        muted
      >
        <source src="/video_back.mp4" />
      </video> */}
      <div className="absolute inset-0 bg-[url('/signin_background.png')] bg-repeat -z-10 opacity-35" />
      {/* login form */}
      <Card className="mx-3 w-full max-w-[500px] z-2">
        <CardContent>
          <Image
            src="/ip_logo_full.png"
            width={200}
            height={40}
            className="block m-auto mb-3"
            alt="invoice_pilot_lot"
          />
          <CardTitle className="text-xl flex w-full justify-center">
            Welcome Back
          </CardTitle>
          <CardDescription className="mt-3 flex w-full justify-center text-center">
            Great to see you again! Sign in to access your dashboard, manage
            invoices, and stay on top of your payments with ease.
          </CardDescription>
          <Form {...loginForm}>
            <form onSubmit={loginForm.handleSubmit(handleLoginSubmission)}>
              <div className="mt-4">
                <FormField
                  name="email"
                  control={loginForm.control}
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            {...field}
                            placeholder="Enter your email address"
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
                  control={loginForm.control}
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
                        <FormMessage />
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
              Do not have an account yet?{" "}
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
