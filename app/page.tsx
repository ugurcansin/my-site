import Link from "next/link";
import TemplateTile from "./templates/components/TemplateTile";
import { templates } from "./templates/data";

export default function Home() {
    return (
        <div className="min-h-screen text-slate-900">
            {/* Fun background */}
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-fuchsia-50 to-sky-50" />
                <div className="absolute left-1/2 top-[-220px] h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-fuchsia-200/40 blur-3xl" />
                <div className="absolute bottom-[-260px] right-[-260px] h-[760px] w-[760px] rounded-full bg-sky-200/40 blur-3xl" />
            </div>

            {/* NAV */}
            <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-xl">
                <div className="mx-auto flex max-w-md items-center justify-between px-4 py-4">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-600" />
                        <span className="text-sm font-semibold tracking-wide">PutMyFaceIn</span>
                    </Link>

                    <nav className="flex items-center gap-4 text-sm text-slate-700">
                        <a className="hover:text-slate-950 transition" href="#templates">
                            Template
                        </a>
                        <a
                            className="hover:text-slate-950 transition"
                            href="mailto:support@putmyfacein.com"
                        >
                            Contact
                        </a>
                    </nav>
                </div>
            </header>

            <main className="mx-auto max-w-md px-4">
                {/* HERO */}
                <section className="pt-7 pb-4 text-center">
                    <p className="text-[11px] font-semibold tracking-[0.35em] text-slate-600">
                        CREATE VIRAL FACE-SWAP VIDEOS
                    </p>

                    <h1 className="mt-3 text-[40px] leading-[1.05] font-semibold tracking-tight">
                        Put your face in it.
                        <span className="block text-slate-600">Make your friends laugh.</span>
                    </h1>

                    <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-slate-600">
                        No subscription. One-time payment. Pick a template and you’re done.
                    </p>
                </section>

                {/* TEMPLATE FIRST (higher = more impulse) */}
                <section id="templates" className="pb-10">
                    <div className="mb-3 text-center">
                        <p className="text-xs font-semibold tracking-[0.35em] text-slate-600">
                            TEMPLATE
                        </p>
                        <p className="mt-1 text-sm text-slate-600">
                            Tap to preview · Tap again to open
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {templates.map((t) => (
                            <div key={t.slug} className="text-center">
                                <TemplateTile t={t} />

                                {/* PRICE RIGHT UNDER VIDEO */}
                                <div className="mt-3">
                                    <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/75 px-4 py-2 shadow-sm">
                                        <span className="text-xs text-slate-500 line-through">$9.99</span>
                                        <span className="text-sm font-semibold text-slate-900">$2.99</span>
                                        <span className="text-xs font-semibold text-white bg-indigo-600 rounded-full px-2 py-0.5">
                                            SALE
                                        </span>
                                    </div>

                                    <p className="mt-2 text-[12px] text-slate-600">
                                        One-time purchase • delivered fast • mobile-first
                                    </p>
                                </div>

                                {/* STRONG CTA UNDER PRICE */}
                                <div className="mt-4">
                                    <a
                                        href={`/templates/${t.slug}`}
                                        className="inline-flex w-full items-center justify-center rounded-2xl bg-indigo-600 px-6 py-4 text-sm font-semibold text-white hover:bg-indigo-500 transition"
                                    >
                                        Get it for $2.99 →
                                    </a>

                                    <a
                                        href="mailto:support@putmyfacein.com?subject=PutMyFaceIn%20Purchase%20Help&body=Hi%2C%20I%20want%20to%20buy%20the%20template%20for%20%242.99.%20How%20do%20I%20pay%20and%20upload%20my%20face%3F"
                                        className="mt-3 inline-flex w-full items-center justify-center rounded-2xl border border-black/10 bg-white/70 px-6 py-4 text-sm font-semibold text-slate-900 hover:bg-white transition"
                                    >
                                        Questions? Email support
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SMALL TRUST STRIP (NOT BIG BOXES) */}
                <section className="pb-12">
                    <div className="rounded-2xl border border-black/10 bg-white/70 p-4 text-center shadow-sm">
                        <p className="text-sm font-semibold text-slate-900">
                            Limited launch price: <span className="text-indigo-700">$2.99</span>
                        </p>
                        <p className="mt-1 text-[12px] text-slate-600">
                            No subscription • simple checkout • instant access
                        </p>
                    </div>
                </section>
            </main>

            {/* FOOTER */}
            <footer className="border-t border-black/5">
                <div className="mx-auto max-w-md px-4 py-10 text-center text-sm text-slate-600">
                    © 2026 PutMyFaceIn ·{" "}
                    <a className="underline hover:text-slate-900" href="mailto:support@putmyfacein.com">
                        support@putmyfacein.com
                    </a>
                </div>
            </footer>
        </div>
    );
}
