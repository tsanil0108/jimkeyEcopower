import './Products.css'

import {
  useEffect,
  useMemo,
  useState,
} from 'react'

import {
  useSearchParams,
  Link,
} from 'react-router-dom'

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

import CategoryJourney
  from '../components/CategoryJourney'

import { api } from '../lib/api'

import {
  getCategoryIcon,
} from '../lib/icons'

import video2
  from '../assets/products/vodeo2.mp4'


export default function Products() {

  const [
    params,
    setParams,
  ] =
    useSearchParams()


  const categoryParam =
    params.get('category')

  const subParam =
    params.get('subcategory')


  const [
    query,
    setQuery,
  ] =
    useState('')


  const [
    categories,
    setCategories,
  ] =
    useState([])


  const [
    products,
    setProducts,
  ] =
    useState([])


  const [
    loading,
    setLoading,
  ] =
    useState(true)


  const [
    error,
    setError,
  ] =
    useState('')


  /* =====================================================
     LOAD DATA
  ====================================================== */

  useEffect(() => {

    let cancelled = false

    setLoading(true)
    setError('')


    Promise.all([
      api.getCategories(),
      api.getProducts(),
    ])

      .then(
        ([
          cats,
          prods,
        ]) => {

          if (cancelled) {
            return
          }


          setCategories(
            Array.isArray(cats)
              ? cats
              : []
          )


          setProducts(
            Array.isArray(prods)
              ? prods
              : []
          )
        }
      )

      .catch((err) => {

        if (!cancelled) {

          setError(
            err.message ||
              'Could not load products'
          )
        }
      })

      .finally(() => {

        if (!cancelled) {
          setLoading(false)
        }
      })


    return () => {
      cancelled = true
    }

  }, [])


  /* =====================================================
     ACTIVE CATEGORY
  ====================================================== */

  const activeCategory =
    categories.find(
      (category) =>
        String(category.id) ===
        categoryParam
    )


  /* =====================================================
     FILTER PRODUCTS
  ====================================================== */

  const filtered =
    useMemo(() => {

      let list =
        [...products]


      if (subParam) {

        list =
          list.filter(
            (product) =>
              String(
                product.subcategoryId
              ) ===
              subParam
          )

      } else if (
        categoryParam
      ) {

        list =
          list.filter(
            (product) =>
              String(
                product.categoryId
              ) ===
              categoryParam
          )
      }


      if (
        query.trim()
      ) {

        const normalizedQuery =
          query
            .trim()
            .toLowerCase()


        list =
          list.filter(
            (product) => {

              const name =
                String(
                  product?.name ||
                  ''
                )
                  .toLowerCase()


              const tagline =
                String(
                  product?.tagline ||
                  ''
                )
                  .toLowerCase()


              const description =
                String(
                  product?.description ||
                  ''
                )
                  .toLowerCase()


              return (
                name.includes(
                  normalizedQuery
                ) ||
                tagline.includes(
                  normalizedQuery
                ) ||
                description.includes(
                  normalizedQuery
                )
              )
            }
          )
      }


      return list

    }, [
      products,
      categoryParam,
      subParam,
      query,
    ])


  /* =====================================================
     CATEGORY SELECT
  ====================================================== */

  function selectCategory(id) {

    if (id === null) {

      setParams({})

      return
    }


    setParams({
      category:
        String(id),
    })
  }


  /* =====================================================
     CLEAR FILTERS
  ====================================================== */

  function clearFilters() {

    setQuery('')

    setParams({})
  }


  return (
    <div className="products-page">

      {/* =====================================================
          HERO
      ====================================================== */}

      <PageBanner
        title="Products"
        crumb="Products"
        eyebrow={`${products.length} Materials Across ${categories.length} Categories`}
        video={video2}
      />


      {/* =====================================================
          CATEGORY JOURNEY
      ====================================================== */}

      <CategoryJourney />


      {/* =====================================================
          SEARCH + FILTER BAR
      ====================================================== */}

      <section className="products-toolbar">

        <div className="products-toolbar-inner">

          {/* TOP */}

          <div className="products-toolbar-top">

            <div className="products-search-box">

              <Search
                size={17}
                className="products-search-icon"
              />


              <input
                type="search"
                value={query}
                onChange={(event) =>
                  setQuery(
                    event.target.value
                  )
                }
                placeholder="Search materials..."
                aria-label="Search materials"
              />


              {query && (

                <button
                  type="button"
                  className="products-search-clear"
                  onClick={() =>
                    setQuery('')
                  }
                  aria-label="Clear search"
                >

                  <X size={15} />

                </button>

              )}

            </div>


            <div className="products-result-info">

              <SlidersHorizontal
                size={14}
              />

              <span>
                {filtered.length}
              </span>

              <span>
                material
                {filtered.length !== 1
                  ? 's'
                  : ''}
                {' '}found
              </span>

            </div>

          </div>


          {/* =================================================
              CATEGORY SCROLLER
          ================================================== */}

          <div className="products-category-wrap">

            <div className="products-category-scroll">

              <button
                type="button"
                onClick={() =>
                  selectCategory(null)
                }
                className={`
                  products-category-chip
                  ${
                    !categoryParam
                      ? 'active'
                      : ''
                  }
                `}
              >

                <LayoutGrid
                  size={15}
                />

                <span>
                  All Materials
                </span>

              </button>


              {categories.map(
                (category) => {

                  const Icon =
                    getCategoryIcon(
                      category.icon
                    )


                  const isActive =
                    categoryParam ===
                    String(
                      category.id
                    )


                  return (
                    <button
                      type="button"
                      key={
                        category.id
                      }
                      onClick={() =>
                        selectCategory(
                          category.id
                        )
                      }
                      className={`
                        products-category-chip
                        ${
                          isActive
                            ? 'active'
                            : ''
                        }
                      `}
                    >

                      <Icon
                        size={15}
                      />

                      <span>
                        {
                          category.name
                        }
                      </span>

                    </button>
                  )
                }
              )}

            </div>

          </div>


          {/* =================================================
              SUBCATEGORIES
          ================================================== */}

          {activeCategory && (

            <div className="products-subcategory-row">

              <Link
                to={`/products?category=${activeCategory.id}`}
                className={`
                  products-subcategory-chip
                  ${
                    !subParam
                      ? 'active'
                      : ''
                  }
                `}
              >

                All{' '}
                {
                  activeCategory.name
                }

              </Link>


              {activeCategory
                .subcategories
                ?.map(
                  (
                    subcategory
                  ) => (

                    <Link
                      key={
                        subcategory.id
                      }
                      to={`/products?subcategory=${subcategory.id}`}
                      className={`
                        products-subcategory-chip
                        ${
                          subParam ===
                          String(
                            subcategory.id
                          )
                            ? 'active'
                            : ''
                        }
                      `}
                    >

                      {
                        subcategory.name
                      }

                    </Link>

                  )
                )}

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          PRODUCT CONTENT
      ====================================================== */}

      <section className="products-content">

        <div className="products-content-inner">

          {/* LOADING */}

          {loading ? (

            <div className="products-status products-loading">

              <span className="products-loader">

                <Loader2
                  size={22}
                />

              </span>

              <div>

                <strong>
                  Loading materials
                </strong>

                <p>
                  Fetching the latest
                  product catalogue.
                </p>

              </div>

            </div>

          ) : error ? (

            /* ERROR */

            <div className="products-status products-error">

              <strong>
                Products could not
                be loaded
              </strong>

              <p>
                {error}
              </p>

              <small>
                Check whether your
                backend API is running.
              </small>

            </div>

          ) : filtered.length ===
            0 ? (

            /* EMPTY */

            <div className="products-status products-empty">

              <span className="products-empty-icon">

                <Search
                  size={20}
                />

              </span>

              <strong>
                No matching
                materials
              </strong>

              <p>
                Try another search
                term or category.
              </p>

              <button
                type="button"
                onClick={
                  clearFilters
                }
              >
                Clear Filters
              </button>

            </div>

          ) : (

            /* =================================================
                PRODUCTS GRID
            ================================================== */

            <div className="products-grid">

              {filtered.map(
                (
                  product,
                  index
                ) => {

                  const category =
                    categories.find(
                      (item) =>
                        String(
                          item.id
                        ) ===
                        String(
                          product.categoryId
                        )
                    )


                  const Icon =
                    getCategoryIcon(
                      category?.icon
                    )


                  return (
                    <Reveal
                      key={
                        product.id
                      }
                      delay={
                        Math.min(
                          index,
                          6
                        ) * 55
                      }
                    >

                      <Link
                        to={`/products/${product.id}`}
                        className="products-card"
                      >

                        {/* MEDIA */}

                        <div className="products-card-media">

                          <ProductImage
                            product={
                              product
                            }
                            className="products-card-image"
                          />


                          <div className="products-card-overlay" />


                          <span className="products-card-category-icon">

                            <Icon
                              size={16}
                            />

                          </span>


                          {product.form && (

                            <span className="products-card-form">

                              {
                                product.form
                              }

                            </span>

                          )}


                          <span className="products-card-arrow">

                            <ArrowUpRight
                              size={17}
                            />

                          </span>

                        </div>


                        {/* BODY */}

                        <div className="products-card-body">

                          <div className="products-card-title-row">

                            <h3>
                              {
                                product.name
                              }
                            </h3>

                          </div>


                          {product.tagline && (

                            <p className="products-card-tagline">

                              {
                                product.tagline
                              }

                            </p>

                          )}


                          {product.description && (

                            <p className="products-card-description">

                              {
                                product.description
                              }

                            </p>

                          )}


                          <div className="products-card-footer">

                            <Badge
                              tone={
                                category?.accent ||
                                'teal'
                              }
                            >

                              {
                                product.categoryName ||
                                category?.name ||
                                'Material'
                              }

                            </Badge>


                            <span className="products-card-view">

                              View details

                              <ArrowUpRight
                                size={13}
                              />

                            </span>

                          </div>

                        </div>

                      </Link>

                    </Reveal>
                  )
                }
              )}

            </div>

          )}

        </div>

      </section>

    </div>
  )
}