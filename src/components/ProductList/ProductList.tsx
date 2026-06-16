import type { Product } from "../../types/product";
import ProductCard from "../ProductCard";
import "./ProductList.css";

type ProductListProps = {
  products: Product[];
  selectedIds: number[];
  onToggleProduct: (id: number) => void;
};

const ProductList = ({
  products,
  selectedIds,
  onToggleProduct,
}: ProductListProps) => {
  const isLimitReached = selectedIds.length >= 3;

  return (
    <section className="product-list">
      <div className="product-list__header">
        <h2>Available products</h2>
        <p>Select products for comparison. Maximum 3 products.</p>
      </div>

      <div className="product-list__items">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isSelected={selectedIds.includes(product.id)}
            isDisabled={isLimitReached}
            onToggle={onToggleProduct}
          />
        ))}
      </div>

      <div className="product-list__hint">
        Selected: <strong>{selectedIds.length}</strong> / 3
      </div>
    </section>
  );
};

export default ProductList;
