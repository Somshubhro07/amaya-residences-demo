import { useState, useEffect } from "react";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg" />
            <div className="p-4 bg-amayaYellow text-center">
              <h4 className="text-xl text-black">{item.name}</h4>
              <p className="text-lg text-black">Clicks: {item.clicks}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 mx-1 rounded-full ${currentIndex === index ? "bg-amayaBlue" : "bg-gray-300"}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;