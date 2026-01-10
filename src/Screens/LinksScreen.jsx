import React, { useEffect, useMemo, useState } from 'react'
import styles from './LinksScreen.module.css'
import CategoryTabs from '@/components/links/CategoryTabs'
import ProductCard from '@/components/links/ProductCard'
import { linksProducts } from './linksProducts.data'
import { usePageMeta } from '@/lib/usePageMeta'

function uniq(list) {
    return Array.from(new Set(list.filter(Boolean)))
}

function buildOgImageUrl() {
    if (typeof window === 'undefined') return undefined
    try {
        return new URL('/Hiba.png', window.location.origin).href
    } catch {
        return undefined
    }
}

export default function LinksScreen() {
    const [activeCategory, setActiveCategory] = useState('All')

    usePageMeta({
        title: 'Inspired Finds • Links',
        description: 'Cozy, neutral essentials — curated picks with affiliate links.',
        ogImage: buildOgImageUrl(),
    })

    const categories = useMemo(() => {
        return uniq(linksProducts.map((p) => p.category))
    }, [])

    const filtered = useMemo(() => {
        if (activeCategory === 'All') return linksProducts
        return linksProducts.filter((p) => p.category === activeCategory)
    }, [activeCategory])

    useEffect(() => {
        document.body.dataset.linksStandalone = 'true'

        // Best-effort: masquer le curseur custom (pas de className → on détecte par style)
        let cursorEl = null
        for (const el of Array.from(document.body.querySelectorAll('div'))) {
            const s = el.style
            if (
                s.position === 'fixed' &&
                s.pointerEvents === 'none' &&
                s.zIndex === '999999999' &&
                (s.backdropFilter || s.webkitBackdropFilter)
            ) {
                cursorEl = el
                break
            }
        }

        const prevDisplay = cursorEl?.style?.display
        if (cursorEl) cursorEl.style.display = 'none'

        const prevBodyCursor = document.body.style.cursor
        document.body.style.cursor = 'auto'

        return () => {
            delete document.body.dataset.linksStandalone
            document.body.style.cursor = prevBodyCursor
            if (cursorEl) cursorEl.style.display = prevDisplay || ''
        }
    }, [])

    return (
        <div className={styles.scope}>
            <div className="min-h-screen w-full bg-[var(--links-bg)] px-4 pb-14 pt-10 text-[var(--links-text)] sm:px-6">
                <header className="mx-auto max-w-2xl text-center">
                    <h1 className="text-[2.15rem] leading-tight tracking-[-0.02em] text-[var(--links-text)] sm:text-5xl">
                        Inspired Finds
                    </h1>
                    <p className="mt-3 text-base font-sfregular text-[var(--links-muted)] sm:text-lg">
                        Cozy &amp; neutral pieces I love.
                    </p>
                    {/* <p className="mt-3 text-sm font-sfregular text-[var(--links-muted)]">
                        (Affiliate links: I may earn a small commission, at no extra cost to you)
                    </p> */}
                </header>

                <section className="mx-auto mt-8 max-w-5xl" aria-label="Category filter">
                    <CategoryTabs
                        categories={categories}
                        active={activeCategory}
                        onChange={setActiveCategory}
                        allLabel="All"
                    />
                </section>

                <section
                    className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
                    role="tabpanel"
                    aria-label="Products"
                >
                    {filtered.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </section>

                {filtered.length === 0 ? (
                    <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-ultralightGray bg-bgLight p-6 text-center text-sm font-sfregular text-lightSecondary dark:border-darkBorder dark:bg-darkContainer dark:text-darkSecondary">
                        No items in this category yet.
                    </div>
                ) : null}
            </div>
        </div>
    )
}