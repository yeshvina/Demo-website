import { Link, createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { AboutBlock, ContactBlock, Features, ProductGrid } from "@/components/site/sections";
import { btn } from "@/components/site/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IRON FUEL — Fuel Your Potential | Sports Nutrition Store" },
      { name: "description", content: "Whey protein, creatine, pre-workout and more. Browse the IRON FUEL range and order directly on WhatsApp." },
      { property: "og:title", content: "IRON FUEL — Fuel Your Potential" },
      { property: "og:description", content: "Sports nutrition essentials with simple WhatsApp ordering." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden">
        <img src={hero} alt="Supplement tub on a gym bench beside a loaded barbell in a dark gym" width={1920} height={1088} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" aria-hidden />
        <div className="container-site py-24">
          <p className="eyebrow">IRON FUEL · Fuel Your Potential.</p>
          <h1 className="mt-5 max-w-3xl text-6xl sm:text-7xl lg:text-8xl">Build Stronger.<br /><span className="text-primary">Go Further.</span></h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">Your fitness goals deserve the right fuel. Explore sports nutrition essentials for your next level.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link to="/shop" className={btn({ size: "lg" })}>Shop Supplements</Link>
            <a href="#products" className={btn({ variant: "outline", size: "lg" })}>Explore Products</a>
          </div>
        </div>
      </section>
      <ProductGrid id="products" />
      <Features />
      <AboutBlock />
      <ContactBlock />
    </>
  );
}
