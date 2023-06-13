export const getProductQuery = `
query($id: ID!) {
  Product(id: $id) {
    name
    description
    image_url
    id
    price_in_cents
    sales
  }
}
`
