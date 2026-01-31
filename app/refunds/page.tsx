import Link from "next/link";

export default function RefundsPage() {
    return (
        <main className="mx-auto max-w-xl px-4 py-10 text-slate-900">
            <Link href="/" className="text-sm text-slate-700 hover:text-slate-950">← Back</Link>

            <h1 className="mt-6 text-3xl font-semibold">Refund Policy</h1>

            <section className="mt-8 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                    PutMyFaceIn sells one-time, personalized digital videos.
                </p>

                <h2 className="text-lg font-semibold text-slate-900">When refunds are available</h2>
                <ul className="list-disc pl-5 space-y-1">
                    <li>If we fail to deliver your video within a reasonable time after purchase.</li>
                    <li>If the output is clearly unusable due to our processing error.</li>
                </ul>

                <h2 className="text-lg font-semibold text-slate-900">When refunds may not apply</h2>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Poor results caused by low-quality or unsuitable photos (blurry, extreme angles, heavy occlusion).</li>
                    <li>Change of mind after successful delivery.</li>
                </ul>

                <p>
                    To request help or a refund review, email{" "}
                    <a className="underline" href="mailto:support@putmyfacein.com">support@putmyfacein.com</a>{" "}
                    with your receipt email and a short description of the issue.
                </p>
            </section>
        </main>
    );
}
