import { Link } from "react-router-dom";
import { RiHomeFill, RiMoneyDollarCircleFill, RiBarChartFill, RiCarFill, RiNotificationFill, RiStoreFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="bg-amayaBlue text-white p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold flex items-center">
          <RiHomeFill className="mr-2" /> Amaya Residences
        </h1>
        <div className="flex space-x-6">
          {[
            { to: "/", icon: RiHomeFill, text: "Home" },
            { to: "/payments", icon: RiMoneyDollarCircleFill, text: "Payments" },
            { to: "/transparency", icon: RiBarChartFill, text: "Transparency" },
            { to: "/parking", icon: RiCarFill, text: "Parking" },
            { to: "/notices", icon: RiNotificationFill, text: "Notices" },
            { to: "/vendors", icon: RiStoreFill, text: "Vendors" },
          ].map(({ to, icon: Icon, text }) => (
            <Link
              key={to}
              to={to}
              className="text-xl hover:text-amayaYellow transition-colors flex items-center"
            >
              <Icon className="mr-1" /> {text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;