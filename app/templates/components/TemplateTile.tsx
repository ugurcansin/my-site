"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type MouseEvent, type TouchEvent } from "react";

type Template = {
    slug: string;
    title: string;
    desc: string;
    img: string;
    poster?: string;
    video?: string;
    badge?: string;
};

export default function TemplateTile({ t }: { t: Template }) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const canPlayVideo = Boolean(t.video);

    const [armedToOpen, setArmedToOpen] = useState(false);
    const [isPreviewing, setIsPreviewing] = useState(false);
    const timeoutRef = useRef<number | null>(null);

    useEffect(() => {
        const onScroll = () => {
            setArmedToOpen(false);
            stopPreview();
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const clearTimer = () => {
        if (timeoutRef.current !== null) {
            window.clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    };

    const playPreview = async () => {
        if (!canPlayVideo || !videoRef.current) return;
        try {
            clearTimer();
            setIsPreviewing(true);
            videoRef.current.currentTime = 0;
            await videoRef.current.play();
        } catch {
            setIsPreviewing(false);
        }
    };

    const stopPreview = () => {
        if (!canPlayVideo || !videoRef.current) return;
        clearTimer();
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setIsPreviewing(false);
    };

    const onMouseEnter = () => playPreview();
    const onMouseLeave = () => stopPreview();

    const onClick = async (e: MouseEvent) => {
        if (!canPlayVideo) return;
        if (armedToOpen) return;

        e.preventDefault();
        setArmedToOpen(true);
        await playPreview();

        timeoutRef.current = window.setTimeout(() => {
            stopPreview();
        }, 1200);
    };

    const onTouchStart = async (e: TouchEvent) => {
        if (!canPlayVideo) return;
        if (armedToOpen) return;

        e.preventDefault();
        setArmedToOpen(true);
        await playPreview();

        timeoutRef.current = window.setTimeout(() => {
            stopPreview();
        }, 1200);
    };

    const posterSrc = t.poster || t.img;

    return (
        <Link
            href={`/templates/${t.slug}`}
            className="group block"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
            onTouchStart={onTouchStart}
        >
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 shadow-sm transition hover:shadow-md hover:bg-white">
                <div className="relative aspect-[9/16] w-full overflow-hidden">
                    <Image
                        src={posterSrc}
                        alt={t.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 50vw, 420px"
                        priority
                    />

                    {canPlayVideo ? (
                        <video
                            ref={videoRef}
                            className={`absolute inset-0 h-full w-full object-cover transition duration-200 opacity-0 group-hover:opacity-100 ${isPreviewing ? "opacity-100" : ""
                                }`}
                            src={t.video}
                            muted
                            loop
                            playsInline
                            preload="metadata"
                        />
                    ) : null}

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                    {t.badge ? (
                        <div className="absolute left-2 top-2 sm:left-3 sm:top-3 rounded-full bg-white/85 px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold tracking-wide text-slate-900">
                            {t.badge}
                        </div>
                    ) : null}

                    {/* Tighter bottom padding/text on mobile, same on desktop */}
                    <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-3">
                        <div className="flex items-start justify-between gap-2">
                            <h3 className="text-[12px] sm:text-sm font-semibold leading-snug text-white">
                                {t.title}
                            </h3>
                            <span className="mt-0.5 text-[10px] sm:text-[11px] text-white/70 whitespace-nowrap">
                                9:16
                            </span>
                        </div>

                        <p className="mt-1 line-clamp-2 text-[10px] sm:text-xs text-white/80">
                            {t.desc}
                        </p>

                        {canPlayVideo ? (
                            <p className="mt-1 text-[9px] sm:text-[10px] text-white/70">
                                Tap to preview · Tap again to open
                            </p>
                        ) : null}
                    </div>
                </div>
            </div>
        </Link>
    );
}
