import Link from "next/link";
import { Home, FileQuestion, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[85vh] w-full flex-col items-center justify-center overflow-hidden px-4 text-center">
      {/* Background Dotted Mesh & Glow Effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />
      <div className="pointer-events-none absolute -top-24 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-500/20 via-purple-500/15 to-transparent blur-3xl dark:from-indigo-500/10 dark:via-purple-500/10" />

      <div className="relative z-10 mx-auto max-w-md space-y-6">
        {/* Animated Badge & Icon Header */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="group relative flex h-20 w-20 items-center justify-center rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white via-slate-50 to-slate-100/50 p-4 shadow-xl transition-all duration-300 hover:rotate-3 hover:scale-105 dark:border-zinc-800 dark:from-zinc-900 dark:via-zinc-900/90 dark:to-zinc-950 dark:shadow-zinc-950/60">
            <FileQuestion className="h-10 w-10 text-indigo-600 transition-colors group-hover:text-indigo-500 dark:text-indigo-400" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex h-4 w-4 rounded-full bg-indigo-500" />
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200/60 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-600 dark:border-indigo-500/30 dark:bg-indigo-500/20 dark:text-indigo-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Error 404</span>
          </div>
        </div>

        {/* Text Details */}
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Page Not Found
          </h1>
          <p className="text-sm font-medium text-muted-foreground sm:text-base">
            Sorry, the resource or page you are looking for doesn&apos;t exist
            or has been moved to another URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-slate-800 hover:shadow-lg active:scale-95 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 sm:w-auto"
          >
            <Home className="h-4 w-4" />
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
