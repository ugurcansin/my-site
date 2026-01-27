import Link from "next/link";

export default function ThankYouPage() {
    return (
        <div className="min-h-screen text-slate-900">
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-fuchsia-50 to-sky-50" />
                <div className="absolute left-1/2 top-[-220px] h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-fuchsia-200/40 blur-3xl" />
                <div className="absolute bottom-[-260px] right-[-260px] h-[760px] w-[760px] rounded-full bg-sky-200/40 blur-3xl" />
            </div>

            <main className="mx-auto max-w-md px-4 py-10">
                <div className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-sm text-center">
                    <p className="text-[11px] font-semibold tracking-[0.35em] text-slate-600">
                        ORDER RECEIVED
                    </p>

                    <h1 className="mt-3 text-2xl font-semibold tracking-tight">
                        Thank you! 🎉
                    </h1>

                    <p className="mt-2 text-sm text-slate-600">
                        We’re creating your face-swap video now.
                    </p>

                    <div className="mt-5 rounded-2xl border border-black/10 bg-white/70 p-4 text-left">
                        <p className="text-sm font-semibold">Delivery time</p>
                        <p className="mt-1 text-sm text-slate-600">
                            Usually under <span className="font-semibold">2 hours</span> (sometimes
                            as fast as 5–10 minutes).
                        </p>
                        <p className="mt-2 text-xs text-slate-500">
                            You’ll get an email with a download link when it’s ready.
                        </p>
                    </div>

                    <Link
                        href="/"
                        className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-indigo-600 px-6 py-4 text-sm font-semibold text-white hover:bg-indigo-500 transition"
                    >
                        Back to home
                    </Link>

                    <a
                        className="mt-4 inline-block text-xs text-slate-600 underline hover:text-slate-900"
                        href="mailto:support@putmyfacein.com"
                    >
                        Need help? support@putmyfacein.com
                    </a>
                </div>
            </main>
        </div>
    );
}
