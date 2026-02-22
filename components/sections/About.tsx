import { profile } from "@/lib/data";

export function About() {
  return (
    <div className="border-t border-night-softer/30 bg-night/50 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-moon-light sm:text-3xl">
          Sobre mim
        </h2>
        <div className="space-y-4 text-moon-silver">
          <p className="leading-relaxed">{profile.bio}</p>
        </div>
      </div>
    </div>
  );
}
