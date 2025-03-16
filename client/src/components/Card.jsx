import { RiImageFill } from "react-icons/ri";

const Card = ({ title, content, action, image }) => {
  return (
    <div className="bg-white border-2 border-amayaBeige p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      {image ? (
        <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-xl mb-4" />
      ) : (
        <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-t-xl mb-4">
          <RiImageFill className="text-gray-400 text-4xl" />
        </div>
      )}
      <h2 className="text-2xl font-semibold text-amayaBlue">{title}</h2>
      <p className="text-lg text-black mt-2">{content}</p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
};

export default Card;