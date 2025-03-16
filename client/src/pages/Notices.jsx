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
    <div className="bg-amayaPeach min-h-screen p-8">
      <h1 className="text-5xl font-bold text-amayaBlue text-center mb-8">Notices</h1>
      <div className="max-w-3xl mx-auto space-y-6">
        {notices.map((notice) => (
          <Card
            key={notice._id}
            title={notice.title}
            content={notice.content}
            image="/path-to-puja-image.png"
            action={<p className="text-xl text-black mt-2">{new Date(notice.date).toLocaleDateString()}</p>}
          />
        ))}
        <p className="text-xl text-black text-center mt-6">Funded by local ads.</p>
      </div>
    </div>
  );
};

export default Notices;