import { useState, useEffect } from "react";
import axios from "axios";
import { RiCarFill } from "react-icons/ri";

const Parking = () => {
  const [parking, setParking] = useState([]);

  useEffect(() => {
    const fetchParking = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/parking");
        setParking(response.data);
      } catch (error) {
        console.error("Error fetching parking:", error);
      }
    };
    fetchParking();
  }, []);

  return (
    <div className="bg-amayaPeach dark:bg-gray-800 min-h-screen p-10">
      <h1 className="text-6xl font-bold text-amayaBlue dark:text-white text-center mb-12 drop-shadow-md">Parking</h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {parking.map((slot) => (
          <div
            key={slot._id}
            className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
          >
            <RiCarFill className="text-amayaBlue dark:text-amayaYellow text-4xl mb-4" />
            <p className="text-2xl text-amayaBlue dark:text-white">Flat {slot.flatNumber}</p>
            <p className="text-xl text-black dark:text-white">Slot: {slot.slotName}</p>
            <p className="text-xl text-black dark:text-white">Assigned: {slot.assignedTo}</p>
          </div>
        ))}
        <p className="text-xl text-black dark:text-white text-center mt-8">Managed via ad revenue.</p>
      </div>
    </div>
  );
};

export default Parking;