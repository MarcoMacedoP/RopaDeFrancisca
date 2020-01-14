import * as React from "react";
import Link from "next/link";
import globalStyles, { normalizedStyles } from "./globalStyles";
export type LayoutProps = {};

export const Layout: React.FC<LayoutProps> = props => {
  return (
    <div>
      <header>
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
      </header>
      <main> {props.children} </main>

      <style jsx global>
        {normalizedStyles}
      </style>

      <style jsx global>
        {globalStyles}
      </style>
      <style jsx>{`
        header {
          padding: 0.5rem 2rem;
        }

        a {
          text-decoration: none;
          color: initial;
        }
        nav {
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
      `}</style>
    </div>
  );
};
