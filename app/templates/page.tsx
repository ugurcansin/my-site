import Link from "next/link";
import TemplateTile from "./components/TemplateTile";
import { ORIGINAL_PRICE, PRICE, templates } from "./data";

export default function TemplatesPage() {
    return (
        <main className="mx-auto max-w-md px-4 pt-6 pb-10">
            {/* Header */}
            <section className="text-center">
                <p className="text-[11px] font-semibold tracking-[0.35em] text-slate-600">
                    TEMPLATES
                </p>

                <h1 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
                    Choose a template
                </h1>

                <p className="mx-auto mt-2 max-w-sm text-[13px] sm:text-sm text-slate-600">
                    Tap to preview · Tap again to open. One-time payment{" "}
                    <span className="font-semibold text-slate-900">${PRICE.toFixed(2)}</span>.
                </p>

                {/* Chips (hide on mobile, keep on desktop) */}
                <div className="mt-4 hidden sm:flex justify-center gap-2 text-[12px] text-slate-600">
                    <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1">
                        No subscription
                    </span>
                    <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1">
                        Email delivery
                    </span>
                </div>
            </section>

            {/* Templates grid */}
            <section className="mt-5 sm:mt-6">
                {/* 2 columns on mobile, 2 on desktop */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {templates.map((t) => (
                        <div key={t.slug} className="text-center">
                            <TemplateTile t={t} />

                            {/* Price pill (smaller on mobile) */}
                            <div className="mt-2 sm:mt-3">
                                <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/75 px-3 py-1.5 sm:px-4 sm:py-2 shadow-sm">
                                    <span className="text-[10px] sm:text-xs text-slate-500 line-through">
                                        ${ORIGINAL_PRICE.toFixed(2)}
                                    </span>
                                    <span className="text-[12px] sm:text-sm font-semibold text-slate-900">
                                        ${PRICE.toFixed(2)}
                                    </span>
                                    <span className="text-[10px] sm:text-xs font-semibold text-white bg-indigo-600 rounded-full px-2 py-0.5">
                                        SALE
                                    </span>
                                </div>

                                {/* Hide this on mobile to reduce height */}
                                <p className="mt-2 hidden sm:block text-[12px] text-slate-600">
                                    One-time purchase • email delivery • mobile-first
                                </p>
                            </div>

                            {/* Compact CTA on mobile, full-width on desktop */}
                            <div className="mt-2.5 sm:mt-4">
                                <Link
                                    href={`/templates/${t.slug}`}
                                    className="inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-3 py-3 text-[13px] sm:rounded-2xl sm:px-6 sm:py-4 sm:text-sm font-semibold text-white hover:bg-indigo-500 transition"
                                >
                                    Get it — ${PRICE.toFixed(2)} →
                                </Link>

                                {/* Support link only on desktop */}
                                <div className="mt-5 hidden sm:block text-center">
                                    <a
                                        href="mailto:support@putmyfacein.com?subject=PutMyFaceIn%20Help"
                                        className="text-sm text-slate-600 hover:text-slate-900 underline"
                                    >
                                        Questions? Email support
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Back link */}
            <div className="mt-8 text-center">
                <Link
                    href="/"
                    className="text-sm text-slate-700 hover:text-slate-950 underline"
                >
                    ← Back to home
                </Link>
            </div>
        </main>
    );
}
