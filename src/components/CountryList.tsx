import CountryCard from "./CountryCard";
import type { TrackedCountry } from "../types/country";

interface CountryListProps {
  countries: TrackedCountry[];
  onClick: (countryCode: string) => void;
}

const CountryList = ({ countries, onClick }: CountryListProps) => {
  if (countries.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center dark:border-gray-700 dark:bg-gray-900">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          No countries found
        </h3>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Try a different search or filter.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {countries.map((country) => (
        <CountryCard
          key={country.cca3.cca3}
          country={country}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default CountryList;