import { Link } from "react-router-dom";
import Tile from "../components/Tile";
import { RiHomeFill, RiMoneyDollarCircleFill, RiBarChartFill, RiCarFill, RiNotificationFill, RiStoreFill } from "react-icons/ri";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-amayaPeach to-white min-h-screen p-8">
      <h1 className="text-5xl font-bold text-amayaBlue text-center mb-12">Welcome to Amaya Khata</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Tile title="Pay Dues" icon={RiMoneyDollarCircleFill} to="/payments" color="amayaBlue" />
        <Tile title="Transparency" icon={RiBarChartFill} to="/transparency" color="amayaYellow" />
        <Tile title="Notices" icon={RiNotificationFill} to="/notices" color="amayaTeal" />
        <Tile title="Parking" icon={RiCarFill} to="/parking" color="amayaBeige" />
        <Tile title="Vendors" icon={RiStoreFill} to="/vendors" color="amayaBlue" />
      </div>
      <div className="mt-12 text-center">
        <p className="text-2xl text-black">Funded by Our Vendors: ₹60,000-₹105,000/Year!</p>
        <img src="/path-to-puja-icon.png" alt="Puja Icon" className="mx-auto mt-4 h-20" />
      </div>
    </div>
  );
};

export default Home;