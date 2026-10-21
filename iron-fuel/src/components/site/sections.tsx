import { Dumbbell, Headphones, MessageCircle, MousePointerClick, Mail, MapPin } from "lucide-react";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { CONTACT_EMAIL, GENERAL_CHAT_LINK, LOCATION, formatINR, productOrderLink, products, type Product } from "@/lib/store";
import { DemoNotice, ExternalButton, SectionHeading, WhatsAppIcon, btn } from "./ui";

export function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
      <div className="relative aspect-square overflow-hidden bg-charcoal">
        <img src={p.image} alt={p.alt} width={816} height={816} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded-sm bg-background/80 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">{p.category}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl">{p.name}</h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.description}</p>
        <div className="mt-4 flex items-end justify-between">
          <p className="font-display text-2xl text-primary">{formatINR(p.price)}</p>
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Demo price</span>
        </div>
        <ExternalButton href={productOrderLink(p)} variant="whatsapp" size="sm" className="mt-4 w-full" aria-label={`Order ${p.name} on WhatsApp`}>
          <WhatsAppIcon className="h-4 w-4" />Order on WhatsApp
        </ExternalButton>
      </div>
    </article>
  );
}

export function ProductGrid({ id }: { id?: string }) {
  return (
    <section id={id} className="scroll-mt-20 py-20">
      <div className="container-site">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="The Lineup" title="Shop Supplements">Tap any product to send a pre-filled order message on WhatsApp.</SectionHeading>
          <DemoNotice>Illustrative demo products & prices — not real inventory</DemoNotice>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  { I: MousePointerClick, t: "Convenient Ordering", d: "Pick a product and send your order request through WhatsApp in a couple of taps." },
  { I: Dumbbell, t: "Fitness Essentials", d: "A focused range covering protein, performance, hydration, snacks and accessories." },
  { I: MessageCircle, t: "Simple Shopping Experience", d: "No accounts or complicated checkout — browse, choose and message." },
  { I: Headphones, t: "Customer Support", d: "Have a question? Reach out on WhatsApp or email and talk to a real person." },
];

export function Features() {
  return (
    <section className="border-y border-border bg-charcoal py-20">
      <div className="container-site">
        <SectionHeading eyebrow="Why IRON FUEL" title="Built Around You" center />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ I, t, d }) => (
            <div key={t} className="rounded-[1.75rem] border border-border/60 bg-card/60 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary"><I className="h-6 w-6" /></div>
              <h3 className="mt-5 text-xl">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutBlock() {
  return (
    <section className="py-20">
      <div className="container-site grid gap-10 md:grid-cols-2 md:items-center">
        <SectionHeading eyebrow="About" title={<>A Concept Store <span className="text-primary">For Sports Nutrition</span></>} />
        <div className="space-y-4 text-muted-foreground md:text-lg">
          <p>IRON FUEL is a fictional concept store created to demonstrate a modern online shopping experience for sports nutrition products.</p>
          <p>It shows how a supplement retailer can present its range with clear product information, consistent branding and a direct WhatsApp ordering flow — without the overhead of a full checkout system.</p>
          <DemoNotice>Portfolio demonstration — not an operating business</DemoNotice>
        </div>
      </div>
    </section>
  );
}

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Please enter a message").max(1000),
});

export function ContactBlock() {
  const [errors, setErrors] = useState<Partial<Record<"name" | "email" | "message", string>>>({});
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = schema.safeParse(Object.fromEntries(new FormData(e.currentTarget)));
    if (!res.success) {
      setErrors(Object.fromEntries(res.error.issues.map((i) => [String(i.path[0]), i.message])));
      setDone(false);
      return;
    }
    setErrors({});
    setDone(true);
  }

  const field = "mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring";

  return (
    <section className="py-20">
      <div className="container-site grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <SectionHeading eyebrow="Contact" title="Get In Touch">The quickest way to reach us is WhatsApp.</SectionHeading>
          <ExternalButton href={GENERAL_CHAT_LINK} variant="whatsapp" size="lg" className="mt-8"><WhatsAppIcon />Chat With Us on WhatsApp</ExternalButton>
          <ul className="mt-8 space-y-3 text-muted-foreground">
            <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary" />{LOCATION}</li>
            <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-primary" /><a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary">{CONTACT_EMAIL}</a></li>
          </ul>
          <p className="mt-6 text-xs text-muted-foreground">Phone number and email are placeholders for demonstration.</p>
        </div>
        <form onSubmit={onSubmit} noValidate className="rounded-lg border border-border bg-card p-6 md:p-8 lg:col-span-3">
          <DemoNotice>Demo form — messages are not sent</DemoNotice>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold">Name<input name="name" maxLength={100} className={field} placeholder="Your name" aria-invalid={!!errors.name} />{errors.name && <span className="mt-1 block text-xs text-destructive">{errors.name}</span>}</label>
            <label className="text-sm font-semibold">Email<input name="email" type="email" maxLength={255} className={field} placeholder="you@example.com" aria-invalid={!!errors.email} />{errors.email && <span className="mt-1 block text-xs text-destructive">{errors.email}</span>}</label>
          </div>
          <label className="mt-5 block text-sm font-semibold">Message<textarea name="message" rows={5} maxLength={1000} className={field} placeholder="How can we help?" aria-invalid={!!errors.message} />{errors.message && <span className="mt-1 block text-xs text-destructive">{errors.message}</span>}</label>
          <button type="submit" className={btn({ variant: "primary", size: "md" }) + " mt-6 w-full sm:w-auto"}>Submit (Demo)</button>
          {done && (
            <p role="status" className="mt-4 rounded-md border border-primary/40 bg-primary/10 p-3 text-sm text-foreground">
              This is a demo form, so your message was not sent. Please use the WhatsApp button to get in touch.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
