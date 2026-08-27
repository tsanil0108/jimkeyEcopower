
import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowUpRight,
  Clock,
  Tag,
  Loader2,
} from 'lucide-react'

import {
  SectionLabel,
  Reveal,
  Button,
} from '../components/ui'

import {
  api,
  resolveMediaUrl,
} from '../lib/api'

function containsHtml(value = '') {
  return /<\/?[a-z][\s\S]*>/i.test(value)
}

function PlainTextContent({ content }) {
  const blocks = useMemo(() => {
    if (!content) return []

    return content
      .replace(/\r\n/g, '\n')
      .split(/\n\s*\n/)
      .map((block) => block.trim())
      .filter(Boolean)
  }, [content])

  return (
    <Reveal as="div" className="mt-8 space-y-6">
      {blocks.map((block, index) => {
        const lines = block
          .split('\n')
          .map((line) => line.trim())
          .filter(Boolean)

        /*
         * A short single line is treated visually
         * as a section heading.
         *
         * Example:
         * Why Recovered Carbon Black Matters
         */
        const looksLikeHeading =
          lines.length === 1 &&
          lines[0].length <= 100 &&
          !/[.!?]$/.test(lines[0])

        if (looksLikeHeading) {
          return (
            <h2
              key={`${index}-${block}`}
              className="font-display text-xl font-bold leading-snug text-navy sm:text-2xl"
            >
              {block}
            </h2>
          )
        }

        return (
          <p
            key={`${index}-${block.slice(0, 20)}`}
            className="whitespace-pre-line text-[15px] leading-8 text-steel sm:text-base"
          >
            {block}
          </p>
        )
      })}
    </Reveal>
  )
}

function HtmlContent({ content }) {
  return (
    <Reveal
      as="div"
      className="
        mt-8
        text-[15px]
        leading-8
        text-steel
        sm:text-base

        [&_h1]:mb-4
        [&_h1]:mt-10
        [&_h1]:font-display
        [&_h1]:text-3xl
        [&_h1]:font-bold
        [&_h1]:leading-tight
        [&_h1]:text-navy

        [&_h2]:mb-3
        [&_h2]:mt-9
        [&_h2]:font-display
        [&_h2]:text-xl
        [&_h2]:font-bold
        [&_h2]:leading-snug
        [&_h2]:text-navy
        sm:[&_h2]:text-2xl

        [&_h3]:mb-2
        [&_h3]:mt-7
        [&_h3]:font-display
        [&_h3]:text-lg
        [&_h3]:font-bold
        [&_h3]:text-navy

        [&_p]:mb-5
        [&_p]:leading-8

        [&_ul]:mb-5
        [&_ul]:list-disc
        [&_ul]:space-y-2
        [&_ul]:pl-6

        [&_ol]:mb-5
        [&_ol]:list-decimal
        [&_ol]:space-y-2
        [&_ol]:pl-6

        [&_li]:leading-7

        [&_strong]:font-semibold
        [&_strong]:text-navy

        [&_blockquote]:my-6
        [&_blockquote]:border-l-4
        [&_blockquote]:border-teal
        [&_blockquote]:bg-white
        [&_blockquote]:px-5
        [&_blockquote]:py-4
        [&_blockquote]:italic

        [&_a]:font-semibold
        [&_a]:text-teal-dark
        [&_a]:underline

        [&_img]:my-7
        [&_img]:max-w-full
        [&_img]:rounded-xl
      "
      dangerouslySetInnerHTML={{
        __html: content || '',
      }}
    />
  )
}

export default function BlogPost() {
  const { id } = useParams()

  const [post, setPost] = useState(null)
  const [related, setRelated] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
    loadPost()
  }, [id])

  async function loadPost() {
    setLoading(true)
    setError('')

    try {
      const [article, blogPage] = await Promise.all([
        api.getBlogById(id),
        api.getBlogs(0, 20),
      ])

      setPost(article)

      const allPosts = Array.isArray(blogPage)
        ? blogPage
        : blogPage.content || []

      const sameCategory = allPosts.filter(
        (item) =>
          String(item.id) !== String(id) &&
          item.category === article.category
      )

      const others = allPosts.filter(
        (item) =>
          String(item.id) !== String(id) &&
          item.category !== article.category
      )

      setRelated(
        [...sameCategory, ...others].slice(0, 3)
      )
    } catch (err) {
      console.error(err)

      setError(
        err.message || 'Article not found.'
      )
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center gap-2 bg-paper text-steel">
        <Loader2
          size={18}
          className="animate-spin"
        />
        Loading article…
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="bg-paper py-28 text-center">
        <p className="font-display text-xl font-bold text-navy">
          Article not found
        </p>

        <Link
          to="/blog"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-dark"
        >
          <ArrowLeft size={15} />
          Back to articles
        </Link>
      </div>
    )
  }

  const coverImage = post.imageUrl
    ? resolveMediaUrl(post.imageUrl)
    : null

  const contentIsHtml =
    containsHtml(post.content || '')

  return (
    <div className="blog-post-page">

      {/* =====================================================
          HERO
          Blurred backdrop + full visible cover image
      ====================================================== */}

      <section className="relative overflow-hidden bg-navy text-white">

        {coverImage ? (
          <div className="absolute inset-0">

            <img
              src={coverImage}
              alt=""
              aria-hidden="true"
              className="h-full w-full scale-110 object-cover blur-xl"
            />

            <div className="absolute inset-0 bg-navy/85" />

            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60" />

          </div>
        ) : (
          <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--color-navy),var(--color-navy-deep))]" />
        )}

        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-teal/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-amber/10 blur-3xl" />

        <div className="relative mx-auto grid min-h-[500px] max-w-7xl items-center gap-10 px-5 py-14 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">

          {/* LEFT */}
          <div className="max-w-3xl">

            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-amber backdrop-blur-md">

              <span className="h-1.5 w-1.5 rounded-full bg-amber" />

              {post.category || 'Blog'}

            </span>

            <h1 className="mt-5 font-display text-3xl font-bold leading-[1.08] text-white drop-shadow-md sm:text-4xl md:text-5xl lg:text-[54px]">

              {post.title}

            </h1>

            {post.excerpt && (
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base md:text-lg">

                {post.excerpt}

              </p>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-wider text-white/60">

              <span className="flex items-center gap-1.5">
                <Clock size={13} />
                {post.readingTime || 1} min read
              </span>

              {post.author && (
                <>
                  <span className="h-1 w-1 rounded-full bg-white/30" />

                  <span>
                    By {post.author}
                  </span>
                </>
              )}

              {post.viewCount != null && (
                <>
                  <span className="h-1 w-1 rounded-full bg-white/30" />

                  <span>
                    {post.viewCount} views
                  </span>
                </>
              )}

            </div>

            <div className="mt-8 flex flex-wrap items-center gap-2 text-xs text-white/60">

              <Link
                to="/"
                className="transition-colors hover:text-white"
              >
                Home
              </Link>

              <span>/</span>

              <Link
                to="/blog"
                className="transition-colors hover:text-white"
              >
                Blog
              </Link>

              <span>/</span>

              <span className="font-semibold text-amber">
                {post.category || 'Article'}
              </span>

            </div>

          </div>

          {/* RIGHT COVER IMAGE */}
          {coverImage && (
            <Reveal className="w-full">

              <div className="relative mx-auto w-full max-w-xl">

                <div className="absolute -inset-5 rounded-[32px] bg-teal/20 blur-3xl" />

                <div className="relative overflow-hidden rounded-[26px] border border-white/15 bg-white/10 p-2 shadow-[0_35px_80px_-25px_rgba(0,0,0,0.8)] backdrop-blur-md">

                  <div className="flex min-h-[270px] items-center justify-center overflow-hidden rounded-[20px] bg-black/10 sm:min-h-[320px] lg:min-h-[390px]">

                    <img
                      src={coverImage}
                      alt={post.title}
                      className="max-h-[430px] w-full object-contain"
                    />

                  </div>

                </div>

                <div className="absolute -bottom-4 left-5 rounded-full border border-white/15 bg-navy/90 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-white/70 shadow-lg backdrop-blur">

                  Jimkey Ecopower Insights

                </div>

              </div>

            </Reveal>
          )}

        </div>
      </section>

      {/* =====================================================
          ARTICLE
      ====================================================== */}

      <section className="bg-paper py-12 sm:py-14 lg:py-16">

        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[240px_1fr] lg:gap-10 lg:px-8">

          {/* SIDEBAR */}
          <aside className="hidden lg:block">

            <div className="sticky top-28 space-y-8">

              <Link
                to="/blog"
                className="flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-teal-dark"
              >
                <ArrowLeft size={15} />
                All articles
              </Link>

              <div className="rounded-2xl border border-line bg-white p-5 shadow-sm">

                <p className="font-mono flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-steel">
                  <Clock size={12} />
                  {post.readingTime || 1} min read
                </p>

                <p className="font-mono mt-3 flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-steel">
                  <Tag size={12} />
                  {post.category || 'Blog'}
                </p>

                {post.author && (
                  <p className="font-mono mt-3 text-[11px] uppercase tracking-widest text-steel">
                    By {post.author}
                  </p>
                )}

              </div>

            </div>

          </aside>

          {/* CONTENT */}
          <article className="min-w-0 max-w-3xl">

            {/* SAME COVER IMAGE AGAIN */}
            {coverImage && (
              <Reveal className="mb-8 overflow-hidden rounded-2xl border border-line bg-white shadow-sm">

                <div className="flex w-full items-center justify-center bg-white">

                  <img
                    src={coverImage}
                    alt={post.title}
                    className="max-h-[600px] w-full object-contain"
                  />

                </div>

              </Reveal>
            )}

            {/* EXCERPT */}
            {post.excerpt && (
              <Reveal>

                <p className="text-base font-medium leading-relaxed text-steel sm:text-lg">

                  {post.excerpt}

                </p>

              </Reveal>
            )}

            {/* META */}
            <div className="mt-5 flex flex-wrap items-center gap-3 border-b border-line pb-6 font-mono text-[11px] uppercase tracking-widest text-steel">

              <span className="flex items-center gap-1.5">
                <Clock size={12} />
                {post.readingTime || 1} min read
              </span>

              <span className="h-1 w-1 rounded-full bg-line" />

              <span>
                {post.category || 'Blog'}
              </span>

              {post.viewCount != null && (
                <>
                  <span className="h-1 w-1 rounded-full bg-line" />

                  <span>
                    {post.viewCount} views
                  </span>
                </>
              )}

            </div>

            {/* =================================================
                AUTO CONTENT RENDERER

                OLD:
                <h2>...</h2>
                <p>...</p>

                NEW:
                normal text without tags

                BOTH work.
            ================================================== */}

            {contentIsHtml ? (
              <HtmlContent
                content={post.content}
              />
            ) : (
              <PlainTextContent
                content={post.content}
              />
            )}

            {/* CTA */}
            <Reveal className="relative mt-10 overflow-hidden rounded-2xl bg-[linear-gradient(135deg,var(--color-navy),var(--color-navy-deep))] p-7 text-white sm:p-10">

              <div className="grain-bg pointer-events-none absolute inset-0 opacity-20" />

              <div className="relative">

                <p className="font-display text-xl font-bold sm:text-2xl">
                  Bring this into your operations
                </p>

                <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70">
                  Talk to Jimkey Ecopower about waste management,
                  recycling, EPR compliance and circular-economy solutions.
                </p>

                <Button
                  to="/contact"
                  variant="accent"
                  className="mt-6"
                >
                  Talk to Jimkey Ecopower

                  <ArrowUpRight size={15} />
                </Button>

              </div>

            </Reveal>

          </article>

        </div>

      </section>

      {/* =====================================================
          RELATED BLOG POSTS
      ====================================================== */}

      {related.length > 0 && (

        <section className="border-t border-line bg-white py-14 sm:py-16">

          <div className="mx-auto max-w-7xl px-5 lg:px-8">

            <SectionLabel>
              Keep Reading
            </SectionLabel>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {related.map((item) => {

                const relatedImage =
                  item.imageUrl
                    ? resolveMediaUrl(
                        item.imageUrl
                      )
                    : null

                return (
                  <Link
                    key={item.id}
                    to={`/blog/${item.id}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:bg-white hover:shadow-[0_20px_50px_-20px_rgba(20,51,42,0.25)]"
                  >

                    {relatedImage ? (
                      <div className="aspect-[16/9] overflow-hidden bg-white">

                        <img
                          src={relatedImage}
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                      </div>
                    ) : (

                      <div className="aspect-[16/9] bg-[linear-gradient(135deg,var(--color-navy),var(--color-navy-deep))]" />

                    )}

                    <div className="flex flex-1 flex-col p-5">

                      <span className="font-mono text-[10px] uppercase tracking-widest text-teal-dark">
                        {item.category || 'Blog'}
                      </span>

                      <span className="font-display mt-2 text-sm font-bold leading-snug text-navy">
                        {item.title}
                      </span>

                      {item.excerpt && (
                        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-steel">

                          {item.excerpt}

                        </p>
                      )}

                      <span className="mt-auto flex items-center gap-1 pt-4 text-xs font-semibold text-teal-dark">

                        Read article

                        <ArrowUpRight
                          size={12}
                        />

                      </span>

                    </div>

                  </Link>
                )
              })}

            </div>

          </div>

        </section>

      )}

    </div>
  )
}