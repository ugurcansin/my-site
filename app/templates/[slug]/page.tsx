import Link from "next/link";
import { templates, reviews } from "../data";

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
                <h1 className="mt-6 text-2xl font-semibold text-slate-900">Template not found</h1>
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
                        <span className="rounded-full border border-black/10 bg-white px-3 py-1">One-time payment</span>
                        <span className="rounded-full border border-black/10 bg-white px-3 py-1">Mobile-first</span>
                        <span className="rounded-full border border-black/10 bg-white px-3 py-1">9:16</span>
                    </div>
                </section>

                {/* PRICING (UI-only for now) */}
                <section className="mt-8">
                    <div className="rounded-3xl border border-black/10 bg-white p-5 shadow-sm">
                        <div className="flex items-end justify-between">
                            <div>
                                <div className="text-sm font-semibold">One-time purchase</div>
                                <div className="text-xs text-slate-500">No subscription.</div>
                            </div>

                            <div className="text-right">
                                <div className="text-xs text-slate-500 line-through">$9.99</div>
                                <div className="text-3xl font-semibold">$2.99</div>
                            </div>
                        </div>

                        <div className="mt-4 grid gap-3">
                            <button disabled className="rounded-2xl bg-indigo-600/70 px-5 py-4 text-sm font-semibold text-white">
                                Pay $2.99 (Coming soon)
                            </button>

                            <a
                                href="mailto:support@putmyfacein.com?subject=I%20want%20Template%201&body=Hi%2C%20I%20want%20to%20buy%20Template%201.%20How%20do%20I%20pay%20and%20upload%20my%20face%3F"
                                className="rounded-2xl border border-black/10 bg-white px-5 py-4 text-center text-sm font-semibold hover:bg-slate-50 transition"
                            >
                                Buy via email (for now)
                            </a>
                        </div>

                        <div className="mt-4 text-xs text-slate-500">
                            Checkout integration is being added. For now, purchase via email support.
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
                    <a className="text-sm text-slate-700 hover:text-slate-950" href="mailto:support@putmyfacein.com">
                        Need help? Email support@putmyfacein.com
                    </a>
                </div>
            </main>
        </div>
    );
}
