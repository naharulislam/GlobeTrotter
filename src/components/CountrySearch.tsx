import { FaSearch, FaGlobeAsia } from "react-icons/fa";
import { MdClose } from "react-icons/md";

interface CountrySearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  resultCount: number;
}

const CountrySearch = ({
  searchTerm,
  onSearchChange,
  resultCount,
}: CountrySearchProps) => {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-6">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300">
          <FaGlobeAsia size={21} />
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            Discover Countries
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Search by country name or capital city
          </p>
        </div>
      </div>

      <div className="relative">
        <FaSearch
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={17}
        />

        <input
          type="search"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Try Bangladesh, Japan, Dhaka..."
          aria-label="Search countries"
          className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:bg-gray-800"
        />

        {searchTerm && (
          <button
            type="button"
            onClick={() => onSearchChange("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <MdClose size={20} />
          </button>
        )}
      </div>

      <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
        Showing{" "}
        <span className="font-semibold text-indigo-600 dark:text-indigo-400">
          {resultCount}
        </span>{" "}
        matching countries
      </p>
    </section>
  );
};

export default CountrySearch;