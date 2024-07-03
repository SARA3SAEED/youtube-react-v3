import React from 'react';

export default function NavDetails() {
  return (
    <>
      {/* Main navigation container */}
      <nav className="relative flex w-[25%] lg:w-[99%] lg:items-center lg:justify-between bg-base-100 shadow-dark-mild dark:bg-neutral-700">
        <div className="flex w-full flex-wrap items-center justify-between">
          <div>
            <a className="mx-1 my-1 flex items-center lg:mb-0 lg:mt-0" href="#">
              <img
                className="me-2 rounded-3xl"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                style={{ height: 50 }}
                alt="TE Logo"
                loading="lazy"
              />
            </a>
          </div>
          {/* Collapsible navbar container - modified to always be visible */}
          <div className="flex-grow flex items-center">
            {/* Left links */}
            <ul className="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row">
              {/* Home link */}
              <li className="flex flex-col mx-2 my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2">
                القاهرة والناس
                <a
                  className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80"
                  aria-current="page"
                  href="#"
                >
                  4.24M subscribers
                </a>
              </li>
              <button
                type="button"
                className="ml-3 bg-black w-32 h-10 me-3 inline-block rounded-3xl px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white hover:text-white focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
              >
                Subscribe
              </button>
            </ul>
            {/* Additional buttons */}
            <div className="flex items-center">
              <div
                type="button"
                className="flex bg-base-200 w-36 h-10 me-3 inline-block rounded-3xl px-2 pb-2 pt-1 text-xs font-medium uppercase leading-normal text-gray-400 hover:text-white focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
              >
                <div className="flex">
                  <button className="mr-5 text-gray-500">
                    <img className="w-8 ml-1 p-1" src="https://img.icons8.com/?size=100&id=24816&format=png" alt="" />
                  </button>
                  <img className="w-9 p-1" src="https://img.icons8.com/?size=60&id=120588&format=png" alt="" />
                  <button className="ml-5">
                    <img className="w-7 mt-1 mr-1 p-1" src="https://img.icons8.com/?size=160&id=htUVosVlBDCt&format=png" alt="" />
                  </button>
                </div>
              </div>
              <button
                type="button"
                className="ml-3 bg-base-200 me-3 inline-block rounded-full px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white hover:text-white focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
              >
                <img className="w-6 p-1" src="https://img.icons8.com/?size=100&id=12620&format=png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
