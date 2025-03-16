const Tile = ({ title, icon: Icon, to, color }) => {
    return (
      <Link to={to} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
        <Icon className={`text-${color} text-4xl mb-4`} />
        <h3 className="text-xl font-semibold text-amayaBlue">{title}</h3>
      </Link>
    );
  };
  
  export default Tile;