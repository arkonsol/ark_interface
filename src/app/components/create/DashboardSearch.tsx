import React from "react";
import { FiSearch } from "react-icons/fi";

const LocationSearch = () => {
  return (
    <form className="w-full max-w-md">
      <div className="flex">
        <div className="relative w-full">
          <input
            type="search"
            id="location-search"
            className="block p-2.5 w-full min-w-[15rem] z-20 text-sm text-gray-900 bg-gray-50 border-s-gray-50 border-s-2 border border-gray-300 focus:ring-teal-500 focus:border-teal-500  dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-teal-500"
            placeholder="Search PAO directory"
            required
          />
          <button
            type="submit"
            className="absolute top-0 end-0 h-full flex items-center justify-center p-4 text-sm font-medium text-white bg-teal-800 border border-teal-800 hover:bg-teal-900 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-700"
          >
            <FiSearch className="w-4 h-4" />
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

const DashSearch = function () {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl p-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <LocationSearch />
          <div className="flex gap-4">
            <button className="px-4 py-2 hover:text-teal-400 hover:bg-black rounded bg-teal-800 text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
              Filter
            </button>
            <button className="px-4 py-2 hover:text-teal-400 hover:bg-black rounded bg-teal-800 text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
              Create PAO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardSearch = () => {
  return (
    <div className="w-full bg-gradient-to-br from-teal-900 to-black text-white">
      <DashSearch />
    </div>
  );
};

export default DashboardSearch;
