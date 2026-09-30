import type { Metadata } from "next";

import { AuthCard } from "@/components/auth/auth-card";
import { SignInForm } from "@/components/auth/auth-forms";
import { AuthShell } from "@/components/auth/auth-shell";
import { SocialSignIn } from "@/components/auth/social-sign-in";
import { PageTransition } from "@/components/shared/page-transition";
import { routes } from "@/constants/navigation";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to ByteSpace to continue learning from expert creators.",
};

export default function SignInPage() {
  return (
    <PageTransition>
      <AuthShell
        tagline="Sign in with ease"
        description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
      >
        <AuthCard
          eyebrow="Sign In"
          title="Welcome Back"
          footer={{ prompt: "New user?", linkLabel: "Create an account", href: routes.signUp }}
        >
          <SignInForm />
          <SocialSignIn />
        </AuthCard>
      </AuthShell>
    </PageTransition>
  );
}
