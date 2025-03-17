import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Tile from "../components/Tile";
import {
  RiHomeFill,
  RiMoneyDollarCircleFill,
  RiBarChartFill,
  RiCarFill,
  RiNotificationFill,
  RiStoreFill,
} from "react-icons/ri";

const Home = () => {
  const [tileAnimation, setTileAnimation] = useState({});

  useEffect(() => {
    const animateTiles = () => {
      const animations = {};
      ["tile1", "tile2", "tile3", "tile4", "tile5"].forEach((id, index) => {
        animations[id] = `slideIn ${index * 0.2 + 0.5}s ease-out forwards`;
      });
      setTileAnimation(animations);
    };
    animateTiles();
  }, []);

  return (
    <div
      className="relative min-h-screen p-10 bg-gradient-to-br from-amayaBlue to-amayaPeach dark:from-gray-800 dark:to-gray-600 animate-gradient-shift"
      style={{
        backgroundImage: "url('/path-to-puja-mandala.png')",
        backgroundSize: "400px",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        opacity: 0.95,
      }}
    >
      {/* Floating Amaya Logo */}
      <img
        src="/path-to-puja-icon.png"
        alt="Amaya Logo"
        className="absolute top-10 left-10 w-24 h-24 opacity-40 animate-pulse"
      />

      {/* Hero Section with Glowing Title */}
      <div className="text-center mb-20">
        <h1
          className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-amayaYellow animate-glow"
        >
          Welcome to Amaya Khata
        </h1>
        <p className="text-2xl text-white mt-6">Your Gateway to Modern Living</p>
      </div>

      {/* Tile Grid with Animation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        <Tile
          key="1"
          title="Pay Dues"
          icon={RiMoneyDollarCircleFill}
          to="/payments"
          color="amayaYellow"
          style={{ animation: tileAnimation.tile1 }}
        />
        <Tile
          key="2"
          title="Transparency"
          icon={RiBarChartFill}
          to="/transparency"
          color="amayaTeal"
          style={{ animation: tileAnimation.tile2 }}
        />
        <Tile
          key="3"
          title="Notices"
          icon={RiNotificationFill}
          to="/notices"
          color="amayaBlue"
          style={{ animation: tileAnimation.tile3 }}
        />
        <Tile
          key="4"
          title="Parking"
          icon={RiCarFill}
          to="/parking"
          color="amayaBeige"
          style={{ animation: tileAnimation.tile4 }}
        />
        <Tile
          key="5"
          title="Vendors"
          icon={RiStoreFill}
          to="/vendors"
          color="amayaYellow"
          style={{ animation: tileAnimation.tile5 }}
        />
      </div>

      {/* Footer Text with Animation */}
      <div className="mt-20 text-center animate-fade-in">
        <p className="text-2xl text-white">
          Funded by Our Vendors: ₹60K-₹105K/Year! <span className="text-amayaYellow animate-pulse">🎉</span>
        </p>
      </div>
    </div>
  );
};

export default Home;