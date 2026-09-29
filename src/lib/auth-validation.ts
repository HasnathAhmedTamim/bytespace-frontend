export type AuthValues = Record<string, string>;
export type AuthErrors = Record<string, string>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const MIN_PASSWORD_LENGTH = 8;

function emailError(email: string) {
  if (!email) return "Enter your email address.";
  if (!EMAIL_PATTERN.test(email)) return "Enter a valid email address, like name@example.com.";
}

export function validateSignIn({ email, password }: AuthValues): AuthErrors {
  const errors: AuthErrors = {};
  const emailMessage = emailError(email);
  if (emailMessage) errors.email = emailMessage;
  if (!password) errors.password = "Enter your password.";
  return errors;
}

export function validateSignUp({ name, email, password }: AuthValues): AuthErrors {
  const errors: AuthErrors = {};
  if (!name) errors.name = "Enter your full name.";
  else if (name.length < 2) errors.name = "Your name should be at least 2 characters.";
  const emailMessage = emailError(email);
  if (emailMessage) errors.email = emailMessage;
  if (!password) errors.password = "Create a password.";
  else if (password.length < MIN_PASSWORD_LENGTH)
    errors.password = `Use at least ${MIN_PASSWORD_LENGTH} characters.`;
  return errors;
}
