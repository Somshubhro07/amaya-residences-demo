import { RiImageFill } from "react-icons/ri";

const Card = ({ title, content, action, image }) => {
  return (
    <div className="bg-white dark:bg-gray-700 border-2 border-amayaBeige dark:border-gray-600 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      {image ? (
        <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-xl mb-4" />
      ) : (
        <div className="w-full h-40 bg-gray-200 dark:bg-gray-600 flex items-center justify-center rounded-t-xl mb-4">
          <RiImageFill className="text-gray-400 dark:text-gray-300 text-4xl" />
        </div>
      )}
      <h2 className="text-2xl font-semibold text-amayaBlue dark:text-white">{title}</h2>
      <p className="text-lg text-black dark:text-white mt-2">{content}</p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
};

export default Card;