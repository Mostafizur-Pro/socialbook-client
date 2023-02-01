import React from "react";

const Newsfeed = () => {
  return (
    <div>
      <div className="dropdown dropdown-bottom cursor-pointer">
        <label
          tabIndex={0}
          className="relative capitalize before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-slate-900 before:transition hover:before:scale-100 uppercase space-x-1 flex items-center cursor-pointer"
        >
          <p>Newsfeed</p>
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
              Newsfeed
            </aside>

            <details class="group [&_summary::-webkit-details-marker]:hidden duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 py-1 hover:text-blue-700 text-gray-500">
              <summary class="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                <span class="text-sm font-medium"> People </span>

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
              </summary>

              <nav
                aria-label="Users Nav"
                class="flex flex-col mt-2 ml-8 space-y-1"
              >
                <aside class="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500">
                  People Nearly
                </aside>

                <aside class="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500">
                  My Friends
                </aside>
              </nav>
            </details>

            <aside class="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500">
              Chatroom
            </aside>

            <aside class="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500">
              Images
            </aside>
            <aside class="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500">
              Videos
            </aside>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Newsfeed;
