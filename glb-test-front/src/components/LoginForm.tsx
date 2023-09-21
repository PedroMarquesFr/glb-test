"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import AuthService from "@/services/AuthService";
import CookieService, { Person } from "@/services/CookieService";

const FormSchema = z.object({
  email: z.string().email({
    message: "Please double-check your email address to make sure it's entered correctly.",
  }),
  password: z.string().min(8, {
    message: "Please enter a Password with at least 8 characters",
  }),
});

export default function LoginForm() {
  let navigate = useNavigate();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const result = await AuthService.login(data);
    if (result?.code) {
      return toast({
        title: "An error accurred:",
        description: result.message,
      });
    }
    console.log(result)

    toast({
      title: "Success:",
      description: "You are logged in!",
    });
    CookieService.setPerson(result.user);
    CookieService.setToken(result.token);
    navigate("/");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 md:px-9"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your Email"
                  {...field}
                  className="max-w-md"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your Password"
                  {...field}
                  className="max-w-md"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col">
          <Button type="submit" className="mb-2 max-w-md">
            Login
          </Button>
          <Button variant="outline" className="max-w-md" onClick={()=> navigate("/register")}>
            Register
          </Button>
        </div>
      </form>
    </Form>
  );
}
