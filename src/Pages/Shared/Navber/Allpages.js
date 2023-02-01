import React from "react";

const Allpages = () => {
  return (
    <div>
      <div className="dropdown dropdown-bottom cursor-pointer">
        <label
          tabIndex={0}
          className="relative capitalize before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-slate-900 before:transition hover:before:scale-100 uppercase space-x-1 flex items-center cursor-pointer"
        >
          <p>All Pages</p>
          <span class="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </label>
        <div
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-white w-52 mt-[31px]"
        >
          <nav aria-label="Main Nav" class="flex flex-col space-y-1">
            <aside class="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500">
              FAQ Pages
            </aside>
            <aside class="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500">
              Blog Pages
            </aside>
            <aside class="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500">
              404 Not Found
            </aside>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Allpages;
