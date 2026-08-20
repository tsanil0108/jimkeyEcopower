import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Search, X, Clock, Newspaper, Loader2 } from 'lucide-react'
import { PageBanner, SectionLabel, Reveal, Badge } from '../components/ui'
import { api, resolveMediaUrl } from '../lib/api'

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
        to={`/blog/${post.id}`}
        className={`group/card relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(20,51,42,0.25)] ${featured ? 'lg:flex-row' : ''}`}
      >
        <div
          className={`relative flex shrink-0 items-center justify-center overflow-hidden bg-[linear-gradient(135deg,var(--color-navy),var(--color-navy-deep))] ${featured ? 'h-56 lg:h-auto lg:w-2/5' : 'h-44'}`}
        >
          {post.imageUrl ? (
            <img src={resolveMediaUrl(post.imageUrl)} alt={post.title} className="absolute inset-0 h-full w-full object-cover" />
          ) : (
            <>
              <div className="grain-bg pointer-events-none absolute inset-0 opacity-25" />
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-teal/25 blur-3xl" />
              <Newspaper size={featured ? 40 : 30} className="relative text-white/25" />
            </>
          )}
          <span className="absolute left-4 top-4">
            <Badge tone={tagAccent[post.category] || 'teal'} className="border-white/25 bg-white/10 text-white">
              {post.category || 'Blog'}
            </Badge>
          </span>
        </div>

        <div className={`flex flex-1 flex-col p-6 ${featured ? 'lg:p-8' : ''}`}>
          <h3 className={`font-display font-bold text-navy transition-colors group-hover/card:text-teal-dark ${featured ? 'text-xl sm:text-2xl' : 'text-lg'}`}>
            {post.title}
          </h3>
          <p className={`mt-3 flex-1 text-sm leading-relaxed text-steel ${featured ? 'line-clamp-3' : 'line-clamp-2'}`}>
            {post.excerpt}
          </p>
          <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
            <span className="font-mono flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-steel">
              <Clock size={12} /> {post.readingTime || 1} min read
            </span>
            <span className="flex items-center gap-1 text-sm font-semibold text-teal-dark">
              Read article <ArrowUpRight size={14} />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  )
}

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [blogCategories, setBlogCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [query, setQuery] = useState('')
  const [activeTag, setActiveTag] = useState(null)

  useEffect(() => {
    loadBlogs()
  }, [])

  async function loadBlogs() {
    setLoading(true)
    setError('')
    try {
      const [blogPage, categories] = await Promise.all([
        api.getBlogs(0, 100),
        api.getBlogCategories(),
      ])
      setPosts(Array.isArray(blogPage) ? blogPage : blogPage.content || [])
      setBlogCategories(Array.isArray(categories) ? categories : [])
    } catch (err) {
      setError(err.message || 'Unable to load articles.')
    } finally {
      setLoading(false)
    }
  }

  const filtered = useMemo(() => {
    let list = posts
    if (activeTag) list = list.filter((post) => post.category === activeTag)
    if (query.trim()) {
      const q = query.trim().toLowerCase()
      list = list.filter((post) => {
        const tags = Array.isArray(post.tags) ? post.tags.join(' ') : post.tags || ''
        return (
          post.title?.toLowerCase().includes(q) ||
          post.excerpt?.toLowerCase().includes(q) ||
          post.category?.toLowerCase().includes(q) ||
          tags.toLowerCase().includes(q)
        )
      })
    }
    return list
  }, [posts, query, activeTag])

  const [featuredPost, ...remainingPosts] = posts
  const showFeatured = Boolean(featuredPost) && !query.trim() && !activeTag
  const gridPosts = showFeatured ? remainingPosts : filtered

  return (
    <div>
      <PageBanner
        title="Insights & Circular Economy Blog"
        crumb="Blog"
        eyebrow={`${posts.length} Articles on India's Waste Tyre Economy`}
      />

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
              className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${!activeTag ? 'border-teal bg-teal text-white' : 'border-line bg-white text-steel hover:border-teal/40 hover:text-teal-dark'}`}
            >
              All Topics
            </button>
            {blogCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTag(activeTag === category.name ? null : category.name)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${activeTag === category.name ? 'border-teal bg-teal text-white' : 'border-line bg-white text-steel hover:border-teal/40 hover:text-teal-dark'}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {loading ? (
        <section className="bg-paper py-24">
          <div className="flex items-center justify-center gap-2 text-steel">
            <Loader2 size={18} className="animate-spin" /> Loading articles…
          </div>
        </section>
      ) : error ? (
        <section className="bg-paper py-24 text-center">
          <p className="text-red-600">{error}</p>
        </section>
      ) : (
        <>
          {showFeatured && (
            <section className="bg-paper py-10">
              <div className="mx-auto max-w-7xl px-5 lg:px-8">
                <SectionLabel>Featured</SectionLabel>
                <div className="mt-4"><PostCard post={featuredPost} featured /></div>
              </div>
            </section>
          )}

          <section className="bg-paper pb-24 pt-4">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
              {showFeatured && <div className="mb-6 mt-6"><SectionLabel>More Articles</SectionLabel></div>}
              {gridPosts.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-line bg-white py-20 text-center">
                  <p className="font-display text-lg font-bold text-navy">No articles matched your search</p>
                  <p className="mt-2 text-sm text-steel">Try another keyword or category.</p>
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {gridPosts.map((post, index) => <PostCard key={post.id} post={post} index={index} />)}
                </div>
              )}
            </div>
          </section>
        </>
      )}
    </div>
  )
}