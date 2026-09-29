"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const newsletterSchema = z.object({
  email: z.email("Please enter a valid email address"),
});

type NewsletterValues = z.infer<typeof newsletterSchema>;

export function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  async function onSubmit(values: NewsletterValues) {
    await new Promise((resolve) => setTimeout(resolve, 600));
    toast.success("You're subscribed!", {
      description: `We'll send updates to ${values.email}.`,
    });
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-2">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <Input
          id="newsletter-email"
          type="email"
          variant="pill"
          autoComplete="email"
          placeholder="Enter your email"
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "newsletter-email-error" : undefined}
          className="sm:max-w-[23.5rem] sm:flex-1"
          {...register("email")}
        />
        <Button type="submit" disabled={isSubmitting} className="h-11.5 sm:w-26">
          {isSubmitting ? "Sending…" : "Subscribe"}
        </Button>
      </div>
      {errors.email && (
        <p id="newsletter-email-error" role="alert" className="body-xs px-6 text-destructive">
          {errors.email.message}
        </p>
      )}
    </form>
  );
}
