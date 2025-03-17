import { Link } from "react-router-dom";

const Tile = ({ title, icon: Icon, to, color, style }) => {
  return (
    <Link
      to={to}
      className="bg-white/40 dark:bg-gray-700/40 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-br from-amayaYellow to-amayaTeal"
      style={style}
    >
      <Icon className={`text-${color} text-5xl mb-6`} />
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
    </Link>
  );
};

export default Tile;