import CountryCard from "../../components/CountryCard";

export default async function CountriesPage() {

  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,cca3"
  );

  const countries = await res.json();

  return (
    <main className="max-w-7xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-10">
        Explore Countries
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {countries.slice(0, 20).map((country) => (

          <CountryCard
            key={country.cca3}
            country={country}
          />

        ))}

      </div>

    </main>
  );
}