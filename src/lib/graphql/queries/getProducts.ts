export const getProductsQuery = `
  query($page: Int!, $perPage: Int!, $filter: ProductFilter, $sortOrder: String, $sortField:String) {
    allProducts(page: $page, perPage: $perPage, filter: $filter, sortOrder: $sortOrder, sortField: $sortField) {
      id
      name
      image_url
      price_in_cents
      category
    }

    _allProductsMeta {
      count
    }
  }
`
