type TrackedCountry = {
  cca3: { cca3: string };
  capital: { capital?: string[] };
  flags: { flags: { png: string; alt?: string } };
  name: { common: string; official: string };
  population: { population: number };
  region: { region: string };
  visited: boolean;
};

import { FaMapMarkerAlt, FaUsers, FaGlobeAsia } from "react-icons/fa";

import {
  MdOutlineCheckCircle,
  MdOutlineRadioButtonUnchecked,
} from "react-icons/md";

interface CountryCardProps {
  country: TrackedCountry;
  onClick: (countryCode: string) => void;
}

const CountryCard = ({ country, onClick }: CountryCardProps) => {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-900">
      <div className="flex h-44 shrink-0 items-center justify-center overflow-hidden bg-gray-100 p-3 dark:bg-gray-800">
        <img
          src={country.flags.flags.png}
          alt={country.flags.flags.alt || country.name.common}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-4">
          <span className="mb-2 inline-flex items-center gap-1 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
            <FaGlobeAsia />
            {country.region.region}
          </span>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {country.name.common}
          </h2>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Official: {country.name.official}
          </p>
        </div>

        <div className="flex-1 space-y-3 border-t border-gray-100 py-4 dark:border-gray-700">
          <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
            <FaMapMarkerAlt className="shrink-0 text-indigo-500" />
            <span>
              <span className="font-semibold">Capital:</span>{" "}
              {country.capital.capital?.[0] || "N/A"}
            </span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
            <FaUsers className="shrink-0 text-indigo-500" />
            <span>
              <span className="font-semibold">Population:</span>{" "}
              {country.population.population.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 border-t border-gray-100 pt-4 dark:border-gray-700">
          <button
            type="button"
            onClick={() => onClick(country.cca3.cca3)}
            disabled={country.visited}
            className={`flex items-center justify-center gap-1.5 rounded-xl px-2 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
              country.visited
                ? "cursor-default bg-emerald-600 text-white"
                : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-300"
            }`}
          >
            <MdOutlineCheckCircle size={18} />
            Visited
          </button>

          <button
            type="button"
            onClick={() => onClick(country.cca3.cca3)}
            disabled={!country.visited}
            className={`flex items-center justify-center gap-1.5 rounded-xl px-2 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-gray-400 ${
              !country.visited
                ? "cursor-default bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            <MdOutlineRadioButtonUnchecked size={18} />
            Not Visited
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
