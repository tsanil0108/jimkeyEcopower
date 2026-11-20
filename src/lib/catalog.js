export function isService(product) {
  return (
    String(product?.form || '')
      .trim()
      .toLowerCase() === 'service'
  )
}

function trimSubcategories(category, items) {
  const ids = new Set(
    items
      .filter((p) => p.categoryId === category.id)
      .map((p) => p.subcategoryId)
  )

  if (ids.size === 0) {
    return category
  }

  return {
    ...category,
    subcategories: (category.subcategories || []).filter((s) =>
      ids.has(s.id)
    ),
  }
}

export function splitCatalog(categories = [], products = []) {
  const serviceItems = products.filter(isService)
  const productItems = products.filter((p) => !isService(p))

  const serviceCategoryIds = new Set(serviceItems.map((p) => p.categoryId))
  const productCategoryIds = new Set(productItems.map((p) => p.categoryId))

  const serviceCategories = categories
    .filter((c) => serviceCategoryIds.has(c.id))
    .map((c) => trimSubcategories(c, serviceItems))

  const productCategories = categories
    .filter(
      (c) => productCategoryIds.has(c.id) || !serviceCategoryIds.has(c.id)
    )
    .map((c) => trimSubcategories(c, productItems))

  return { productItems, serviceItems, productCategories, serviceCategories }
}