import type { Metadata } from "next";

export const notFoundMetadata: Metadata = {
  title: { default: "Page Not Found", template: "%s | ByteSpace" },
  description: "The page you are looking for doesn't exist.",
};
