import { useEffect } from 'react'

function upsertMeta(selector, createAttrs) {
    let el = document.head.querySelector(selector)
    if (!el) {
        el = document.createElement('meta')
        Object.entries(createAttrs).forEach(([key, value]) => el.setAttribute(key, value))
        document.head.appendChild(el)
    }
    return el
}

function upsertLink(selector, createAttrs) {
    let el = document.head.querySelector(selector)
    if (!el) {
        el = document.createElement('link')
        Object.entries(createAttrs).forEach(([key, value]) => el.setAttribute(key, value))
        document.head.appendChild(el)
    }
    return el
}

export function usePageMeta({
    title,
    description,
    ogImage,
    ogType = 'website',
} = {}) {
    useEffect(() => {
        if (typeof document === 'undefined') return

        const prevTitle = document.title

        const metaDescription = upsertMeta('meta[name="description"]', { name: 'description' })
        const prevDescription = metaDescription.getAttribute('content')

        const ogTitle = upsertMeta('meta[property="og:title"]', { property: 'og:title' })
        const prevOgTitle = ogTitle.getAttribute('content')

        const ogDesc = upsertMeta('meta[property="og:description"]', { property: 'og:description' })
        const prevOgDesc = ogDesc.getAttribute('content')

        const ogUrl = upsertMeta('meta[property="og:url"]', { property: 'og:url' })
        const prevOgUrl = ogUrl.getAttribute('content')

        const ogTypeEl = upsertMeta('meta[property="og:type"]', { property: 'og:type' })
        const prevOgType = ogTypeEl.getAttribute('content')

        const ogImageEl = upsertMeta('meta[property="og:image"]', { property: 'og:image' })
        const prevOgImage = ogImageEl.getAttribute('content')

        const twitterCard = upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card' })
        const prevTwitterCard = twitterCard.getAttribute('content')

        const canonical = upsertLink('link[rel="canonical"]', { rel: 'canonical' })
        const prevCanonical = canonical.getAttribute('href')

        if (title) document.title = title
        if (description) metaDescription.setAttribute('content', description)

        ogTitle.setAttribute('content', title || prevTitle)
        ogDesc.setAttribute('content', description || prevDescription || '')
        ogTypeEl.setAttribute('content', ogType)

        const url = typeof window !== 'undefined' ? window.location.href : ''
        if (url) {
            ogUrl.setAttribute('content', url)
            canonical.setAttribute('href', url)
        }

        if (ogImage) ogImageEl.setAttribute('content', ogImage)

        twitterCard.setAttribute('content', 'summary_large_image')

        return () => {
            document.title = prevTitle
            if (prevDescription !== null) metaDescription.setAttribute('content', prevDescription)
            if (prevOgTitle !== null) ogTitle.setAttribute('content', prevOgTitle)
            if (prevOgDesc !== null) ogDesc.setAttribute('content', prevOgDesc)
            if (prevOgUrl !== null) ogUrl.setAttribute('content', prevOgUrl)
            if (prevOgType !== null) ogTypeEl.setAttribute('content', prevOgType)
            if (prevOgImage !== null) ogImageEl.setAttribute('content', prevOgImage)
            if (prevTwitterCard !== null) twitterCard.setAttribute('content', prevTwitterCard)
            if (prevCanonical !== null) canonical.setAttribute('href', prevCanonical)
        }
    }, [title, description, ogImage, ogType])
}
