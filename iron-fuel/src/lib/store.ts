import whey from "@/assets/p-whey.jpg";
import creatine from "@/assets/p-creatine.jpg";
import preworkout from "@/assets/p-preworkout.jpg";
import gainer from "@/assets/p-gainer.jpg";
import bars from "@/assets/p-bars.jpg";
import electrolyte from "@/assets/p-electrolyte.jpg";
import shaker from "@/assets/p-shaker.jpg";
import plant from "@/assets/p-plant.jpg";

/**
 * PLACEHOLDER WhatsApp number (country code + number, digits only).
 * Replace with the store owner's real WhatsApp number before going live.
 */
export const WHATSAPP_NUMBER = "919876543210";
export const CONTACT_EMAIL = "hello@example.com";
export const LOCATION = "India";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function formatINR(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

export function productOrderLink(p: Product) {
  return whatsappLink(
    `Hi IRON FUEL, I'd like to order: ${p.name} (${formatINR(p.price)}). Please share availability and details.`,
  );
}

export const GENERAL_CHAT_LINK = whatsappLink("Hi IRON FUEL, I have a question about your products.");

export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  alt: string;
};

export const products: Product[] = [
  { id: "whey", name: "Whey Protein", price: 2499, category: "Protein", description: "A classic powdered protein supplement, commonly mixed with water or milk.", image: whey, alt: "Black whey protein tub with green lid next to a scoop of powder" },
  { id: "creatine", name: "Creatine Monohydrate", price: 899, category: "Performance", description: "Unflavoured creatine powder in a compact jar, easy to add to drinks.", image: creatine, alt: "Black creatine jar with a green stripe and a scoop of white powder" },
  { id: "preworkout", name: "Pre-Workout Formula", price: 1299, category: "Energy", description: "A flavoured powder blend designed to be taken before training sessions.", image: preworkout, alt: "Black pre-workout tub with neon green powder in a scoop" },
  { id: "gainer", name: "Mass Gainer", price: 2199, category: "Protein", description: "A calorie-dense powdered shake blend for those with higher intake goals.", image: gainer, alt: "Large black mass gainer tub with chocolate powder in a scoop" },
  { id: "bars", name: "Protein Bars", price: 499, category: "Snacks", description: "Convenient wrapped bars for an on-the-go snack between meals.", image: bars, alt: "Stack of black-wrapped protein bars with one opened chocolate bar" },
  { id: "electrolyte", name: "Electrolyte Powder", price: 599, category: "Hydration", description: "A flavoured drink mix to stir into water during or after activity.", image: electrolyte, alt: "Black electrolyte pouch beside a glass of lime green drink with ice" },
  { id: "shaker", name: "Shaker Bottle", price: 299, category: "Accessories", description: "A leak-resistant shaker for mixing powders smoothly at the gym or home.", image: shaker, alt: "Black shaker bottle with a neon green lid" },
  { id: "plant", name: "Plant Protein", price: 1799, category: "Protein", description: "A dairy-free protein powder made from plant-based sources.", image: plant, alt: "Black plant protein pouch with a scoop of pea protein powder" },
];
