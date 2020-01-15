import { Product } from "../components/Product";
export default () => (
  <>
    <article className="landing">
      <header>
        <h1>
          Ropa sustentable <span aria-label="plant">🌱</span>
        </h1>
      </header>
      <section className="featured-products">
        <h2>
          Productos destacados <span aria-label="thunder">⚡</span>
        </h2>
        <div className="featured-products-grid">
          {[1, 2, 3].map(elemnt => (
            <Product key={elemnt} />
          ))}
        </div>
      </section>
    </article>
    <style jsx>{`
      .landing {
        display: grid;
        grid-template-rows: 1fr 2fr;
        height: 86vh;
      }
      .landing header {
        height: 100%;
        display: flex;
        border: 1px solid red;
        align-items: center;
        padding: 0 1rem;
      }
      .landing h1 {
        margin: 0;
        font-size: 3rem;
      }
      .featured-products {
        width: 50%;
        margin-top: 2rem;
        margin: 0 auto;
      }
      .featured-products-grid {
        display: flex;
      }
    `}</style>
  </>
);
