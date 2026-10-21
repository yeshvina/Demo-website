import { createFileRoute } from "@tanstack/react-router";
import { Features, ProductGrid } from "@/components/site/sections";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop Supplements — IRON FUEL" },
      { name: "description", content: "Browse whey protein, creatine, pre-workout, mass gainer, protein bars and more. Order on WhatsApp." },
      { property: "og:title", content: "Shop Supplements — IRON FUEL" },
      { property: "og:description", content: "The full IRON FUEL lineup with one-tap WhatsApp ordering." },
    ],
  }),
  component: () => (<><ProductGrid /><Features /></>),
});
