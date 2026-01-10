import React from 'react'

function isExternal(url) {
    return /^https?:\/\//i.test(url)
}

function resolveImageSrc(imageSrc) {
    if (!imageSrc) return ''
    if (typeof imageSrc === 'string') return imageSrc
    if (typeof imageSrc === 'object') {
        if (typeof imageSrc.src === 'string') return imageSrc.src
        if (typeof imageSrc.default === 'string') return imageSrc.default
        const values = Object.values(imageSrc)
        const firstString = values.find((v) => typeof v === 'string')
        if (firstString) return firstString
    }
    return ''
}

export default function ProductCard({ product }) {
    const {
        title,
        subtitle,
        category,
        imageSrc,
        amazonUrl,
        badge,
        price,
    } = product

    const external = isExternal(amazonUrl)
    const rel = external ? 'noopener noreferrer sponsored' : undefined
    const target = external ? '_blank' : undefined
    const imgSrc = resolveImageSrc(imageSrc)

    return (
        <article className="overflow-hidden rounded-2xl border border-[var(--links-border)] bg-[var(--links-card)] shadow-sm">
            <a
                href={amazonUrl}
                target={target}
                rel={rel}
                aria-label={`${title} — View on Amazon`}
                className="block"
            >
                <div className="relative aspect-[4/3] bg-[var(--links-bg)]">
                    {imgSrc ? (
                        <img
                            src={imgSrc}
                            alt={title}
                            loading="lazy"
                            decoding="async"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <div aria-hidden="true" className="h-full w-full" />
                    )}

                    {(badge || price) ? (
                        <div className="absolute left-3 top-3 flex gap-2">
                            {badge ? (
                                <span className="rounded-full bg-[var(--links-card)]/90 px-2.5 py-1 text-xs font-sfregular text-[var(--links-text)] shadow-sm">
                                    {badge}
                                </span>
                            ) : null}
                            {price ? (
                                <span className="rounded-full bg-[var(--links-card)]/90 px-2.5 py-1 text-xs font-sfregular text-[var(--links-text)] shadow-sm">
                                    {price}
                                </span>
                            ) : null}
                        </div>
                    ) : null}
                </div>
            </a>

            <div className="flex flex-col gap-3 p-5">
                <div className="min-w-0">
                    <div className="text-xs font-sfregular tracking-wide text-[var(--links-muted)]">
                        {category}
                    </div>
                    <h3 className="mt-2 line-clamp-2 text-[1.35rem] leading-snug text-[var(--links-text)]">
                        {title}
                    </h3>
                    {subtitle ? (
                        <p className="mt-1 line-clamp-2 text-sm font-sfregular text-[var(--links-muted)]">
                            {subtitle}
                        </p>
                    ) : null}
                </div>

                <a
                    href={amazonUrl}
                    target={target}
                    rel={rel}
                    className="inline-flex w-full items-center justify-center rounded-xl bg-[var(--links-cta)] px-4 py-3 text-sm font-sfbold text-[var(--links-cta-text)] min-h-[44px] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--links-cta)]/40 hover:bg-[var(--links-cta-hover)]"
                    data-cursor-icon="arrow"
                >
                    View on Amazon
                </a>
            </div>
        </article>
    )
}
