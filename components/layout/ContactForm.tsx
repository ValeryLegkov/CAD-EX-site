"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

type FormData = {
  name: string;
  email: string;
  message: string;
};
// TODO: in real & more complex app, we can use ZOD for validation and useController for form
// for this easy app enough this implementation
export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onBlur",
  });

  const [serverMessage, setServerMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        setServerMessage(result.message);
        // console.log("Success:", result);
        reset();
      } else {
        console.error("Failed to submit form:", await response.text());
        setServerMessage("Failed to submit form");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-secondary p-4">
      {serverMessage ? (
        <div className="mb-4 text-center">
          <p className="text-2xl sm:text-4xl md:text-7xl font-semibold text-primary whitespace-pre-line">
            {serverMessage}
          </p>
          <Link
            href="/"
            className="bg-zinc-900 hover:bg-zinc-600 text-white font-bold py-3 px-6 rounded-lg mt-6 inline-block"
          >
            Go Main Page
          </Link>
        </div>
      ) : (
        <>
          <div className="mb-4 md:mb-12">
            <h2 className="text-2xl sm:text-4xl md:text-7xl font-bold text-center">
              Only CTA on the page
            </h2>
          </div>
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-center text-xl">
                Fill this form to contact us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-1">
                  <Label htmlFor="name" className="font-semibold">
                    Name
                  </Label>
                  <Input
                    {...register("name", {
                      required: "Name is required",
                      maxLength: { value: 30, message: "Name is too long" },
                      minLength: { value: 2, message: "Name is too short" },
                    })}
                    placeholder="Your name"
                    aria-invalid={errors.name ? "true" : "false"}
                  />
                  {errors?.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors?.name?.message}
                    </p>
                  )}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email" className="font-semibold">
                    Email
                  </Label>
                  <Input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message:
                          "Invalid email address, you input wrong symbol",
                      },
                    })}
                    type="email"
                    placeholder="Your email"
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  {errors?.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors?.email?.message}
                    </p>
                  )}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="message" className="font-semibold">
                    Message
                  </Label>
                  <Textarea
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 7,
                        message: "Message should be at least 7 symbols",
                      },
                    })}
                    placeholder="Your message"
                    rows={7}
                    aria-invalid={errors.message ? "true" : "false"}
                    className="resize-y max-h-60"
                  />
                  {errors?.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors?.message?.message}
                    </p>
                  )}
                </div>
                <Button type="submit" disabled={!isValid} className="w-full">
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
