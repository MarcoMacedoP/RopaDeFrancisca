import { Layout } from "../components/Layout";
import { Product } from "../components/Product";
export default () => (
  <>
    <Layout>
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
    </Layout>
    <style jsx>{`
      .landing {
        display: flex:
        flex-direction: column;
      }
      .featured-products{
        width: 50%;
        margin-top: 2rem;
        margin: 3rem auto 0 auto;
      }
      .featured-products-grid{
        display: flex;
      }
    `}</style>
  </>
);
