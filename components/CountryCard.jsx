
import Link from "next/link";
import Image from "next/image";

export default function CountryCard({ country }) {
  return (
    <div className="border rounded-xl overflow-hidden shadow-lg hover:scale-105 transition bg-white">
      <Image
        src={country.flags.png}
        alt={country.name.common}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">
          {country.name.common}
        </h2>

        <p>
          <strong>Capital:</strong>{" "}
          {country.capital?.[0] || "No Capital"}
        </p>

        <p>
          <strong>Region:</strong>{" "}
          {country.region}
        </p>

        <p>
          <strong>Population:</strong>{" "}
          {country.population.toLocaleString()}
        </p>

        <Link
          href={`/countries/${country.cca3}`}
          className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}