import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>home page</h1>
      <ul>
        <li>
          <Link href="/portfolio">portfolio</Link>
        </li>
        <li>
          <Link href="/clients">clients</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
