import { Link } from "react-router-dom";

const Tile = ({ title, icon: Icon, to, color, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center transform hover:scale-105"
    >
      <Icon className={`text-${color} text-5xl mb-6`} />
      <h3 className="text-2xl font-semibold text-amayaBlue dark:text-white">{title}</h3>
    </Link>
  );
};

export default Tile;