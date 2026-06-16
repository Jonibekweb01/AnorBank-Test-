Test assignment for Junior position.

## Stack
- React
- TypeScript
- CSS
- Vite
- LocalStorage

## What was implemented
The application allows users to compare products in a table format.
Main features:
- User can select up to 3 products
- Selected products are displayed in a comparison table
- Product characteristics are shown as rows
- Products are shown as columns
- Different rows are highlighted visually
- User can remove any product from comparison
- Selected products are saved after page reload using localStorage

## Project structure
```txt
src/
  components/
    Header/
    ProductCard/
    ProductList/
    ComparisonTable/
  data/
    products.ts
  types/
    product.ts
  App.tsx