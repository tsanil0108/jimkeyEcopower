import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Clock, Tag } from 'lucide-react'
import { PageBanner, SectionLabel, Reveal, Button } from '../components/ui'
import { blogPosts } from '../data/blog'

function slugifyHeading(h) {
  return h.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!post) return <Navigate to="/blog" replace />

  const idx = blogPosts.findIndex((p) => p.slug === slug)
  const related = blogPosts.filter((_, i) => i !== idx).slice(0, 3)

  return (
    <div>
      <PageBanner title={post.title} crumb="Blog" eyebrow={post.tag} />

      <section className="bg-paper py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[240px_1fr] lg:px-8">
          {/* Sidebar / TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-8">
              <Link to="/blog" className="flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-teal-dark">
                <ArrowLeft size={15} /> All articles
              </Link>

              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-steel">On this page</p>
                <ul className="mt-3 space-y-2 border-l border-line pl-4">
                  {post.sections.map((s) => (
                    <li key={s.heading}>
                      <a
                        href={`#${slugifyHeading(s.heading)}`}
                        className="text-[13px] leading-snug text-steel transition-colors hover:text-teal-dark"
                      >
                        {s.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-line bg-white p-5">
                <p className="font-mono flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-steel">
                  <Clock size={12} /> {post.readTime} min read
                </p>
                <p className="font-mono mt-3 flex items-start gap-1.5 text-[11px] uppercase tracking-widest text-steel">
                  <Tag size={12} className="mt-0.5 shrink-0" /> {post.tag}
                </p>
              </div>
            </div>
          </aside>

          {/* Article body */}
          <article className="max-w-3xl">
            <Reveal>
              <p className="text-lg leading-relaxed text-steel">{post.excerpt}</p>
            </Reveal>

            <div className="mt-4 flex flex-wrap items-center gap-3 border-b border-line pb-6 font-mono text-[11px] uppercase tracking-widest text-steel">
              <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime} min read</span>
              <span className="h-1 w-1 rounded-full bg-line" />
              <span>{post.sections.length} sections</span>
            </div>

            {post.sections.map((s, i) => (
              <Reveal key={s.heading} delay={i * 40} as="div" className="scroll-mt-28 border-b border-line py-8 last:border-b-0">
                <h2 id={slugifyHeading(s.heading)} className="font-display text-xl font-bold text-navy sm:text-2xl">
                  {s.heading}
                </h2>
                <p className="mt-3 leading-relaxed text-steel">{s.body}</p>
              </Reveal>
            ))}

            <Reveal className="mt-4 overflow-hidden rounded-2xl bg-[linear-gradient(135deg,var(--color-navy),var(--color-navy-deep))] p-8 text-white sm:p-10">
              <div className="grain-bg pointer-events-none absolute inset-0 opacity-20" />
              <p className="font-display text-xl font-bold sm:text-2xl">Bring this into your operations</p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70">{post.cta}</p>
              <Button to="/contact" variant="accent" className="mt-6">
                Talk to Jimkey Ecopower <ArrowUpRight size={15} />
              </Button>
            </Reveal>

            <p className="mt-6 text-xs leading-relaxed text-steel/80">
              Source: NITI Aayog, “Enhancing Circular Economy of Waste Tyres in India”, January 2026. This article summarises a
              policy-oriented report; recommendations discussed here should not be treated as enacted regulation until formally
              notified by CPCB, MoEFCC or the relevant SPCB.
            </p>
          </article>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-line bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionLabel>Keep Reading</SectionLabel>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/blog/${r.slug}`}
                className="group/rel flex flex-col rounded-2xl border border-line bg-paper p-5 transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:bg-white hover:shadow-[0_18px_40px_-16px_rgba(20,51,42,0.18)]"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-teal-dark">{r.tag}</span>
                <span className="font-display mt-2 text-sm font-bold leading-snug text-navy transition-colors group-hover/rel:text-teal-dark">
                  {r.title}
                </span>
                <span className="mt-auto flex items-center gap-1 pt-4 text-xs font-semibold text-teal-dark">
                  Read article <ArrowUpRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}