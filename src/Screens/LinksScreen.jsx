import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styles from './LinksScreen.module.css'
import CategoryTabs from '@/components/links/CategoryTabs'
import ProductCard from '@/components/links/ProductCard'
import { linksProducts } from './linksProducts.data'
import { usePageMeta } from '@/lib/usePageMeta'
import { useSearchParams } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

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
    const allLabel = 'All'
    const [searchParams, setSearchParams] = useSearchParams()
    const prefersReducedMotion = useReducedMotion()

    const [activeCategory, setActiveCategory] = useState(() => {
        if (typeof window === 'undefined') return allLabel
        const initial = new URLSearchParams(window.location.search).get('tab')
        return (initial || allLabel).trim() || allLabel
    })

    usePageMeta({
        title: 'Inspired Finds • Links',
        description: 'Cozy, neutral essentials — curated picks with affiliate links.',
        ogImage: buildOgImageUrl(),
    })

    const categories = useMemo(() => {
        return uniq(linksProducts.map((p) => p.category))
    }, [])

    const tabItems = useMemo(() => [allLabel, ...categories], [allLabel, categories])

    useEffect(() => {
        const raw = (searchParams.get('tab') || '').trim()
        if (!raw) {
            if (activeCategory !== allLabel) setActiveCategory(allLabel)
            return
        }

        const match = tabItems.find((x) => x.toLowerCase() === raw.toLowerCase())
        const next = match || allLabel
        if (next !== activeCategory) setActiveCategory(next)
    }, [activeCategory, allLabel, searchParams, tabItems])

    const handleCategoryChange = useCallback(
        (nextCategory) => {
            setActiveCategory(nextCategory)

            const params = new URLSearchParams(searchParams)
            if (!nextCategory || nextCategory === allLabel) {
                params.delete('tab')
            } else {
                params.set('tab', nextCategory)
            }
            setSearchParams(params, { replace: true })
        },
        [allLabel, searchParams, setSearchParams]
    )

    const filtered = useMemo(() => {
        if (activeCategory === 'All') return linksProducts
        return linksProducts.filter((p) => p.category === activeCategory)
    }, [activeCategory])

    const gridVariants = useMemo(() => {
        if (prefersReducedMotion) {
            return {
                hidden: { opacity: 1 },
                show: { opacity: 1 },
                exit: { opacity: 1 },
            }
        }

        return {
            hidden: { opacity: 0 },
            show: {
                opacity: 1,
                transition: {
                    duration: 0.22,
                    ease: 'easeOut',
                    staggerChildren: 0.045,
                    delayChildren: 0.04,
                },
            },
            exit: { opacity: 0, transition: { duration: 0.14, ease: 'easeIn' } },
        }
    }, [prefersReducedMotion])

    const itemVariants = useMemo(() => {
        if (prefersReducedMotion) {
            return {
                hidden: { opacity: 1, y: 0 },
                show: { opacity: 1, y: 0 },
                exit: { opacity: 1, y: 0 },
            }
        }

        return {
            hidden: { opacity: 0, y: 10 },
            show: {
                opacity: 1,
                y: 0,
                transition: { type: 'spring', stiffness: 360, damping: 28 },
            },
            exit: { opacity: 0, y: -6, transition: { duration: 0.12, ease: 'easeIn' } },
        }
    }, [prefersReducedMotion])

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
                        onChange={handleCategoryChange}
                        allLabel={allLabel}
                    />
                </section>

                <AnimatePresence mode="wait">
                    <motion.section
                        key={activeCategory}
                        variants={gridVariants}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
                        role="tabpanel"
                        aria-label="Products"
                    >
                        {filtered.map((product) => (
                            <motion.div
                                key={product.id}
                                variants={itemVariants}
                                layout
                                style={{ willChange: prefersReducedMotion ? undefined : 'transform, opacity' }}
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </motion.section>
                </AnimatePresence>

                {filtered.length === 0 ? (
                    <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-ultralightGray bg-bgLight p-6 text-center text-sm font-sfregular text-lightSecondary dark:border-darkBorder dark:bg-darkContainer dark:text-darkSecondary">
                        No items in this category yet.
                    </div>
                ) : null}
            </div>
        </div>
    )
}