import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

const Notices = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/notices");
        setNotices(response.data);
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };
    fetchNotices();
  }, []);

  return (
    <div className="bg-amayaPeach dark:bg-gray-800 min-h-screen p-10">
      <h1 className="text-6xl font-bold text-amayaBlue dark:text-white text-center mb-12 drop-shadow-md">Notices</h1>
      <div className="max-w-3xl mx-auto space-y-8">
        {notices.map((notice) => (
          <Card
            key={notice._id}
            title={notice.title}
            content={notice.content}
            image="/path-to-puja-image.png"
            action={<p className="text-xl text-black dark:text-white mt-2">{new Date(notice.date).toLocaleDateString()}</p>}
          />
        ))}
        <p className="text-xl text-black dark:text-white text-center mt-8">Funded by local ads.</p>
      </div>
    </div>
  );
};

export default Notices;