import * as React from "react";
import Link from "next/link";

type ButtonProps = {
  url?: string;
  text: string;
};

export const Button: React.FC<ButtonProps> = props => (
  <>
    <button>
      {props.url ? (
        <Link href={props.url}>
          <a> {props.text}</a>
        </Link>
      ) : (
        <a>{props.text}</a>
      )}
    </button>
  </>
);
