"use client";

import { AuthForm, type AuthField } from "@/components/auth/auth-form";
import { validateSignIn, validateSignUp } from "@/lib/auth-validation";

const emailField: AuthField = {
  name: "email",
  label: "Email",
  type: "email",
  placeholder: "designer@example.com",
  autoComplete: "email",
};

const signInFields: AuthField[] = [
  emailField,
  { name: "password", label: "Password", type: "password", placeholder: "********", autoComplete: "current-password" },
];

const signUpFields: AuthField[] = [
  { name: "name", label: "Full Name", type: "text", placeholder: "Jamie Davis", autoComplete: "name" },
  emailField,
  { name: "password", label: "Password", type: "password", placeholder: "********", autoComplete: "new-password" },
];

export function SignInForm() {
  return (
    <AuthForm
      fields={signInFields}
      submitLabel="Sign In"
      pendingLabel="Signing in…"
      successMessage="Welcome back! You're signed in."
      validate={validateSignIn}
    />
  );
}

export function SignUpForm() {
  return (
    <AuthForm
      fields={signUpFields}
      submitLabel="Continue"
      pendingLabel="Creating account…"
      successMessage="Your account is ready. Welcome to ByteSpace!"
      validate={validateSignUp}
    />
  );
}
