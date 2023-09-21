"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import AuthService from "@/services/AuthService";

const FormSchema = z.object({
  displayName: z.string().min(4, {
    message: "Please enter a longer name with at least 4 characters.",
  }),
  email: z.string().email({
    message:
      "Please double-check your email address to make sure it's entered correctly.",
  }),
  password: z.string().min(8, {
    message: "Please enter a longer password with at least 8 characters.",
  }),
});

export default function RegisterForm() {
  let navigate = useNavigate();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const result = await AuthService.register(data);
    if (result?.code) {
      return toast({
        title: "An error accurred:",
        description: result.message,
      });
    }

    toast({
      title: "Success:",
      description: "New User registered successfully!",
    });
    navigate("/login");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 md:px-9"
      >
        <FormField
          control={form.control}
          name="displayName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>UserName</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your username"
                  {...field}
                  className="max-w-md"
                />
              </FormControl>
              <FormDescription>
              You can enter a longer name with at least 4 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
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
              <FormDescription>
                Please double-check your email address to make sure it's entered
                correctly.
              </FormDescription>
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
              <FormDescription>
              You can enter a longer password with at least 8 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col">
          <Button type="submit" className="mb-2 max-w-md">
            Register
          </Button>
        </div>
      </form>
    </Form>
  );
}
