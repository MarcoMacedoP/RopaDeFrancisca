import * as React from "react";

export type LayoutProps = {};

export const Layout: React.FC<LayoutProps> = props => {
  return (
    <article>
      <header>
        <nav> this is the nav</nav>
      </header>
      <main> {props.children} </main>
    </article>
  );
};
