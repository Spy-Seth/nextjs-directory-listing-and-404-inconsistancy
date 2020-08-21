import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      Hello World. <br />
      <Link href="/fr/foo">
        <a>Some existing page</a>
      </Link>
      <br />
      <Link href="/fr">
        <a>Should be a 404 page</a>
      </Link>
    </div>
  );
}
