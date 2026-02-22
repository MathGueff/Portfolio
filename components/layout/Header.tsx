"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-night-softer/50 bg-night/95 backdrop-blur supports-[backdrop-filter]:bg-night/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6" aria-label="Menu principal">
        <Link
          href="#inicio"
          className="text-lg font-semibold text-moon-light transition hover:text-amber"
        >
          MathGueff
        </Link>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-moon-silver hover:bg-night-light hover:text-moon-light md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="main-menu"
        >
          <span className="sr-only">Abrir menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <ul
          id="main-menu"
          className={`absolute right-4 top-full flex flex-col gap-1 rounded-lg border border-night-softer bg-night-light py-2 shadow-xl md:static md:flex md:flex-row md:border-0 md:bg-transparent md:py-0 md:shadow-none ${open ? "flex" : "hidden md:flex"}`}
        >
          {navLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block px-4 py-2 text-moon-silver transition hover:bg-night-softer/50 hover:text-amber md:rounded md:px-3 md:py-2"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
