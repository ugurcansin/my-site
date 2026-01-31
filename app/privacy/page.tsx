import Link from "next/link";

export default function PrivacyPage() {
    return (
        <main className="mx-auto max-w-xl px-4 py-10 text-slate-900">
            <Link href="/" className="text-sm text-slate-700 hover:text-slate-950">← Back</Link>

            <h1 className="mt-6 text-3xl font-semibold">Privacy Policy</h1>
            <p className="mt-2 text-sm text-slate-600">Last updated: Jan 30, 2026</p>


            <section className="mt-8 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                    PutMyFaceIn provides one-time personalized face-swap video generation. To deliver the service,
                    we collect the minimum information needed.
                </p>

                <h2 className="text-lg font-semibold text-slate-900">What we collect</h2>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Photo you upload (selfie)</li>
                    <li>Email address (to deliver your video / receipt)</li>
                    <li>Basic technical data (IP/device info) for security and fraud prevention</li>
                </ul>

                <h2 className="text-lg font-semibold text-slate-900">How we use it</h2>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Generate your personalized video</li>
                    <li>Deliver your video by email</li>
                    <li>Prevent fraud, abuse, and unauthorized use</li>
                </ul>

                <h2 className="text-lg font-semibold text-slate-900">Storage & deletion</h2>
                <p>
                    We keep uploads only as long as needed to complete and deliver your order. We aim to delete uploaded
                    photos and generated files within <b>24 hours</b> (often sooner), unless we must keep limited records
                    for security, dispute handling, or legal compliance.
                </p>

                <h2 className="text-lg font-semibold text-slate-900">Sharing</h2>
                <p>
                    We do not publish your uploads.
                    We may share limited data with service providers (payments, email delivery, hosting)
                    only as needed to provide the service.
                </p>

                <h2 className="text-lg font-semibold text-slate-900">Your choices</h2>
                <p>
                    You can request deletion or ask questions by emailing{" "}
                    <a className="underline" href="mailto:support@putmyfacein.com">support@putmyfacein.com</a>.
                </p>
            </section>
        </main>
    );
}
