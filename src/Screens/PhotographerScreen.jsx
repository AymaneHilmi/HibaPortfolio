import React from "react";
import FadeIn from "../components/FadeIn";
import PictureLogo from "@/assets/PictureLogo.png";


// ---- SAMPLE IMAGES (replace with real ones) ----
// Place your images inside /src/assets/photos and import them here
// Example:
// import photo01 from "../assets/photos/photo01.jpg";
// import photo02 from "../assets/photos/photo02.jpg";
// ...

const photos = [
    PictureLogo,
    PictureLogo,
    PictureLogo,
    PictureLogo,
    PictureLogo,
    PictureLogo,
    PictureLogo,
    PictureLogo,
];

export default function PhotographerScreen() {
    return (
        <div className="mx-auto max-w-6xl px-6 mt-32">
            <FadeIn>
                {/* Header */}
                <header className="text-center">
                    <h1 className="font-ramidots text-4xl md:text-6xl bg-brandgradient bg-clip-text text-transparent inline-block">
                        Visual Stories
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-zinc-600 dark:text-zinc-300 text-sm md:text-base">
                        A curated selection of moments I've captured — from street photography and travel stories
                        to portraits and spontaneous life scenes. Each photo represents an emotion, a memory,
                        or a fragment of time frozen forever.
                    </p>
                </header>

                {/* Section — About */}
                <section className="mt-14 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-sfbold text-zinc-900 dark:text-zinc-100">
                            My Journey Into Photography
                        </h2>
                        <p className="mt-3 text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
                            Photography started for me as a way to document the world — but it became much more.
                            Through the lens, I learned to look at details, chase light, understand composition,
                            and appreciate silence. My camera followed me through travels, people, cultures,
                            and stories that shaped my eye for aesthetics and emotion.
                        </p>
                        <p className="mt-3 text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
                            Today, I use photography not only to capture images, but to express identity,
                            emotion, and sometimes, nostalgia.
                        </p>
                    </div>

                    <div className="aspect-[4/3] rounded-xl bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                        {/* Replace this with a hero image */}
                        <div className="w-full h-full grid place-items-center text-xs text-zinc-500">
                            Hero Image Placeholder
                        </div>
                    </div>
                </section>

                {/* Section — Services / What I Do */}
                <section className="mt-20">
                    <h3 className="text-xl font-sfbold text-zinc-900 dark:text-zinc-200 mb-4">
                        What I Do
                    </h3>
                    <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-300 ">
                        I cover meaningful moments and brand stories with a modern, minimalist visual style. From intimate celebrations to large professional events and e‑commerce product shoots, I focus on clarity, emotion, and detail.
                    </p>

                    <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        <li className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 p-5">
                            <h4 className="text-base md:text-lg font-semibold text-zinc-900 dark:text-zinc-100">Weddings</h4>
                            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                                Full wedding coverage candid moments, couple sessions, and family portraits. A timeless edit that keeps the emotion at the center.
                            </p>
                        </li>

                        <li className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 p-5">
                            <h4 className="text-base md:text-lg font-semibold text-zinc-900 dark:text-zinc-100">Professional Events</h4>
                            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                                Conferences, corporate gatherings, and key milestones. Discreet on site, delivering clean visuals for press, internal comms, and social media.
                            </p>
                        </li>

                        <li className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 p-5">
                            <h4 className="text-base md:text-lg font-semibold text-zinc-900 dark:text-zinc-100">Product Photography (E‑commerce)</h4>
                            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                                Clean product shots for online stores: consistent lighting, angle standards, and export-ready files optimized for marketplaces.
                            </p>
                        </li>
                    </ul>
                </section>

                {/* Section — Gallery */}
                <section className="mt-20">
                    <h3 className="text-xl font-sfbold text-zinc-900 dark:text-zinc-200 mb-6">
                        Selected Works
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {photos.length === 0 && (
                            <div className="col-span-full text-center text-zinc-500 dark:text-zinc-400 text-sm py-10">
                                (No photos yet — import your pictures in /src/assets/photos)
                            </div>
                        )}

                        {photos.map((photo, index) => (
                            <div
                                key={index}
                                className="overflow-hidden rounded-lg group relative aspect-[3/4] bg-zinc-200 dark:bg-zinc-800"
                            >
                                <img
                                    src={photo}
                                    alt={`photo-${index}`}
                                    className="h-full w-full object-cover transition scale-100 group-hover:scale-105"
                                    draggable={false}
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Footer / Quote */}
                <div className="text-center mt-28 pb-20">
                    <p className="font-ramidots text-2xl text-zinc-800 dark:text-zinc-200">
                        "A photograph is not just what you see — it's what you feel."
                    </p>
                </div>
            </FadeIn>
        </div>
    );
}