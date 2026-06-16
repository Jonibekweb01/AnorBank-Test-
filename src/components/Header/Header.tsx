import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div>
        <span className="header__badge">Test</span>
        <h1 className="header__title">Product Comparison Widget</h1>
        <p className="header__text">
          Choose up to 3 products and compare their characteristics.
        </p>
      </div>
    </header>
  );
};

export default Header;
