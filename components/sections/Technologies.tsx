import Image from "next/image";
import { technologies } from "@/lib/data";

export function Technologies() {
  return (
    <div className="border-t border-night-softer/30 bg-night-light/30 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-2xl font-bold tracking-tight text-moon-light sm:text-3xl">
          Tecnologias
        </h2>
        <ul className="flex flex-wrap justify-center gap-3 sm:justify-start sm:gap-4">
          {technologies.map((tech) => (
            <li key={tech.name}>
              <span className="inline-flex items-center gap-2 rounded-full border border-amber/40 bg-night/60 px-4 py-2 text-sm font-medium text-moon-silver transition hover:border-amber hover:bg-amber/10 hover:text-amber">
                <Image className="w-6 h-6 shrink-0" src={tech.iconUrl} alt={tech.name} width={24} height={24} unoptimized />
                {tech.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
