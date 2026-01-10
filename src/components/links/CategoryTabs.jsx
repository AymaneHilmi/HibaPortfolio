import React, { useEffect, useMemo, useRef } from 'react'

export default function CategoryTabs({
    categories,
    active,
    onChange,
    allLabel = 'All',
}) {
    const items = useMemo(() => [allLabel, ...(categories || [])], [allLabel, categories])
    const refs = useRef([])

    useEffect(() => {
        refs.current = refs.current.slice(0, items.length)
    }, [items.length])

    function onKeyDown(e) {
        if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight' && e.key !== 'Home' && e.key !== 'End') return
        e.preventDefault()

        const currentIndex = items.findIndex((x) => x === active)
        const fallbackIndex = currentIndex >= 0 ? currentIndex : 0

        let nextIndex = fallbackIndex
        if (e.key === 'ArrowLeft') nextIndex = (fallbackIndex - 1 + items.length) % items.length
        if (e.key === 'ArrowRight') nextIndex = (fallbackIndex + 1) % items.length
        if (e.key === 'Home') nextIndex = 0
        if (e.key === 'End') nextIndex = items.length - 1

        const nextValue = items[nextIndex]
        onChange?.(nextValue)
        refs.current[nextIndex]?.focus?.()
    }

    return (
        <div className="border-b border-[var(--links-border)]/90">
            <div
                role="tablist"
                aria-label="Categories"
                onKeyDown={onKeyDown}
                className="mx-auto flex max-w-5xl justify-start gap-6 overflow-x-auto no-scrollbar px-1 py-3 md:justify-center"
            >
                {items.map((label, idx) => {
                    const selected = label === active
                    return (
                        <button
                            key={label}
                            ref={(el) => (refs.current[idx] = el)}
                            type="button"
                            role="tab"
                            aria-selected={selected}
                            tabIndex={selected ? 0 : -1}
                            onClick={() => onChange?.(label)}
                            className={
                                "relative shrink-0 px-1 py-3 text-sm font-sfregular min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--links-underline)]/60 " +
                                (selected
                                    ? "text-[var(--links-text)]"
                                    : "text-[var(--links-muted)]")
                            }
                        >
                            {label}
                            <span
                                aria-hidden="true"
                                className={
                                    "pointer-events-none absolute left-0 right-0 -bottom-[13px] mx-auto h-[2px] w-full rounded-full transition-opacity " +
                                    (selected
                                        ? "bg-[var(--links-underline)] opacity-100"
                                        : "bg-transparent opacity-0")
                                }
                            />
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
