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
import { useNavigate } from "react-router-dom";
import { useUserContext } from "@/contexts/UserContext";
import { LogIn, UserPlus } from "lucide-react";

const FormSchema = z.object({
  email: z.string().email({
    message:
      "Please double-check your email address to make sure it's entered correctly.",
  }),
  password: z.string().min(8, {
    message: "Please enter a Password with at least 8 characters",
  }),
});

export default function LoginForm() {
  let navigate = useNavigate();
  const userContext = useUserContext();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    await userContext.logIn(data);
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
            <LogIn className="mr-2 h-4 w-4" /> Login
          </Button>
          <Button
            variant="outline"
            className="max-w-md"
            onClick={() => navigate("/register")}
          >
            <UserPlus className="mr-2 h-4 w-4"/>
            Register
          </Button>
        </div>
      </form>
    </Form>
  );
}
