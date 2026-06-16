import type { Product } from "../../types/product";
import "./ComparisonTable.css";

type ComparisonTableProps = {
  selectedProducts: Product[];
  onRemoveProduct: (id: number) => void;
  onClear: () => void;
};

const characteristics: {
  label: string;
  key: keyof Product;
}[] = [
  { label: "Price", key: "price" },
  { label: "Processor", key: "processor" },
  { label: "RAM", key: "ram" },
  { label: "Storage", key: "storage" },
  { label: "Display", key: "display" },
  { label: "Camera", key: "camera" },
  { label: "Battery", key: "battery" },
  { label: "OS", key: "os" },
  { label: "Weight", key: "weight" },
];

const ComparisonTable = ({
  selectedProducts,
  onRemoveProduct,
  onClear,
}: ComparisonTableProps) => {
  const isDifferentRow = (key: keyof Product) => {
    const values = selectedProducts.map((product) => product[key]);
    return new Set(values).size > 1;
  };

  if (selectedProducts.length === 0) {
    return (
      <section className="comparison comparison--empty">
        <h2>Comparison table</h2>
        <p>Select products from the left side to start comparison.</p>
      </section>
    );
  }

  return (
    <section className="comparison">
      <div className="comparison__header">
        <div>
          <h2>Comparison table</h2>
          <p>Different rows are highlighted automatically.</p>
        </div>

        <button className="comparison__clear" onClick={onClear}>
          Clear all
        </button>
      </div>

      <div className="comparison__table-wrapper">
        <table className="comparison__table">
          <thead>
            <tr>
              <th>Characteristic</th>

              {selectedProducts.map((product) => (
                <th key={product.id}>
                  <div className="comparison__product-head">
                    <button
                      className="comparison__remove"
                      onClick={() => onRemoveProduct(product.id)}
                    >
                      ×
                    </button>

                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <span>{product.price}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {characteristics.map((item) => {
              const isDifferent = isDifferentRow(item.key);

              return (
                <tr
                  key={item.key}
                  className={isDifferent ? "comparison__row--different" : ""}
                >
                  <td>{item.label}</td>

                  {selectedProducts.map((product) => (
                    <td key={product.id}>{product[item.key]}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="comparison__legend">
        <span></span>
        Difference between products
      </div>
    </section>
  );
};

export default ComparisonTable;
