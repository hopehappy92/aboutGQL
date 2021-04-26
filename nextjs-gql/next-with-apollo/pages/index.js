import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <br />
      <Link href="/server-side">
        <a>ssr</a>
      </Link>
      <br />

      <Link href="/static">
        <a>static</a>
      </Link>
      <br />

      <Link href="/client">
        <a>client</a>
      </Link>
    </div>
  );
}
