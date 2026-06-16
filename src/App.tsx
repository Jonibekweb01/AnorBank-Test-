import { useEffect, useState } from "react";
import { Header, ProductList, ComparisonTable } from "./components";
import { products } from "./data/products";
import "./App.css";

const STORAGE_KEY = "anorbank-selected-products";

const App = () => {
  const [selectedIds, setSelectedIds] = useState<number[]>(() => {
    const savedIds = localStorage.getItem(STORAGE_KEY);

    if (savedIds) {
      return JSON.parse(savedIds);
    }

    return [];
  });

  const selectedProducts = products.filter((product) =>
    selectedIds.includes(product.id),
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedIds));
  }, [selectedIds]);

  const handleToggleProduct = (id: number) => {
    const isSelected = selectedIds.includes(id);

    if (isSelected) {
      setSelectedIds(selectedIds.filter((productId) => productId !== id));
      return;
    }

    if (selectedIds.length >= 3) {
      return;
    }

    setSelectedIds([...selectedIds, id]);
  };

  const handleRemoveProduct = (id: number) => {
    setSelectedIds(selectedIds.filter((productId) => productId !== id));
  };

  const handleClear = () => {
    setSelectedIds([]);
  };

  return (
    <main className="app">
      <Header />

      <div className="app__content">
        <ProductList
          products={products}
          selectedIds={selectedIds}
          onToggleProduct={handleToggleProduct}
        />

        <ComparisonTable
          selectedProducts={selectedProducts}
          onRemoveProduct={handleRemoveProduct}
          onClear={handleClear}
        />
      </div>
    </main>
  );
};

export default App;
