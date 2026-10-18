import { useEffect, useState } from "react";

import CountryTrackerHeader from "./components/CountryTrackerHeader";
import CountrySearch from "./components/CountrySearch";
import FilterButtons, {
  type CountryFilter,
} from "./components/FilterButtons";
import VisitedSummary from "./components/VisitedSummary";
import CountryList from "./components/CountryList";
import Footer from "./components/Footer";

import type { Country, TrackedCountry } from "./types/country";

const App = () => {
  const [countries, setCountries] = useState<TrackedCountry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] =
    useState<CountryFilter>("all");
  const [retryCount, setRetryCount] = useState(0);

  // Fetch countries from API
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://openapi.programming-hero.com/api/all"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch countries.");
        }

        const data: Country[] = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid country data received.");
        }

        setCountries(
          data.map((country) => ({
            ...country,
            visited: false,
          }))
        );
      } catch (err) {
        console.error("Error fetching countries:", err);
        setError("Unable to load countries. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, [retryCount]);

  // Toggle visited status
  const handleVisited = (countryCode: string) => {
    setCountries((previousCountries) =>
      previousCountries.map((country) =>
        country.cca3.cca3 === countryCode
          ? { ...country, visited: !country.visited }
          : country
      )
    );
  };

  // Calculate visited count
  const visitedCount = countries.filter(
    (country) => country.visited
  ).length;

  // Search and filter countries
  const filteredCountries = countries.filter((country) => {
    const search = searchTerm.trim().toLowerCase();

    const matchesSearch =
      country.name.common.toLowerCase().includes(search) ||
      country.name.official.toLowerCase().includes(search) ||
      (country.capital.capital ?? []).some((capital) =>
        capital.toLowerCase().includes(search)
      );

    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "visited" && country.visited) ||
      (activeFilter === "not-visited" && !country.visited);

    return matchesSearch && matchesFilter;
  });

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-6 dark:bg-gray-950 sm:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Dashboard Header */}
        <CountryTrackerHeader
          visitedCount={visitedCount}
          totalCountries={countries.length}
        />

        {/* Summary */}
        {!loading && !error && (
          <section id="summary" className="mt-8">
            <VisitedSummary countries={countries} />
          </section>
        )}

        {/* Loading State */}
        {loading && (
          <div
            className="py-16 text-center text-gray-600 dark:text-gray-300"
            role="status"
          >
            <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600" />
            Loading countries...
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="py-12 text-center">
            <p className="font-medium text-red-500">{error}</p>

            <button
              type="button"
              onClick={() => setRetryCount((count) => count + 1)}
              className="mt-4 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Search, Filters and Country List */}
        {!loading && !error && (
          <>
            <section className="mt-8">
              <CountrySearch
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                resultCount={filteredCountries.length}
              />
            </section>

            <section className="mt-6">
              <div className="mb-4">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                  Filter Countries
                </h2>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  View all countries or filter by your travel status.
                </p>
              </div>

              <FilterButtons
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
                totalCount={countries.length}
                visitedCount={visitedCount}
              />
            </section>

            <section id="countries" className="mt-8">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Explore Countries
                </h2>

                <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                  {filteredCountries.length} results
                </span>
              </div>

              <CountryList
                countries={filteredCountries}
                onClick={handleVisited}
              />
            </section>
          </>
        )}
      </div>

      <Footer />
    </main>
  );
};

export default App;