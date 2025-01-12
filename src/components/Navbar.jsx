// import { useState } from "react";
// import ecobuilt_logo from "../assets/ecobuilt_logo.svg";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState({});

//   const toggleDropdown = (index) => {
//     setDropdownOpen((prev) => ({ ...prev, [index]: !prev[index] }));
//   };

//   return (
//     <nav className=" container mx-auto relative bg-[#F5F3E7] p-2 sm:rounded-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center sm:h-40">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <a href="/">
//               <img
//                 src={ecobuilt_logo}
//                 alt="EcoBuilt Logo"
//                 className="h-28 w-auto sm:h-40"
//               />
//             </a>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-8 items-center">
//             {["Our Services", "About Us", "Accounts"].map((menu, index) => (
//               <div key={index} className="relative">
//                 <button
//                   onClick={() => toggleDropdown(index)}
//                   className="flex items-center  focus:outline-none"
//                 >
//                    {menu}
//                   <svg
//                     className="ml-1 h-4 w-4"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </button>
//                 {dropdownOpen[index] && (
//                   <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-10">
//                     <a
//                       href="/link1"
//                       className="block px-4 py-2 hover:bg-gray-100"
//                     >
//                       Inventory Management
//                     </a>
//                     <a
//                       href="/link2"
//                       className="block px-4 py-2 hover:bg-gray-100"
//                     >
//                       Internal Use
//                     </a>



                    
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="flex md:hidden">
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className=" focus:outline-none"
//             >
//               <svg
//                 className="h-8 w-8"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {menuOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       {menuOpen && (
//         <div className="md:hidden bg-gray-700">
//           {[1, 2, 3].map((menu, index) => (
//             <div key={index} className="relative">
//               <button
//                 onClick={() => toggleDropdown(index)}
//                 className="block w-full text-left px-4 py-2 hover:bg-gray-600 focus:outline-none"
//               >
//                 Dropdown {menu}
//                 <svg
//                   className="ml-1 h-4 w-4 inline-block"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>
//               {dropdownOpen[index] && (
//                 <div className="bg-gray-800">
//                   <a
//                     href="/link1"
//                     className="block px-6 py-2 hover:bg-gray-600"
//                   >
//                     Link 1
//                   </a>
//                   <a
//                     href="/link2"
//                     className="block px-6 py-2 hover:bg-gray-600"
//                   >
//                     Link 2
//                   </a>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
import { useState } from "react";
import ecobuilt_logo from "../assets/ecobuilt_logo.svg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-28 sm:h-40 items-center">
          <div className="flex items-center ">
            <a href="/" className="flex-shrink-0">
              <img className="h-28 sm:h40 w-auto" src={ecobuilt_logo} alt="Logo" />
            </a>
            <div className="hidden md:ml-6 lg:flex md:space-x-8">
              <a
                href="/"
                className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
              >
                Home
              </a>
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
                        <a
                          href="/our-story"
                          className="block px-0.5 py-0.5 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition duration-150 ease-in-out"
                        >
                          Our Story
                        </a>
                        <a
                          href="/help"
                          className="block px-0.5 py-0.5 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition duration-150 ease-in-out"
                        >
                          Help
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <a
                href="/contact"
                className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="/signup/supplier"
              className="bg-[#3B9A3B] hover:bg-[#2D7D2D] text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out transform hover:scale-105"
            >
              Signup as Supplier
            </a>
            <a
              href="/signup/contractor"
              className="bg-[#3B9A3B] hover:bg-[#2D7D2D] text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out transform hover:scale-105"
            >
              Signup as Contractor
            </a>
            <a
              href="/signup/buyer"
              className="bg-[#3B9A3B] hover:bg-[#2D7D2D] text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out transform hover:scale-105"
            >
              Signup as Buyer
            </a>
            <a
              href="/login"
              className="bg-[#F5F3E7] hover:bg-[#EDEADE] text-[#3B9A3B] px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out transform hover:scale-105"
            >
              Login
            </a>
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
        <div className="lg:hidden absolute top-[6rem] sm:top-[8rem] bg-white left-0 w-full" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Home
            </a>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              About Us
            </button>
            {dropdownOpen && (
              <div className="pl-4 bg-slate-100 rounded-md">
                <a
                  href="/our-story"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Our Story
                </a>
                <a
                  href="/help"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Help
                </a>
              </div>
            )}
            <a
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Contact
            </a>
            <a
              href="/signup/supplier"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-[#3B9A3B] hover:bg-[#2D7D2D]"
            >
              Signup as Supplier
            </a>
            <a
              href="/signup/contractor"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-[#3B9A3B] hover:bg-[#2D7D2D]"
            >
              Signup as Contractor
            </a>
            <a
              href="/signup/buyer"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-[#3B9A3B] hover:bg-[#2D7D2D]"
            >
              Signup as Buyer
            </a>
            <a
              href="/login"
              className="block px-3 py-2 rounded-md text-base font-medium bg-[#F5F3E7] hover:bg-[#EDEADE] text-[#3B9A3B]"
            >
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



