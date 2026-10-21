import { createFileRoute } from "@tanstack/react-router";
import { AboutBlock, Features } from "@/components/site/sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — IRON FUEL" },
      { name: "description", content: "IRON FUEL is a fictional concept store demonstrating a modern sports nutrition shopping experience." },
      { property: "og:title", content: "About IRON FUEL" },
      { property: "og:description", content: "A concept sports nutrition storefront with WhatsApp ordering." },
    ],
  }),
  component: () => (<><AboutBlock /><Features /></>),
});
