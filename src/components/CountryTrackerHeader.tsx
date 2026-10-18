import { FaGlobeAsia, FaMapMarkedAlt } from "react-icons/fa";

interface CountryTrackerHeaderProps {
  visitedCount: number;
  totalCountries: number;
}

const CountryTrackerHeader = ({
  visitedCount,
  totalCountries,
}: CountryTrackerHeaderProps) => {
  const progress =
    totalCountries > 0
      ? (visitedCount / totalCountries) * 100
      : 0;

  return (
    <header
      id="top"
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 via-blue-700 to-cyan-600 px-6 py-8 text-white shadow-xl sm:px-10 sm:py-10"
    >
      <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-white/10" />
      <div className="pointer-events-none absolute -bottom-20 right-1/4 h-40 w-40 rounded-full bg-white/10" />

      <div className="relative z-10">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 shadow-inner backdrop-blur-sm">
            <FaGlobeAsia className="text-3xl" />
          </div>

          <div>
            <p className="mb-1 text-sm font-medium tracking-widest text-blue-100 uppercase">
              Explore the world
            </p>
            <h1 className="text-2xl font-extrabold tracking-tight sm:text-4xl">
              My Country Tracker
            </h1>
            <p className="mt-2 text-sm text-blue-100">
              Track the countries you have visited.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-medium text-blue-100">
                Countries Visited
              </span>
              <FaMapMarkedAlt className="text-xl text-cyan-200" />
            </div>

            <p className="text-4xl font-extrabold">
              {visitedCount}
              <span className="ml-2 text-lg font-medium text-blue-100">
                / {totalCountries}
              </span>
            </p>

            <div
              className="mt-4 h-2 overflow-hidden rounded-full bg-white/20"
              role="progressbar"
              aria-label="Countries visited"
              aria-valuemin={0}
              aria-valuemax={totalCountries}
              aria-valuenow={visitedCount}
            >
              <div
                className="h-full rounded-full bg-cyan-300 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="mt-2 text-xs text-blue-100">
              {progress.toFixed(1)}% of countries explored
            </p>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
              <FaGlobeAsia className="text-2xl text-cyan-200" />
            </div>

            <div>
              <p className="text-sm font-medium text-blue-100">
                Countries to Explore
              </p>
              <p className="mt-1 text-3xl font-extrabold">
                {Math.max(totalCountries - visitedCount, 0)}
              </p>
              <p className="mt-1 text-xs text-blue-100">
                Keep discovering new places!
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CountryTrackerHeader;