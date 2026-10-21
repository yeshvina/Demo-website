import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { GENERAL_CHAT_LINK } from "@/lib/store";
import { ExternalButton, WhatsAppIcon } from "./ui";

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2" aria-label="IRON FUEL home">
      <span className="grid h-8 w-8 place-items-center rounded-sm bg-primary font-display text-lg text-primary-foreground">IF</span>
      <span className="font-display text-2xl tracking-wide">IRON<span className="text-primary">FUEL</span></span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container-site flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }} className="text-sm font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-primary" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <ExternalButton href={GENERAL_CHAT_LINK} variant="whatsapp" size="sm"><WhatsAppIcon className="h-4 w-4" />Order on WhatsApp</ExternalButton>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border md:hidden" aria-label="Mobile">
          <div className="container-site flex flex-col gap-1 py-4">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: true }} className="py-2 font-semibold uppercase tracking-wider" activeProps={{ className: "text-primary" }}>{n.label}</Link>
            ))}
            <ExternalButton href={GENERAL_CHAT_LINK} variant="whatsapp" size="md" className="mt-2"><WhatsAppIcon />Chat With Us on WhatsApp</ExternalButton>
          </div>
        </nav>
      )}
    </header>
  );
}
