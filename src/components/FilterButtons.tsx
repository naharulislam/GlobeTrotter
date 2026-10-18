import { FaGlobeAsia, FaCheckCircle } from "react-icons/fa";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";

export type CountryFilter = "all" | "visited" | "not-visited";

interface FilterButtonsProps {
  activeFilter: CountryFilter;
  onFilterChange: (filter: CountryFilter) => void;
  totalCount: number;
  visitedCount: number;
}

const FilterButtons = ({
  activeFilter,
  onFilterChange,
  totalCount,
  visitedCount,
}: FilterButtonsProps) => {
  const filters = [
    {
      value: "all" as const,
      label: "All Countries",
      count: totalCount,
      icon: <FaGlobeAsia />,
    },
    {
      value: "visited" as const,
      label: "Visited",
      count: visitedCount,
      icon: <FaCheckCircle />,
    },
    {
      value: "not-visited" as const,
      label: "Not Visited",
      count: totalCount - visitedCount,
      icon: <MdOutlineRadioButtonUnchecked />,
    },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.value;

        return (
          <button
            key={filter.value}
            type="button"
            onClick={() => onFilterChange(filter.value)}
            aria-pressed={isActive}
            className={`inline-flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition ${
              isActive
                ? "border-indigo-600 bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                : "border-gray-200 bg-white text-gray-600 hover:border-indigo-300 hover:text-indigo-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:text-indigo-400"
            }`}
          >
            {filter.icon}
            {filter.label}
            <span
              className={`rounded-full px-2 py-0.5 text-xs ${
                isActive
                  ? "bg-white/20 text-white"
                  : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300"
              }`}
            >
              {filter.count}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default FilterButtons;