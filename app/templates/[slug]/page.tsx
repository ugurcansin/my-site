import Link from "next/link";
import { ORIGINAL_PRICE, PRICE, reviews, templates } from "../data";

function Stars() {
    return (
        <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-[13px] text-[#D4AF37]">
                    ★
                </span>
            ))}
        </div>
    );
}

export default async function TemplatePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const t = templates.find((x) => x.slug === slug);

    if (!t) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-fuchsia-50 to-sky-50 p-6">
                <Link href="/#templates" className="text-slate-700 hover:text-slate-950">
                    ← Back
                </Link>
                <h1 className="mt-6 text-2xl font-semibold text-slate-900">
                    Template not found
                </h1>
                <p className="mt-2 text-sm text-slate-600">
                    Debug: slug = <span className="font-mono">{String(slug)}</span>
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen text-slate-900">
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-fuchsia-50 to-sky-50" />
                <div className="absolute left-1/2 top-[-220px] h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-fuchsia-200/40 blur-3xl" />
                <div className="absolute bottom-[-260px] right-[-260px] h-[760px] w-[760px] rounded-full bg-sky-200/40 blur-3xl" />
            </div>

            <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-xl">
                <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-4">
                    <Link href="/#templates" className="text-sm text-slate-700 hover:text-slate-950">
                        ← Back
                    </Link>
                    <div className="text-sm font-semibold">PutMyFaceIn</div>
                    <a
                        className="text-sm text-slate-700 hover:text-slate-950"
                        href="mailto:support@putmyfacein.com"
                    >
                        Help
                    </a>
                </div>
            </header>

            <main className="mx-auto max-w-xl px-4 pt-6 pb-28">
                {/* PREVIEW */}
                <section>
                    <div className="rounded-3xl border border-black/10 bg-white/80 p-4 shadow-sm">
                        <div className="mx-auto w-full max-w-[320px]">
                            <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-black/10">
                                {t.video ? (
                                    <video
                                        className="h-full w-full object-cover"
                                        src={t.video}
                                        poster={t.poster}
                                        controls
                                        playsInline
                                        preload="metadata"
                                    />
                                ) : (
                                    <img src={t.poster} alt={t.title} className="h-full w-full object-cover" />
                                )}
                            </div>
                        </div>

                        <p className="mt-3 text-center text-xs text-slate-500">
                            9:16 preview • TikTok / Reels / Shorts
                        </p>
                    </div>
                </section>

                {/* TITLE + DESC */}
                <section className="mt-6">
                    <h1 className="text-2xl font-semibold">{t.title}</h1>
                    <p className="mt-2 text-slate-600">{t.desc}</p>

                    <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
                        <span className="rounded-full border border-black/10 bg-white px-3 py-1">
                            One-time payment
                        </span>
                        <span className="rounded-full border border-black/10 bg-white px-3 py-1">
                            No subscription
                        </span>
                        <span className="rounded-full border border-black/10 bg-white px-3 py-1">9:16</span>
                    </div>
                </section>

                {/* BUY + UPLOAD */}
                <section className="mt-8">
                    <div className="rounded-3xl border border-black/10 bg-white p-5 shadow-sm">
                        <div className="flex items-end justify-between gap-3">
                            <div>
                                <div className="text-sm font-semibold">One-time purchase</div>
                                <div className="text-xs text-slate-500">
                                    Upload your face → pay → receive by email
                                </div>
                            </div>

                            <div className="text-right">
                                <div className="text-xs text-slate-500 line-through">${ORIGINAL_PRICE.toFixed(2)}</div>
                                <div className="text-3xl font-semibold">${PRICE.toFixed(2)}</div>
                            </div>
                        </div>

                        {/* STEP 1: upload */}
                        <div className="mt-5 rounded-2xl border border-black/10 bg-white/70 p-4">
                            <p className="text-sm font-semibold">1) Upload your selfie</p>
                            <p className="mt-1 text-xs text-slate-600">
                                Clear front-facing photo works best. JPG/PNG.
                            </p>
                            <input
                                className="mt-3 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm"
                                type="file"
                                accept="image/*"
                                required
                            />
                        </div>

                        {/* STEP 2: email */}
                        <div className="mt-3 rounded-2xl border border-black/10 bg-white/70 p-4">
                            <p className="text-sm font-semibold">2) Your email</p>
                            <p className="mt-1 text-xs text-slate-600">
                                We’ll send your finished video as a download link.
                            </p>
                            <input
                                className="mt-3 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm"
                                type="email"
                                placeholder="you@email.com"
                                required
                            />
                        </div>

                        {/* STEP 3: payment (placeholder now) */}
                        <div className="mt-4 grid gap-3">
                            <Link
                                href="/thank-you"
                                className="rounded-2xl bg-indigo-600 px-5 py-4 text-center text-sm font-semibold text-white hover:bg-indigo-500 transition"
                            >
                                Continue — ${PRICE.toFixed(2)} →

                            </Link>

                            <a
                                href="mailto:support@putmyfacein.com?subject=PutMyFaceIn%20Order%20Help&body=Hi%2C%20I%20need%20help%20placing%20an%20order%20for%20Template%201.%20Thanks!"
                                className="rounded-2xl border border-black/10 bg-white px-5 py-4 text-center text-sm font-semibold hover:bg-slate-50 transition"
                            >
                                Having trouble? Email support
                            </a>
                        </div>

                        <div className="mt-4 rounded-2xl bg-black/5 p-4">
                            <p className="text-sm font-semibold">Delivery time</p>
                            <p className="mt-1 text-sm text-slate-600">
                                Usually <span className="font-semibold">10–30 minutes</span>. During busy times, up to{" "}
                                <span className="font-semibold">2 hours</span>.
                            </p>
                            
                        </div>
                    </div>
                </section>

                {/* FAQ (trust, no fake claims) */}
                <section className="mt-10">
                    <h2 className="text-lg font-semibold">Quick FAQ</h2>

                    <div className="mt-4 grid gap-3">
                        <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
                            <p className="text-sm font-semibold">Do you store my photo?</p>
                            <p className="mt-1 text-sm text-slate-600">
                                We use your photo only to generate your video and deliver your order. See our{" "}
                                <Link className="underline hover:text-slate-900" href="/privacy">
                                    Privacy Policy
                                </Link>.
                            </p>


                        </div>

                        <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
                            <p className="text-sm font-semibold">How do I get the video?</p>
                            <p className="mt-1 text-sm text-slate-600">
                                We email a download link to the address you enter.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
                            <p className="text-sm font-semibold">Is it a subscription?</p>
                            <p className="mt-1 text-sm text-slate-600">
                                No. It’s a one-time purchase of ${PRICE.toFixed(2)}.
                            </p>
                        </div>
                    </div>
                </section>

                {/* REVIEWS */}
                <section className="mt-10">
                    <div className="flex justify-between items-end">
                        <h2 className="text-lg font-semibold">Customer reviews</h2>
                        <span className="text-xs text-slate-500">{reviews.length} reviews</span>
                    </div>

                    <div className="mt-4 grid gap-3">
                        {reviews.map((r, i) => (
                            <div key={i} className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-semibold">{r.name}</span>
                                    <Stars />
                                </div>
                                <p className="mt-2 text-sm text-slate-600">{r.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="mt-10 text-center">
                    <Link className="text-sm text-slate-700 hover:text-slate-950" href="/contact">
                        Help
                    </Link>

                </div>
            </main>
        </div>
    );
}
