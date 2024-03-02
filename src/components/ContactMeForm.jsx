"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";

// Defining contact me form schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(2, {
    message: "Please enter a subject.",
  }),
  message: z.string().min(2, {
    message: "Kindly provide a message.",
  }),
});

const ContactMeForm = () => {
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onFormSubmit = async (values) => {
    const { name, email, subject, message } = values;

    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        message: message,
      }),
    })
      .then((res) => res.json())
      .then((data) =>
        toast({
          title: "Hurray!!!",
          description: `Your message has been sent.`,
        })
      )
      .catch((error) =>
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: `There was a problem with your request. Please try again`,
        })
      );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onFormSubmit)}>
        <div className="flex flex-row sm:flex-col justify-between items-center my-4">
          <FormField
            type="text"
            className="w-full"
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-1/2 sm:w-full mr-2 sm:mr-0 sm:my-2">
                <FormLabel>Name : </FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Name..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-1/2 sm:w-full ml-2 sm:ml-0 sm:my-2">
                <FormLabel>Email : </FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Email..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className="my-4">
              <FormLabel>Subject : </FormLabel>
              <FormControl>
                <Input type="text" placeholder="Subject..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="my-4">
              <FormLabel>Message : </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell a little bit about yourself..."
                  className="resize-none"
                  rows={10}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="my-4 w-full bg-dark hover:bg-light text-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ContactMeForm;
