import './Products.css'

import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

import {
  ArrowUpRight,
  Search,
  X,
  LayoutGrid,
  Loader2,
  SlidersHorizontal,
} from 'lucide-react'

import {
  PageBanner,
  ProductImage,
  Reveal,
  Badge,
} from '../components/ui'

import { api } from '../lib/api'
import { getCategoryIcon } from '../lib/icons'
import { splitCatalog } from '../lib/catalog'
import { serviceSteps } from '../data/serviceSteps'

import CategoryJourney from '../components/CategoryJourney'

import video2 from '../assets/products/vodeo2.mp4'

export default function Services() {
  const [params, setParams] = useSearchParams()

  const categoryParam = params.get('category')
  const subParam = params.get('subcategory')

  const [query, setQuery] = useState('')
  const [categories, setCategories] = useState([])
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  /* ---------------- LOAD DATA ---------------- */

  useEffect(() => {
    let cancelled = false

    setLoading(true)
    setError('')

    Promise.all([api.getCategories(), api.getProducts()])
      .then(([cats, prods]) => {
        if (cancelled) return

        const split = splitCatalog(
          Array.isArray(cats) ? cats : [],
          Array.isArray(prods) ? prods : []
        )

        setCategories(split.serviceCategories)
        setServices(split.serviceItems)
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message || 'Could not load services')
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

  /* ---------------- FILTERING ---------------- */

  const activeCategory =
    categories.find(
      (category) => String(category.id) === categoryParam
    ) ||
    // a ?subcategory=… link still highlights its parent category
    (subParam
      ? categories.find((category) =>
          category.subcategories?.some(
            (sub) => String(sub.id) === subParam
          )
        )
      : undefined)

  const filtered = useMemo(() => {
    let list = [...services]

    if (subParam) {
      list = list.filter(
        (item) => String(item.subcategoryId) === subParam
      )
    } else if (categoryParam) {
      list = list.filter(
        (item) => String(item.categoryId) === categoryParam
      )
    }

    const q = query.trim().toLowerCase()

    if (q) {
      list = list.filter((item) =>
        [item?.name, item?.tagline, item?.description].some(
          (field) =>
            String(field || '')
              .toLowerCase()
              .includes(q)
        )
      )
    }

    return list
  }, [services, categoryParam, subParam, query])

  function selectCategory(id) {
    if (id === null) {
      setParams({})
      return
    }
    setParams({ category: String(id) })
  }

  function clearFilters() {
    setQuery('')
    setParams({})
  }

  return (
    <div className="services-page products-page">
      <PageBanner
        title="Our Services"
        crumb="Services"
        eyebrow="Solutions for a Sustainable Future"
        video={video2}
      />

      {/* CATEGORY JOURNEY */}

      <CategoryJourney
        steps={serviceSteps}
        headingLead="Services that"
        description="Scroll through our key service categories."
      />

      {/* SEARCH + FILTER BAR */}

      <section className="products-toolbar">
        <div className="products-toolbar-inner">
          <div className="products-toolbar-top">
            <div className="products-search-box">
              <Search size={17} className="products-search-icon" />

              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search services..."
                aria-label="Search services"
              />

              {query && (
                <button
                  type="button"
                  className="products-search-clear"
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            <div className="products-result-info">
              <SlidersHorizontal size={14} />
              <span>{filtered.length}</span>
              <span>
                service{filtered.length !== 1 ? 's' : ''} found
              </span>
            </div>
          </div>

          {/* CATEGORY SCROLLER */}

          {categories.length > 0 && (
            <div className="products-category-wrap">
              <div className="products-category-scroll">
                <button
                  type="button"
                  onClick={() => selectCategory(null)}
                  className={`products-category-chip ${
                    !activeCategory ? 'active' : ''
                  }`}
                >
                  <LayoutGrid size={15} />
                  <span>All Services</span>
                </button>

                {categories.map((category) => {
                  const Icon = getCategoryIcon(category.icon)

                  return (
                    <button
                      type="button"
                      key={category.id}
                      onClick={() => selectCategory(category.id)}
                      className={`products-category-chip ${
                        activeCategory?.id === category.id
                          ? 'active'
                          : ''
                      }`}
                    >
                      <Icon size={15} />
                      <span>{category.name}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* SUBCATEGORIES */}

          {activeCategory && activeCategory.subcategories?.length > 0 && (
            <div className="products-subcategory-row">
              <Link
                to={`/services?category=${activeCategory.id}`}
                className={`products-subcategory-chip ${
                  !subParam ? 'active' : ''
                }`}
              >
                All {activeCategory.name}
              </Link>

              {activeCategory.subcategories.map((subcategory) => (
                <Link
                  key={subcategory.id}
                  to={`/services?subcategory=${subcategory.id}`}
                  className={`products-subcategory-chip ${
                    subParam === String(subcategory.id)
                      ? 'active'
                      : ''
                  }`}
                >
                  {subcategory.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SERVICES CONTENT */}

      <section className="products-content">
        <div className="products-content-inner">
          {loading ? (
            <div className="products-status products-loading">
              <span className="products-loader">
                <Loader2 size={22} />
              </span>
              <div>
                <strong>Loading services</strong>
                <p>Fetching our latest services.</p>
              </div>
            </div>
          ) : error ? (
            <div className="products-status products-error">
              <strong>Services could not be loaded</strong>
              <p>{error}</p>
              <small>Check whether your backend API is running.</small>
            </div>
          ) : filtered.length === 0 ? (
            <div className="products-status products-empty">
              <span className="products-empty-icon">
                <Search size={20} />
              </span>
              <strong>No matching services</strong>
              <p>Try another search term or category.</p>
              <button type="button" onClick={clearFilters}>
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="products-grid">
              {filtered.map((service, index) => {
                const category = categories.find(
                  (item) => item.id === service.categoryId
                )
                const Icon = getCategoryIcon(category?.icon)

                return (
                  <Reveal
                    key={service.id}
                    delay={Math.min(index, 6) * 55}
                  >
                    <Link
                      to={`/services/${service.id}`}
                      className="products-card"
                    >
                      <div className="products-card-media">
                        <ProductImage
                          product={service}
                          className="products-card-image"
                        />

                        <div className="products-card-overlay" />

                        <span className="products-card-category-icon">
                          <Icon size={16} />
                        </span>

                        <span className="products-card-form">
                          Service
                        </span>

                        <span className="products-card-arrow">
                          <ArrowUpRight size={17} />
                        </span>
                      </div>

                      <div className="products-card-body">
                        <div className="products-card-title-row">
                          <h3>{service.name}</h3>
                        </div>

                        {service.tagline && (
                          <p className="products-card-tagline">
                            {service.tagline}
                          </p>
                        )}

                        {service.description && (
                          <p className="products-card-description">
                            {service.description}
                          </p>
                        )}

                        <div className="products-card-footer">
                          <Badge tone={category?.accent || 'teal'}>
                            {service.categoryName ||
                              category?.name ||
                              'Service'}
                          </Badge>

                          <span className="products-card-view">
                            View details
                            <ArrowUpRight size={13} />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}