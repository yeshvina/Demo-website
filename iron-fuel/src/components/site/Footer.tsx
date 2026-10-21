import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Youtube } from "lucide-react";
import { CONTACT_EMAIL, GENERAL_CHAT_LINK, LOCATION } from "@/lib/store";
import { Logo, NAV } from "./Header";
import { WhatsAppIcon } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-border bg-charcoal">
      <div className="container-site grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-muted-foreground">Fuel Your Potential.</p>
          <div className="mt-6 flex gap-3">
            {[{ I: Instagram, l: "Instagram" }, { I: Facebook, l: "Facebook" }, { I: Youtube, l: "YouTube" }].map(({ I, l }) => (
              <a key={l} href="#" onClick={(e) => e.preventDefault()} aria-label={`${l} (placeholder link)`} className="grid h-10 w-10 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg">Explore</h3>
          <ul className="mt-4 space-y-2">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="text-muted-foreground transition-colors hover:text-primary">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg">Contact</h3>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />{LOCATION}</li>
            <li><a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2 hover:text-primary"><Mail className="h-4 w-4 text-primary" />{CONTACT_EMAIL}</a></li>
            <li><a href={GENERAL_CHAT_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary"><WhatsAppIcon className="h-4 w-4 text-primary" />WhatsApp (placeholder)</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-muted-foreground md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} IRON FUEL. All rights reserved.</p>
          <p>Concept website for demonstration purposes. Products, prices and contact details are illustrative.</p>
        </div>
      </div>
    </footer>
  );
}
