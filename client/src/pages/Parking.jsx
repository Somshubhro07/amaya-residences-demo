import { useState, useEffect } from "react";
import axios from "axios";

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
    <div className="bg-amayaPeach min-h-screen p-8">
      <h1 className="text-5xl font-bold text-amayaBlue text-center mb-8">Parking</h1>
      <div className="max-w-3xl mx-auto grid grid-cols-2 gap-6">
        {parking.map((slot) => (
          <div
            key={slot._id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center"
          >
            <p className="text-2xl text-amayaBlue">Flat {slot.flatNumber}</p>
            <p className="text-xl text-black">Slot: {slot.slotName}</p>
            <p className="text-xl text-black">Assigned: {slot.assignedTo}</p>
          </div>
        ))}
        <p className="text-xl text-black text-center mt-6">Managed via ad revenue.</p>
      </div>
    </div>
  );
};

export default Parking;