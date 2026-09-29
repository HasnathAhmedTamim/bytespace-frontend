"use client";

import { useId, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { routes } from "@/constants/navigation";
import type { AuthErrors, AuthValues } from "@/lib/auth-validation";

export type AuthField = {
  name: string;
  label: string;
  type: "text" | "email" | "password";
  placeholder: string;
  autoComplete: string;
};

type AuthFormProps = {
  fields: AuthField[];
  submitLabel: string;
  pendingLabel: string;
  successMessage: string;
  validate: (values: AuthValues) => AuthErrors;
};

export function AuthForm({ fields, submitLabel, pendingLabel, successMessage, validate }: AuthFormProps) {
  const router = useRouter();
  const idPrefix = useId();
  const [errors, setErrors] = useState<AuthErrors>({});
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const values = Object.fromEntries(
      fields.map(({ name, type }) => {
        const value = String(data.get(name) ?? "");
        return [name, type === "password" ? value : value.trim()];
      }),
    );

    const nextErrors = validate(values);
    setErrors(nextErrors);
    const firstInvalid = fields.find(({ name }) => nextErrors[name]);
    if (firstInvalid) {
      (form.elements.namedItem(firstInvalid.name) as HTMLInputElement | null)?.focus();
      return;
    }

    setPending(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    toast.success(successMessage);
    router.push(routes.home);
  }

  function clearError(name: string) {
    if (!errors[name]) return;
    setErrors((current) => {
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="mt-8 flex flex-col md:mt-10">
      <div className="flex flex-col gap-6">
        {fields.map((field) => {
          const id = `${idPrefix}-${field.name}`;
          const error = errors[field.name];
          return (
            <div key={field.name} className="flex flex-col gap-2">
              <Label htmlFor={id}>{field.label}</Label>
              <Input
                id={id}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                autoComplete={field.autoComplete}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? `${id}-error` : undefined}
                disabled={pending}
                onChange={() => clearError(field.name)}
                className="rounded-xl px-5 text-lg sm:px-6"
              />
              {error && (
                <p id={`${id}-error`} className="body-s text-destructive">
                  {error}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <Button type="submit" disabled={pending} aria-busy={pending} className="mt-6 h-11.5 self-end px-6 text-lg">
        {pending ? pendingLabel : submitLabel}
      </Button>
    </form>
  );
}
