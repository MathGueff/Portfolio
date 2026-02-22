import Image from "next/image";
import Link from "next/link";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-moon bg-pattern-moon px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-violet blur-3xl" />
        <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-amber/30 blur-3xl" />
      </div>
      <div className="pointer-events-none absolute right-8 top-12 hidden opacity-30 lg:block" aria-hidden>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-amber">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </div>
      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:gap-12 md:text-left">
          <div className="relative shrink-0">
            <Image
              src={profile.avatar}
              alt={`Foto de ${profile.name}`}
              width={160}
              height={160}
              className="rounded-full border-4 border-amber/50 shadow-xl ring-2 ring-moon-silver/20"
              priority
            />
            <span className="absolute -bottom-1 -right-1 flex h-4 w-4 rounded-full bg-moss" aria-hidden>
              <span className="absolute inset-0 animate-ping rounded-full bg-moss opacity-75" />
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold tracking-tight text-moon-light sm:text-4xl lg:text-5xl">
              {profile.name}
            </h1>
            <p className="text-lg text-moon-silver sm:text-xl">{profile.title}</p>
            <p className="flex items-center justify-center gap-2 text-moon-silver md:justify-start">
              <svg className="h-5 w-5 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {profile.location}
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-4 md:justify-start">
              <Link
                href="#projetos"
                className="inline-flex items-center rounded-lg bg-amber px-5 py-2.5 font-medium text-night transition hover:bg-amber-light focus:outline-none focus:ring-2 focus:ring-amber focus:ring-offset-2 focus:ring-offset-night"
              >
                Ver projetos
              </Link>
              <Link
                href="#contato"
                className="inline-flex items-center rounded-lg border border-moon-silver/50 bg-transparent px-5 py-2.5 font-medium text-moon-silver transition hover:border-amber hover:text-amber focus:outline-none focus:ring-2 focus:ring-amber focus:ring-offset-2 focus:ring-offset-night"
              >
                Contato
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
