import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "../components/Carousel";
import Button from "../components/Button";

const Vendors = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/vendors");
        setVendors(response.data);
      } catch (error) {
        console.error("Error fetching vendors:", error);
      }
    };
    fetchVendors();
  }, []);

  const carouselItems = vendors.map((vendor) => ({
    name: vendor.name,
    clicks: vendor.clicks,
    image: "/path-to-vendor-image.png",
  }));

  return (
    <div className="bg-amayaPeach dark:bg-gray-800 min-h-screen p-10">
      <h1 className="text-6xl font-bold text-amayaBlue dark:text-white text-center mb-12 drop-shadow-md">Vendors</h1>
      <div className="max-w-3xl mx-auto">
        <div className="bg-amayaYellow dark:bg-gray-600 p-6 rounded-xl mb-8 text-center shadow-md">
          <p className="text-2xl text-black dark:text-white font-semibold">Vendor Ads Fund This Site!</p>
          <p className="text-xl text-black dark:text-white">5 Vendors: ₹60,000/year | 10 Vendors: ₹105,000/year</p>
        </div>
        <Carousel items={carouselItems} />
        {vendors.map((vendor) => (
          <div key={vendor._id} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md mb-6 hover:shadow-xl">
            <p className="text-2xl text-amayaBlue dark:text-white font-semibold">{vendor.name} ({vendor.service})</p>
            <p className="text-xl text-black dark:text-white">Contact: {vendor.contact}</p>
            <p className="text-xl text-black dark:text-white">Type: {vendor.adType} | Clicks: {vendor.clicks}</p>
            <Button color="amayaBlue" onClick={() => alert("Simulated click!")}>Call Now</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vendors;