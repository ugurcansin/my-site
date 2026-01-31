import Link from "next/link";

export default function ContactPage() {
    return (
        <main className="mx-auto max-w-xl px-4 py-10 text-slate-900">
            <Link href="/" className="text-sm text-slate-700 hover:text-slate-950">← Back</Link>

            <h1 className="mt-6 text-3xl font-semibold">Contact</h1>
            <p className="mt-3 text-sm text-slate-700">
                Need help with an order? Email us and include your receipt email if possible.
            </p>

            <div className="mt-6 rounded-2xl border border-black/10 bg-white/70 p-4">
                <p className="text-sm font-semibold">Support email</p>
                <a className="mt-2 inline-block underline text-slate-900" href="mailto:support@putmyfacein.com">
                    support@putmyfacein.com
                </a>
                <p className="mt-2 text-xs text-slate-600">
                    Typical response time: within 24 hours.
                </p>
            </div>
        </main>
    );
}
