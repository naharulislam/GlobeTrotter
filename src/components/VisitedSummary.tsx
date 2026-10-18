import { FaGlobeAsia, FaCheckCircle, FaCompass } from "react-icons/fa";
import type { TrackedCountry } from "../types/country";

interface VisitedSummaryProps {
  countries: TrackedCountry[];
}

const VisitedSummary = ({ countries }: VisitedSummaryProps) => {
  const visited = countries.filter((country) => country.visited);
  const percentage =
    countries.length > 0
      ? (visited.length / countries.length) * 100
      : 0;

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
        <FaGlobeAsia className="mb-3 text-2xl text-indigo-500" />
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Total Countries
        </p>
        <p className="mt-1 text-3xl font-extrabold text-gray-900 dark:text-white">
          {countries.length}
        </p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
        <FaCheckCircle className="mb-3 text-2xl text-emerald-500" />
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Countries Visited
        </p>
        <p className="mt-1 text-3xl font-extrabold text-gray-900 dark:text-white">
          {visited.length}
        </p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
        <FaCompass className="mb-3 text-2xl text-cyan-500" />
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Travel Progress
        </p>
        <p className="mt-1 text-3xl font-extrabold text-gray-900 dark:text-white">
          {percentage.toFixed(1)}%
        </p>
        <div
          className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800"
          role="progressbar"
          aria-label="Travel progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percentage}
        >
          <div
            className="h-full rounded-full bg-cyan-500 transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default VisitedSummary;