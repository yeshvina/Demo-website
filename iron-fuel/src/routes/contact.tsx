import { createFileRoute } from "@tanstack/react-router";
import { ContactBlock } from "@/components/site/sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — IRON FUEL" },
      { name: "description", content: "Get in touch with IRON FUEL on WhatsApp or by email." },
      { property: "og:title", content: "Contact IRON FUEL" },
      { property: "og:description", content: "Chat with IRON FUEL on WhatsApp." },
    ],
  }),
  component: ContactBlock,
});
