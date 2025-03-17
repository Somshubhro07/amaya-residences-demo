import { useState } from "react";
import { Link } from "react-router-dom";
import {
  RiHomeFill,
  RiMoneyDollarCircleFill,
  RiBarChartFill,
  RiCarFill,
  RiNotificationFill,
  RiStoreFill,
  RiArrowDownSLine,
  RiMenuLine,
  RiMoonFill,
  RiSunFill,
  RiUserFill,
} from "react-icons/ri";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isOrganisationOpen, setIsOrganisationOpen] = useState(false);
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      {/* Sidebar for Mobile */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* Main Navbar */}
      <nav className="bg-amayaBlue dark:bg-gray-800 text-white p-6 shadow-lg fixed w-full top-0 z-40">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-4xl font-bold flex items-center hover:text-amayaYellow transition-colors">
            <img src="/path-to-puja-icon.png" alt="Puja Icon" className="w-10 h-10 mr-2" />
            Amaya Residences
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Home Link */}
            <Link to="/" className="text-xl flex items-center hover:text-amayaYellow transition-colors">
              <RiHomeFill className="mr-1" /> Home
            </Link>

            {/* Organisation Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsOrganisationOpen(true)}
              onMouseLeave={() => setIsOrganisationOpen(false)}
            >
              <button className="text-xl flex items-center hover:text-amayaYellow transition-colors">
                <RiBarChartFill className="mr-1" /> Organisation <RiArrowDownSLine className="ml-1" />
              </button>
              {isOrganisationOpen && (
                <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded-lg mt-2 w-48">
                  <Link
                    to="/payments"
                    className="block px-4 py-3 text-lg hover:bg-amayaYellow hover:text-black transition-colors"
                  >
                    <RiMoneyDollarCircleFill className="inline mr-2" /> Payments
                  </Link>
                  <Link
                    to="/transparency"
                    className="block px-4 py-3 text-lg hover:bg-amayaYellow hover:text-black transition-colors"
                  >
                    <RiBarChartFill className="inline mr-2" /> Transparency
                  </Link>
                </div>
              )}
            </div>

            {/* Community Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsCommunityOpen(true)}
              onMouseLeave={() => setIsCommunityOpen(false)}
            >
              <button className="text-xl flex items-center hover:text-amayaYellow transition-colors">
                <RiNotificationFill className="mr-1" /> Community <RiArrowDownSLine className="ml-1" />
              </button>
              {isCommunityOpen && (
                <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded-lg mt-2 w-48">
                  <Link
                    to="/notices"
                    className="block px-4 py-3 text-lg hover:bg-amayaYellow hover:text-black transition-colors"
                  >
                    <RiNotificationFill className="inline mr-2" /> Notices
                  </Link>
                  <Link
                    to="/parking"
                    className="block px-4 py-3 text-lg hover:bg-amayaYellow hover:text-black transition-colors"
                  >
                    <RiCarFill className="inline mr-2" /> Parking
                  </Link>
                  <Link
                    to="/vendors"
                    className="block px-4 py-3 text-lg hover:bg-amayaYellow hover:text-black transition-colors"
                  >
                    <RiStoreFill className="inline mr-2" /> Vendors
                  </Link>
                </div>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <button onClick={toggleDarkMode} className="text-xl hover:text-amayaYellow transition-colors">
              {darkMode ? <RiSunFill /> : <RiMoonFill />}
            </button>

            {/* User Profile Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsUserOpen(true)}
              onMouseLeave={() => setIsUserOpen(false)}
            >
              <button className="flex items-center text-xl hover:text-amayaYellow transition-colors">
                <RiUserFill className="mr-1" /> Resident
              </button>
              {isUserOpen && (
                <div className="absolute top-full right-0 bg-white text-black shadow-lg rounded-lg mt-2 w-48">
                  <div className="px-4 py-3 border-b">
                    <p className="text-lg font-medium">Flat 101</p>
                    <p className="text-sm text-gray-500">Resident</p>
                  </div>
                  <button className="block w-full text-left px-4 py-3 text-lg hover:bg-amayaYellow hover:text-black transition-colors">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-3xl" onClick={() => setIsSidebarOpen(true)}>
            <RiMenuLine />
          </button>
        </div>
      </nav>

      {/* Overlay for Sidebar (Mobile) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;