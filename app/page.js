import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Wild Oasis. Welcome to paradise.</h1>
      <main>
        <Link href="/cabins">Explore luxury cabins</Link>
      </main>
    </div>
  );
}
