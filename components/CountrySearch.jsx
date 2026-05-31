
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CountrySearch({
  countries,
}) {
  const [search, setSearch] = useState("");

  const filteredCountries = countries.filter(
    (country) =>
      country.name.common
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search country..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="border p-3 w-full mb-8 rounded"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredCountries.map((country) => (
          <div
            key={country.cca3}
            className="border rounded-xl p-4"
          >
            <Image
              src={country.flags.png}
              alt={country.name.common}
              className="w-full h-40 object-cover"
              width={640}
              height={320}
            />

            <h2 className="text-xl font-bold mt-3">
              {country.name.common}
            </h2>

            <Link
              href={`/countries/${country.cca3}`}
              className="text-blue-600 underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
