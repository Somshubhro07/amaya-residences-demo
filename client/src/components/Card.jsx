import { RiImageFill } from "react-icons/ri";

const Card = ({ title, content, action, image, style, className }) => {
  return (
    <div
      className={`bg-white/20 dark:bg-gray-800/20 backdrop-blur-md p-6 rounded-xl shadow-lg border border-purple-500/30 ${className}`}
      style={style}
    >
      {image ? (
        <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-xl mb-4" />
      ) : (
        <div className="w-full h-40 bg-gray-200/30 dark:bg-gray-600/30 flex items-center justify-center rounded-t-xl mb-4">
          <RiImageFill className="text-purple-400 text-4xl" />
        </div>
      )}
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <p className="text-lg text-gray-200 mt-2">{content}</p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
};

export default Card;