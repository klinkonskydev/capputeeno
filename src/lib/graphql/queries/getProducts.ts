export const getProductsQuery = `
  query($page: Int!, $perPage: Int!, $order: String) {
    allProducts(page: $page, perPage: $perPage, sortOrder: $order) {
      id
      name
      image_url
      price_in_cents
    }
  }
`
