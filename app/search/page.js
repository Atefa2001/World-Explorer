import CountrySearch from "../../components/CountrySearch";

export default async function SearchPage() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,cca3"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch countries.");
  }

  const countries = await res.json();

  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">
        Search Countries
      </h1>

      <CountrySearch countries={countries} />
    </main>
  );
}
