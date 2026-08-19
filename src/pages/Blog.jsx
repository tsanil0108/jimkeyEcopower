import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Search, X, Clock, Newspaper } from 'lucide-react'
import { PageBanner, SectionLabel, Reveal, Badge } from '../components/ui'
import { blogPosts, blogTags } from '../data/blog'

const tagAccent = {
  Overview: 'navy',
  Policy: 'teal',
  'EPR & Compliance': 'teal',
  Materials: 'amber',
  Pyrolysis: 'amber',
  'Business & Investment': 'navy',
  'Circular Economy': 'teal',
  Retreading: 'navy',
  Traceability: 'amber',
  Manufacturing: 'teal',
  Trends: 'navy',
}

function PostCard({ post, index = 0, featured = false }) {
  return (
    <Reveal delay={(index % 6) * 60}>
      <Link
        to={`/blog/${post.slug}`}
        className={`group/card relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(20,51,42,0.25)] ${
          featured ? 'lg:flex-row' : ''
        }`}
      >
        <div
          className={`relative flex shrink-0 items-center justify-center overflow-hidden bg-[linear-gradient(135deg,var(--color-navy),var(--color-navy-deep))] ${
            featured ? 'h-56 lg:h-auto lg:w-2/5' : 'h-44'
          }`}
        >
          <div className="grain-bg pointer-events-none absolute inset-0 opacity-25" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-teal/25 blur-3xl" />
          <Newspaper size={featured ? 40 : 30} className="relative text-white/25" />
          <span className="absolute left-4 top-4">
            <Badge tone={tagAccent[post.tag] || 'teal'} className="bg-white/10 text-white border-white/25">
              {post.tag}
            </Badge>
          </span>
        </div>

        <div className={`flex flex-1 flex-col p-6 ${featured ? 'lg:p-8' : ''}`}>
          <h3
            className={`font-display font-bold text-navy transition-colors group-hover/card:text-teal-dark ${
              featured ? 'text-xl sm:text-2xl' : 'text-lg'
            }`}
          >
            {post.title}
          </h3>
          <p className={`mt-3 flex-1 text-sm leading-relaxed text-steel ${featured ? 'line-clamp-3' : 'line-clamp-2'}`}>
            {post.excerpt}
          </p>
          <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
            <span className="font-mono flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-steel">
              <Clock size={12} /> {post.readTime} min read
            </span>
            <span className="flex items-center gap-1 text-sm font-semibold text-teal-dark">
              Read article
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  )
}

export default function Blog() {
  const [query, setQuery] = useState('')
  const [activeTag, setActiveTag] = useState(null)

  const filtered = useMemo(() => {
    let list = blogPosts
    if (activeTag) list = list.filter((p) => p.tag === activeTag)
    if (query.trim()) {
      const q = query.trim().toLowerCase()
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tag.toLowerCase().includes(q) ||
          p.keywords.toLowerCase().includes(q)
      )
    }
    return list
  }, [query, activeTag])

  const [featuredPost, ...restAll] = blogPosts
  const showFeatured = !query.trim() && !activeTag
  const gridPosts = showFeatured ? restAll : filtered

  return (
    <div>
      <PageBanner
        title="Insights & Circular Economy Blog"
        crumb="Blog"
        eyebrow={`${blogPosts.length} Articles on India's Waste Tyre Economy`}
      />

      {/* Filters */}
      <section className="border-b border-line bg-white/80 py-6 backdrop-blur lg:sticky lg:top-[73px] lg:z-30">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-xs">
              <Search size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-steel" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles…"
                className="w-full rounded-full border border-line bg-paper py-2.5 pl-10 pr-9 text-sm outline-none transition-colors focus:border-teal"
              />
              {query && (
                <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-steel hover:text-navy" aria-label="Clear search">
                  <X size={14} />
                </button>
              )}
            </div>
            <p className="font-mono shrink-0 text-xs uppercase tracking-widest text-steel">
              {filtered.length} article{filtered.length !== 1 && 's'} found
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTag(null)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                !activeTag ? 'border-teal bg-teal text-white' : 'border-line bg-white text-steel hover:border-teal/40 hover:text-teal-dark'
              }`}
            >
              All Topics
            </button>
            {blogTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  activeTag === tag ? 'border-teal bg-teal text-white' : 'border-line bg-white text-steel hover:border-teal/40 hover:text-teal-dark'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured post */}
      {showFeatured && (
        <section className="bg-paper py-10">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionLabel>Featured</SectionLabel>
            <div className="mt-4">
              <PostCard post={featuredPost} featured />
            </div>
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="bg-paper pb-24 pt-4">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {showFeatured && (
            <div className="mb-6 mt-6">
              <SectionLabel>More Articles</SectionLabel>
            </div>
          )}
          {gridPosts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-line bg-white py-20 text-center">
              <p className="font-display text-lg font-bold text-navy">No articles matched your search</p>
              <p className="mt-2 text-sm text-steel">Try a different keyword or clear the topic filter.</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {gridPosts.map((post, i) => (
                <PostCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Source note */}
      <section className="border-t border-line bg-white py-10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-widest text-steel">Primary Source</p>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-steel">
            This series draws on the NITI Aayog report{' '}
            <span className="font-semibold text-navy">“Enhancing Circular Economy of Waste Tyres in India”</span> (January 2026). It is a
            policy-oriented study — always verify current requirements against the latest CPCB, MoEFCC and SPCB notifications before acting
            on any recommendation referenced here.
          </p>
        </div>
      </section>
    </div>
  )
}