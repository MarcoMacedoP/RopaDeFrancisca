import * as React from "react";
import Link from "next/link";
import { Icon } from "../Icon";
import globalStyles, { normalizedStyles } from "./globalStyles";
import { useModal } from "../../shared/hooks/modals";
import { CartModal } from "../CartModal";

export type LayoutProps = {};

export const Layout: React.FC<LayoutProps> = props => {
  const [isCartModalOpen, toggleCartModal] = useModal();

  return (
    <>
      <nav>
        <Link href="/">
          <a>
            <strong> Ropa de Francisca</strong>
          </a>
        </Link>
        <ul>
          <li>
            <Link href="/ropa">
              <a>
                Ropa <span aria-label="t-shirt">👚</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/nosotros">
              <a>
                Nosotros <span aria-label="person">💃</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contacto">
              <a>
                Contacto <span aria-label="cellphone">📱</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      <main> {props.children} </main>
      {/* ---------Modal cart -----*/}
      <button
        className="cart-float-button"
        onClick={() => typeof toggleCartModal !== "boolean" && toggleCartModal()}
      >
        <Icon value="shopping_cart" />
      </button>
      <CartModal isOpen={isCartModalOpen} onClose={toggleCartModal} />
      {/* ---------Modal cart end -----*/}

      <style jsx global>
        {normalizedStyles}
      </style>

      <style jsx global>
        {globalStyles}
      </style>
      <style jsx>{`
        a {
          text-decoration: none;
          color: initial;
        }
        nav {
          padding: 0.5rem 2rem;
          display: flex;
          width: 100%;
          box-sizing: border-box;
          justify-content: space-between;
          align-items: center;
        }
        ul {
          display: flex;
          padding: 0;
        }
        li {
          list-style: none;
          margin: 0 1rem;
        }
        main {
          padding: 2rem;
        }
        .cart-float-button {
          position: fixed;
          bottom: 1rem;
          right: 5rem;
        }
      `}</style>
    </>
  );
};
