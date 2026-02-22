import Image from "next/image";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <div className="border-t border-night-softer/30 bg-night/50 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-2xl font-bold tracking-tight text-moon-light sm:text-3xl">
          Projetos
        </h2>
        <ul className="grid gap-8 sm:grid-cols-2">
          {projects.map((project) => {
            const isGreen = project.highlightColor === "green";
            const isBlue = project.highlightColor === "blue";
            const borderNeonClass = isGreen
              ? "border-green-400/80 shadow-[0_0_20px_rgba(74,222,128,0.35)] hover:shadow-[0_0_24px_rgba(74,222,128,0.5)]"
              : isBlue
                ? "border-blue-700/90 shadow-[0_0_20px_rgba(29,78,216,0.4)] hover:shadow-[0_0_24px_rgba(29,78,216,0.55)]"
                : "border-night-softer/50 shadow-lg hover:border-amber/40 hover:shadow-amber/5";
            return (
            <li key={project.name}>
              <article className={`flex h-full flex-col overflow-hidden rounded-xl border bg-night-light/20 transition ${borderNeonClass}`}>
                <div className="flex h-16 shrink-0 items-center justify-center rounded-t-xl bg-night-softer/30 px-4 py-3">
                  {project.logo ? (
                    <Image
                      src={project.logo}
                      alt={`Logo ${project.name}`}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  ) : (
                    <span className="text-moon-silver/40 text-xs"></span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-semibold text-moon-light">
                  {project.name}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-moon-silver">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded bg-violet/20 px-2 py-0.5 text-xs text-violet-light"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <ul className="flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <li key={link.url}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-amber transition hover:text-amber-light"
                      >
                        {link.label}
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-row">
                  <span className="text-sm text-moon-silver">
                    {!project.endDate 
                      ? `Criado em ${project.startDate.year} |` 
                      : ``}
                  </span>
                  <span className="text-sm text-moon-silver">
                    {project.endDate 
                      ? `Data de início e fim: ${project.startDate.year} - ${project.endDate.year}` 
                      : `Atualizado por último em ${project.lastUpdate.year}`}
                  </span>
                </div>
                </div>
              </article>
            </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
