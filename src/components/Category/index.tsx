import Link from "next/link";

type CategoryProps = {
  name: string;
  image: string;
  url: string;
};

export const Category: React.FC<CategoryProps> = props => (
  <>
    <Link href={props.url || "/"}>
      <a>
        <img src={props.image} alt="" />
        <p>
          <strong> {props.name}</strong>
        </p>
      </a>
    </Link>
  </>
);
