import { Link } from "react-router-dom";
import Tile from "../components/Tile";
import { RiHomeFill, RiMoneyDollarCircleFill, RiBarChartFill, RiCarFill, RiNotificationFill, RiStoreFill } from "react-icons/ri";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-amayaPeach to-white dark:from-gray-700 dark:to-gray-900 min-h-screen p-10">
      <h1 className="text-6xl font-bold text-amayaBlue dark:text-white text-center mb-16 drop-shadow-md">
        Welcome to Amaya Khata
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        <Tile title="Pay Dues" icon={RiMoneyDollarCircleFill} to="/payments" color="amayaBlue" />
        <Tile title="Transparency" icon={RiBarChartFill} to="/transparency" color="amayaYellow" />
        <Tile title="Notices" icon={RiNotificationFill} to="/notices" color="amayaTeal" />
        <Tile title="Parking" icon={RiCarFill} to="/parking" color="amayaBeige" />
        <Tile title="Vendors" icon={RiStoreFill} to="/vendors" color="amayaBlue" />
      </div>
      <div className="mt-16 text-center">
        <p className="text-2xl text-black dark:text-white font-medium">Funded by Our Vendors: ₹60K-₹105K/Year!</p>
        <img src="/path-to-puja-icon.png" alt="Puja Icon" className="mx-auto mt-6 h-24 animate-pulse" />
      </div>
    </div>
  );
};

export default Home;