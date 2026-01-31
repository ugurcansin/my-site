import Link from "next/link";

export default function TermsPage() {
    return (
        <main className="mx-auto max-w-xl px-4 py-10 text-slate-900">
            <Link href="/" className="text-sm text-slate-700 hover:text-slate-950">← Back</Link>

            <h1 className="mt-6 text-3xl font-semibold">Terms of Service</h1>
            <p className="mt-2 text-sm text-slate-600">Last updated: Jan 30, 2026</p>


            <section className="mt-8 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                    PutMyFaceIn sells one-time, personalized digital face-swap videos. By using the site, you agree to these terms.
                </p>

                <h2 className="text-lg font-semibold text-slate-900">Consent & acceptable use</h2>
                <ul className="list-disc pl-5 space-y-1">
                    <li>You may upload only your own face or someone who gave you clear permission.</li>
                    <li>No illegal content, harassment, fraud, impersonation for deception, or harmful use.</li>
                    <li>We may refuse or cancel orders that appear abusive or suspicious.</li>
                </ul>

                <h2 className="text-lg font-semibold text-slate-900">Delivery</h2>
                <p>
                    Most orders are delivered quickly. During busy times, delivery may take longer.
                    Delivery is via email to the address you provide.
                </p>

                <h2 className="text-lg font-semibold text-slate-900">Digital nature of the product</h2>
                <p>
                    This is a customized digital product generated from your input. Output quality may vary based on the uploaded photo.
                </p>

                <h2 className="text-lg font-semibold text-slate-900">Support</h2>
                <p>
                    For help, contact{" "}
                    <a className="underline" href="mailto:support@putmyfacein.com">support@putmyfacein.com</a>.
                </p>
            </section>
        </main>
    );
}
