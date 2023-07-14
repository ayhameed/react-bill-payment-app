import React from "react";

function HomeTabs() {
  return (
    <div className="flex">
      <div className="w-1/3"></div> {/* Left column */}
      <div className="w-1/3">
        {/* Middle column - Place your tab codes here */}
        <header>
          {/* <link href="/dist/output.css" rel="stylesheet" /> */}
        </header>
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            <li className="mr-4">
              <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Buy Airtime</a>
            </li>
            <li className="mr-4">
              <a href="#" className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Buy Data</a>
            </li>
            <li className="mr-4">
              <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Pay Bills</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-1/3"></div> {/* Right column */}
    </div>
  );
}

export default HomeTabs;
