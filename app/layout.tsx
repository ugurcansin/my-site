import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "PutMyFaceIn — Face-swap video template ($2.99)",
    description:
        "Pick a template, upload a selfie, and get your face-swap video by email. One-time purchase. No subscription.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                {/* Background (global) */}
                <div className="pointer-events-none fixed inset-0 -z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-fuchsia-50 to-sky-50" />
                    <div className="absolute left-1/2 top-[-220px] h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-fuchsia-200/40 blur-3xl" />
                    <div className="absolute bottom-[-260px] right-[-260px] h-[760px] w-[760px] rounded-full bg-sky-200/40 blur-3xl" />
                </div>

                {/* NAV (global) */}
                <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-xl">
                    <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-4">
                        <Link href="/" className="flex items-center gap-2">
                            {/* Use icon (clean in navbar) */}
                            <Image
                                src="/logo-icon.png"
                                alt="PutMyFaceIn"
                                width={32}
                                height={32}
                                className="rounded-xl"
                                priority
                            />
                            <span className="text-sm font-semibold tracking-wide">PutMyFaceIn</span>
                        </Link>

                        <nav className="flex items-center gap-4 text-sm text-slate-700">
                            <Link className="hover:text-slate-950 transition" href="/#templates">
                                Template
                            </Link>
                            <Link className="hover:text-slate-950 transition" href="/contact">
                                Contact
                            </Link>
                        </nav>
                    </div>
                </header>

                {/* Page content */}
                {children}

                {/* FOOTER (global) */}
                <footer className="border-t border-black/5">
                    <div className="mx-auto max-w-xl px-4 py-10 text-center text-sm text-slate-600">
                        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
                            <Link className="underline hover:text-slate-900" href="/privacy">Privacy</Link>
                            <span className="text-slate-400">·</span>
                            <Link className="underline hover:text-slate-900" href="/terms">Terms</Link>
                            <span className="text-slate-400">·</span>
                            <Link className="underline hover:text-slate-900" href="/refunds">Refunds</Link>
                            <span className="text-slate-400">·</span>
                            <Link className="underline hover:text-slate-900" href="/contact">Contact</Link>
                        </div>

                        <div className="mt-3">
                            © {new Date().getFullYear()} PutMyFaceIn ·{" "}
                            <a className="underline hover:text-slate-900" href="mailto:support@putmyfacein.com">
                                support@putmyfacein.com
                            </a>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    );
}
