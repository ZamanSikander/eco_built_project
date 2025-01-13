
import { useState } from "react";
import { Link } from "react-router-dom";
import ecobuilt_logo from "../assets/ecobuilt_logo.svg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-28 sm:h-40 items-center">
          <div className="flex items-center ">
            <Link to="/" className="flex-shrink-0">
              <img className="h-28 sm:h40 w-auto" src={ecobuilt_logo} alt="Logo" />
            </Link>
            <div className="hidden md:ml-6 lg:flex md:space-x-8">
              <Link
                to="/"
                className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
              >
                Home
              </Link>
              <div className="relative">
                <button
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                >
                  About Us
                </button>
                {dropdownOpen && (
                  <div
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                    className="absolute z-10 -ml-4 transform px-2 w-[150%] sm:px-0 lg:ml-0"
                  >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-1 bg-white  px-0.5 py-0.5 sm:gap-4 sm:p-4">
                        <Link
                          to="OurStory"
                          className="block px-0.5 py-0.5 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition duration-150 ease-in-out"
                        >
                          Our Story
                        </Link>
                        <Link
                          to="/Help"
                          className="block px-0.5 py-0.5 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition duration-150 ease-in-out"
                        >
                          Help
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Link
                to="/Contact"
                className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/SupplierSignup"
              className="bg-[#3B9A3B] hover:bg-[#2D7D2D] text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out transform hover:scale-105"
            >
              Signup as Supplier
            </Link>
            <Link
              to= "/ContractorSignup"
              className="bg-[#3B9A3B] hover:bg-[#2D7D2D] text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out transform hover:scale-105"
            >
              Signup as Contractor
            </Link>
            <Link
              to="/BuyerSignup"
              className="bg-[#3B9A3B] hover:bg-[#2D7D2D] text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out transform hover:scale-105"
            >
              Signup as Buyer
            </Link>
            <Link
             to="/Login"
              className="bg-[#F5F3E7] hover:bg-[#EDEADE] text-[#3B9A3B] px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out transform hover:scale-105"
            >
              Login
            </Link>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden absolute top-[6rem] sm:top-[8rem] bg-white z-20 left-0 w-full" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Home
            </Link>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              About Us
            </button>
            {dropdownOpen && (
              <div className="pl-4 bg-slate-100 rounded-md">
                <Link
                  to="OurStory"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Our Story
                </Link>
                <Link
                  to="/Help"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Help
                </Link>
              </div>
            )}
            <Link
              to="/Contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Contact
            </Link>
            <Link
              to="/SupplierSignup"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-[#3B9A3B] hover:bg-[#2D7D2D]"
            >
              Signup as Supplier
            </Link>
            <Link
              to="/ContractorSignup"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-[#3B9A3B] hover:bg-[#2D7D2D]"
            >
              Signup as Contractor
            </Link>
            <Link
              to="/BuyerSignup"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-[#3B9A3B] hover:bg-[#2D7D2D]"
            >
              Signup as Buyer
            </Link>
            <Link
              to="/Login"
              className="block px-3 py-2 rounded-md text-base font-medium bg-[#F5F3E7] hover:bg-[#EDEADE] text-[#3B9A3B]"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



