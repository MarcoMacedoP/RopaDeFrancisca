import * as React from "react";
const ProductsPage = () => {
  return (
    <>
      <article>
        <h1>Nuestra ropa</h1>
        <section className="search-section">
          <h2>Encuentra algo a tu medida.</h2>
          <input type="text" placeholder="Camisa de cuadros" />
        </section>
      </article>
    </>
  );
};

export default ProductsPage;
