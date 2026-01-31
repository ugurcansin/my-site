import Link from "next/link";
import TemplateTile from "./templates/components/TemplateTile";
import { ORIGINAL_PRICE, PRICE, templates } from "./templates/data";

export default function Home() {
    const primary = templates[0];

    return (
        <main className="mx-auto max-w-md px-4">
            {/* HERO */}
            <section className="pt-7 pb-4 text-center">
                <p className="text-[11px] font-semibold tracking-[0.35em] text-slate-600">
                    VIRAL FACE-SWAP VIDEO
                </p>

                <h1 className="mt-3 text-[40px] leading-[1.05] font-semibold tracking-tight">
                    Put your face in it.
                    <span className="block text-slate-600">Make your friends laugh.</span>
                </h1>

                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-slate-600">
                    Upload a selfie → pay{" "}
                    <span className="font-semibold text-slate-900">
                        ${PRICE.toFixed(2)}
                    </span>{" "}
                    → get your video by email.
                </p>

                {/* Mini “how it works” */}
                <div className="mx-auto mt-5 grid max-w-sm grid-cols-3 gap-2 text-left">
                    <div className="rounded-2xl border border-black/10 bg-white/70 p-3 shadow-sm">
                        <p className="text-xs font-semibold">1) Choose</p>
                        <p className="mt-1 text-[11px] text-slate-600">Pick a template</p>
                    </div>
                    <div className="rounded-2xl border border-black/10 bg-white/70 p-3 shadow-sm">
                        <p className="text-xs font-semibold">2) Upload</p>
                        <p className="mt-1 text-[11px] text-slate-600">Add your face</p>
                    </div>
                    <div className="rounded-2xl border border-black/10 bg-white/70 p-3 shadow-sm">
                        <p className="text-xs font-semibold">3) Receive</p>
                        <p className="mt-1 text-[11px] text-slate-600">Email delivery</p>
                    </div>
                </div>

                {primary ? (
                    <Link
                        href={`/templates/${primary.slug}`}
                        className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-indigo-600 px-6 py-4 text-sm font-semibold text-white hover:bg-indigo-500 transition"
                    >
                        Start — ${PRICE.toFixed(2)} →
                    </Link>
                ) : null}

                <p className="mt-3 text-[12px] text-slate-600">
                    No subscription • one-time purchase • usually under 2 hours
                </p>
            </section>

            {/* TEMPLATE */}
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

                            <div className="mt-3">
                                <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/75 px-4 py-2 shadow-sm">
                                    <span className="text-xs text-slate-500 line-through">
                                        ${ORIGINAL_PRICE.toFixed(2)}
                                    </span>
                                    <span className="text-sm font-semibold text-slate-900">
                                        ${PRICE.toFixed(2)}
                                    </span>
                                    <span className="text-xs font-semibold text-white bg-indigo-600 rounded-full px-2 py-0.5">
                                        SALE
                                    </span>
                                </div>

                                <p className="mt-2 text-[12px] text-slate-600">
                                    One-time purchase • email delivery • mobile-first
                                </p>
                            </div>

                            <div className="mt-4">
                                <Link
                                    href={`/templates/${t.slug}`}
                                    className="inline-flex w-full items-center justify-center rounded-2xl bg-indigo-600 px-6 py-4 text-sm font-semibold text-white hover:bg-indigo-500 transition"
                                >
                                    Continue — ${PRICE.toFixed(2)} →
                                </Link>

                                <a
                                    href="mailto:support@putmyfacein.com?subject=PutMyFaceIn%20Help"
                                    className="mt-3 inline-flex w-full items-center justify-center rounded-2xl border border-black/10 bg-white/70 px-6 py-4 text-sm font-semibold text-slate-900 hover:bg-white transition"
                                >
                                    Questions? Email support
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* TRUST STRIP */}
            <section className="pb-12">
                <div className="rounded-2xl border border-black/10 bg-white/70 p-4 text-center shadow-sm">
                    <p className="text-sm font-semibold text-slate-900">
                        Limited launch price:{" "}
                        <span className="text-indigo-700">${PRICE.toFixed(2)}</span>
                    </p>
                    <p className="mt-1 text-[12px] text-slate-600">
                        No subscription • simple checkout • email delivery
                    </p>
                </div>
            </section>
        </main>
    );
}
