import * as React from "react";
import Link from "next/link";

type ButtonProps = {
  url?: string;
  text: string;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = props => (
  <>
    <button onClick={props.onClick}>
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
