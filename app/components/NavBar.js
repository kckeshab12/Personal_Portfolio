"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "#top", label: "Home" },
  { href: "#learn-more", label: "Learn More" },
  { href: "#AboutMe", label: "About" },
  { href: "#Project", label: "Projects" },
  { href: "#Blocks", label: "Skills" },
  { href: "#stories", label: "Stories" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="mx-auto mt-4 w-[92%] max-w-6xl rounded-2xl border border-white/30 bg-white/70 px-5 py-3 shadow-lg backdrop-blur-md">
      <div className="flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Keshab KC logo"
            width={40}
            height={40}
            className="rounded-full border border-slate-200 object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-slate-900">Keshab KC</p>
            <p className="text-xs text-slate-600">Portfolio</p>
          </div>
        </a>

        <button
          className="rounded-lg border border-slate-200 p-2 text-slate-700 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>

        <ul className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition hover:text-cyan-700">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <ul className="mt-3 space-y-2 border-t border-slate-200 pt-3 text-sm font-medium text-slate-700 md:hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block rounded-md px-2 py-2 transition hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
