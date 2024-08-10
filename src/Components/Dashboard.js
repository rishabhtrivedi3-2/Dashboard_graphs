import React, { useState } from "react";
import Charts from "./Charts";
import { CiMenuBurger } from "react-icons/ci";


const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const imga = "data:image/png;base64,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";

  return (

    <div className={`h-auto flex overflow-hidden bg-gray-900 text-white`}   >

      <div className={`flex flex-col lg:block w-40 rounded-md bg-gray-800 overflow-hidden ${isOpen ? "block" : "hidden"}`}  >
        <div className="flex items-center justify-center h-16 bg-gray-900 text-white ">
        <div className="w-auto h-auto">

<img
  srcSet={
    imga
  }
  alt="logo"
  className="w-24"
/>
</div>
      
        </div>
        <nav className={`flex-1 px-2 py-4 space-y-1 
 `} >
          <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72 ">
          </div>
          <div className="block lg:hidden">

          </div>
          <div
            className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
          >
            <div className="text-sm lg:flex-grow md:block">
              <a
                href="#"
                className="flex items-center px-2 py-2 text-base font-medium rounded-md bg-gray-900 text-white"
              >
                <svg
                  className="mr-4 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"
                  />
                </svg>
                Dashboard
              </a>
              <a
                href="#"
                className="flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <svg
                  className="mr-4 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7a4 4 0 018 0v8a4 4 0 11-8 0V7zm-1 10a3 3 0 006 0V7a3 3 0 00-6 0v10z"
                  />
                </svg>
                Team
              </a>
              <a
                href="#"
                className="flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <svg
                  className="mr-4 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7h18M3 12h18m-9 5h9"
                  />
                </svg>
                Projects
              </a>
              <a
                href="#"
                className="flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <svg
                  className="mr-4 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h1M4 21h16V7H4v14zM16 5V3H8v2H4a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2h-4zm4 10h-1m-6-7h6m-2-3h2"
                  />
                </svg>
                Calendar
              </a>
              <a
                href="#"
                className="flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <svg
                  className="mr-4 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 11V3m8 8V3m-3 14h-2m1-7v6"
                  />
                </svg>
                Documents
              </a>
              <a
                href="#"
                className="flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <svg
                  className="mr-4 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5h6m-6 4h6m-6 4h6M4 6h16M4 10h16m0 4H4"
                  />
                </svg>
                Reports
              </a>
              <div className="flex-1 px-2 py-4 space-y-1">
                <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Your teams
                </h3>
                <a
                  href="#"
                  className="flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  <span className="inline-block w-8 h-8 mr-3 bg-gray-500 rounded-full text-center text-white">
                    H
                  </span>
                  Heroicons
                </a>
                <a
                  href="#"
                  className="flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  <span className="inline-block w-8 h-8 mr-3 bg-gray-500 rounded-full text-center text-white">
                    T
                  </span>
                  Tailwind Labs
                </a>
                <a
                  href="#"
                  className="flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  <span className="inline-block w-8 h-8 mr-3 bg-gray-500 rounded-full text-center text-white">
                    W
                  </span>
                  Workcation
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-end bg-auto ">

          {!isOpen ?
            <div className="w-auto h-auto lg:hidden  ">

              <img
                srcSet={
                  imga
                }
                alt="logo"
                className="w-24 float-st"
                />
            </div>
            : ""}
                <div>
          <div className="block lg:hidden">
            

              

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
              >
              <svg
                className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
              <svg
                className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            </button>
                </div>
          </div>
          <div className="flex items-center mt-2 mb-2 ">
            <button className="flex items-center text-white focus:outline-none">
              <img
                className="w-10 h-10 rounded-full"
                src="data:image/png;base64,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"
                alt="Profile"
              />
              <span className="mr-2 mx-2 ">Tom Cook</span>
            </button>
          </div>
        </header>
        <main className="flex flex-col overflow-y-auto md:overflow-x-hidden  ">
          <div className="bg-gray-700 h-auto flex items-center justify-center text-4xl">
            <div classname="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-6xl mb-8">
              <Charts />
            </div>
          </div>
        </main>
      </div>
    </div >
  );
};

export default Dashboard;
