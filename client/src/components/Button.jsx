const Button = ({ children, onClick, color = "amayaBlue", textColor = "white", fullWidth = false }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-${color} text-${textColor} text-xl py-4 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 ${fullWidth ? "w-full" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;