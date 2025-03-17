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
  RiArrowUpSLine,
  RiCloseLine,
} from "react-icons/ri";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isOrganisationOpen, setIsOrganisationOpen] = useState(false);
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);

  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-amayaBlue text-white p-6 transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:hidden`}
    >
      <div className="flex justify-between items-center mb-8">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <img src="/path-to-puja-icon.png" alt="Puja Icon" className="w-8 h-8 mr-2" />
          Amaya
        </Link>
        <button onClick={toggleSidebar}>
          <RiCloseLine className="text-3xl" />
        </button>
      </div>

      {/* Home Link */}
      <Link to="/" className="flex items-center text-xl mb-4 hover:text-amayaYellow transition-colors">
        <RiHomeFill className="mr-2" /> Home
      </Link>

      {/* Organisation Section */}
      <div className="mb-4">
        <button
          onClick={() => setIsOrganisationOpen(!isOrganisationOpen)}
          className="flex items-center text-xl w-full hover:text-amayaYellow transition-colors"
        >
          <RiBarChartFill className="mr-2" /> Organisation
          {isOrganisationOpen ? <RiArrowUpSLine className="ml-auto" /> : <RiArrowDownSLine className="ml-auto" />}
        </button>
        {isOrganisationOpen && (
          <div className="ml-6 mt-2 space-y-2">
            <Link to="/payments" className="flex items-center text-lg hover:text-amayaYellow">
              <RiMoneyDollarCircleFill className="mr-2" /> Payments
            </Link>
            <Link to="/transparency" className="flex items-center text-lg hover:text-amayaYellow">
              <RiBarChartFill className="mr-2" /> Transparency
            </Link>
          </div>
        )}
      </div>

      {/* Community Section */}
      <div className="mb-4">
        <button
          onClick={() => setIsCommunityOpen(!isCommunityOpen)}
          className="flex items-center text-xl w-full hover:text-amayaYellow transition-colors"
        >
          <RiNotificationFill className="mr-2" /> Community
          {isCommunityOpen ? <RiArrowUpSLine className="ml-auto" /> : <RiArrowDownSLine className="ml-auto" />}
        </button>
        {isCommunityOpen && (
          <div className="ml-6 mt-2 space-y-2">
            <Link to="/notices" className="flex items-center text-lg hover:text-amayaYellow">
              <RiNotificationFill className="mr-2" /> Notices
            </Link>
            <Link to="/parking" className="flex items-center text-lg hover:text-amayaYellow">
              <RiCarFill className="mr-2" /> Parking
            </Link>
            <Link to="/vendors" className="flex items-center text-lg hover:text-amayaYellow">
              <RiStoreFill className="mr-2" /> Vendors
            </Link>
          </div>
        )}
      </div>

      {/* User Profile (Bottom) */}
      <div className="absolute bottom-6">
        <div className="flex items-center">
          <img src="/path-to-user-image.png" alt="User" className="w-10 h-10 rounded-full mr-2" />
          <div>
            <p className="text-lg font-medium">Resident</p>
            <p className="text-sm text-gray-300">Flat 101</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;