
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center text-center py-20 px-4">
      <h1 className="text-5xl font-bold mb-6">
        World Explorer
      </h1>

      <p className="max-w-2xl text-lg mb-8">
        Explore countries around the world and learn
        about their flags, capitals, populations,
        currencies, and languages.
      </p>

      <Link
        href="/countries"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Explore Countries
      </Link>
    </main>
  );
}