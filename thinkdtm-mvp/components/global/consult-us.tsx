"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { useTransition, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Card, CardHeader, CardTitle, CardFooter, CardContent, CardDescription } from "@/components/ui/card";
import { sendEmail } from "@/actions/sendEmail";



const signupSchema = z.object({
    name: z.string(),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    message: z.string(),
  });

export function RegisterForm() {

  const [success, setSuccess] = useState<string | undefined>("")
  const [error, setError] = useState<string | undefined>("")

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signupSchema>) {
    try {
        startTransition(async () => {
            // Reset the Values
            setSuccess("")
            setError("")
            
            // Server Action
            const status = await sendEmail(values.name, values.email, values.message)

            console.log("Status")
            console.log(status)

            setSuccess(status.success)
            setError(status.error)
        })
    } catch (error) {
      console.error("Login error:", error);
    }
  }

  return (
    <div className="flex items-center justify-center mb-6 ">
      <Card className="w-[500px] mt-20">
        <CardHeader>
          <CardDescription className="text-center text-xl">Use form below or call us at (646) 530-1738 today! <br />Head Quartered in the Greater New York City Area- NY, NJ and CT</CardDescription>
        </CardHeader>
        <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid w-full items-center gap-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your Name" {...field} disabled = {isPending} />
                  </FormControl>
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
                    <Input placeholder="Enter your email" {...field} disabled = {isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Input className="h-32 " placeholder="Send us a message" {...field} disabled = {isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          
          </form>
        </Form>
        <FormError message = {error} />
        <FormSuccess message = {success} />
        </CardContent>

        <CardFooter className="flex justify-center">
          <Button
            type="submit"
            onClick={form.handleSubmit(onSubmit)}
            disabled = {isPending}
            className="px-5 w-full h-12 bg-white text-black"
            variant="outline"
          >
            Send Message
          </Button>
        </CardFooter>
        <CardFooter className="opacity-30 text-sm flex items-center justify-around">
          <Separator className="bg-white" />
        </CardFooter>
        <CardFooter>
        </CardFooter>
      
      </Card>
    </div>
  );
}


interface FormSuccessProps {
    message?: string;
}

const FormSuccess = ({message} : FormSuccessProps) => {

    if (!message){
        return null;
    }

    return <div className="mt-5 mb-1 bg-emerald-500/15 p-3 rounded-md flex items-center 
    gap-x-2 text-sm text-success text-emerald-500">
        <p>{message}</p>
    </div>
}


interface FormErrorProps {
    message?: string;
}

const FormError = ({message} : FormErrorProps) => {

    if (!message){
        return null;
    }

    return <div className="my-5 bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-red-300">
        <p>{message}</p>
    </div>
}