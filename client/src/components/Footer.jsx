import { RiHeartFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-amayaBeige dark:bg-gray-800 text-black dark:text-white p-6 text-center">
      <p className="text-xl flex items-center justify-center">
        <RiHeartFill className="text-amayaBlue dark:text-amayaYellow mr-2" /> © 2025 Amaya Residences | Built with Love
      </p>
    </footer>
  );
};

export default Footer;