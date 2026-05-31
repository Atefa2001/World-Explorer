import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function CountryDetailsPage({
  params,
}) {
  const { code } = await params;

  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${code.toUpperCase()}`
  );

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();
  const country = Array.isArray(data) ? data[0] : data;

  if (!country) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <Image
        src={country.flags?.png}
        alt={country.name?.common}
        className="w-80 mb-6"
        width={320}
        height={240}
      />

      <h1 className="text-5xl font-bold mb-6">
        {country.name?.common}
      </h1>

      <p>
        Official Name:
        {" "}
        {country.name?.official}
      </p>

      <p>
        Capital:
        {" "}
        {country.capital?.[0]}
      </p>

      <p>
        Region:
        {" "}
        {country.region}
      </p>

      <p>
        Population:
        {" "}
        {country.population?.toLocaleString()}
      </p>

      <p>
        Languages:
        {" "}
        {Object.values(
          country.languages || {}
        ).join(", ")}
      </p>

      <p>
        Time Zones:
        {" "}
        {country.timezones?.join(", ")}
      </p>

      <a
        href={country.maps?.googleMaps}
        target="_blank"
        className="inline-block mt-6 bg-green-600 text-white px-4 py-2 rounded"
      >
        Google Maps
      </a>

      <div className="mt-6">
        <Link
          href="/countries"
          className="text-blue-600"
        >
          Back
        </Link>
      </div>
    </main>
  );
}
