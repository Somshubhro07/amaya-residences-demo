import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

const Notices = () => {
  const [notices, setNotices] = useState([]);
  const [cardAnimation, setCardAnimation] = useState({});

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

    // Set staggered animations for cards
    const animations = {};
    notices.forEach((_, index) => {
      animations[index] = `slideIn ${index * 0.3 + 0.5}s ease-out forwards`;
    });
    setCardAnimation(animations);
  }, []);

  return (
    <div
      className="relative min-h-screen p-10 bg-gradient-to-br from-black to-gray-800 dark:from-gray-900 dark:to-gray-700 animate-gradient-shift"
      style={{
        backgroundImage: "url('/path-to-puja-mandala.png')",
        backgroundSize: "400px",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        opacity: 0.95,
      }}
    >
      {/* Glowing Purple Accent */}
      <div className="absolute top-10 right-10 w-16 h-16 bg-purple-700 rounded-full opacity-30 animate-pulse" />

      {/* Header with Gradient */}
      <h1
        className="text-6xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-white animate-glow"
      >
        Notices
      </h1>

      {/* Notice Cards */}
      <div className="max-w-3xl mx-auto space-y-6">
        {notices.map((notice, index) => (
          <Card
            key={notice._id}
            title={notice.title}
            content={notice.content}
            action={<p className="text-lg text-purple-300 mt-2">{new Date(notice.date).toLocaleDateString()}</p>}
            image="/path-to-puja-image.png"
            style={{ animation: cardAnimation[index] || "none" }}
            className="hover:animate-dhak hover:shadow-xl hover:bg-purple-900/20 transition-all duration-300"
          />
        ))}
      </div>

      {/* See All Button */}
      <div className="text-center mt-10">
        <button
          className="bg-gradient-to-r from-purple-600 to-purple-800 text-white text-xl py-4 px-8 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 animate-ripple"
          onClick={() => alert("See all notifications!")}
        >
          See All Notices
        </button>
      </div>
    </div>
  );
};

export default Notices;