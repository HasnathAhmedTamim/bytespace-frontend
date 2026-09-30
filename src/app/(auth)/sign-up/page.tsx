import type { Metadata } from "next";

import { AuthCard } from "@/components/auth/auth-card";
import { SignUpForm } from "@/components/auth/auth-forms";
import { AuthShell } from "@/components/auth/auth-shell";
import { routes } from "@/constants/navigation";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create a free ByteSpace account and start learning from expert creators.",
};

export default function SignUpPage() {
  return (
    <AuthShell
      tagline="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
    >
      <AuthCard
        eyebrow="Create an Account"
        title="Welcome to ByteSpace"
        footer={{
          prompt: "Already have an account?",
          linkLabel: "Login",
          href: routes.signIn,
          className: "text-neutral-700 xl:mt-0 xl:pt-30.5",
        }}
      >
        <SignUpForm />
      </AuthCard>
    </AuthShell>
  );
}
