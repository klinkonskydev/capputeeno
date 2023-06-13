export const getProductsQuery = `
  query($page: Int!, $perPage: Int!, $filter: ProductFilter) {
    allProducts(page: $page, perPage: $perPage, filter: $filter) {
      id
      name
      image_url
      price_in_cents
      category
    }
  }
`
