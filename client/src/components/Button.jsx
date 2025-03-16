const Button = ({ children, onClick, color = "amayaBlue", textColor = "white", fullWidth = false, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-${color} text-${textColor} text-xl py-4 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 ${fullWidth ? "w-full" : ""} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;