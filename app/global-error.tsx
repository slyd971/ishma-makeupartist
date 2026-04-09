"use client";

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="fr">
      <body className="bg-[#f6eee8] text-[#1e1513]">
        <main className="flex min-h-screen items-center justify-center px-6 py-20">
          <div className="max-w-xl rounded-[2rem] border border-black/5 bg-white p-10 text-center shadow-soft">
            <p className="text-xs uppercase tracking-[0.35em] text-black/45">
              Erreur
            </p>
            <h1 className="mt-5 font-serif text-5xl text-black">
              Une erreur est survenue
            </h1>
            <p className="mt-5 text-base leading-8 text-black/70">
              {error.message || "Une erreur inattendue a empeche l'affichage de la page."}
            </p>
            <button
              type="button"
              onClick={() => reset()}
              className="mt-8 inline-flex rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-black transition-colors duration-300 hover:bg-black/[0.03]"
            >
              Reessayer
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
