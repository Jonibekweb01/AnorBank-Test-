import type { Product } from "../../types/product";
import "./ProductCard.css";

type ProductCardProps = {
  product: Product;
  isSelected: boolean;
  isDisabled: boolean;
  onToggle: (id: number) => void;
};

const ProductCard = ({
  product,
  isSelected,
  isDisabled,
  onToggle,
}: ProductCardProps) => {
  return (
    <div className={`product-card ${isSelected ? "product-card--active" : ""}`}>
      <img
        className="product-card__image"
        src={product.image}
        alt={product.name}
      />

      <div className="product-card__info">
        <h3>{product.name}</h3>
        <strong>{product.price}</strong>
        <p>
          {product.processor} • {product.ram} • {product.storage}
        </p>
      </div>

      <button
        className={`product-card__btn ${isSelected ? "product-card__btn--active" : ""}`}
        onClick={() => onToggle(product.id)}
        disabled={!isSelected && isDisabled}
      >
        {isSelected ? "✓" : "+"}
      </button>
    </div>
  );
};

export default ProductCard;
