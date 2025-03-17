const Button = ({ children, onClick, color = "amayaBlue", textColor = "white", fullWidth = false, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${
        color === "gradient"
          ? "bg-gradient-to-r from-amayaYellow to-amayaTeal"
          : `bg-${color}`
      } text-${textColor} text-xl py-4 px-8 rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300 transform ${
        fullWidth ? "w-full" : ""
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;